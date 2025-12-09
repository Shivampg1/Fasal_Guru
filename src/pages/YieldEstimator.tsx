import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BarChart3 } from "lucide-react";

export default function YieldEstimator() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-yellow-600 bg-clip-text text-transparent mb-4">
            📊 Yield Estimator
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            DSSAT AI Yield Prediction
          </p>
        </div>

        <Card className="shadow-2xl border-0 overflow-hidden">
          <CardHeader className="bg-orange-600 text-white p-6">
            <CardTitle className="text-2xl flex items-center gap-3">
              <BarChart3 className="h-8 w-8" />
              DSSAT Yield Prediction Model
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              src="https://cropdiseasedetection-dssat-detection-yield-prediction.hf.space"
              width="100%"
              height="750"
              frameBorder="0"
              className="w-full"
              title="Yield Estimator"
              allow="camera; microphone"
            />
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-orange-600 hover:bg-orange-700 shadow-lg gap-2 px-8">
            <Download className="h-5 w-5" />
            Export Report
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
