import Help from "@/components/Help";  // Add this line with other imports
import Settings from "@/components/Settings";
import { useState } from "react";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import Dashboard from "@/components/Dashboard";
import CropDiseaseDetection from "@/components/CropDiseaseDetection";
import SoilAnalysis from "@/components/SoilAnalysis";
import IoTDashboard from "@/components/IoTDashboard";
import WeatherForecast from "@/components/WeatherForecast";
import VoiceAssistant from "@/components/VoiceAssistant";
import heroImage from "@/assets/hero-agriculture.jpg";

const Index = () => {
  const [activeModule, setActiveModule] = useState("dashboard");

  const renderActiveModule = () => {
    switch (activeModule) {
      case "crop-disease":
        return <CropDiseaseDetection />;
      case "soil-analysis":
        return <SoilAnalysis />;
      case "iot-dashboard":
        return <IoTDashboard />;
      case "weather":
        return <WeatherForecast />;
      case "voice-assistant":
        return <VoiceAssistant />;
      case "profile":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-muted-foreground">Farmer Profile</h2>
            <p className="text-muted-foreground mt-2">Profile management coming soon...</p>
          </div>
        );
      case "reports":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-muted-foreground">Reports & Analytics</h2>
            <p className="text-muted-foreground mt-2">Downloadable reports coming soon...</p>
          </div>
        );
            case "settings":
        return <Settings />;
      case "help":
  return <Help />;
      default:
        return <Dashboard />;
    }
  };

  const getModuleTitle = () => {
    switch (activeModule) {
      case "crop-disease":
        return "Crop Disease Detection";
      case "soil-analysis":
        return "Soil Health Analysis";
      case "iot-dashboard":
        return "IoT Sensor Dashboard";
      case "weather":
        return "Weather Forecast";
      case "voice-assistant":
        return "AI Voice Assistant";
      case "profile":
        return "Farmer Profile";
      case "reports":
        return "Reports & Analytics";
      case "settings":
        return "Settings";
      case "help":
        return "Help & Support";
      default:
        return "FasalGuru Dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - only show on dashboard */}
      {activeModule === "dashboard" && (
        <div 
          className="relative h-64 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Welcome to <span className="text-warning">FasalGuru</span>
              </h1>
              <div className="mb-6 h-16 flex flex-col justify-center">
                <p className="text-xl md:text-2xl text-white/90 animate-fade-in">
                  फसल की हर बात, गुरु के साथ!
                </p>
                <p className="text-lg md:text-xl text-white/80 animate-fade-in" style={{ animationDelay: '1s' }}>
                  Every crop matter, with the guru's guidance!
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">🌾 Crop Disease Detection</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">🧪 Soil Analysis</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">📡 IoT Monitoring</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">🌤️ Weather Forecasting</span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm">🎤 Voice Assistant</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <Navigation 
              activeModule={activeModule} 
              onModuleChange={setActiveModule} 
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {activeModule !== "dashboard" && (
              <div className="bg-gradient-card rounded-lg p-4 shadow-soft border-0">
                <h1 className="text-2xl font-bold text-primary">{getModuleTitle()}</h1>
                <p className="text-muted-foreground text-sm mt-1">
                  {activeModule === "crop-disease" && "Upload crop images to detect diseases and get treatment recommendations"}
                  {activeModule === "soil-analysis" && "Analyze soil health and get fertilizer recommendations"}
                  {activeModule === "iot-dashboard" && "Monitor real-time sensor data from your farm"}
                  {activeModule === "weather" && "Get accurate weather forecasts and agricultural advisories"}
                  {activeModule === "voice-assistant" && "Interact with FasalGuru using voice commands"}
                  {activeModule === "profile" && "Manage your farmer profile and preferences"}
                  {activeModule === "reports" && "View and download agricultural reports"}
                  {activeModule === "settings" && "Configure system settings and preferences"}
                  {activeModule === "help" && "Get help and support for using FasalGuru"}
                </p>
              </div>
            )}
            
            {renderActiveModule()}
          </div>
        </div>
      </div>

      {/* Footer with API Credits */}
      <footer className="bg-gradient-card border-t border-border/20 mt-12 py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-muted-foreground">
            <span>Powered by AI & ML APIs</span>
            <span>•</span>
            <span>Weather API Integration</span>
            <span>•</span>
            <span>Computer Vision Models</span>
            <span>•</span>
            <span>IoT Data Analytics</span>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-2">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
