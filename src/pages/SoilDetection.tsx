import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SoilDetection() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Soil Check</h1>
      <Card className="w-full max-w-6xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl text-center">AI Soil Detection</CardTitle>
        </CardHeader>
        <CardContent className="p-4">
          <iframe
            src="https://soildetect-soil-detection-app.hf.space"
            width="100%"
            height="700"
            frameBorder="0"
            className="rounded-lg"
            title="Soil App"
          />
        </CardContent>
      </Card>
    </div>
  );
}
