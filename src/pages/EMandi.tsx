import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ShoppingCart } from "lucide-react";

export default function EMandi() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4">
            🛒 E-Mandi Live Price
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Real-time Mandi Crop Prices
          </p>
        </div>

        <Card className="shadow-2xl border-0 overflow-hidden">
          <CardHeader className="bg-green-600 text-white p-6">
            <CardTitle className="text-2xl flex items-center gap-3">
              <ShoppingCart className="h-8 w-8" />
              eNAM Mandi Prices Tracker
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <iframe
              src="https://fasalguru-enam-mandi-prices.hf.space"
              width="100%"
              height="750"
              frameBorder="0"
              className="w-full"
              title="e-Mandi Prices"
              allow="camera; microphone"
            />
          </CardContent>
        </Card>

        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 shadow-lg gap-2 px-8">
            <Download className="h-5 w-5" />
            Export Prices
          </Button>
          <Button variant="outline" size="lg" className="px-8">
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
