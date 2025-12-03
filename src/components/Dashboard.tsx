import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { ArrowRight, Mic } from "lucide-react";
import { Link } from "react-router-dom";

import satelliteIcon from "@/assets/satellite-icon.png";
import yieldIcon from "@/assets/dssat.png";
import weatherIcon from "@/assets/weather-icon.png";
import insuranceIcon from "@/assets/insurance-icon.png";
import cropIcon from "@/assets/crop-icon.png";
import soilIcon from "@/assets/soil-icon.png";
import iotIcon from "@/assets/iot-icon.png";

const Dashboard = () => {
  const { t } = useTranslation();

  const modules = [
    {
      id: "crop-disease",
      titleKey: "cropDisease",
      descKey: "cropDiseaseDesc",
      icon: <img src={cropIcon} className="h-15 w-24" alt="Crop Icon" />,
      color: "success",
      statsKey: "accuracy",
      link: "https://huggingface.co/spaces/cropdiseasedetection/crop-disease-detector-app",
      external: true
    },
    {
      id: "soil-analysis",
      titleKey: "soilAnalysis",
      descKey: "soilAnalysisDesc",
      icon: <img src={soilIcon} className="h-15 w-24" alt="Soil Icon" />,
      color: "warning",
      statsKey: "npkAnalysis",
      link: "https://huggingface.co/spaces/soildetect/soil-detection-app",
      external: true
    },
    {
      id: "iot-dashboard",
      titleKey: "iotSensor",
      descKey: "iotSensorDesc",
      icon: <img src={iotIcon} className="h-15 w-24" alt="IoT Icon" />,
      color: "primary",
      statsKey: "liveData",
      link: "",
      external: false
    },
    {
      id: "weather",
      titleKey: "weatherForecast",
      descKey: "weatherForecastDesc",
      icon: <img src={weatherIcon} alt="Weather Icon" className="h-16 w-20 object-contain" />,
      color: "secondary",
      statsKey: "sevenDayForecast",
      link: "https://weather-app-navy-nine-35.vercel.app/",
      external: true
    },
    {
      id: "insurance",
      titleKey: "insurance",
      descKey: "insuranceDesc",
      icon: <img src={insuranceIcon} className="h-20 w-28" alt="Insurance Icon" />,
      color: "accent",
      statsKey: "insuranceLabel",
      link: "/insurance",
      external: false
    },
    {
      id: "yield-estimator",
      titleKey: "yieldEstimator",
      descKey: "yieldEstimatorDesc",
      icon: <img src={yieldIcon} className="h-15 w-24" alt="DSSAT Icon" />,
      color: "primary",
      statsKey: "aiModel",
      link: "https://huggingface.co/spaces/cropdiseasedetection/dssat-detection-yield-prediction",
      external: true
    },
    {
      id: "highres-insights",
      titleKey: "satelliteInsights",
      descKey: "satelliteInsightsDesc",
      icon: <img src={satelliteIcon} className="h-20 w-23" alt="Satellite Icon" />,
      color: "primary",
      statsKey: "satelliteData",
      link: "https://huggingface.co/spaces/cropdiseasedetection/satellite-crop-monitoring",
      external: true
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary via-success to-warning rounded-xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">{t("welcomeTitle")}</h2>
          <p className="text-white/90 mb-4">{t("welcomeDesc")}</p>

          <a href="https://jarvis-flask-alpha.vercel.app/" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
              <Mic className="h-4 w-4 mr-2" />
              {t("askVoiceAssistant")}
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
                  {t(module.statsKey)}
                </div>
              </div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                {t(module.titleKey)}
              </CardTitle>
              <CardDescription className="text-sm">
                {t(module.descKey)}
              </CardDescription>
            </CardHeader>

            <CardContent>
              {module.external ? (
                <a href={module.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full group-hover:bg-primary-hover transition-colors">
                    {t("openModule")}
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              ) : (
                <Link to={module.link}>
                  <Button className="w-full group-hover:bg-primary-hover transition-colors">
                    {t("openModule")}
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
