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
import { Progress } from "@/components/ui/progress";
import { 
  Image as ImageIcon, 
  Video, 
  Camera, 
  Film, 
  Palette, 
  Wand2, 
  Download, 
  Upload, 
  Play, 
  Pause, 
  RefreshCw,
  Settings,
  Sparkles,
  Eye,
  Heart,
  Share,
  Copy,
  Edit,
  Trash2,
  Grid,
  List,
  Clock,
  Zap
} from "lucide-react";

const imageStyles = [
  { id: "photorealistic", name: "Photorealistic", description: "High-quality realistic images" },
  { id: "digital-art", name: "Digital Art", description: "Stylized digital artwork" },
  { id: "illustration", name: "Illustration", description: "Hand-drawn style illustrations" },
  { id: "watercolor", name: "Watercolor", description: "Soft watercolor paintings" },
  { id: "oil-painting", name: "Oil Painting", description: "Classic oil painting style" },
  { id: "cartoon", name: "Cartoon", description: "Animated cartoon style" },
  { id: "minimalist", name: "Minimalist", description: "Clean, simple designs" },
  { id: "abstract", name: "Abstract", description: "Abstract artistic expression" }
];

const videoTypes = [
  { id: "explainer", name: "Explainer Video", duration: "60-90s", description: "Educational content videos" },
  { id: "social", name: "Social Media", duration: "15-30s", description: "Short social media videos" },
  { id: "product", name: "Product Demo", duration: "2-3min", description: "Product showcase videos" },
  { id: "testimonial", name: "Testimonial", duration: "30-60s", description: "Customer testimonial videos" },
  { id: "promo", name: "Promotional", duration: "30-45s", description: "Marketing promotional videos" },
  { id: "tutorial", name: "Tutorial", duration: "3-5min", description: "How-to tutorial videos" }
];

const generatedImages = [
  {
    id: 1,
    url: "/api/placeholder/300/200",
    prompt: "A futuristic cityscape at sunset with flying cars",
    style: "digital-art",
    likes: 24,
    downloads: 12,
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    url: "/api/placeholder/300/200",
    prompt: "Professional headshot of a business woman in modern office",
    style: "photorealistic",
    likes: 18,
    downloads: 8,
    createdAt: "2024-01-14"
  },
  {
    id: 3,
    url: "/api/placeholder/300/200",
    prompt: "Colorful abstract geometric shapes floating in space",
    style: "abstract",
    likes: 31,
    downloads: 15,
    createdAt: "2024-01-13"
  },
  {
    id: 4,
    url: "/api/placeholder/300/200",
    prompt: "Cozy coffee shop interior with warm lighting",
    style: "illustration",
    likes: 27,
    downloads: 11,
    createdAt: "2024-01-12"
  }
];

const videoProjects = [
  {
    id: 1,
    title: "Product Launch Video",
    type: "product",
    thumbnail: "/api/placeholder/200/150",
    duration: "2:34",
    status: "completed",
    createdAt: "2024-01-15"
  },
  {
    id: 2,
    title: "Social Media Promo",
    type: "social",
    thumbnail: "/api/placeholder/200/150",
    duration: "0:30",
    status: "rendering",
    createdAt: "2024-01-14"
  },
  {
    id: 3,
    title: "Tutorial: Getting Started",
    type: "tutorial",
    thumbnail: "/api/placeholder/200/150",
    duration: "4:12",
    status: "draft",
    createdAt: "2024-01-13"
  }
];

const ImageVideo = () => {
  const [activeTab, setActiveTab] = useState("image-generator");
  const [imagePrompt, setImagePrompt] = useState("");
  const [selectedStyle, setSelectedStyle] = useState(imageStyles[0]);
  const [aspectRatio, setAspectRatio] = useState("16:9");
  const [quality, setQuality] = useState([80]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [videoScript, setVideoScript] = useState("");
  const [selectedVideoType, setSelectedVideoType] = useState(videoTypes[0]);

  const handleGenerateImage = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  const handleGenerateVideo = () => {
    console.log("Generating video...");
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Image & Video Studio
        </h1>
        <p className="text-muted-foreground">
          Create stunning visuals and engaging videos with AI-powered tools.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4">
          <TabsTrigger value="image-generator" className="text-xs sm:text-sm">Image Generator</TabsTrigger>
          <TabsTrigger value="video-creator" className="text-xs sm:text-sm">Video Creator</TabsTrigger>
          <TabsTrigger value="gallery" className="text-xs sm:text-sm">My Gallery</TabsTrigger>
          <TabsTrigger value="templates" className="text-xs sm:text-sm">Templates</TabsTrigger>
        </TabsList>

        <TabsContent value="image-generator" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Image Generation Controls */}
            <Card className="lg:col-span-4 border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Wand2 className="w-5 h-5" />
                  Image Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label htmlFor="image-prompt">Describe your image</Label>
                  <Textarea
                    id="image-prompt"
                    value={imagePrompt}
                    onChange={(e) => setImagePrompt(e.target.value)}
                    placeholder="A serene mountain landscape with a crystal clear lake reflecting the sunset sky..."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label>Art Style</Label>
                  <Select value={selectedStyle.id} onValueChange={(value) => setSelectedStyle(imageStyles.find(s => s.id === value))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {imageStyles.map((style) => (
                        <SelectItem key={style.id} value={style.id}>
                          <div>
                            <div className="font-medium">{style.name}</div>
                            <div className="text-xs text-muted-foreground">{style.description}</div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Aspect Ratio</Label>
                  <Select value={aspectRatio} onValueChange={setAspectRatio}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="16:9">16:9 (Landscape)</SelectItem>
                      <SelectItem value="1:1">1:1 (Square)</SelectItem>
                      <SelectItem value="9:16">9:16 (Portrait)</SelectItem>
                      <SelectItem value="4:3">4:3 (Classic)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Quality: {quality[0]}%</Label>
                  <Slider
                    value={quality}
                    onValueChange={setQuality}
                    max={100}
                    min={50}
                    step={10}
                    className="mt-2"
                  />
                </div>

                <Button 
                  onClick={handleGenerateImage} 
                  className="w-full"
                  disabled={!imagePrompt || isGenerating}
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Generate Image
                    </>
                  )}
                </Button>

                {isGenerating && (
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Creating your image...</div>
                    <Progress value={45} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Generated Image Preview */}
            <div className="lg:col-span-8">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Eye className="w-5 h-5" />
                    Generated Image
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {isGenerating ? (
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <RefreshCw className="w-8 h-8 mx-auto mb-2 animate-spin text-muted-foreground" />
                        <p className="text-muted-foreground">Generating your image...</p>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center max-w-md mx-auto px-4">
                        <ImageIcon className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-muted-foreground" />
                        <h3 className="font-medium mb-2 text-sm sm:text-base">Ready to create?</h3>
                        <p className="text-muted-foreground text-xs sm:text-sm">
                          Enter a description and click generate to create amazing images with AI.
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="video-creator" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Video Creation Controls */}
            <Card className="lg:col-span-4 border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Film className="w-5 h-5" />
                  Video Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <Label>Video Type</Label>
                  <Select value={selectedVideoType.id} onValueChange={(value) => setSelectedVideoType(videoTypes.find(t => t.id === value))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {videoTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          <div>
                            <div className="font-medium">{type.name}</div>
                            <div className="text-xs text-muted-foreground">
                              {type.duration} • {type.description}
                            </div>
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="video-script">Video Script</Label>
                  <Textarea
                    id="video-script"
                    value={videoScript}
                    onChange={(e) => setVideoScript(e.target.value)}
                    placeholder="Write your video script here. Include scene descriptions, narration, and any specific visual elements you want to include..."
                    rows={6}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label>Video Quality</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select quality" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="720p">720p HD</SelectItem>
                      <SelectItem value="1080p">1080p Full HD</SelectItem>
                      <SelectItem value="4k">4K Ultra HD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Background Music</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Choose music" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="upbeat">Upbeat & Energetic</SelectItem>
                      <SelectItem value="calm">Calm & Peaceful</SelectItem>
                      <SelectItem value="corporate">Corporate & Professional</SelectItem>
                      <SelectItem value="none">No Music</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={handleGenerateVideo} className="w-full">
                  <Video className="w-4 h-4 mr-2" />
                  Create Video
                </Button>
              </CardContent>
            </Card>

            {/* Video Preview */}
            <div className="lg:col-span-8">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    Video Preview
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                    <div className="text-center text-white max-w-md mx-auto px-4">
                      <Video className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4" />
                      <h3 className="font-medium mb-2 text-sm sm:text-base">Video Preview</h3>
                      <p className="text-gray-300 text-xs sm:text-sm mb-4">
                        Your generated video will appear here
                      </p>
                      <Button size="sm" className="bg-white/10 hover:bg-white/20 border-white/20">
                        <Play className="w-4 h-4 mr-2" />
                        Play Preview
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="gallery" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">My Gallery</h2>
              <p className="text-muted-foreground text-sm">Your generated images and videos</p>
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="flex-1 sm:flex-none"
              >
                <Grid className="w-4 h-4 mr-2 sm:mr-0 sm:only:mr-0" />
                <span className="sm:hidden">Grid</span>
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="flex-1 sm:flex-none"
              >
                <List className="w-4 h-4 mr-2 sm:mr-0 sm:only:mr-0" />
                <span className="sm:hidden">List</span>
              </Button>
            </div>
          </div>

          <Tabs defaultValue="images" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="images" className="text-xs sm:text-sm">Images ({generatedImages.length})</TabsTrigger>
              <TabsTrigger value="videos" className="text-xs sm:text-sm">Videos ({videoProjects.length})</TabsTrigger>
            </TabsList>

            <TabsContent value="images">
              <div className={viewMode === "grid" 
                ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4" 
                : "space-y-4"
              }>
                {generatedImages.map((image) => (
                  <Card key={image.id} className="border-0 shadow-card overflow-hidden">
                    <div className="aspect-video bg-muted">
                      <img
                        src={image.url}
                        alt={image.prompt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-3 sm:p-4">
                      <div className="space-y-3">
                        <p className="text-xs sm:text-sm truncate" title={image.prompt}>{image.prompt}</p>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <Badge>{image.style}</Badge>
                          <span className="text-xs">{image.createdAt}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                            <span className="flex items-center gap-1">
                              <Heart className="w-3 h-3" />
                              {image.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <Download className="w-3 h-3" />
                              {image.downloads}
                            </span>
                          </div>
                          <div className="flex gap-1">
                            <Button size="sm" className="h-6 w-6 p-0">
                              <Download className="w-3 h-3" />
                            </Button>
                            <Button size="sm" className="h-6 w-6 p-0">
                              <Share className="w-3 h-3" />
                            </Button>
                            <Button size="sm" className="h-6 w-6 p-0">
                              <Trash2 className="w-3 h-3" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
                {videoProjects.map((video) => (
                  <Card key={video.id} className="border-0 shadow-card overflow-hidden">
                    <div className="relative aspect-video bg-muted">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <Button size="sm" className="bg-white/90 hover:bg-white text-black">
                          <Play className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="absolute bottom-2 right-2">
                        <Badge className="bg-black/80 text-white text-xs">
                          {video.duration}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-3 sm:p-4">
                      <div className="space-y-3">
                        <h3 className="font-medium text-sm truncate" title={video.title}>{video.title}</h3>
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <Badge>{video.type}</Badge>
                          <span>{video.createdAt}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge>
                            {video.status}
                          </Badge>
                          <div className="flex gap-1">
                            <Button size="sm" className="h-6 w-6 p-0">
                              <Download className="w-3 h-3" />
                            </Button>
                            <Button size="sm" className="h-6 w-6 p-0">
                              <Edit className="w-3 h-3" />
                            </Button>
                            <Button size="sm" className="h-6 w-6 p-0">
                              <Trash2 className="w-3 h-3" />
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
        </TabsContent>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
            {imageStyles.map((style) => (
              <Card key={style.id} className="border-0 shadow-card overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center">
                    <Palette className="w-8 h-8 mx-auto mb-2" />
                    <p className="font-medium text-sm">{style.name}</p>
                  </div>
                </div>
                <CardContent className="p-3 sm:p-4">
                  <div className="space-y-2">
                    <h3 className="font-medium text-sm">{style.name}</h3>
                    <p className="text-xs text-muted-foreground">{style.description}</p>
                    <Button className="w-full" size="sm">
                      Use Style
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

export default ImageVideo;