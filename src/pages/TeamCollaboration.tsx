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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Users, 
  Plus, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Crown,
  Edit,
  Trash2,
  Eye,
  Download,
  Upload,
  Send,
  Settings,
  Filter,
  Search,
  MoreHorizontal,
  Activity,
  Target,
  Zap
} from "lucide-react";

// Mock data for team collaboration
const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    email: "sarah@company.com",
    role: "Content Manager",
    avatar: "",
    status: "online",
    initials: "SC",
    permissions: ["create", "edit", "approve", "delete"],
    lastActive: "2 minutes ago",
    projectsCount: 8
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    email: "marcus@company.com",
    role: "Content Writer",
    avatar: "",
    status: "away",
    initials: "MR",
    permissions: ["create", "edit"],
    lastActive: "15 minutes ago",
    projectsCount: 12
  },
  {
    id: 3,
    name: "Emma Thompson",
    email: "emma@company.com",
    role: "SEO Specialist",
    avatar: "",
    status: "online",
    initials: "ET",
    permissions: ["create", "edit"],
    lastActive: "Just now",
    projectsCount: 6
  },
  {
    id: 4,
    name: "David Kim",
    email: "david@company.com",
    role: "Design Lead",
    avatar: "",
    status: "offline",
    initials: "DK",
    permissions: ["create", "edit", "approve"],
    lastActive: "2 hours ago",
    projectsCount: 4
  },
  {
    id: 5,
    name: "Lisa Wang",
    email: "lisa@company.com",
    role: "Social Media Manager",
    avatar: "",
    status: "online",
    initials: "LW",
    permissions: ["create", "edit"],
    lastActive: "5 minutes ago",
    projectsCount: 10
  }
];

const projects = [
  {
    id: 1,
    title: "Q1 Blog Content Campaign",
    description: "Create 12 blog posts for Q1 marketing campaign focusing on AI content creation trends",
    status: "in-progress",
    priority: "high",
    progress: 75,
    assignees: [1, 2, 3],
    dueDate: "2024-03-15",
    createdDate: "2024-01-10",
    tasksTotal: 12,
    tasksCompleted: 9,
    category: "Blog",
    comments: 24
  },
  {
    id: 2,
    title: "Social Media Templates",
    description: "Design responsive social media templates for Instagram, Twitter, and LinkedIn",
    status: "review",
    priority: "medium",
    progress: 90,
    assignees: [4, 5],
    dueDate: "2024-02-28",
    createdDate: "2024-01-20",
    tasksTotal: 8,
    tasksCompleted: 7,
    category: "Social Media",
    comments: 15
  },
  {
    id: 3,
    title: "Product Launch Video Scripts",
    description: "Create engaging video scripts for upcoming product launch across multiple platforms",
    status: "planning",
    priority: "high",
    progress: 25,
    assignees: [2, 3, 5],
    dueDate: "2024-04-01",
    createdDate: "2024-02-01",
    tasksTotal: 6,
    tasksCompleted: 1,
    category: "Video",
    comments: 8
  },
  {
    id: 4,
    title: "SEO Content Optimization",
    description: "Optimize existing content for better search engine rankings and user engagement",
    status: "completed",
    priority: "medium",
    progress: 100,
    assignees: [3, 1],
    dueDate: "2024-02-15",
    createdDate: "2024-01-15",
    tasksTotal: 15,
    tasksCompleted: 15,
    category: "SEO",
    comments: 31
  }
];

const recentActivity = [
  {
    id: 1,
    user: "Sarah Chen",
    action: "approved",
    target: "Q1 Blog Content Campaign - Post #9",
    timestamp: "2 minutes ago",
    type: "approval"
  },
  {
    id: 2,
    user: "Marcus Rodriguez",
    action: "submitted for review",
    target: "Product Launch Video Scripts - Script #2",
    timestamp: "15 minutes ago",
    type: "submission"
  },
  {
    id: 3,
    user: "Emma Thompson",
    action: "commented on",
    target: "Social Media Templates - Instagram Stories",
    timestamp: "1 hour ago",
    type: "comment"
  },
  {
    id: 4,
    user: "Lisa Wang",
    action: "completed",
    target: "Social Media Templates - LinkedIn Carousel",
    timestamp: "2 hours ago",
    type: "completion"
  },
  {
    id: 5,
    user: "David Kim",
    action: "created",
    target: "Brand Guidelines Review Project",
    timestamp: "3 hours ago",
    type: "creation"
  }
];

const notifications = [
  {
    id: 1,
    title: "Review Required",
    message: "Marcus has submitted 'Blog Post #10' for your review",
    type: "review",
    timestamp: "5 minutes ago",
    unread: true
  },
  {
    id: 2,
    title: "Deadline Approaching",
    message: "Q1 Blog Content Campaign due in 2 days",
    type: "deadline",
    timestamp: "1 hour ago",
    unread: true
  },
  {
    id: 3,
    title: "Comment Added",
    message: "Emma commented on your social media template",
    type: "comment",
    timestamp: "3 hours ago",
    unread: false
  }
];

const TeamCollaboration = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedProject, setSelectedProject] = useState(null);
  const [newProjectDialog, setNewProjectDialog] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [priorityFilter, setPriorityFilter] = useState("all");

  const getStatusBadge = (status) => {
    const variants = {
      "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
      "review": "bg-orange-100 text-orange-800 border-orange-200",
      "planning": "bg-purple-100 text-purple-800 border-purple-200",
      "completed": "bg-green-100 text-green-800 border-green-200",
      "on-hold": "bg-gray-100 text-gray-800 border-gray-200"
    };
    return variants[status] || variants["planning"];
  };

  const getPriorityBadge = (priority) => {
    const variants = {
      "high": "bg-red-100 text-red-800 border-red-200",
      "medium": "bg-yellow-100 text-yellow-800 border-yellow-200",
      "low": "bg-gray-100 text-gray-800 border-gray-200"
    };
    return variants[priority] || variants["medium"];
  };



  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case "in-progress":
        return <Clock className="w-4 h-4 text-blue-600" />;
      case "review":
        return <Eye className="w-4 h-4 text-orange-600" />;
      default:
        return <AlertCircle className="w-4 h-4 text-purple-600" />;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "all" || project.status === statusFilter;
    const matchesPriority = priorityFilter === "all" || project.priority === priorityFilter;
    return matchesSearch && matchesStatus && matchesPriority;
  });

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Team Collaboration
        </h1>
        <p className="text-muted-foreground">
          Manage team projects, track progress, and collaborate on content creation workflows.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <TabsList className="grid w-full sm:w-auto grid-cols-4 sm:grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="projects">Projects</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Dialog open={newProjectDialog} onOpenChange={setNewProjectDialog}>
              <DialogTrigger asChild>
                <Button className="shrink-0">
                  <Plus className="w-4 h-4 mr-2" />
                  <span className="hidden sm:inline">New Project</span>
                  <span className="sm:hidden">New</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px]">
                <DialogHeader>
                  <DialogTitle>Create New Project</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="project-title">Project Title</Label>
                    <Input id="project-title" placeholder="Enter project title..." />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="project-description">Description</Label>
                    <Textarea 
                      id="project-description" 
                      placeholder="Describe the project goals and requirements..."
                      rows={3}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label>Priority</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low</SelectItem>
                          <SelectItem value="medium">Medium</SelectItem>
                          <SelectItem value="high">High</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid gap-2">
                      <Label>Due Date</Label>
                      <Input type="date" />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label>Assign Team Members</Label>
                    <div className="flex flex-wrap gap-2">
                      {teamMembers.slice(0, 3).map((member) => (
                        <div key={member.id} className="flex items-center gap-2 p-2 border rounded-lg cursor-pointer hover:bg-muted/50">
                          <Avatar className="w-6 h-6">
                            <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
                          </Avatar>
                          <span className="text-sm">{member.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-end gap-2 pt-4">
                    <Button variant="outline" onClick={() => setNewProjectDialog(false)}>
                      Cancel
                    </Button>
                    <Button onClick={() => setNewProjectDialog(false)}>
                      Create Project
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="border-0 shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">4</p>
                    <p className="text-sm text-muted-foreground">Active Projects</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">5</p>
                    <p className="text-sm text-muted-foreground">Team Members</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">12</p>
                    <p className="text-sm text-muted-foreground">Pending Reviews</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">89%</p>
                    <p className="text-sm text-muted-foreground">Completion Rate</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-muted/50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action} 
                        <span className="font-medium"> {activity.target}</span>
                      </p>
                      <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle>Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {notifications.map((notification) => (
                  <div key={notification.id} className={`p-3 rounded-lg border transition-colors ${
                    notification.unread ? "bg-blue-50 border-blue-200" : "bg-muted/20"
                  }`}>
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm">{notification.title}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-2">{notification.timestamp}</p>
                      </div>
                      {notification.unread && (
                        <div className="w-2 h-2 bg-blue-600 rounded-full shrink-0 mt-1"></div>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Project Progress Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {projects.slice(0, 3).map((project) => (
                  <div key={project.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(project.status)}
                        <h3 className="font-medium">{project.title}</h3>
                        <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${getPriorityBadge(project.priority)}`}>
                          {project.priority}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{project.tasksCompleted}/{project.tasksTotal} tasks completed</span>
                      <span>Due: {project.dueDate}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="planning">Planning</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priorityFilter} onValueChange={setPriorityFilter}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="border-0 shadow-card hover:shadow-card-hover transition-all cursor-pointer">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold mb-1 truncate">{project.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{project.description}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="shrink-0 ml-2">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge className={`text-xs ${getStatusBadge(project.status)}`}>
                        {project.status.replace('-', ' ')}
                      </Badge>
                      <Badge className={`text-xs ${getPriorityBadge(project.priority)}`}>
                        {project.priority}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Progress</span>
                        <span>{project.progress}%</span>
                      </div>
                      <Progress value={project.progress} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {project.assignees.map((assigneeId) => {
                          const member = teamMembers.find(m => m.id === assigneeId);
                          return member ? (
                            <Avatar key={member.id} className="w-8 h-8 border-2 border-background">
                              <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
                            </Avatar>
                          ) : null;
                        })}
                      </div>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="w-3 h-3" />
                          {project.comments}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {project.dueDate}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="team" className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member) => (
              <Card key={member.id} className="border-0 shadow-card">
                <CardContent className="p-4">
                  <div className="space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <Avatar className="w-12 h-12">
                            <AvatarFallback>{member.initials}</AvatarFallback>
                          </Avatar>
                          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                            member.status === 'online' ? 'bg-green-500' : 
                            member.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                          }`}></div>
                        </div>
                        <div>
                          <h3 className="font-semibold">{member.name}</h3>
                          <p className="text-sm text-muted-foreground">{member.role}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>Active Projects</span>
                        <Badge variant="secondary">{member.projectsCount}</Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Last active: {member.lastActive}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs">Permissions</Label>
                      <div className="flex flex-wrap gap-1">
                        {member.permissions.map((permission) => (
                          <Badge key={permission} variant="outline" className="text-xs">
                            {permission}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">
                        <MessageSquare className="w-3 h-3 mr-1" />
                        Message
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1">
                        <Eye className="w-3 h-3 mr-1" />
                        View
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Invite Team Members</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="invite-email">Email Address</Label>
                  <Input id="invite-email" type="email" placeholder="colleague@company.com" />
                </div>
                <div>
                  <Label>Role</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="viewer">Viewer</SelectItem>
                      <SelectItem value="editor">Editor</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="admin">Admin</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <Button>
                <Send className="w-4 h-4 mr-2" />
                Send Invitation
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle>Activity Feed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.concat([
                  {
                    id: 6,
                    user: "David Kim",
                    action: "uploaded",
                    target: "Brand Guidelines - Logo Variations",
                    timestamp: "4 hours ago",
                    type: "upload"
                  },
                  {
                    id: 7,
                    user: "Sarah Chen",
                    action: "assigned",
                    target: "Blog Post #11 to Marcus Rodriguez",
                    timestamp: "5 hours ago",
                    type: "assignment"
                  },
                  {
                    id: 8,
                    user: "Emma Thompson",
                    action: "optimized",
                    target: "Homepage Content for SEO",
                    timestamp: "6 hours ago",
                    type: "optimization"
                  }
                ]).map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 p-4 hover:bg-muted/50 rounded-lg transition-colors">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{activity.user}</span> {activity.action} 
                        <span className="font-medium"> {activity.target}</span>
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${
                      activity.type === 'approval' ? 'bg-green-500' :
                      activity.type === 'submission' ? 'bg-blue-500' :
                      activity.type === 'comment' ? 'bg-orange-500' :
                      activity.type === 'completion' ? 'bg-purple-500' :
                      'bg-gray-500'
                    }`}></div>
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

export default TeamCollaboration;