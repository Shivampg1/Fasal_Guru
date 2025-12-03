// src/components/layout/Header.tsx (or wherever you keep it)

import { useEffect, useState } from "react";
import { Bell, User, Menu, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";

import myLogo from "@/assets/my-logo.png";

type FarmerLike = {
  profile_photo_url?: string | null;
};

const Header = () => {
  const { i18n } = useTranslation();
  const [profilePhotoUrl, setProfilePhotoUrl] = useState<string | null>(null);

  // Helper to apply photo from any "farmer-like" object
  const applyPhotoFromFarmer = (farmer: FarmerLike | null | undefined) => {
    if (
      farmer &&
      typeof farmer.profile_photo_url === "string" &&
      farmer.profile_photo_url.trim() !== ""
    ) {
      setProfilePhotoUrl(farmer.profile_photo_url);
    } else {
      setProfilePhotoUrl(null);
    }
  };

  useEffect(() => {
    // 1) On mount: read farmer object from localStorage (set after login)
    try {
      const storedFarmer = localStorage.getItem("farmer");
      if (storedFarmer) {
        const parsed = JSON.parse(storedFarmer) as FarmerLike;
        applyPhotoFromFarmer(parsed);
      }
    } catch (error) {
      console.error("Failed to read farmer from localStorage", error);
    }

    // 2) Listen for global "farmer-photo-updated" events
    //    Fired after login or profile update so header avatar refreshes
    const handleFarmerPhotoUpdated = (event: Event) => {
      const customEvent = event as CustomEvent<FarmerLike>;
      applyPhotoFromFarmer(customEvent.detail);
    };

    window.addEventListener("farmer-photo-updated", handleFarmerPhotoUpdated);

    return () => {
      window.removeEventListener("farmer-photo-updated", handleFarmerPhotoUpdated);
    };
  }, []);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  const avatarSrc =
    profilePhotoUrl && profilePhotoUrl.trim() !== ""
      ? profilePhotoUrl
      : "/placeholder.svg";

  return (
    <header className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <img
              src={myLogo}
              alt="App Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
            <h1 className="text-xl font-bold text-primary hidden sm:block">
              {i18n.t("appName")}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* 🌐 LANGUAGE SELECTOR */}
          <select
            className="border px-2 py-1 rounded-md"
            onChange={(e) => changeLanguage(e.target.value)}
            value={i18n.language}
          >
            <option value="en">English</option>
            <option value="hi">हिन्दी</option>
          </select>

          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() =>
              window.open("https://jarvis-flask-alpha.vercel.app/", "_blank")
            }
          >
            <Mic className="h-5 w-5 text-success" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse" />
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-danger rounded-full" />
          </Button>

          {/* ✅ ChatGPT‑5: avatar shows latest farmer.profile_photo_url */}
          <Avatar className="w-8 h-8">
            <AvatarImage src={avatarSrc} />
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">
              <User className="h-4 w-4" />
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

export default Header;
