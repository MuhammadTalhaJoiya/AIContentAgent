import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { 
  Wand2, 
  Copy, 
  Download, 
  RefreshCw, 
  Settings,
  FileText,
  MessageSquare,
  Mail,
  Video,
  Instagram,
  Twitter,
  Linkedin,
  Facebook,
  Sparkles,
  Eye,
  Clock,
  Target
} from "lucide-react";

const contentTypes = [
  {
    id: "blog",
    name: "Blog Post",
    description: "Long-form articles and blog content",
    icon: FileText,
    color: "bg-blue-500",
    estimatedTime: "3-5 min",
    wordRange: "800-2000"
  },
  {
    id: "social-instagram",
    name: "Instagram Post",
    description: "Engaging Instagram captions and posts",
    icon: Instagram,
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    estimatedTime: "1-2 min",
    wordRange: "50-150"
  },
  {
    id: "social-twitter",
    name: "Twitter Thread",
    description: "Compelling Twitter threads and tweets",
    icon: Twitter,
    color: "bg-blue-400",
    estimatedTime: "1-2 min",
    wordRange: "100-280"
  },
  {
    id: "social-linkedin",
    name: "LinkedIn Post",
    description: "Professional LinkedIn content",
    icon: Linkedin,
    color: "bg-blue-600",
    estimatedTime: "2-3 min",
    wordRange: "150-300"
  },
  {
    id: "email",
    name: "Email Campaign",
    description: "Email marketing and newsletters",
    icon: Mail,
    color: "bg-green-500",
    estimatedTime: "2-4 min",
    wordRange: "200-500"
  },
  {
    id: "video-script",
    name: "Video Script",
    description: "YouTube and video content scripts",
    icon: Video,
    color: "bg-red-500",
    estimatedTime: "3-6 min",
    wordRange: "300-800"
  }
];

const toneOptions = [
  "Professional", "Casual", "Friendly", "Authoritative", "Conversational",
  "Enthusiastic", "Informative", "Persuasive", "Humorous", "Inspirational"
];

const audienceOptions = [
  "General Public", "Business Professionals", "Young Adults", "Teenagers",
  "Parents", "Entrepreneurs", "Tech Enthusiasts", "Students", "Seniors"
];

const sampleGeneratedContent = {
  blog: `# The Future of AI in Content Creation

Artificial Intelligence is revolutionizing the way we create and consume content. From automated writing assistants to sophisticated content generators, AI tools are becoming indispensable for content creators worldwide.

## The Current Landscape

Today's AI content tools offer unprecedented capabilities:
- **Speed**: Generate content in minutes, not hours
- **Consistency**: Maintain brand voice across all content
- **Scalability**: Create multiple variations effortlessly

The transformation is particularly evident in marketing, where personalized content at scale was once impossible...`,
  
  "social-instagram": `🌟 Ready to transform your content creation process? 

AI isn't just the future – it's happening NOW! From blog posts to social captions, AI tools are helping creators like you save time and boost creativity. 

✨ What's your favorite AI content tool? Drop it in the comments!

#ContentCreation #AITools #DigitalMarketing #CreativeProcess #MarketingTips #SocialMediaStrategy`,

  email: `Subject: 🚀 Boost Your Content Game with AI (3-minute read)

Hi there!

Ever spent hours staring at a blank page, waiting for inspiration to strike? You're not alone. 

That's why I'm excited to share how AI is changing the content creation game forever...

[Content continues with personalized sections]

Best regards,
Your Content Team`
};

const ContentGenerator = () => {
  const [selectedType, setSelectedType] = useState(contentTypes[0]);
  const [topic, setTopic] = useState("");
  const [tone, setTone] = useState("");
  const [audience, setAudience] = useState("");
  const [keywords, setKeywords] = useState("");
  const [length, setLength] = useState([500]);
  const [creativityLevel, setCreativityLevel] = useState([7]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [activeTab, setActiveTab] = useState("generate");

  const handleGenerate = async () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedContent(sampleGeneratedContent[selectedType.id] || sampleGeneratedContent.blog);
      setIsGenerating(false);
    }, 3000);
  };

  const handleRegenerate = () => {
    handleGenerate();
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedContent);
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Content Generator
        </h1>
        <p className="text-muted-foreground">
          Generate AI-powered content for blogs, social media, and marketing materials.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="generate">Generate Content</TabsTrigger>
          <TabsTrigger value="templates">Content Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="generate" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Configuration Panel */}
            <Card className="lg:col-span-1 border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  Content Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Content Type Selection */}
                <div>
                  <Label className="text-sm font-medium mb-3 block">Content Type</Label>
                  <div className="grid grid-cols-1 gap-2">
                    {contentTypes.map((type) => (
                      <div
                        key={type.id}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${
                          selectedType.id === type.id
                            ? "border-primary bg-primary/5"
                            : "border-border hover:border-primary/50"
                        }`}
                        onClick={() => setSelectedType(type)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${type.color} flex items-center justify-center`}>
                            <type.icon className="w-4 h-4 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-sm">{type.name}</div>
                            <div className="text-xs text-muted-foreground">{type.description}</div>
                            <div className="flex gap-2 mt-1">
                              <Badge variant="outline" className="text-xs">
                                <Clock className="w-3 h-3 mr-1" />
                                {type.estimatedTime}
                              </Badge>
                              <Badge variant="outline" className="text-xs">
                                {type.wordRange}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Basic Settings */}
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="topic">Topic/Subject</Label>
                    <Input
                      id="topic"
                      placeholder="What do you want to write about?"
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                    />
                  </div>

                  <div>
                    <Label>Tone & Style</Label>
                    <Select value={tone} onValueChange={setTone}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select tone" />
                      </SelectTrigger>
                      <SelectContent>
                        {toneOptions.map((option) => (
                          <SelectItem key={option} value={option.toLowerCase()}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Target Audience</Label>
                    <Select value={audience} onValueChange={setAudience}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience" />
                      </SelectTrigger>
                      <SelectContent>
                        {audienceOptions.map((option) => (
                          <SelectItem key={option} value={option.toLowerCase()}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="keywords">Keywords (optional)</Label>
                    <Input
                      id="keywords"
                      placeholder="keyword1, keyword2, keyword3"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                    />
                  </div>
                </div>

                <Separator />

                {/* Advanced Settings */}
                <div className="space-y-4">
                  <div>
                    <Label>Content Length: {length[0]} words</Label>
                    <Slider
                      value={length}
                      onValueChange={setLength}
                      max={2000}
                      min={50}
                      step={50}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Creativity Level: {creativityLevel[0]}/10</Label>
                    <Slider
                      value={creativityLevel}
                      onValueChange={setCreativityLevel}
                      max={10}
                      min={1}
                      step={1}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>Conservative</span>
                      <span>Creative</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={handleGenerate} 
                  className="w-full" 
                  disabled={!topic || isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Content
                    </>
                  )}
                </Button>

                {isGenerating && (
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Generating your content...</div>
                    <Progress value={33} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Content Output */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      Generated Content
                    </CardTitle>
                    {generatedContent && (
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" onClick={handleRegenerate}>
                          <RefreshCw className="w-4 h-4 mr-2" />
                          Regenerate
                        </Button>
                        <Button variant="outline" size="sm" onClick={copyToClipboard}>
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-2" />
                          Export
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  {generatedContent ? (
                    <div className="space-y-4">
                      <div className="bg-muted/50 p-4 rounded-lg">
                        <pre className="whitespace-pre-wrap text-sm font-mono">
                          {generatedContent}
                        </pre>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span>Words: {generatedContent.split(' ').length}</span>
                        <span>Characters: {generatedContent.length}</span>
                        <span>Reading time: ~{Math.ceil(generatedContent.split(' ').length / 200)} min</span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-4">
                        <Wand2 className="w-8 h-8 text-muted-foreground" />
                      </div>
                      <h3 className="font-medium mb-2">Ready to generate content?</h3>
                      <p className="text-muted-foreground text-sm">
                        Configure your settings and click generate to create amazing content with AI.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Additional Options */}
              {generatedContent && (
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle>Enhance Your Content</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <Button variant="outline" className="justify-start">
                        <Target className="w-4 h-4 mr-2" />
                        SEO Optimize
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Add Images
                      </Button>
                      <Button variant="outline" className="justify-start">
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Create Variations
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {contentTypes.map((type) => (
              <Card key={type.id} className="border-0 shadow-card">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${type.color} flex items-center justify-center`}>
                        <type.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-medium">{type.name}</h3>
                        <p className="text-sm text-muted-foreground">{type.description}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 flex-wrap">
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="w-3 h-3 mr-1" />
                        {type.estimatedTime}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {type.wordRange}
                      </Badge>
                    </div>

                    <Button 
                      onClick={() => {
                        setSelectedType(type);
                        setActiveTab("generate");
                      }}
                      className="w-full"
                      variant="outline"
                    >
                      Use Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentGenerator;