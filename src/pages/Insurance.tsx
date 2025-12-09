import { useState } from "react";
import { enrolFarmer, submitClaim } from "../lib/api";
import { Upload, FileText, Database, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button"; // Assuming you have these UI components
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import insuranceBg from "@/assets/insurance-bg.jpg";

export default function Insurance() {
  // Enrolment state
  const [enrolData, setEnrolData] = useState({
    farmer_name: "",
    aadhar_number: "",
    mobile: "",
    crop: "",
    season: "", 
    parcel_geo: "",
    premium: "",
  });

  // Claim state
  const [claimData, setClaimData] = useState({
    policy_id: "",
    damage_type: "",
    loss_area: "",
  });

  // New Upload States
  const [dssatFile, setDssatFile] = useState<File | null>(null);
  const [satelliteFile, setSatelliteFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const [response, setResponse] = useState<any>(null);

  const handleChange = (setter: any, field: string, value: any) => {
    setter((prev: any) => ({ ...prev, [field]: value }));
  };

  // Enrolment handler
  const handleEnrol = async () => {
    if(!enrolData.farmer_name || !enrolData.mobile) {
       toast({ title: "Error", description: "Please fill required fields", variant: "destructive" });
       return;
    }
    
    try {
      const payload = {
        farmer_name: enrolData.farmer_name,
        aadhar_number: enrolData.aadhar_number,
        mobile: enrolData.mobile,
        crop: enrolData.crop,
        season: enrolData.season,
        parcel_geo: enrolData.parcel_geo,
        premium: Number(enrolData.premium),
      };

      const res = await enrolFarmer(payload);
      setResponse(res);
      toast({ title: "Success", description: "Farmer enrolled successfully!" });
    } catch (error) {
      toast({ title: "Error", description: "Failed to enrol farmer", variant: "destructive" });
    }
  };

  // Claim handler
  const handleClaim = async () => {
    try {
      const payload = {
        policy_id: Number(claimData.policy_id),
        damage_type: claimData.damage_type,
        loss_area: Number(claimData.loss_area),
      };

      const res = await submitClaim(payload);
      setResponse(res);
      toast({ title: "Claim Submitted", description: "Your claim has been recorded." });
    } catch (error) {
      toast({ title: "Error", description: "Failed to submit claim", variant: "destructive" });
    }
  };

  // Handler for DSSAT Data Upload
  const handleDssatUpload = () => {
    if (!dssatFile) {
      toast({ title: "No file selected", description: "Please select a DSSAT file to upload", variant: "destructive" });
      return;
    }

    setIsUploading(true);
    // Simulate API call
    setTimeout(() => {
      setIsUploading(false);
      setResponse({ message: "DSSAT Data processed successfully", fileName: dssatFile.name });
      toast({ title: "Uploaded!", description: "DSSAT data has been uploaded." });
      setDssatFile(null);
    }, 1500);
  };

  // Handler for Satellite Data (PDF) Upload
  const handleSatelliteUpload = () => {
    if (!satelliteFile) {
      toast({ title: "No file selected", description: "Please select a PDF file", variant: "destructive" });
      return;
    }

    if (satelliteFile.type !== "application/pdf") {
       toast({ title: "Invalid File", description: "Please upload a PDF file only", variant: "destructive" });
       return;
    }

    setIsUploading(true);
    // Simulate API call
    setTimeout(() => {
      setIsUploading(false);
      setResponse({ message: "Satellite Report analyzed successfully", fileName: satelliteFile.name });
      toast({ title: "Uploaded!", description: "Satellite report uploaded successfully." });
      setSatelliteFile(null);
    }, 1500);
  };

  return (
  <div 
    className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed"
    style={{ backgroundImage: `url(${insuranceBg})` }}
  >
    {/* Dark overlay for readability */}
    <div className="min-h-screen w-full bg-black/40 p-4 md:p-6">
      
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Header - White text with shadow */}
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-3xl font-bold text-white drop-shadow-lg">
            PMFBY Insurance Portal
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Enrolment Card */}
          <Card className="border-l-4 border-l-green-500 shadow-lg bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600"/> Farmer Enrolment
              </CardTitle>
              <CardDescription>Register a new farmer for insurance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.keys(enrolData).map((field) => (
                <div key={field} className="space-y-1">
                  <Label className="capitalize text-xs text-muted-foreground">
                    {field.replace('_', ' ')}
                  </Label>
                  <Input
                    className="h-9"
                    placeholder={`Enter ${field.replace('_', ' ')}`}
                    value={(enrolData as any)[field]}
                    onChange={(e) => handleChange(setEnrolData, field, e.target.value)}
                  />
                </div>
              ))}
              <Button 
                className="w-full mt-4 bg-green-600 hover:bg-green-700" 
                onClick={handleEnrol}
              >
                Enrol Farmer
              </Button>
            </CardContent>
          </Card>

          {/* Claim Card */}
          <Card className="border-l-4 border-l-blue-500 shadow-lg bg-white/95 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-blue-600"/> Submit Claim
              </CardTitle>
              <CardDescription>File a damage claim for insurance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {Object.keys(claimData).map((field) => (
                <div key={field} className="space-y-1">
                  <Label className="capitalize text-xs text-muted-foreground">
                    {field.replace('_', ' ')}
                  </Label>
                  <Input
                    className="h-9"
                    placeholder={`Enter ${field.replace('_', ' ')}`}
                    value={(claimData as any)[field]}
                    onChange={(e) => handleChange(setClaimData, field, e.target.value)}
                  />
                </div>
              ))}
              <Button 
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700" 
                onClick={handleClaim}
              >
                Submit Claim
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Data Upload Section */}
        <Card className="border-l-4 border-l-orange-500 shadow-lg bg-white/95 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-orange-600" />
              Data Upload Center
            </CardTitle>
            <CardDescription>Upload agricultural data for analysis</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* DSSAT Upload */}
            <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-white hover:bg-gray-50 transition-colors">
              <div className="bg-orange-50 p-3 rounded-full mb-3">
                <FileText className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="font-semibold mb-1">Upload DSSAT Data</h3>
              <p className="text-xs text-muted-foreground mb-4">Supports CSV, JSON, TXT</p>
              <Input 
                type="file" 
                className="mb-3 max-w-[200px]"
                onChange={(e) => setDssatFile(e.target.files ? e.target.files[0] : null)}
                accept=".csv,.json,.txt"
              />
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleDssatUpload}
                disabled={!dssatFile || isUploading}
                className="border-orange-500 text-orange-600 hover:bg-orange-50"
              >
                {isUploading ? "Uploading..." : "Upload DSSAT File"}
              </Button>
            </div>

            {/* Satellite Upload */}
            <div className="border border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-white hover:bg-gray-50 transition-colors">
              <div className="bg-blue-50 p-3 rounded-full mb-3">
                <Upload className="h-8 w-8 text-blue-500" />
              </div>
              <h3 className="font-semibold mb-1">Upload Satellite Data</h3>
              <p className="text-xs text-muted-foreground mb-4">Upload analysis reports (PDF only)</p>
              <Input 
                type="file" 
                className="mb-3 max-w-[200px]"
                onChange={(e) => setSatelliteFile(e.target.files ? e.target.files[0] : null)}
                accept="application/pdf"
              />
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleSatelliteUpload}
                disabled={!satelliteFile || isUploading}
                className="border-blue-500 text-blue-600 hover:bg-blue-50"
              >
                {isUploading ? "Uploading..." : "Upload Satellite PDF"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Response Display */}
        {response && (
          <Card className="bg-gray-900/90 text-white border-0 backdrop-blur-sm shadow-lg">
            <CardHeader>
              <CardTitle className="text-sm text-gray-400">System Response</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="text-xs md:text-sm overflow-auto max-h-40 font-mono">
                {JSON.stringify(response, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  </div>
);
}
