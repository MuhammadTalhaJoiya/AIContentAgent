import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { 
  Search, 
  TrendingUp, 
  Target, 
  CheckCircle,
  AlertCircle,
  XCircle,
  Eye,
  Globe,
  BarChart3,
  Lightbulb,
  FileText,
  Link,
  Hash,
  Users,
  Clock,
  Zap,
  Star,
  ArrowUp,
  ArrowDown
} from "lucide-react";

const seoScore = 78;
const analysisResults = {
  title: {
    score: 85,
    status: "good",
    current: "How to Build Amazing Web Applications with React",
    suggestions: ["Consider including year (2024)", "Add power word like 'Ultimate'"]
  },
  description: {
    score: 72,
    status: "needs-improvement", 
    current: "Learn how to build modern web applications using React with this comprehensive guide.",
    suggestions: ["Expand to 150-160 characters", "Include target keyword earlier", "Add call-to-action"]
  },
  keywords: {
    score: 60,
    status: "poor",
    density: 1.2,
    target: "2-3%",
    suggestions: ["Increase keyword density", "Use more LSI keywords", "Include keywords in headings"]
  },
  readability: {
    score: 88,
    level: "College Level",
    status: "excellent",
    avgSentenceLength: 16.4,
    suggestions: ["Great readability score!", "Consider shorter paragraphs"]
  }
};

const keywordSuggestions = [
  { keyword: "react tutorial", volume: 18100, difficulty: 45, cpc: 1.24, trend: "up" },
  { keyword: "react beginner guide", volume: 8900, difficulty: 32, cpc: 0.89, trend: "stable" },
  { keyword: "learn react 2024", volume: 12400, difficulty: 38, cpc: 1.45, trend: "up" },
  { keyword: "react best practices", volume: 6700, difficulty: 54, cpc: 2.10, trend: "down" },
  { keyword: "react components", volume: 22100, difficulty: 48, cpc: 1.67, trend: "up" },
  { keyword: "react hooks tutorial", volume: 9800, difficulty: 41, cpc: 1.33, trend: "stable" }
];

const competitors = [
  { 
    domain: "developer.mozilla.org",
    title: "Getting Started with React - MDN",
    position: 1,
    traffic: 45200,
    backlinks: 1247
  },
  {
    domain: "reactjs.org", 
    title: "React - A JavaScript library for building user interfaces",
    position: 2,
    traffic: 38900,
    backlinks: 2156
  },
  {
    domain: "freecodecamp.org",
    title: "Learn React - Full Course for Beginners",
    position: 3,
    traffic: 32100,
    backlinks: 892
  }
];

const contentSuggestions = [
  {
    type: "heading",
    suggestion: "Add H2 heading: 'Why Choose React for Modern Development?'",
    impact: "high",
    reason: "Missing important secondary heading"
  },
  {
    type: "internal-link",
    suggestion: "Add internal link to your JavaScript basics guide",
    impact: "medium", 
    reason: "Improve site navigation and SEO"
  },
  {
    type: "image-alt",
    suggestion: "Add alt text to 3 images",
    impact: "medium",
    reason: "Improve accessibility and image SEO"
  },
  {
    type: "meta-schema",
    suggestion: "Add FAQ schema markup",
    impact: "high",
    reason: "Increase chances of featured snippets"
  }
];

const SEOOptimizer = () => {
  const [contentUrl, setContentUrl] = useState("");
  const [targetKeyword, setTargetKeyword] = useState("");
  const [contentText, setContentText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState("analyze");

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "excellent":
      case "good":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "needs-improvement":
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
      case "poor":
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          SEO Optimizer
        </h1>
        <p className="text-muted-foreground">
          Analyze and optimize your content for better search engine rankings.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="analyze">Content Analysis</TabsTrigger>
          <TabsTrigger value="keywords">Keyword Research</TabsTrigger>
          <TabsTrigger value="competitors">Competitor Analysis</TabsTrigger>
          <TabsTrigger value="suggestions">Optimization Tips</TabsTrigger>
        </TabsList>

        <TabsContent value="analyze" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Input Section */}
            <Card className="lg:col-span-1 border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Content Input
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="content-url">URL to Analyze (optional)</Label>
                  <Input
                    id="content-url"
                    value={contentUrl}
                    onChange={(e) => setContentUrl(e.target.value)}
                    placeholder="https://example.com/your-content"
                  />
                </div>

                <div>
                  <Label htmlFor="target-keyword">Target Keyword</Label>
                  <Input
                    id="target-keyword"
                    value={targetKeyword}
                    onChange={(e) => setTargetKeyword(e.target.value)}
                    placeholder="react tutorial"
                  />
                </div>

                <div>
                  <Label htmlFor="content-text">Content Text</Label>
                  <Textarea
                    id="content-text"
                    value={contentText}
                    onChange={(e) => setContentText(e.target.value)}
                    placeholder="Paste your content here for analysis..."
                    rows={8}
                  />
                </div>

                <Button 
                  onClick={handleAnalyze} 
                  className="w-full"
                  disabled={isAnalyzing || (!contentText && !contentUrl)}
                >
                  {isAnalyzing ? (
                    <>
                      <Search className="w-4 h-4 mr-2 animate-spin" />
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 mr-2" />
                      Analyze Content
                    </>
                  )}
                </Button>

                {isAnalyzing && (
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">Analyzing SEO factors...</div>
                    <Progress value={67} className="h-2" />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Results Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* SEO Score Overview */}
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <BarChart3 className="w-5 h-5" />
                      SEO Score Overview
                    </span>
                    <div className={`text-2xl font-bold ${getScoreColor(seoScore)}`}>
                      {seoScore}/100
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Overall SEO Score</span>
                        <span className="font-medium">{seoScore}%</span>
                      </div>
                      <Progress value={seoScore} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">Good</div>
                        <div className="text-xs text-muted-foreground">Overall Rating</div>
                      </div>
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="text-2xl font-bold">4/7</div>
                        <div className="text-xs text-muted-foreground">Factors Optimized</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Detailed Analysis */}
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Detailed Analysis</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Title Analysis */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(analysisResults.title.status)}
                        <span className="font-medium">Title Tag</span>
                      </div>
                      <div className={`font-bold ${getScoreColor(analysisResults.title.score)}`}>
                        {analysisResults.title.score}/100
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg text-sm">
                      {analysisResults.title.current}
                    </div>
                    <div className="space-y-1">
                      {analysisResults.title.suggestions.map((suggestion, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                          <Lightbulb className="w-3 h-3 mt-0.5 text-yellow-500" />
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Meta Description */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(analysisResults.description.status)}
                        <span className="font-medium">Meta Description</span>
                      </div>
                      <div className={`font-bold ${getScoreColor(analysisResults.description.score)}`}>
                        {analysisResults.description.score}/100
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg text-sm">
                      {analysisResults.description.current}
                    </div>
                    <div className="space-y-1">
                      {analysisResults.description.suggestions.map((suggestion, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                          <Lightbulb className="w-3 h-3 mt-0.5 text-yellow-500" />
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Keywords */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(analysisResults.keywords.status)}
                        <span className="font-medium">Keyword Optimization</span>
                      </div>
                      <div className={`font-bold ${getScoreColor(analysisResults.keywords.score)}`}>
                        {analysisResults.keywords.score}/100
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span>Density: <strong>{analysisResults.keywords.density}%</strong></span>
                      <span>Target: <strong>{analysisResults.keywords.target}</strong></span>
                    </div>
                    <div className="space-y-1">
                      {analysisResults.keywords.suggestions.map((suggestion, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                          <Lightbulb className="w-3 h-3 mt-0.5 text-yellow-500" />
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  {/* Readability */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {getStatusIcon(analysisResults.readability.status)}
                        <span className="font-medium">Readability</span>
                      </div>
                      <div className={`font-bold ${getScoreColor(analysisResults.readability.score)}`}>
                        {analysisResults.readability.score}/100
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <span>Level: <strong>{analysisResults.readability.level}</strong></span>
                      <span>Avg Sentence: <strong>{analysisResults.readability.avgSentenceLength} words</strong></span>
                    </div>
                    <div className="space-y-1">
                      {analysisResults.readability.suggestions.map((suggestion, index) => (
                        <div key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                          <Lightbulb className="w-3 h-3 mt-0.5 text-yellow-500" />
                          {suggestion}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="keywords" className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Hash className="w-5 h-5" />
                Keyword Research
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Discover high-potential keywords for your content
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Input 
                    placeholder="Enter seed keyword..."
                    className="flex-1"
                  />
                  <Button>
                    <Search className="w-4 h-4 mr-2" />
                    Research
                  </Button>
                </div>

                <div className="space-y-3">
                  {keywordSuggestions.map((keyword, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="font-medium">{keyword.keyword}</div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <span className="flex items-center gap-1">
                            <Users className="w-3 h-3" />
                            {keyword.volume.toLocaleString()}/mo
                          </span>
                          <span className="flex items-center gap-1">
                            <Target className="w-3 h-3" />
                            Difficulty: {keyword.difficulty}%
                          </span>
                          <span className="flex items-center gap-1">
                            <span>CPC: ${keyword.cpc}</span>
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          {keyword.trend === "up" && <ArrowUp className="w-4 h-4 text-green-600" />}
                          {keyword.trend === "down" && <ArrowDown className="w-4 h-4 text-red-600" />}
                          {keyword.trend === "stable" && <span className="w-4 h-4 text-yellow-600">→</span>}
                        </div>
                        <Button variant="outline" size="sm">
                          Add to Content
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors" className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Competitor Analysis
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                See how your content compares to top-ranking competitors
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {competitors.map((competitor, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">#{competitor.position}</Badge>
                          <span className="font-medium">{competitor.domain}</span>
                        </div>
                        <div className="text-sm mb-2">{competitor.title}</div>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Eye className="w-3 h-3" />
                            {competitor.traffic.toLocaleString()} monthly visits
                          </span>
                          <span className="flex items-center gap-1">
                            <Link className="w-3 h-3" />
                            {competitor.backlinks} backlinks
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Analyze
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="suggestions" className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Optimization Suggestions
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Actionable recommendations to improve your SEO
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contentSuggestions.map((suggestion, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge 
                            variant={suggestion.impact === "high" ? "default" : suggestion.impact === "medium" ? "secondary" : "outline"}
                          >
                            {suggestion.impact} impact
                          </Badge>
                          <span className="text-xs text-muted-foreground capitalize">{suggestion.type}</span>
                        </div>
                        <div className="font-medium mb-1">{suggestion.suggestion}</div>
                        <div className="text-sm text-muted-foreground">{suggestion.reason}</div>
                      </div>
                      <Button variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
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

export default SEOOptimizer;