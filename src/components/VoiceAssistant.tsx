import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Mic, 
  MicOff, 
  Volume2, 
  Languages,
  MessageCircle,
  Send,
  Settings
} from "lucide-react";
import { Input } from "@/components/ui/input";

const VoiceAssistant = () => {
  const [isListening, setIsListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english");
  const [message, setMessage] = useState("");

  const languages = [
    { code: "english", name: "English", flag: "🇺🇸" },
    { code: "hindi", name: "हिन्दी", flag: "🇮🇳" },
    { code: "marathi", name: "मराठी", flag: "🇮🇳" },
    { code: "gujarati", name: "ગુજરાતી", flag: "🇮🇳" }
  ];

  const chatHistory = [
    { type: "user", message: "What's the weather like today?", time: "10:30 AM" },
    { type: "assistant", message: "Today's weather shows 28°C with partly cloudy skies. Good conditions for field work. Expect light rainfall in the evening.", time: "10:30 AM" },
    { type: "user", message: "Should I water my tomatoes today?", time: "10:35 AM" },
    { type: "assistant", message: "Based on soil moisture data from your sensors, your tomato plants have adequate moisture. With expected rainfall, skip watering today.", time: "10:35 AM" }
  ];

  const quickQuestions = [
    "What diseases affect my crops?",
    "Check soil nutrient levels",
    "Today's weather forecast",
    "When to harvest my crops?",
    "Pest control recommendations",
    "Market prices for wheat"
  ];

  return (
    <div className="space-y-6">
      {/* Voice Control Card */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2">
            <Mic className="h-5 w-5 text-primary" />
            FasalGuru Voice Assistant
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Language Selection */}
          <div>
            <label className="text-sm font-medium mb-2 block">Select Language</label>
            <div className="grid grid-cols-2 gap-2">
              {languages.map((lang) => (
                <Button
                  key={lang.code}
                  variant={selectedLanguage === lang.code ? "default" : "outline"}
                  className="justify-start"
                  onClick={() => setSelectedLanguage(lang.code)}
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Voice Control */}
          <div className="text-center space-y-4">
            <div className={`mx-auto w-24 h-24 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
              isListening 
                ? "bg-danger animate-pulse shadow-glow" 
                : "bg-primary hover:bg-primary-hover shadow-medium"
            }`}>
              <Button
                variant="ghost"
                size="icon"
                className="w-full h-full text-white hover:bg-transparent"
                onClick={() => setIsListening(!isListening)}
              >
                {isListening ? <MicOff className="h-8 w-8" /> : <Mic className="h-8 w-8" />}
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              {isListening ? "Listening... Speak now" : "Tap to speak with FasalGuru"}
            </p>
            {isListening && (
              <div className="flex justify-center">
                <div className="flex space-x-1">
                  <div className="w-2 h-8 bg-primary animate-pulse rounded"></div>
                  <div className="w-2 h-6 bg-success animate-pulse rounded" style={{animationDelay: "0.1s"}}></div>
                  <div className="w-2 h-10 bg-warning animate-pulse rounded" style={{animationDelay: "0.2s"}}></div>
                  <div className="w-2 h-7 bg-primary animate-pulse rounded" style={{animationDelay: "0.3s"}}></div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Questions */}
          <div>
            <label className="text-sm font-medium mb-3 block">Quick Questions</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {quickQuestions.map((question, index) => (
                <Button key={index} variant="outline" className="text-left h-auto p-3 text-xs">
                  {question}
                </Button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chat Interface */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Conversation History
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Chat Messages */}
          <div className="space-y-3 max-h-64 overflow-y-auto">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-xs lg:max-w-md p-3 rounded-lg ${
                  chat.type === 'user' 
                    ? 'bg-primary text-primary-foreground' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <p className="text-sm">{chat.message}</p>
                  <p className="text-xs opacity-70 mt-1">{chat.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex gap-2">
            <Input
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1"
            />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>

          {/* Controls */}
          <div className="flex justify-between items-center pt-2 border-t">
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Volume2 className="h-4 w-4 mr-2" />
                Voice Output
              </Button>
              <Button variant="outline" size="sm">
                <Languages className="h-4 w-4 mr-2" />
                Translate
              </Button>
            </div>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VoiceAssistant;