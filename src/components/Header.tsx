import { useState } from "react";
import { Menu, Mic, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import myLogo from "@/assets/my-logo.png";

const Header = () => {
  // State to show/hide the iframe
  const [showVoice, setShowVoice] = useState(false);

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
              FASAL GURU
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Location Button */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => {
              window.location.href = "https://coordinates-app.netlify.app/";
            }}
          >
            <MapPin className="h-5 w-5 text-primary" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full animate-pulse"></span>
          </Button>
          {/* Mic button: toggles iframe popup */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={() => setShowVoice((v) => !v)}
            aria-label="Open Voice Assistant"
          >
            <Mic className="h-5 w-5 text-success" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full animate-pulse"></span>
          </Button>
        </div>
      </div>
      {/* The popup iframe overlay: simple absolute positioning */}
      {showVoice && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-2 shadow-lg relative max-w-full">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 p-1 rounded hover:bg-gray-200"
              onClick={() => setShowVoice(false)}
              aria-label="Close Voice Assistant"
            >
              ✕
            </button>
            {/* Your embedded Voice Assistant iframe */}
            <iframe
              src="https://fasalguru-jarvisai.hf.space"
              frameBorder="0"
              width="850"
              height="450"
              title="Voice Assistant"
              allow="camera; microphone"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
