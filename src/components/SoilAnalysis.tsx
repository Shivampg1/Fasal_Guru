import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  Camera, 
  TestTube2, 
  Download,
  BarChart3,
  Droplets,
  Zap,
  FileText
} from "lucide-react";

const SoilAnalysis = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const mockAnalysis = {
    texture: "Loamy Soil",
    ph: 6.8,
    moisture: 45,
    nutrients: {
      nitrogen: 75,
      phosphorus: 60,
      potassium: 85,
      organic_matter: 3.2
    },
    recommendations: {
      crops: ["Tomato", "Potato", "Corn", "Wheat"],
      fertilizer: "10-10-10 NPK fertilizer - 250kg per hectare",
      amendments: "Add compost to increase organic matter content"
    }
  };

  const handleImageUpload = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const getNutrientLevel = (value: number) => {
    if (value >= 80) return { level: "High", color: "success" };
    if (value >= 60) return { level: "Medium", color: "warning" };
    return { level: "Low", color: "danger" };
  };

  const getPHLevel = (ph: number) => {
    if (ph >= 6.0 && ph <= 7.5) return { level: "Optimal", color: "success" };
    if (ph < 6.0) return { level: "Acidic", color: "warning" };
    return { level: "Alkaline", color: "warning" };
  };

  const recentAnalyses = [
    { field: "North Field", ph: 6.5, texture: "Clay Loam", date: "1 day ago" },
    { field: "South Field", ph: 7.2, texture: "Sandy Loam", date: "3 days ago" },
    { field: "East Field", ph: 6.8, texture: "Loamy Soil", date: "1 week ago" }
  ];

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TestTube2 className="h-5 w-5 text-warning" />
            Soil Health Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!selectedImage && (
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center">
                <Upload className="h-8 w-8 text-warning" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Upload Soil Sample Image</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take a clear photo of soil sample or upload from gallery
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                <Button onClick={handleImageUpload} variant="warning" className="gap-2">
                  <Camera className="h-4 w-4" />
                  Take Photo
                </Button>
                <Button variant="outline" onClick={handleImageUpload} className="gap-2">
                  <Upload className="h-4 w-4" />
                  Upload Image
                </Button>
              </div>
            </div>
          )}

          {isAnalyzing && (
            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-12 h-12 border-4 border-warning border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm">Analyzing soil composition...</p>
                </div>
              </div>
            </div>
          )}

          {analysisComplete && (
            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Analyzed Soil Sample</p>
              </div>

              {/* Soil Properties */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="bg-warning/5 border-warning/20">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Soil Texture</p>
                        <p className="font-medium">{mockAnalysis.texture}</p>
                      </div>
                      <TestTube2 className="h-5 w-5 text-warning" />
                    </div>
                  </CardContent>
                </Card>

                <Card className={`bg-${getPHLevel(mockAnalysis.ph).color}/5 border-${getPHLevel(mockAnalysis.ph).color}/20`}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">pH Level</p>
                        <p className="font-medium">{mockAnalysis.ph} ({getPHLevel(mockAnalysis.ph).level})</p>
                      </div>
                      <Droplets className={`h-5 w-5 text-${getPHLevel(mockAnalysis.ph).color}`} />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-primary/5 border-primary/20 md:col-span-2">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">Moisture Content</p>
                      <Droplets className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={mockAnalysis.moisture} className="flex-1" />
                      <span className="font-medium">{mockAnalysis.moisture}%</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Nutrient Analysis */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <BarChart3 className="h-5 w-5" />
                    Nutrient Analysis (NPK + Organic Matter)
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {Object.entries(mockAnalysis.nutrients).map(([nutrient, value]) => {
                    const level = nutrient === 'organic_matter' 
                      ? { level: value > 3 ? "Good" : "Low", color: value > 3 ? "success" : "warning" }
                      : getNutrientLevel(value as number);
                    
                    return (
                      <div key={nutrient} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="capitalize font-medium">{nutrient.replace('_', ' ')}</span>
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className={`text-${level.color}`}>
                              {level.level}
                            </Badge>
                            <span className="text-sm">
                              {nutrient === 'organic_matter' ? `${value}%` : `${value}ppm`}
                            </span>
                          </div>
                        </div>
                        {nutrient !== 'organic_matter' && (
                          <Progress value={value as number} className="h-2" />
                        )}
                      </div>
                    );
                  })}
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Recommendations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-medium text-success mb-2">🌾 Suitable Crops</h5>
                    <div className="flex flex-wrap gap-2">
                      {mockAnalysis.recommendations.crops.map((crop, index) => (
                        <Badge key={index} variant="outline" className="bg-success/5">
                          {crop}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-warning mb-2">🧪 Fertilizer Recommendation</h5>
                    <p className="text-sm bg-warning/5 p-3 rounded">{mockAnalysis.recommendations.fertilizer}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-primary mb-2">🌱 Soil Amendment</h5>
                    <p className="text-sm bg-primary/5 p-3 rounded">{mockAnalysis.recommendations.amendments}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-2">
                <Button variant="warning" className="flex-1 gap-2">
                  <Download className="h-4 w-4" />
                  Download Soil Health Card
                </Button>
                <Button variant="outline" onClick={() => setAnalysisComplete(false)}>
                  New Analysis
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Analyses */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <FileText className="h-5 w-5" />
            Recent Soil Analyses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAnalyses.map((analysis, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div>
                  <p className="font-medium">{analysis.field}</p>
                  <p className="text-sm text-muted-foreground">{analysis.date}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">pH {analysis.ph}</p>
                  <p className="text-sm text-muted-foreground">{analysis.texture}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SoilAnalysis;