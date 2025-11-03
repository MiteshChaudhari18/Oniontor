// src/App.tsx
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { ViewCounter } from "@/components/view-counter";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="relative min-h-screen text-white">
            {/* Background: video for all pages */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="fixed inset-0 w-full h-full object-cover -z-10"
            >
              <source src="/background.mp4" type="video/mp4" />
            </video>
            <div className="fixed inset-0 bg-black/40 -z-10" />

            {/* Foreground */}
            <div className="relative z-10">
              <Toaster />
              <ThemeToggle />
              <ViewCounter />
              <Router />
            </div>
          </div>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
