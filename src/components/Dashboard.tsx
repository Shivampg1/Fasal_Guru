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


import eMandiIcon from "@/assets/e-krishimandi.png";
import satelliteIcon from "@/assets/satellite-icon.png";
import yieldIcon from "@/assets/dssat.png";
import weatherIcon from "@/assets/weather-icon.png";
import insuranceIcon from "@/assets/insurance-icon.png";
import cropIcon from "@/assets/crop-icon.png";
import soilIcon from "@/assets/soil-icon.png";
import iotIcon from "@/assets/iot-icon.png";
/* 🔥 TEAM IMAGES */
import team1 from "@/assets/team/team1.jpeg";
import team2 from "@/assets/team/team2.jpeg";
import team3 from "@/assets/team/team3.jpeg";
import team4 from "@/assets/team/team4.jpeg";
import team5 from "@/assets/team/team5.jpeg";
import team6 from "@/assets/team/team6.jpeg";
import team7 from "@/assets/team/team7.jpeg";
import team8 from "@/assets/team/team8.jpeg";
import team9 from "@/assets/team/team9.jpeg";
import team10 from "@/assets/team/team10.jpeg";
/* ARRAY – Add members here */
const teamImages = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10];




const Dashboard = () => {
  const modules = [
    {
      id: "crop-disease",
      title: "Crop Disease Detection",
      description: "Upload crop images to detect diseases and get treatment recommendations",
      icon: <img src={cropIcon} className="h-15 w-24" alt="Crop Icon" />,
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
      icon: <img src={soilIcon} className="h-15 w-24" alt="Soil Icon" />,
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
  icon: (
    <img 
      src={weatherIcon} 
      alt="Weather Icon" 
      className="h-16 w-20 object-contain"
    />
  ),
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
      icon: <img src={insuranceIcon} className="h-20 w-28" alt="Insurance Icon" />,
      color: "accent",
      stats: "Insurance",
      link: "/insurance",
      external: false
    },
    {
  id: "yield-estimator",
  title: "Yield Estimator",
  description: "DSSAT-based yield estimator",
  icon: <img src={yieldIcon} className="h-15 w-24" alt="dssat Icon" />,   // OR <img src={yieldIcon} className="h-12 w-12" />
  color: "primary",
  stats: "AI Model",
  link: "https://huggingface.co/spaces/cropdiseasedetection/dssat-detection-yield-prediction",   // 🚀 Internal route
  external: false
},
    {
  id: "highres-insights",
  title: "High-Resolution Crop Insights",
  description: "Get satellite-based vegetation and crop health analytics",
  icon: <img src={satelliteIcon} className="h-20 w-23" alt="Satellite Icon" />,
  color: "primary",
  stats: "Satellite Data",
  link: "https://huggingface.co/spaces/cropdiseasedetection/satellite-crop-monitoring",
  external: true
},
    {
    id: "e-mandi",
    title: "E-Mandi Live Price",
    description: "Get real-time mandi rates for crops",
    icon: <img src={eMandiIcon} className="h-15 w-24" alt="E-Mandi Icon" />,
    color: "success",
    stats: "Market Price",
    link: "https://YOUR-EMANDI-URL-HERE",
    external: true
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
  {/* 🚀 OUR TEAM — AUTO SLIDING GALLERY */}
<div className="mt-16">
  <h2 className="text-2xl font-bold text-center text-primary mb-6">
    Meet Our Team
  </h2>

  <div className="overflow-hidden w-full relative">
    <div
      className="flex gap-6 animate-scroll whitespace-nowrap"
      style={{ animation: "scroll 18s linear infinite" }}
    >
      {teamImages.map((img, i) => (
        <div key={i} className="w-60 h-60 rounded-xl overflow-hidden shadow-lg border">
          <img src={team1} className="w-40 h-40 rounded-full shadow-lg border-4 border-green-400 object-cover" />
          <img src={team2} className="w-40 h-40 rounded-full shadow-lg border-4 border-green-400 object-cover" />
          <img src={team3} className="w-40 h-40 rounded-full shadow-lg border-4 border-green-400 object-cover" />
          <img src={team4} className="w-40 h-40 rounded-full shadow-lg border-4 border-green-400 object-cover" />
          <img src={team5} className="w-40 h-40 rounded-full shadow-lg border-4 border-green-400 object-cover" />
          <img src={team6} className="w-40 h-40 rounded-full shadow-lg border-4 border-green-400 object-cover" />
          <img src={team7} className="w-40 h-40 rounded-full shadow-lg border-4 border-green-400 object-cover" />
          <img src={team8} className="w-40 h-40 rounded-full shadow-lg border-4 border-green-400 object-cover" />
          <img src={team9} className="w-40 h-40 rounded-full shadow-lg border-4 border-green-400 object-cover" />
          <img src={team10} className="w-40 h-40 rounded-full shadow-lg border-4 border-green-400 object-cover" />
        </div>
      ))}
    </div>
  </div>
</div>

};

export default Dashboard;
