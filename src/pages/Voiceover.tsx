import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Mic, 
  Play, 
  Pause, 
  Square, 
  Volume2, 
  Download, 
  Upload,
  Settings,
  Globe,
  Clock,
  FileAudio,
  Waveform,
  User,
  Sparkles,
  RotateCcw,
  Share,
  Copy,
  Edit,
  Trash2,
  Plus,
  Filter,
  Search,
  Headphones,
  Microphone,
  Radio,
  Users,
  Star,
  Heart,
  MoreHorizontal,
  Languages,
  Zap
} from "lucide-react";

// Mock data for voiceover features
const voiceProfiles = [
  {
    id: 1,
    name: "Sarah Professional",
    gender: "female",
    age: "adult",
    accent: "American",
    language: "English (US)",
    style: "professional",
    description: "Clear, authoritative voice perfect for business content and tutorials",
    sampleUrl: "/samples/sarah-professional.mp3",
    rating: 4.9,
    usageCount: 1250,
    tags: ["business", "tutorial", "professional"],
    premium: false
  },
  {
    id: 2,
    name: "Marcus Storyteller",
    gender: "male",
    age: "adult",
    accent: "British",
    language: "English (UK)",
    style: "narrative",
    description: "Warm, engaging voice ideal for storytelling and audiobooks",
    sampleUrl: "/samples/marcus-storyteller.mp3",
    rating: 4.8,
    usageCount: 980,
    tags: ["storytelling", "audiobook", "narrative"],
    premium: true
  },
  {
    id: 3,
    name: "Emma Friendly",
    gender: "female",
    age: "young-adult",
    accent: "Canadian",
    language: "English (CA)",
    style: "conversational",
    description: "Friendly, approachable voice great for social media and casual content",
    sampleUrl: "/samples/emma-friendly.mp3",
    rating: 4.7,
    usageCount: 1500,
    tags: ["social media", "casual", "friendly"],
    premium: false
  },
  {
    id: 4,
    name: "David Technical",
    gender: "male",
    age: "adult",
    accent: "Australian",
    language: "English (AU)",
    style: "technical",
    description: "Clear, precise voice perfect for technical documentation and training",
    sampleUrl: "/samples/david-technical.mp3",
    rating: 4.6,
    usageCount: 750,
    tags: ["technical", "training", "documentation"],
    premium: true
  },
  {
    id: 5,
    name: "Sofia Español",
    gender: "female",
    age: "adult",
    accent: "Neutral",
    language: "Spanish (ES)",
    style: "neutral",
    description: "Natural Spanish voice for international content",
    sampleUrl: "/samples/sofia-espanol.mp3",
    rating: 4.8,
    usageCount: 650,
    tags: ["spanish", "international", "neutral"],
    premium: true
  },
  {
    id: 6,
    name: "Jean Français",
    gender: "male",
    age: "adult",
    accent: "Parisian",
    language: "French (FR)",
    style: "elegant",
    description: "Sophisticated French voice for luxury and cultural content",
    sampleUrl: "/samples/jean-francais.mp3",
    rating: 4.9,
    usageCount: 420,
    tags: ["french", "luxury", "cultural"],
    premium: true
  }
];

const recentProjects = [
  {
    id: 1,
    title: "Product Demo Script",
    content: "Welcome to our innovative AI-powered content creation platform...",
    voice: voiceProfiles[0],
    duration: "2:45",
    status: "completed",
    createdAt: "2024-02-15",
    size: "3.2 MB",
    format: "MP3",
    downloadCount: 12
  },
  {
    id: 2,
    title: "Podcast Introduction",
    content: "Hello and welcome to our weekly podcast about digital marketing trends...",
    voice: voiceProfiles[1],
    duration: "1:20",
    status: "processing",
    createdAt: "2024-02-14",
    size: "1.8 MB",
    format: "WAV",
    downloadCount: 0
  },
  {
    id: 3,
    title: "Social Media Narration",
    content: "Ready to transform your content creation process? Here's how AI can help...",
    voice: voiceProfiles[2],
    duration: "0:45",
    status: "completed",
    createdAt: "2024-02-13",
    size: "1.1 MB",
    format: "MP3",
    downloadCount: 8
  },
  {
    id: 4,
    title: "Tutorial Voice Track",
    content: "In this tutorial, we'll walk through the step-by-step process of setting up...",
    voice: voiceProfiles[3],
    duration: "5:12",
    status: "completed",
    createdAt: "2024-02-12",
    size: "6.8 MB",
    format: "MP3",
    downloadCount: 25
  }
];

const languages = [
  { code: "en-US", name: "English (US)", flag: "🇺🇸" },
  { code: "en-UK", name: "English (UK)", flag: "🇬🇧" },
  { code: "en-CA", name: "English (Canada)", flag: "🇨🇦" },
  { code: "en-AU", name: "English (Australia)", flag: "🇦🇺" },
  { code: "es-ES", name: "Spanish (Spain)", flag: "🇪🇸" },
  { code: "fr-FR", name: "French (France)", flag: "🇫🇷" },
  { code: "de-DE", name: "German (Germany)", flag: "🇩🇪" },
  { code: "it-IT", name: "Italian (Italy)", flag: "🇮🇹" },
  { code: "pt-BR", name: "Portuguese (Brazil)", flag: "🇧🇷" },
  { code: "ja-JP", name: "Japanese (Japan)", flag: "🇯🇵" },
  { code: "ko-KR", name: "Korean (Korea)", flag: "🇰🇷" },
  { code: "zh-CN", name: "Chinese (Simplified)", flag: "🇨🇳" }
];

const Voiceover = () => {
  const [activeTab, setActiveTab] = useState("generate");
  const [script, setScript] = useState("");
  const [selectedVoice, setSelectedVoice] = useState(voiceProfiles[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [speed, setSpeed] = useState([1.0]);
  const [pitch, setPitch] = useState([0]);
  const [volume, setVolume] = useState([80]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [genderFilter, setGenderFilter] = useState("all");
  const [languageFilter, setLanguageFilter] = useState("all");
  const [styleFilter, setStyleFilter] = useState("all");
  const [addBreaks, setAddBreaks] = useState(true);
  const [emphasizeKeywords, setEmphasizeKeywords] = useState(false);
  const [autoCapitalize, setAutoCapitalize] = useState(true);

  const filteredVoices = voiceProfiles.filter(voice => {
    const matchesSearch = voice.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         voice.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGender = genderFilter === "all" || voice.gender === genderFilter;
    const matchesLanguage = languageFilter === "all" || voice.language.includes(languageFilter);
    const matchesStyle = styleFilter === "all" || voice.style === styleFilter;
    return matchesSearch && matchesGender && matchesLanguage && matchesStyle;
  });

  const handleGenerate = async () => {
    if (!script.trim()) return;
    
    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Simulate generation progress
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const handlePlaySample = (voiceId) => {
    if (currentlyPlaying === voiceId) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(voiceId);
      // Simulate playing for 3 seconds
      setTimeout(() => setCurrentlyPlaying(null), 3000);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 border-green-200";
      case "processing":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "failed":
        return "bg-red-100 text-red-800 border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const estimatedDuration = script ? Math.ceil(script.split(' ').length / 150 * 60) : 0;
  const estimatedCost = estimatedDuration * 0.02;

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          AI Voiceover Studio
        </h1>
        <p className="text-muted-foreground">
          Generate natural-sounding voiceovers for your videos, podcasts, and content using AI voices.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <TabsList className="grid w-full sm:w-auto grid-cols-3 sm:grid-cols-3">
            <TabsTrigger value="generate">Generate</TabsTrigger>
            <TabsTrigger value="voices">Voice Library</TabsTrigger>
            <TabsTrigger value="projects">My Projects</TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Upload className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Upload Script</span>
              <span className="sm:hidden">Upload</span>
            </Button>
            <Button size="sm">
              <Plus className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">New Project</span>
              <span className="sm:hidden">New</span>
            </Button>
          </div>
        </div>

        <TabsContent value="generate" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Script Input & Settings */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileAudio className="w-5 h-5" />
                    Script Content
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="script">Your Script</Label>
                    <Textarea
                      id="script"
                      placeholder="Enter or paste your script here. The AI will generate natural-sounding voiceover based on your text..."
                      value={script}
                      onChange={(e) => setScript(e.target.value)}
                      rows={8}
                      className="resize-none"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-2">
                      <span>{script.split(' ').length} words</span>
                      <span>Estimated duration: {Math.floor(estimatedDuration / 60)}:{(estimatedDuration % 60).toString().padStart(2, '0')}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Add Natural Breaks</Label>
                        <Switch checked={addBreaks} onCheckedChange={setAddBreaks} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Emphasize Keywords</Label>
                        <Switch checked={emphasizeKeywords} onCheckedChange={setEmphasizeKeywords} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label>Auto Capitalize</Label>
                        <Switch checked={autoCapitalize} onCheckedChange={setAutoCapitalize} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Settings className="w-5 h-5" />
                    Voice Settings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Language</Label>
                      <Select value={selectedLanguage.code} onValueChange={(value) => {
                        const lang = languages.find(l => l.code === value);
                        setSelectedLanguage(lang);
                      }}>
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {languages.map((lang) => (
                            <SelectItem key={lang.code} value={lang.code}>
                              <div className="flex items-center gap-2">
                                <span>{lang.flag}</span>
                                <span>{lang.name}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label>Output Format</Label>
                      <Select defaultValue="mp3">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mp3">MP3 (Compressed)</SelectItem>
                          <SelectItem value="wav">WAV (High Quality)</SelectItem>
                          <SelectItem value="ogg">OGG (Open Source)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <Label>Speaking Speed: {speed[0]}x</Label>
                      <Slider
                        value={speed}
                        onValueChange={setSpeed}
                        max={2}
                        min={0.5}
                        step={0.1}
                        className="mt-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Slow (0.5x)</span>
                        <span>Normal (1.0x)</span>
                        <span>Fast (2.0x)</span>
                      </div>
                    </div>

                    <div>
                      <Label>Pitch Adjustment: {pitch[0] > 0 ? '+' : ''}{pitch[0]}</Label>
                      <Slider
                        value={pitch}
                        onValueChange={setPitch}
                        max={10}
                        min={-10}
                        step={1}
                        className="mt-2"
                      />
                      <div className="flex justify-between text-xs text-muted-foreground mt-1">
                        <span>Lower (-10)</span>
                        <span>Natural (0)</span>
                        <span>Higher (+10)</span>
                      </div>
                    </div>

                    <div>
                      <Label>Volume: {volume[0]}%</Label>
                      <Slider
                        value={volume}
                        onValueChange={setVolume}
                        max={100}
                        min={0}
                        step={5}
                        className="mt-2"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Voice Selection & Generation */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="w-5 h-5" />
                    Selected Voice
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarFallback>
                          {selectedVoice.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold">{selectedVoice.name}</h3>
                        <p className="text-sm text-muted-foreground">{selectedVoice.language}</p>
                      </div>
                      {selectedVoice.premium && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          <Star className="w-3 h-3 mr-1" />
                          Pro
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground">
                      {selectedVoice.description}
                    </p>

                    <div className="flex items-center gap-2 flex-wrap">
                      {selectedVoice.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {selectedVoice.rating}
                      </span>
                      <span className="text-muted-foreground">
                        {selectedVoice.usageCount.toLocaleString()} uses
                      </span>
                    </div>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => handlePlaySample(selectedVoice.id)}
                    >
                      {currentlyPlaying === selectedVoice.id ? (
                        <>
                          <Pause className="w-4 h-4 mr-2" />
                          Playing Sample
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-2" />
                          Play Sample
                        </>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full"
                      onClick={() => setActiveTab("voices")}
                    >
                      <Users className="w-4 h-4 mr-2" />
                      Browse All Voices
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5" />
                    Generation Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Words:</span>
                      <span>{script.split(' ').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Duration:</span>
                      <span>{Math.floor(estimatedDuration / 60)}:{(estimatedDuration % 60).toString().padStart(2, '0')}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>File Size (~):</span>
                      <span>{(estimatedDuration * 0.1).toFixed(1)} MB</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated Cost:</span>
                      <span>${estimatedCost.toFixed(2)}</span>
                    </div>
                  </div>

                  {isGenerating ? (
                    <div className="space-y-3">
                      <div className="text-sm text-center">Generating voiceover...</div>
                      <Progress value={generationProgress} className="h-2" />
                      <div className="text-xs text-center text-muted-foreground">
                        {generationProgress}% complete
                      </div>
                    </div>
                  ) : (
                    <Button 
                      onClick={handleGenerate} 
                      className="w-full" 
                      disabled={!script.trim()}
                    >
                      <Mic className="w-4 h-4 mr-2" />
                      Generate Voiceover
                    </Button>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="voices" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search voices by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap sm:flex-nowrap">
              <Select value={genderFilter} onValueChange={setGenderFilter}>
                <SelectTrigger className="w-full sm:w-[120px]">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Genders</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="male">Male</SelectItem>
                </SelectContent>
              </Select>

              <Select value={languageFilter} onValueChange={setLanguageFilter}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Languages</SelectItem>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                </SelectContent>
              </Select>

              <Select value={styleFilter} onValueChange={setStyleFilter}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Styles</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="conversational">Conversational</SelectItem>
                  <SelectItem value="narrative">Narrative</SelectItem>
                  <SelectItem value="technical">Technical</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVoices.map((voice) => (
              <Card 
                key={voice.id} 
                className={`border-0 shadow-card hover:shadow-card-hover transition-all cursor-pointer ${
                  selectedVoice.id === voice.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => setSelectedVoice(voice)}
              >
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-12 h-12">
                          <AvatarFallback>
                            {voice.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold">{voice.name}</h3>
                          <p className="text-sm text-muted-foreground">{voice.language}</p>
                        </div>
                      </div>
                      {voice.premium && (
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                          <Star className="w-3 h-3 mr-1" />
                          Pro
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {voice.description}
                    </p>

                    <div className="flex items-center gap-2 flex-wrap">
                      {voice.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                      {voice.tags.length > 2 && (
                        <span className="text-xs text-muted-foreground">
                          +{voice.tags.length - 2} more
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500" />
                          {voice.rating}
                        </span>
                        <span>{voice.usageCount.toLocaleString()} uses</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.stopPropagation();
                          handlePlaySample(voice.id);
                        }}
                      >
                        {currentlyPlaying === voice.id ? (
                          <Pause className="w-3 h-3" />
                        ) : (
                          <Play className="w-3 h-3" />
                        )}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            <Card className="border-0 shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <FileAudio className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">24</p>
                    <p className="text-sm text-muted-foreground">Total Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">2.5h</p>
                    <p className="text-sm text-muted-foreground">Total Duration</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Download className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">156</p>
                    <p className="text-sm text-muted-foreground">Downloads</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">98%</p>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            {recentProjects.map((project) => (
              <Card key={project.id} className="border-0 shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center">
                        <FileAudio className="w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold truncate">{project.title}</h3>
                        <p className="text-sm text-muted-foreground truncate">
                          {project.content.substring(0, 80)}...
                        </p>
                        <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                          <span>{project.voice.name}</span>
                          <span>{project.duration}</span>
                          <span>{project.size}</span>
                          <span>{project.createdAt}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getStatusBadge(project.status)}`}>
                        {project.status}
                      </span>
                      <div className="flex gap-1">
                        {project.status === "completed" && (
                          <>
                            <Button variant="ghost" size="sm">
                              <Play className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                          </>
                        )}
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
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

export default Voiceover;