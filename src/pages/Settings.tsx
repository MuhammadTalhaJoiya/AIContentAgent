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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Settings as SettingsIcon, 
  Key, 
  CreditCard, 
  Bell, 
  Shield, 
  Download, 
  Upload, 
  Trash2, 
  Eye, 
  EyeOff,
  Save,
  Edit,
  Mail,
  Globe,
  Palette,
  Monitor,
  Sun,
  Moon,
  Zap,
  Crown,
  AlertTriangle,
  CheckCircle,
  Copy,
  RefreshCw,
  Plus
} from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showApiKey, setShowApiKey] = useState(false);
  const [profileData, setProfileData] = useState({
    firstName: "John",
    lastName: "Doe", 
    email: "john.doe@example.com",
    company: "Acme Corp",
    title: "Content Manager",
    bio: "Passionate about creating amazing content with AI.",
    timezone: "America/New_York",
    language: "en"
  });

  const [preferences, setPreferences] = useState({
    theme: "system",
    emailNotifications: true,
    pushNotifications: false,
    weeklyReports: true,
    aiSuggestions: true,
    autoSave: true,
    defaultContentType: "blog"
  });

  const [apiKeys] = useState([
    {
      id: 1,
      name: "Production API Key",
      key: "sk-1234567890abcdef...",
      created: "2024-01-10",
      lastUsed: "2024-01-15",
      status: "active"
    },
    {
      id: 2,
      name: "Development API Key",
      key: "sk-abcdef1234567890...",
      created: "2024-01-05",
      lastUsed: "2024-01-12",
      status: "active"
    }
  ]);

  const billingInfo = {
    plan: "Pro",
    price: "$29/month",
    nextBilling: "February 15, 2024",
    usage: {
      wordsUsed: 24567,
      wordsLimit: 50000,
      imagesUsed: 156,
      imagesLimit: 500
    }
  };

  const handleSaveProfile = () => {
    // Save profile logic
    console.log("Saving profile:", profileData);
  };

  const handleSavePreferences = () => {
    // Save preferences logic
    console.log("Saving preferences:", preferences);
  };

  const generateApiKey = () => {
    // Generate new API key logic
    console.log("Generating new API key");
  };

  const revokeApiKey = (keyId) => {
    // Revoke API key logic
    console.log("Revoking API key:", keyId);
  };

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your account preferences and application settings.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-6">
          <TabsTrigger value="profile" className="text-xs sm:text-sm">Profile</TabsTrigger>
          <TabsTrigger value="preferences" className="text-xs sm:text-sm">Preferences</TabsTrigger>
          <TabsTrigger value="api" className="text-xs sm:text-sm">API Keys</TabsTrigger>
          <TabsTrigger value="billing" className="text-xs sm:text-sm">Billing</TabsTrigger>
          <TabsTrigger value="notifications" className="text-xs sm:text-sm">Notifications</TabsTrigger>
          <TabsTrigger value="security" className="text-xs sm:text-sm">Security</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
            {/* Profile Picture */}
            <Card className="lg:col-span-4 border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Profile Picture
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col items-center space-y-4">
                  <Avatar className="w-20 h-20 sm:w-24 sm:h-24">
                    <AvatarImage src="/api/placeholder/96/96" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <Button size="sm" className="flex-1">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                    <Button size="sm" className="flex-1">
                      <Trash2 className="w-4 h-4 mr-2" />
                      Remove
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    Recommended: Square image, at least 200x200px
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Profile Information */}
            <div className="lg:col-span-8 space-y-6">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={profileData.firstName}
                        onChange={(e) => setProfileData(prev => ({ ...prev, firstName: e.target.value }))}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={profileData.lastName}
                        onChange={(e) => setProfileData(prev => ({ ...prev, lastName: e.target.value }))}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={profileData.email}
                      onChange={(e) => setProfileData(prev => ({ ...prev, email: e.target.value }))}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={profileData.company}
                        onChange={(e) => setProfileData(prev => ({ ...prev, company: e.target.value }))}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Job Title</Label>
                      <Input
                        id="title"
                        value={profileData.title}
                        onChange={(e) => setProfileData(prev => ({ ...prev, title: e.target.value }))}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) => setProfileData(prev => ({ ...prev, bio: e.target.value }))}
                      rows={3}
                      placeholder="Tell us about yourself..."
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label>Timezone</Label>
                      <Select value={profileData.timezone} onValueChange={(value) => setProfileData(prev => ({ ...prev, timezone: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="America/New_York">Eastern Time (ET)</SelectItem>
                          <SelectItem value="America/Chicago">Central Time (CT)</SelectItem>
                          <SelectItem value="America/Denver">Mountain Time (MT)</SelectItem>
                          <SelectItem value="America/Los_Angeles">Pacific Time (PT)</SelectItem>
                          <SelectItem value="Europe/London">London (GMT)</SelectItem>
                          <SelectItem value="Europe/Paris">Paris (CET)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Language</Label>
                      <Select value={profileData.language} onValueChange={(value) => setProfileData(prev => ({ ...prev, language: value }))}>
                        <SelectTrigger className="mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="de">German</SelectItem>
                          <SelectItem value="it">Italian</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button onClick={handleSaveProfile} className="w-full">
                    <Save className="w-4 h-4 mr-2" />
                    Save Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Appearance */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Appearance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Theme</Label>
                  <Select value={preferences.theme} onValueChange={(value) => setPreferences(prev => ({ ...prev, theme: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">
                        <div className="flex items-center gap-2">
                          <Sun className="w-4 h-4" />
                          Light
                        </div>
                      </SelectItem>
                      <SelectItem value="dark">
                        <div className="flex items-center gap-2">
                          <Moon className="w-4 h-4" />
                          Dark
                        </div>
                      </SelectItem>
                      <SelectItem value="system">
                        <div className="flex items-center gap-2">
                          <Monitor className="w-4 h-4" />
                          System
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Default Content Type</Label>
                  <Select value={preferences.defaultContentType} onValueChange={(value) => setPreferences(prev => ({ ...prev, defaultContentType: value }))}>
                    <SelectTrigger className="mt-1">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="blog">Blog Post</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="video">Video Script</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Content Preferences */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <SettingsIcon className="w-5 h-5" />
                  Content Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <Label>AI Suggestions</Label>
                    <p className="text-sm text-muted-foreground">Show AI-powered content suggestions</p>
                  </div>
                  <Switch 
                    checked={preferences.aiSuggestions} 
                    onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, aiSuggestions: checked }))}
                  />
                </div>

                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <Label>Auto Save</Label>
                    <p className="text-sm text-muted-foreground">Automatically save your work</p>
                  </div>
                  <Switch 
                    checked={preferences.autoSave} 
                    onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, autoSave: checked }))}
                  />
                </div>

                <Button onClick={handleSavePreferences} className="w-full">
                  <Save className="w-4 h-4 mr-2" />
                  Save Preferences
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="api" className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <CardTitle className="flex items-center gap-2">
                  <Key className="w-5 h-5" />
                  API Keys
                </CardTitle>
                <Button onClick={generateApiKey} className="w-full sm:w-auto">
                  <Key className="w-4 h-4 mr-2" />
                  Generate New Key
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Manage your API keys for accessing our services programmatically.
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {apiKeys.map((apiKey) => (
                  <div key={apiKey.id} className="flex flex-col sm:flex-row sm:items-start gap-4 p-3 sm:p-4 border rounded-lg">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="font-medium text-sm sm:text-base">{apiKey.name}</h3>
                        <Badge>
                          {apiKey.status}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2 mb-2 overflow-hidden">
                        <code className="text-xs sm:text-sm bg-muted px-2 py-1 rounded truncate">
                          {showApiKey ? apiKey.key : apiKey.key.substring(0, 12) + "..."}
                        </code>
                        <Button
                          size="sm"
                          onClick={() => setShowApiKey(!showApiKey)}
                          className="h-6 w-6 p-0 flex-shrink-0"
                        >
                          {showApiKey ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                        </Button>
                        <Button size="sm" className="h-6 w-6 p-0 flex-shrink-0">
                          <Copy className="w-3 h-3" />
                        </Button>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        Created: {apiKey.created} • Last used: {apiKey.lastUsed}
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1 sm:flex-none text-xs">
                        <Edit className="w-3 h-3 mr-2" />
                        Edit
                      </Button>
                      <Button 
                        size="sm"
                        onClick={() => revokeApiKey(apiKey.id)}
                        className="flex-1 sm:flex-none text-xs"
                      >
                        <Trash2 className="w-3 h-3 mr-2" />
                        Revoke
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {/* Current Plan */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5" />
                  Current Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold">{billingInfo.plan}</h3>
                    <p className="text-muted-foreground text-sm sm:text-base">{billingInfo.price}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Next billing date</span>
                    <span className="font-medium text-right">{billingInfo.nextBilling}</span>
                  </div>
                  
                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Words used this month</span>
                      <span className="text-right">{billingInfo.usage.wordsUsed.toLocaleString()} / {billingInfo.usage.wordsLimit.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all" 
                        style={{ width: `${(billingInfo.usage.wordsUsed / billingInfo.usage.wordsLimit) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Images used this month</span>
                      <span className="text-right">{billingInfo.usage.imagesUsed} / {billingInfo.usage.imagesLimit}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all" 
                        style={{ width: `${(billingInfo.usage.imagesUsed / billingInfo.usage.imagesLimit) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-4">
                  <Button className="flex-1">
                    <Crown className="w-4 h-4 mr-2" />
                    Upgrade Plan
                  </Button>
                  <Button className="flex-1">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Billing History
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Payment Method
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 p-3 border rounded-lg">
                  <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <CreditCard className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm">•••• •••• •••• 4242</div>
                    <div className="text-xs text-muted-foreground">Expires 12/2025</div>
                  </div>
                  <Button size="sm">
                    <Edit className="w-3 h-3 mr-2" />
                    Edit
                  </Button>
                </div>
                
                <Button className="w-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Payment Method
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-0 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <Label>Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive updates and alerts via email</p>
                </div>
                <Switch 
                  checked={preferences.emailNotifications} 
                  onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, emailNotifications: checked }))}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <Label>Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Get instant notifications in your browser</p>
                </div>
                <Switch 
                  checked={preferences.pushNotifications} 
                  onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, pushNotifications: checked }))}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <Label>Weekly Reports</Label>
                  <p className="text-sm text-muted-foreground">Receive weekly usage and performance reports</p>
                </div>
                <Switch 
                  checked={preferences.weeklyReports} 
                  onCheckedChange={(checked) => setPreferences(prev => ({ ...prev, weeklyReports: checked }))}
                />
              </div>

              <Button className="w-full">
                <Save className="w-4 h-4 mr-2" />
                Save Notification Settings
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Security Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full">
                  <Key className="w-4 h-4 mr-2" />
                  Change Password
                </Button>
                <Button className="w-full">
                  <Shield className="w-4 h-4 mr-2" />
                  Enable Two-Factor Auth
                </Button>
                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Download Account Data
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-red-600">
                  <AlertTriangle className="w-5 h-5" />
                  Danger Zone
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border border-red-200 rounded-lg bg-red-50">
                  <h4 className="font-medium text-red-800 mb-2">Delete Account</h4>
                  <p className="text-sm text-red-600 mb-3">
                    Permanently delete your account and all associated data
                  </p>
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    <Trash2 className="w-3 h-3 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Settings;