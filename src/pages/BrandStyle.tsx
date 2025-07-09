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
import { Switch } from "@/components/ui/switch";
import { 
  Palette, 
  Type, 
  Volume2, 
  Target, 
  Save,
  Plus,
  Copy,
  Edit,
  Trash2,
  Download,
  Upload,
  Eye,
  Settings,
  Sparkles,
  MessageSquare,
  FileText,
  Image as ImageIcon
} from "lucide-react";

const brandVoiceOptions = [
  { id: "professional", name: "Professional", description: "Formal, authoritative, and trustworthy" },
  { id: "friendly", name: "Friendly", description: "Warm, approachable, and conversational" },
  { id: "innovative", name: "Innovative", description: "Forward-thinking, creative, and bold" },
  { id: "reliable", name: "Reliable", description: "Steady, dependable, and consistent" },
  { id: "playful", name: "Playful", description: "Fun, energetic, and creative" },
  { id: "sophisticated", name: "Sophisticated", description: "Elegant, refined, and premium" }
];

const toneVariations = [
  { id: "confident", name: "Confident", usage: "Product launches, announcements" },
  { id: "empathetic", name: "Empathetic", usage: "Customer support, testimonials" },
  { id: "educational", name: "Educational", usage: "How-to guides, tutorials" },
  { id: "inspirational", name: "Inspirational", usage: "Success stories, motivation" },
  { id: "urgent", name: "Urgent", usage: "Limited offers, deadlines" },
  { id: "celebratory", name: "Celebratory", usage: "Achievements, milestones" }
];

const colorPalettes = [
  {
    id: "primary",
    name: "Primary Brand Colors",
    colors: ["#3B82F6", "#1E40AF", "#1D4ED8"],
    usage: "Main brand elements, CTAs"
  },
  {
    id: "secondary",
    name: "Secondary Colors",
    colors: ["#10B981", "#059669", "#047857"],
    usage: "Accents, highlights"
  },
  {
    id: "neutral",
    name: "Neutral Colors",
    colors: ["#6B7280", "#4B5563", "#374151"],
    usage: "Text, backgrounds"
  }
];

const fontPairings = [
  {
    id: "modern",
    name: "Modern Professional",
    heading: "Inter",
    body: "Source Sans Pro",
    style: "Clean and modern"
  },
  {
    id: "classic",
    name: "Classic Elegant",
    heading: "Playfair Display",
    body: "Lato",
    style: "Timeless and sophisticated"
  },
  {
    id: "friendly",
    name: "Friendly Approachable",
    heading: "Nunito",
    body: "Open Sans",
    style: "Warm and welcoming"
  }
];

const contentExamples = [
  {
    type: "Social Media Post",
    original: "Check out our new product!",
    branded: "🚀 Exciting news! We're thrilled to introduce our latest innovation that's designed to transform your workflow. Ready to experience the future? #Innovation #ProductLaunch"
  },
  {
    type: "Email Subject",
    original: "New updates available",
    branded: "Your personalized dashboard just got even smarter ✨"
  },
  {
    type: "Blog Introduction",
    original: "This article will show you how to use our platform.",
    branded: "Whether you're a seasoned professional or just getting started, we believe everyone deserves access to powerful, intuitive tools that make work feel effortless."
  }
];

const BrandStyle = () => {
  const [selectedVoice, setSelectedVoice] = useState(brandVoiceOptions[0]);
  const [brandName, setBrandName] = useState("Your Brand");
  const [brandDescription, setBrandDescription] = useState("");
  const [targetAudience, setTargetAudience] = useState("");
  const [keyValues, setKeyValues] = useState("");
  const [dosList, setDosList] = useState("");
  const [dontsList, setDontsList] = useState("");
  const [activeTab, setActiveTab] = useState("voice");
  const [selectedTones, setSelectedTones] = useState([]);
  const [customKeywords, setCustomKeywords] = useState("");

  const toggleTone = (toneId) => {
    setSelectedTones(prev => 
      prev.includes(toneId) 
        ? prev.filter(id => id !== toneId)
        : [...prev, toneId]
    );
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Brand Style Guide
        </h1>
        <p className="text-muted-foreground">
          Define your brand voice, tone, and visual style guidelines for consistent content.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="voice" className="text-xs sm:text-sm">Brand Voice</TabsTrigger>
          <TabsTrigger value="visual" className="text-xs sm:text-sm">Visual Identity</TabsTrigger>
          <TabsTrigger value="guidelines" className="text-xs sm:text-sm">Guidelines</TabsTrigger>
          <TabsTrigger value="examples" className="text-xs sm:text-sm">Examples</TabsTrigger>
        </TabsList>

        <TabsContent value="voice" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Brand Identity */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  Brand Identity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="brand-name">Brand Name</Label>
                  <Input
                    id="brand-name"
                    value={brandName}
                    onChange={(e) => setBrandName(e.target.value)}
                    placeholder="Enter your brand name"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="brand-description">Brand Description</Label>
                  <Textarea
                    id="brand-description"
                    value={brandDescription}
                    onChange={(e) => setBrandDescription(e.target.value)}
                    placeholder="Describe what your brand does and stands for..."
                    rows={3}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="target-audience">Target Audience</Label>
                  <Textarea
                    id="target-audience"
                    value={targetAudience}
                    onChange={(e) => setTargetAudience(e.target.value)}
                    placeholder="Who is your ideal customer? Demographics, interests, pain points..."
                    rows={3}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="key-values">Key Values</Label>
                  <Input
                    id="key-values"
                    value={keyValues}
                    onChange={(e) => setKeyValues(e.target.value)}
                    placeholder="Innovation, Trust, Quality, Customer-First..."
                    className="mt-1"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Voice Selection */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Volume2 className="w-5 h-5" />
                  Brand Voice
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="grid grid-cols-1 gap-3">
                  {brandVoiceOptions.map((voice) => (
                    <div
                      key={voice.id}
                      className={`p-3 sm:p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedVoice.id === voice.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedVoice(voice)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-sm sm:text-base">{voice.name}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                            {voice.description}
                          </p>
                        </div>
                        {selectedVoice.id === voice.id && (
                          <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0 mt-1"></div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tone Variations */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Tone Variations
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Select tone variations for different types of content
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                {toneVariations.map((tone) => (
                  <div
                    key={tone.id}
                    className={`p-3 sm:p-4 rounded-lg border cursor-pointer transition-all ${
                      selectedTones.includes(tone.id)
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                    onClick={() => toggleTone(tone.id)}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-medium text-sm sm:text-base">{tone.name}</h3>
                      <Switch 
                        checked={selectedTones.includes(tone.id)} 
                        onCheckedChange={() => toggleTone(tone.id)}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground">{tone.usage}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Keywords */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Brand Keywords & Phrases</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="custom-keywords">Preferred Words & Phrases</Label>
                <Textarea
                  id="custom-keywords"
                  value={customKeywords}
                  onChange={(e) => setCustomKeywords(e.target.value)}
                  placeholder="List words and phrases that represent your brand (comma-separated)..."
                  rows={3}
                  className="mt-1"
                />
              </div>
              <Button className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Brand Voice Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visual" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Color Palette */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Color Palette
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {colorPalettes.map((palette) => (
                  <div key={palette.id} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-sm sm:text-base">{palette.name}</h3>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {palette.colors.map((color, index) => (
                        <div key={index} className="text-center flex-shrink-0">
                          <div 
                            className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg border"
                            style={{ backgroundColor: color }}
                          ></div>
                          <p className="text-xs mt-1 font-mono">{color}</p>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">{palette.usage}</p>
                    <Separator />
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Custom Palette
                </Button>
              </CardContent>
            </Card>

            {/* Typography */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Type className="w-5 h-5" />
                  Typography
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {fontPairings.map((font) => (
                  <div
                    key={font.id}
                    className="p-3 sm:p-4 rounded-lg border hover:border-primary/50 cursor-pointer transition-all"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium text-sm sm:text-base">{font.name}</h3>
                        <Badge>{font.style}</Badge>
                      </div>
                      <div className="space-y-1">
                        <div className="text-base sm:text-lg font-semibold" style={{ fontFamily: font.heading }}>
                          Heading Font: {font.heading}
                        </div>
                        <div className="text-sm" style={{ fontFamily: font.body }}>
                          Body Font: {font.body} - Lorem ipsum dolor sit amet consectetur.
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Custom Font Pairing
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Logo & Assets */}
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5" />
                Brand Assets
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="border-2 border-dashed border-border rounded-lg p-4 sm:p-6 text-center hover:border-primary/50 cursor-pointer transition-colors">
                  <Upload className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs sm:text-sm font-medium">Primary Logo</p>
                  <p className="text-xs text-muted-foreground">PNG, SVG</p>
                </div>
                <div className="border-2 border-dashed border-border rounded-lg p-4 sm:p-6 text-center hover:border-primary/50 cursor-pointer transition-colors">
                  <Upload className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs sm:text-sm font-medium">Secondary Logo</p>
                  <p className="text-xs text-muted-foreground">PNG, SVG</p>
                </div>
                <div className="border-2 border-dashed border-border rounded-lg p-4 sm:p-6 text-center hover:border-primary/50 cursor-pointer transition-colors">
                  <Upload className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs sm:text-sm font-medium">Brand Mark</p>
                  <p className="text-xs text-muted-foreground">PNG, SVG</p>
                </div>
                <div className="border-2 border-dashed border-border rounded-lg p-4 sm:p-6 text-center hover:border-primary/50 cursor-pointer transition-colors">
                  <Upload className="w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-xs sm:text-sm font-medium">Favicon</p>
                  <p className="text-xs text-muted-foreground">ICO, PNG</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="guidelines" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Do's */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-green-600">✓ Do's</CardTitle>
                <p className="text-sm text-muted-foreground">
                  What to include in your content
                </p>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={dosList}
                  onChange={(e) => setDosList(e.target.value)}
                  placeholder="• Use inclusive language&#10;• Maintain professional tone&#10;• Include call-to-action&#10;• Use active voice..."
                  rows={8}
                  className="resize-none"
                />
              </CardContent>
            </Card>

            {/* Don'ts */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="text-red-600">✗ Don'ts</CardTitle>
                <p className="text-sm text-muted-foreground">
                  What to avoid in your content
                </p>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={dontsList}
                  onChange={(e) => setDontsList(e.target.value)}
                  placeholder="• Avoid jargon or technical terms&#10;• Don't use passive voice&#10;• Avoid negative language&#10;• Don't make claims without proof..."
                  rows={8}
                  className="resize-none"
                />
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Content Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Sentence Structure</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Preferred structure" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="short">Short & punchy</SelectItem>
                      <SelectItem value="medium">Medium length</SelectItem>
                      <SelectItem value="varied">Varied length</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Emoji Usage</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Emoji preference" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="frequent">Use frequently</SelectItem>
                      <SelectItem value="moderate">Use moderately</SelectItem>
                      <SelectItem value="minimal">Use minimally</SelectItem>
                      <SelectItem value="none">Avoid emojis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Guidelines
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Content Examples
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                See how your brand voice transforms content
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {contentExamples.map((example, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Badge>{example.type}</Badge>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-muted-foreground">Before (Generic)</Label>
                        <div className="mt-1 p-3 bg-muted/50 rounded-lg text-sm">
                          {example.original}
                        </div>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-green-600">After (Brand Voice)</Label>
                        <div className="mt-1 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-sm border border-green-200 dark:border-green-800">
                          {example.branded}
                        </div>
                      </div>
                    </div>
                    {index < contentExamples.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default BrandStyle;