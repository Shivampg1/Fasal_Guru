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
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-muted-foreground">System Settings</h2>
            <p className="text-muted-foreground mt-2">Configuration panel coming soon...</p>
          </div>
        );
      case "help":
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-bold text-muted-foreground">Help & Support</h2>
            <p className="text-muted-foreground mt-2">Documentation and support coming soon...</p>
          </div>
        );
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
              <p className="text-xl md:text-2xl text-white/90 mb-6">
                Your AI-powered farming assistant for smarter agriculture
              </p>
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

      {/* Backend Integration Notice */}
      <div className="fixed bottom-4 right-4 max-w-sm">
        <div className="bg-primary text-primary-foreground p-4 rounded-lg shadow-glow">
          <h4 className="font-medium mb-2">Ready for Backend Integration</h4>
          <p className="text-xs text-primary-foreground/90">
            Connect to Supabase to enable ML models, authentication, database storage, and real API integrations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;