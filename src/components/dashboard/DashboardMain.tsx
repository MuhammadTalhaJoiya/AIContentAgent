import { Link } from "react-router-dom";
import { 
  Wand2, 
  ImageIcon, 
  Video, 
  Search, 
  ArrowRight,
  BarChart3,
  Zap,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const quickStartCards = [
  {
    title: "Create New Prompt",
    description: "Build AI prompts for any content type",
    icon: Wand2,
    color: "bg-purple-500",
    href: "/prompt-builder"
  },
  {
    title: "Generate Image",
    description: "Create stunning visuals with AI",
    icon: ImageIcon,
    color: "bg-blue-500",
    href: "/image-video"
  },
  {
    title: "Start Video Script",
    description: "Write engaging video content",
    icon: Video,
    color: "bg-green-500",
    href: "/content-generator"
  },
  {
    title: "Analyze SEO",
    description: "Optimize content for search engines",
    icon: Search,
    color: "bg-orange-500",
    href: "/seo-optimizer"
  }
];

const recentProjects = [
  {
    name: "Blog Post: AI Trends 2024",
    type: "Article",
    status: "Completed",
    date: "2 hours ago",
    words: 1250
  },
  {
    name: "Social Media Campaign",
    type: "Social Posts",
    status: "In Progress",
    date: "5 hours ago",
    words: 450
  },
  {
    name: "Product Demo Script",
    type: "Video Script",
    status: "Draft",
    date: "1 day ago",
    words: 800
  },
  {
    name: "Email Newsletter",
    type: "Email",
    status: "Completed",
    date: "2 days ago",
    words: 600
  }
];

const usageStats = [
  {
    label: "Words Generated",
    value: "24,567",
    limit: "50,000",
    percentage: 49,
    icon: FileText,
    color: "text-blue-600"
  },
  {
    label: "Image Tokens",
    value: "156",
    limit: "500",
    percentage: 31,
    icon: ImageIcon,
    color: "text-purple-600"
  },
  {
    label: "Video Minutes",
    value: "42",
    limit: "100",
    percentage: 42,
    icon: Video,
    color: "text-green-600"
  }
];

export default function DashboardMain() {
  return (
    <div className="flex-1 overflow-auto bg-dashboard-bg">
      <div className="p-4 sm:p-6 max-w-7xl mx-auto">
        <div className="mb-6 sm:mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                Welcome back, John! 👋
              </h1>
              <p className="text-muted-foreground text-sm sm:text-base">
                Ready to create amazing content? Let's get started with your AI-powered toolkit.
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="h-6">
                <Zap className="w-3 h-3 mr-1" />
                Pro Plan
              </Badge>
            </div>
          </div>
        </div>

        <div className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-foreground">Quick Start</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {quickStartCards.map((card) => (
              <Link key={card.title} to={card.href} className="block">
                <Card className="hover:shadow-card-hover transition-all duration-200 cursor-pointer group border-0 shadow-card">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${card.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                        <card.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors text-sm sm:text-base">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                          {card.description}
                        </p>
                        <div className="mt-2 sm:mt-3">
                          <div className="flex items-center text-primary text-xs sm:text-sm font-medium group-hover:translate-x-1 transition-transform duration-200">
                            Get started
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
          <div className="xl:col-span-2">
            <Card className="border-0 shadow-card">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base sm:text-lg">Recent Projects</CardTitle>
                  <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                    <span className="hidden sm:inline">View All</span>
                    <ArrowRight className="w-4 h-4 sm:ml-1" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 sm:space-y-4">
                  {recentProjects.map((project, index) => (
                    <div key={index} className="flex items-center justify-between p-3 sm:p-4 rounded-xl bg-gradient-card border hover:shadow-sm transition-all duration-200">
                      <div className="flex items-center space-x-3 sm:space-x-4 flex-1 min-w-0">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                          <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground text-sm sm:text-base truncate">{project.name}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-xs sm:text-sm text-muted-foreground">
                            <span>{project.type}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{project.words} words</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{project.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
                        <Badge 
                          variant={project.status === 'Completed' ? 'default' : project.status === 'In Progress' ? 'secondary' : 'outline'}
                          className="text-xs hidden sm:inline-flex"
                        >
                          {project.status}
                        </Badge>
                        <Button variant="ghost" size="sm" className="h-6 w-6 sm:h-8 sm:w-8 p-0">
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border-0 shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="text-base sm:text-lg">Usage Statistics</CardTitle>
                <p className="text-xs sm:text-sm text-muted-foreground">Your current plan usage</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 sm:space-y-6">
                  {usageStats.map((stat, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <stat.icon className={`w-3 h-3 sm:w-4 sm:h-4 ${stat.color}`} />
                          <span className="text-xs sm:text-sm font-medium text-foreground">{stat.label}</span>
                        </div>
                        <span className="text-xs sm:text-sm text-muted-foreground">
                          {stat.value} / {stat.limit}
                        </span>
                      </div>
                      <Progress value={stat.percentage} className="h-2" />
                      <div className="text-xs text-muted-foreground">
                        {stat.percentage}% used this month
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
                  <Button className="w-full text-xs sm:text-sm" variant="outline">
                    <BarChart3 className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                    <span className="hidden sm:inline">View Detailed Analytics</span>
                    <span className="sm:hidden">Analytics</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}