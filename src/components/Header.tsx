import { Bell, User, Menu, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Header = () => {
  return (
    <header className="bg-card border-b border-border shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-success rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">FG</span>
            </div>
            <h1 className="text-xl font-bold text-primary hidden sm:block">FasalGuru</h1>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Button
             variant="ghost"
             size="icon"
             className="relative"
             onClick={() => window.open("https://jarvis-flask-alpha.vercel.app/", "_blank")}
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
