import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  TestTube, 
  Activity,
  Cloud, 
  Mic,
  ArrowRight,
  FileText
} from "lucide-react";

import { Link } from "react-router-dom"; // <-- IMPORTANT

import insuranceIcon from "@/assets/insurance-icon.png";
import cropIcon from "@/assets/crop-icon.png";
import soilIcon from "@/assets/soil-icon.png";
import iotIcon from "@/assets/iot-icon.png";


const Dashboard = () => {
  const modules = [
    {
      id: "crop-disease",
      title: "Crop Disease Detection",
      description: "Upload crop images to detect diseases and get treatment recommendations",
      icon: <Camera className="h-8 w-8" />,
      bgImage: cropIcon,
      color: "success",
      stats: "94% Accuracy",
      link: "https://huggingface.co/spaces/cropdiseasedetection/crop-disease-detector-app",
      external: true
    },

    {
      id: "soil-analysis",
      title: "Soil Analysis",
      description: "Analyze soil health, nutrients and get fertilizer recommendations",
      icon: <TestTube className="h-8 w-8" />,
      bgImage: soilIcon,
      color: "warning",
      stats: "NPK Analysis",
      link: "https://huggingface.co/spaces/soildetect/soil-detection-app",
      external: true
    },

    {
      id: "iot-dashboard",
      title: "IoT Sensor Data",
      description: "Monitor real-time environmental conditions and farm parameters",
      icon: <img src={iotIcon} className="h-15 w-24" alt="Iot Icon" />,
      bgImage: iotIcon,
      color: "primary",
      stats: "Live Data",
      link: "",
      external: false
    },

    {
      id: "weather",
      title: "Weather Forecast",
      description: "7-day weather predictions and agricultural advisories",
      icon: <Cloud className="h-8 w-8" />,
      color: "secondary",
      stats: "7-Day Forecast",
      link: "https://weather-app-navy-nine-35.vercel.app/",
      external: true
    },

    // ⭐ NEW INSURANCE CARD
    {
      id: "insurance",
      title: "PMFBY Insurance",
      description: "Enrol farmers, submit claims & get yield estimation",
      icon: <img src={insuranceIcon} className="h-15 w-24" alt="Insurance Icon" />,
      color: "accent",
      stats: "Insurance",
      link: "/insurance",
      external: false
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary via-success to-warning rounded-xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Welcome to FasalGuru</h2>
          <p className="text-white/90 mb-4">Your AI-powered farming assistant for better crop management</p>

          <a href="https://jarvis-flask-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Mic className="h-4 w-4 mr-2" />
              Ask Voice Assistant
            </Button>
          </a>
        </div>
      </div>

      {/* Main Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {modules.map((module) => (
          <Card 
            key={module.id}
            className="group hover:shadow-strong transition-all duration-300 cursor-pointer bg-gradient-card border-0 overflow-hidden"
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className={`p-3 rounded-lg bg-${module.color}/10`}>
                  <div className={`text-${module.color}`}>
                    {module.icon}
                  </div>
                </div>
                <div className={`text-xs font-medium px-2 py-1 rounded-full bg-${module.color}/10 text-${module.color}`}>
                  {module.stats}
                </div>
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {module.title}
              </CardTitle>
              <CardDescription className="text-sm">
                {module.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {module.external ? (
                // 🌐 External link (open in new tab)
                <a href={module.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full group-hover:bg-primary-hover transition-colors">
                    Open Module
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              ) : (
                // 🔗 Internal routing using React Router
                <Link to={module.link}>
                  <Button className="w-full group-hover:bg-primary-hover transition-colors">
                    Open Module
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
