
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
import { 
  Wand2, 
  Copy, 
  Save, 
  Play, 
  Trash2, 
  Plus, 
  Search,
  BookOpen,
  Zap,
  MessageSquare,
  FileText,
  Image,
  Video
} from "lucide-react";

const promptTemplates = [
  {
    id: 1,
    name: "Blog Post Generator",
    category: "Content",
    description: "Create engaging blog posts on any topic",
    prompt: "Write a comprehensive blog post about {topic}. Include an engaging introduction, main points with examples, and a compelling conclusion. Tone: {tone}. Target audience: {audience}.",
    variables: ["topic", "tone", "audience"],
    icon: FileText,
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "Social Media Caption",
    category: "Social",
    description: "Generate compelling social media captions",
    prompt: "Create an engaging social media caption for {platform} about {content}. Include relevant hashtags and a call-to-action. Style: {style}.",
    variables: ["platform", "content", "style"],
    icon: MessageSquare,
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "Product Description",
    category: "E-commerce",
    description: "Write persuasive product descriptions",
    prompt: "Write a compelling product description for {product}. Highlight key features: {features}. Target audience: {audience}. Focus on benefits and create urgency.",
    variables: ["product", "features", "audience"],
    icon: Zap,
    color: "bg-purple-500"
  },
  {
    id: 4,
    name: "Video Script",
    category: "Video",
    description: "Create engaging video scripts",
    prompt: "Write a {duration}-minute video script about {topic}. Include hook, main content, and call-to-action. Style: {style}. Target: {audience}.",
    variables: ["duration", "topic", "style", "audience"],
    icon: Video,
    color: "bg-orange-500"
  }
];

const savedPrompts = [
  {
    id: 1,
    name: "Tech Blog Template",
    category: "Content",
    lastUsed: "2 hours ago",
    uses: 23
  },
  {
    id: 2,
    name: "Instagram Reel Script",
    category: "Social",
    lastUsed: "1 day ago",
    uses: 15
  },
  {
    id: 3,
    name: "Email Newsletter",
    category: "Email",
    lastUsed: "3 days ago",
    uses: 8
  }
];

const PromptBuilder = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(promptTemplates[0]);
  const [customPrompt, setCustomPrompt] = useState("");
  const [promptName, setPromptName] = useState("");
  const [variables, setVariables] = useState({});
  const [testOutput, setTestOutput] = useState("");
  const [activeTab, setActiveTab] = useState("templates");

  const handleVariableChange = (variable: string, value: string) => {
    setVariables(prev => ({ ...prev, [variable]: value }));
  };

  const testPrompt = () => {
    let finalPrompt = selectedTemplate.prompt;
    Object.entries(variables).forEach(([key, value]) => {
      finalPrompt = finalPrompt.replace(`{${key}}`, value as string);
    });
    setTestOutput(`Generated prompt: ${finalPrompt}\n\nThis would generate AI content based on your prompt...`);
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Prompt Builder
        </h1>
        <p className="text-muted-foreground">
          Create and customize AI prompts for your content generation needs.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="templates" className="text-xs sm:text-sm">Templates</TabsTrigger>
          <TabsTrigger value="custom" className="text-xs sm:text-sm">Custom Builder</TabsTrigger>
          <TabsTrigger value="saved" className="text-xs sm:text-sm">My Prompts</TabsTrigger>
        </TabsList>

        <TabsContent value="templates" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            <Card className="lg:col-span-5 border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Prompt Templates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {promptTemplates.map((template) => (
                    <div
                      key={template.id}
                      className={`p-3 sm:p-4 rounded-lg border cursor-pointer transition-all ${
                        selectedTemplate.id === template.id
                          ? "border-primary bg-primary/5"
                          : "border-border hover:border-primary/50"
                      }`}
                      onClick={() => setSelectedTemplate(template)}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg ${template.color} flex items-center justify-center flex-shrink-0`}>
                          <template.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1">
                            <h3 className="font-medium text-sm sm:text-base">{template.name}</h3>
                            <Badge variant="outline" className="text-xs w-fit">{template.category}</Badge>
                          </div>
                          <p className="text-xs sm:text-sm text-muted-foreground mb-2">{template.description}</p>
                          <div className="flex flex-wrap gap-1">
                            {template.variables.map((variable) => (
                              <Badge key={variable} variant="outline" className="text-xs px-1 py-0">
                                {variable}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="lg:col-span-7 space-y-4 lg:space-y-6">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Configure Prompt</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label className="text-sm font-medium">Prompt Template</Label>
                    <Textarea
                      value={selectedTemplate.prompt}
                      readOnly
                      className="mt-2 bg-muted text-sm"
                      rows={4}
                    />
                  </div>

                  <Separator />

                  <div className="space-y-4">
                    <Label className="text-sm font-medium">Variables</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selectedTemplate.variables.map((variable) => (
                        <div key={variable}>
                          <Label htmlFor={variable} className="text-sm capitalize">
                            {variable}
                          </Label>
                          <Input
                            id={variable}
                            placeholder={`Enter ${variable}...`}
                            value={variables[variable] || ""}
                            onChange={(e) => handleVariableChange(variable, e.target.value)}
                            className="mt-1"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button onClick={testPrompt} className="flex-1">
                      <Play className="w-4 h-4 mr-2" />
                      Test Prompt
                    </Button>
                    <Button variant="outline" className="flex-1 sm:flex-none">
                      <Save className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {testOutput && (
                <Card className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle>Test Output</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-muted p-4 rounded-lg max-h-64 overflow-y-auto">
                      <pre className="text-sm whitespace-pre-wrap">{testOutput}</pre>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="custom" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Create Custom Prompt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="prompt-name">Prompt Name</Label>
                  <Input
                    id="prompt-name"
                    placeholder="My Custom Prompt"
                    value={promptName}
                    onChange={(e) => setPromptName(e.target.value)}
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="custom-prompt">Prompt Content</Label>
                  <Textarea
                    id="custom-prompt"
                    placeholder="Enter your custom prompt here. Use {variable} syntax for dynamic content..."
                    value={customPrompt}
                    onChange={(e) => setCustomPrompt(e.target.value)}
                    rows={8}
                    className="mt-2"
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Use curly braces for variables: {"{topic}"}, {"{tone}"}, {"{audience}"}
                  </p>
                </div>

                <div>
                  <Label>Category</Label>
                  <Select>
                    <SelectTrigger className="mt-1">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="content">Content</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="ecommerce">E-commerce</SelectItem>
                      <SelectItem value="video">Video</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <Button className="flex-1">
                    <Save className="w-4 h-4 mr-2" />
                    Save Prompt
                  </Button>
                  <Button variant="outline" className="flex-1 sm:flex-none">
                    <Play className="w-4 h-4 mr-2" />
                    Test
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Prompt Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium text-sm">Best Practices</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 mt-2">
                      <li>• Be specific and clear in your instructions</li>
                      <li>• Use variables for dynamic content</li>
                      <li>• Define the desired tone and style</li>
                      <li>• Specify the target audience</li>
                      <li>• Include example outputs when helpful</li>
                    </ul>
                  </div>

                  <Separator />

                  <div>
                    <h4 className="font-medium text-sm">Variable Examples</h4>
                    <div className="text-sm text-muted-foreground space-y-1 mt-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="text-xs">{"{topic}"}</Badge>
                        <span className="text-xs">Subject matter</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="text-xs">{"{tone}"}</Badge>
                        <span className="text-xs">Writing style</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline" className="text-xs">{"{audience}"}</Badge>
                        <span className="text-xs">Target readers</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="saved" className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold">My Saved Prompts</h2>
              <p className="text-muted-foreground text-sm">Manage your custom prompts</p>
            </div>
            <Button className="w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              New Prompt
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {savedPrompts.map((prompt) => (
              <Card key={prompt.id} className="border-0 shadow-card">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-sm sm:text-base truncate">{prompt.name}</h3>
                        <Badge variant="outline" className="mt-1 text-xs">
                          {prompt.category}
                        </Badge>
                      </div>
                      <Button variant="ghost" size="sm" className="p-1 h-auto">
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="text-xs">Last used: {prompt.lastUsed}</div>
                      <div className="text-xs">Used {prompt.uses} times</div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1 text-xs">
                        Edit
                      </Button>
                      <Button variant="ghost" size="sm" className="p-2 h-auto">
                        <Trash2 className="w-4 h-4" />
                      </Button>
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

export default PromptBuilder;