import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/dashboard/DashboardLayout";
import DashboardMain from "./components/dashboard/DashboardMain"; // Relative import
import PromptBuilder from "./pages/PromptBuilder";
import BrandStyle from "./pages/BrandStyle";
import ContentGenerator from "./pages/ContentGenerator";
import SEOOptimizer from "./pages/SEOOptimizer";
import ImageVideo from "./pages/ImageVideo";
import Voiceover from "./pages/Voiceover";
import History from "./pages/History";
import TeamCollaboration from "./pages/TeamCollaboration";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<DashboardLayout />}>
            <Route path="/" element={<DashboardMain />} />
            <Route path="/prompt-builder" element={<PromptBuilder />} />
            <Route path="/brand-style" element={<BrandStyle />} />
            <Route path="/content-generator" element={<ContentGenerator />} />
            <Route path="/seo-optimizer" element={<SEOOptimizer />} />
            <Route path="/image-video" element={<ImageVideo />} />
            <Route path="/voiceover" element={<Voiceover />} />
            <Route path="/history" element={<History />} />
            <Route path="/team-collaboration" element={<TeamCollaboration />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;