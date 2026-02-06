import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LocationProvider } from "@/contexts/LocationContext";

// Eagerly load the homepage for fastest initial render
import Index from "./pages/Index";

// Lazy load all other pages - they'll load when needed
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const AutomaticGates = lazy(() => import("./pages/AutomaticGates"));
const AccessControl = lazy(() => import("./pages/AccessControl"));
const GateRepair = lazy(() => import("./pages/GateRepair"));
const DrivewayGates = lazy(() => import("./pages/DrivewayGates"));
const Fences = lazy(() => import("./pages/Fences"));

const queryClient = new QueryClient();

// Minimal loading fallback
const PageLoader = () => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <LocationProvider>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/automatic-gates" element={<AutomaticGates />} />
              <Route path="/access-control" element={<AccessControl />} />
              <Route path="/gate-repair" element={<GateRepair />} />
              <Route path="/driveway-gates" element={<DrivewayGates />} />
              <Route path="/fences" element={<Fences />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </LocationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
