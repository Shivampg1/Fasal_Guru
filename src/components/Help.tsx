import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "@/hooks/use-toast";
import { 
  Search, HelpCircle, BookOpen, Users, MessageSquare, Bug, Star, 
  Play, Phone, Mail, Clock, Send, Upload, ExternalLink, Sprout, Youtube, Facebook
} from "lucide-react";

const Help = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [issueForm, setIssueForm] = useState({
    type: "",
    description: "",
    screenshot: null as File | null
  });
  const [feedbackForm, setFeedbackForm] = useState({
    rating: 0,
    likes: "",
    improvements: "",
    suggestions: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ... (keep ALL your existing faqs, supportTeam, tutorials, filteredFaqs, handleSubmitIssue, handleSubmitFeedback functions exactly the same)
  
  // Your existing data and functions go here (faqs, supportTeam, tutorials, filteredFaqs, handleSubmitIssue, handleSubmitFeedback)
  const faqs = {
    // ... your existing faqs object
  };

  const supportTeam = [
    // ... your existing supportTeam array
  ];

  const tutorials = [
    // ... your existing tutorials array
  ];

  const filteredFaqs = searchQuery
    ? Object.entries(faqs).reduce((acc, [category, questions]) => {
        const filtered = questions.filter(
          q => q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
               q.answer.toLowerCase().includes(searchQuery.toLowerCase())
        );
        if (filtered.length > 0) acc[category] = filtered;
        return acc;
      }, {} as typeof faqs)
    : faqs;

  const handleSubmitIssue = async () => {
    // ... your existing function
  };

  const handleSubmitFeedback = async () => {
    // ... your existing function
  };

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* About Section */}
      <Card className="bg-gradient-to-br from-primary/10 to-success/10 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-primary/20 rounded-full">
              <Sprout className="h-8 w-8 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Welcome to Fasal Guru Help Center</h2>
              <p className="text-muted-foreground leading-relaxed">
                <strong>Fasal Guru</strong> is your intelligent farming companion designed to empower farmers with 
                real-time weather updates, crop advisory, market prices, and expert agricultural guidance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Search */}
      <Card>
        <CardContent className="p-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              className="pl-12 h-12 text-lg"
              placeholder="Search FAQs... / सवाल खोजें..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* FAQs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <HelpCircle className="h-5 w-5 text-primary" />
            अक्सर पूछे जाने वाले प्रश्न / FAQs
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* ... your existing FAQs accordion code */}
        </CardContent>
      </Card>

      {/* Rest of your sections (Contact Support, Video Tutorials, Community, Report Issues, Feedback) */}
      {/* Keep ALL of them exactly the same */}
    </div>
  );
};

export default Help;
