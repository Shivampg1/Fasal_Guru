import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SoilDetection() {
  return (
    <div style={{minHeight: '100vh', background: 'linear-gradient(to bottom right, #10b981, #3b82f6)', padding: '2rem'}}>
      <div style={{maxWidth: '1400px', margin: '0 auto'}}>
        <h1 style={{textAlign: 'center', fontSize: '2.5rem', color: 'white', marginBottom: '2rem', textShadow: '2px 2px 4px rgba(0,0,0,0.5)'}}>
          Soil Detection
        </h1>
        <Card style={{boxShadow: '0 20px 40px rgba(0,0,0,0.3)', border: 'none', background: 'rgba(255,255,255,0.95)'}}>
          <CardHeader>
            <CardTitle style={{textAlign: 'center', fontSize: '1.5rem'}}>
              Upload soil photo for AI check
            </CardTitle>
          </CardHeader>
          <CardContent style={{padding: 0}}>
            <iframe
              src="https://soildetect-soil-detection-app.hf.space"  // 👈 PUT YOUR LINK HERE
              width="100%"
              height="700"
              frameborder="0"
              style={{borderRadius: '0 0 20px 20px'}}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
