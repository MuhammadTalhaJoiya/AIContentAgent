import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Calendar, 
  FileText,
  Video,
  Mail,
  MessageSquare,
  Image as ImageIcon,
  Download,
  Copy,
  Edit,
  Trash2,
  Star,
  StarOff,
  Eye,
  MoreVertical,
  BarChart3,
  Clock,
  TrendingUp,
  Users,
  ArrowUpDown
} from "lucide-react";

const projectHistory = [
  {
    id: 1,
    title: "AI in Healthcare: Revolutionizing Patient Care",
    type: "Blog Post",
    status: "Published",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T14:20:00Z",
    wordCount: 1847,
    readingTime: 7,
    performance: {
      views: 3420,
      engagement: 8.2,
      shares: 156
    },
    tags: ["healthcare", "ai", "technology"],
    isFavorite: true,
    thumbnail: "/api/placeholder/150/100"
  },
  {
    id: 2,
    title: "Social Media Strategy for Small Businesses",
    type: "Instagram Post",
    status: "Draft",
    createdAt: "2024-01-14T16:45:00Z",
    updatedAt: "2024-01-14T17:10:00Z",
    wordCount: 142,
    readingTime: 1,
    performance: {
      views: 0,
      engagement: 0,
      shares: 0
    },
    tags: ["social-media", "business", "marketing"],
    isFavorite: false,
    thumbnail: "/api/placeholder/150/100"
  },
  {
    id: 3,
    title: "Weekly Newsletter - Tech Updates",
    type: "Email",
    status: "Sent",
    createdAt: "2024-01-12T09:15:00Z",
    updatedAt: "2024-01-12T11:30:00Z",
    wordCount: 892,
    readingTime: 4,
    performance: {
      views: 2150,
      engagement: 12.4,
      shares: 89
    },
    tags: ["newsletter", "tech", "updates"],
    isFavorite: false,
    thumbnail: "/api/placeholder/150/100"
  },
  {
    id: 4,
    title: "Product Demo Script - New Features",
    type: "Video Script",
    status: "In Review",
    createdAt: "2024-01-10T14:20:00Z",
    updatedAt: "2024-01-11T09:45:00Z",
    wordCount: 654,
    readingTime: 3,
    performance: {
      views: 1200,
      engagement: 15.8,
      shares: 45
    },
    tags: ["product", "demo", "video"],
    isFavorite: true,
    thumbnail: "/api/placeholder/150/100"
  },
  {
    id: 5,
    title: "Customer Success Story - TechCorp",
    type: "Blog Post",
    status: "Published",
    createdAt: "2024-01-08T11:00:00Z",
    updatedAt: "2024-01-08T15:30:00Z",
    wordCount: 1203,
    readingTime: 5,
    performance: {
      views: 2890,
      engagement: 9.6,
      shares: 134
    },
    tags: ["case-study", "customer", "success"],
    isFavorite: false,
    thumbnail: "/api/placeholder/150/100"
  }
];

const contentTypes = [
  { value: "all", label: "All Types", icon: FileText },
  { value: "blog", label: "Blog Posts", icon: FileText },
  { value: "social", label: "Social Media", icon: MessageSquare },
  { value: "email", label: "Email", icon: Mail },
  { value: "video", label: "Video Scripts", icon: Video },
  { value: "image", label: "Image Content", icon: ImageIcon }
];

const statusOptions = [
  { value: "all", label: "All Status" },
  { value: "draft", label: "Draft" },
  { value: "in-review", label: "In Review" },
  { value: "published", label: "Published" },
  { value: "sent", label: "Sent" }
];

const History = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortBy, setSortBy] = useState("date");
  const [filteredProjects, setFilteredProjects] = useState(projectHistory);
  const [activeTab, setActiveTab] = useState("all");

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "published":
      case "sent":
        return "text-green-600 bg-green-50";
      case "draft":
        return "text-gray-600 bg-gray-50";
      case "in review":
        return "text-yellow-600 bg-yellow-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const getTypeIcon = (type) => {
    switch (type.toLowerCase()) {
      case "blog post":
        return <FileText className="w-4 h-4" />;
      case "instagram post":
      case "social media":
        return <MessageSquare className="w-4 h-4" />;
      case "email":
        return <Mail className="w-4 h-4" />;
      case "video script":
        return <Video className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  const toggleFavorite = (projectId) => {
    setFilteredProjects(prev => 
      prev.map(project => 
        project.id === projectId 
          ? { ...project, isFavorite: !project.isFavorite }
          : project
      )
    );
  };

  const totalProjects = projectHistory.length;
  const publishedProjects = projectHistory.filter(p => p.status === "Published" || p.status === "Sent").length;
  const totalViews = projectHistory.reduce((sum, p) => sum + p.performance.views, 0);
  const avgEngagement = (projectHistory.reduce((sum, p) => sum + p.performance.engagement, 0) / projectHistory.length).toFixed(1);

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Content History
        </h1>
        <p className="text-muted-foreground">
          View and manage your content generation history and performance analytics.
        </p>
      </div>

      {/* Analytics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card className="border-0 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalProjects}</div>
                <div className="text-xs text-muted-foreground">Total Projects</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">{publishedProjects}</div>
                <div className="text-xs text-muted-foreground">Published</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                <Eye className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">{totalViews.toLocaleString()}</div>
                <div className="text-xs text-muted-foreground">Total Views</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-card">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-orange-500 flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold">{avgEngagement}%</div>
                <div className="text-xs text-muted-foreground">Avg Engagement</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <TabsList>
            <TabsTrigger value="all">All Content</TabsTrigger>
            <TabsTrigger value="favorites">Favorites</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-64"
              />
            </div>

            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {contentTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    <div className="flex items-center gap-2">
                      <type.icon className="w-4 h-4" />
                      {type.label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={selectedStatus} onValueChange={setSelectedStatus}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {statusOptions.map((status) => (
                  <SelectItem key={status.value} value={status.value}>
                    {status.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button variant="outline" size="sm">
              <ArrowUpDown className="w-4 h-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>

        <TabsContent value="all" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-0 shadow-card hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    {/* Thumbnail */}
                    <div className="w-20 h-16 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                      {getTypeIcon(project.type)}
                    </div>

                    {/* Content Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h3 className="font-medium text-foreground truncate">{project.title}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {project.type}
                            </Badge>
                            <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                              {project.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 ml-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleFavorite(project.id)}
                          >
                            {project.isFavorite ? (
                              <Star className="w-4 h-4 text-yellow-500 fill-current" />
                            ) : (
                              <StarOff className="w-4 h-4" />
                            )}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {formatDate(project.createdAt)}
                        </span>
                        <span className="flex items-center gap-1">
                          <FileText className="w-3 h-3" />
                          {project.wordCount} words
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {project.readingTime} min read
                        </span>
                        {project.status !== "Draft" && (
                          <>
                            <span className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {project.performance.views.toLocaleString()} views
                            </span>
                            <span className="flex items-center gap-1">
                              <BarChart3 className="w-3 h-3" />
                              {project.performance.engagement}% engagement
                            </span>
                          </>
                        )}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-3 h-3 mr-2" />
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-3 h-3 mr-2" />
                          Edit
                        </Button>
                        <Button variant="outline" size="sm">
                          <Copy className="w-3 h-3 mr-2" />
                          Duplicate
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="w-3 h-3 mr-2" />
                          Export
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="favorites" className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            {filteredProjects.filter(p => p.isFavorite).map((project) => (
              <Card key={project.id} className="border-0 shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="font-medium">{project.title}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {project.type} • {formatDate(project.createdAt)} • {project.wordCount} words
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Content Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {filteredProjects.slice(0, 5).map((project) => (
                    <div key={project.id} className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medium text-sm truncate">{project.title}</div>
                        <div className="text-xs text-muted-foreground">{project.type}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">{project.performance.views.toLocaleString()}</div>
                        <div className="text-xs text-muted-foreground">views</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Content Types</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Blog Posts
                    </span>
                    <span className="font-medium">2</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <MessageSquare className="w-4 h-4" />
                      Social Media
                    </span>
                    <span className="font-medium">1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      Email
                    </span>
                    <span className="font-medium">1</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Video className="w-4 h-4" />
                      Video Scripts
                    </span>
                    <span className="font-medium">1</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default History;