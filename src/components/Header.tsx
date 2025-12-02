import { Bell, User, Menu, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next"; // <-- ADD THIS

import myLogo from "@/assets/my-logo.png";

const Header = () => {
  const { i18n } = useTranslation(); // <-- ADD THIS

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
  };

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
              {i18n.t("appName")}  {/* <-- TRANSLATED NAME */}
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">

          {/* 🌐 LANGUAGE SELECTOR */}
          <select
            className="border px-2 py-1 rounded-md"
            onChange={(e) => changeLanguage(e.target.value)}
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
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></span>
          </Button>

          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-danger rounded-full"></span>
          </Button>

          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder.svg" />
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
