import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  TestTube, 
  Activity, 
  Cloud, 
  Mic,
  ArrowRight,
  Upload,
  TrendingUp,
  AlertTriangle
} from "lucide-react";
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
      stats: "94% Accuracy"
    },
    {
      id: "soil-analysis", 
      title: "Soil Analysis",
      description: "Analyze soil health, nutrients and get fertilizer recommendations",
      icon: <TestTube className="h-8 w-8" />,
      bgImage: soilIcon,
      color: "warning",
      stats: "NPK Analysis"
    },
    {
      id: "iot-dashboard",
      title: "IoT Sensor Data", 
      description: "Monitor real-time environmental conditions and farm parameters",
      icon: <Activity className="h-8 w-8" />,
      bgImage: iotIcon,
      color: "primary",
      stats: "Live Data"
    },
    {
      id: "weather",
      title: "Weather Forecast",
      description: "7-day weather predictions and agricultural advisories",
      icon: <Cloud className="h-8 w-8" />,
      color: "secondary",
      stats: "7-Day Forecast"
    }
  ];

  const quickStats = [
    { label: "Active Sensors", value: "12", trend: "+2", color: "success" },
    { label: "Disease Scans", value: "45", trend: "+8", color: "primary" },
    { label: "Soil Reports", value: "23", trend: "+5", color: "warning" },
    { label: "Weather Alerts", value: "3", trend: "0", color: "danger" }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-primary via-success to-warning rounded-xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-2xl font-bold mb-2">Welcome to FasalGuru</h2>
          <p className="text-white/90 mb-4">Your AI-powered farming assistant for better crop management</p>
          <Button variant="secondary" className="bg-white text-primary hover:bg-white/90">
            <Mic className="h-4 w-4 mr-2" />
            Ask Voice Assistant
          </Button>
        </div>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full translate-y-4 translate-x-4"></div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="bg-gradient-card border-0 shadow-soft">
            <CardContent className="p-4 text-center">
              <div className={`text-2xl font-bold text-${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
              <div className={`text-xs flex items-center justify-center gap-1 text-${stat.color}`}>
                <TrendingUp className="h-3 w-3" />
                {stat.trend}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Modules */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {modules.map((module) => (
          <Card key={module.id} className="group hover:shadow-strong transition-all duration-300 cursor-pointer bg-gradient-card border-0 overflow-hidden">
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
              <Button className="w-full group-hover:bg-primary-hover transition-colors" variant="default">
                Open Module
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-primary" />
            Recent Activity
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-success/5 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">Tomato leaf analysis completed</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">View</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-warning/5 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-warning rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">Soil pH level alert received</p>
                  <p className="text-xs text-muted-foreground">4 hours ago</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">View</Button>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <div>
                  <p className="font-medium text-sm">IoT sensor data synced</p>
                  <p className="text-xs text-muted-foreground">6 hours ago</p>
                </div>
              </div>
              <Button variant="ghost" size="sm">View</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;