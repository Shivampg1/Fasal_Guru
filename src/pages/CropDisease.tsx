import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, AlertTriangle } from "lucide-react";

export default function CropDisease() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent mb-4">
            🦠 Crop Disease Detection
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Upload photo → 94% Accurate diagnosis + treatment
          </p>
        </div>

        <Card className="shadow-2xl border-0 overflow-hidden">
          <CardHeader className="bg-red-600 text-white p-6">
            <CardTitle className="text-2xl flex items-center gap-3">
              <AlertTriangle className="h-8 w-8" />
              Crop Disease Detector AI
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              src="https://cropdiseasedetection-crop-disease-detector-app.hf.space"
              width="100%"
              height="750"
              frameBorder="0"
              className="w-full"
              title="Crop Disease Detection"
              allow="camera; microphone"
            />
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-red-600 hover:bg-red-700 shadow-lg gap-2 px-8">
            <Download className="h-5 w-5" />
            Treatment Guide
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
