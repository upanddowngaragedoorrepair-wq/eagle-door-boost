import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { LocationProvider } from "@/contexts/LocationContext";

// Eagerly load the homepage
import Index from "./pages/Index";

const FormSubmitted = lazy(() => import("./pages/FormSubmitted"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));

const queryClient = new QueryClient();

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
              <Route path="/form-submitted" element={<FormSubmitted />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              {/* Redirect old service routes to home */}
              <Route path="/about" element={<Navigate to="/" replace />} />
              <Route path="/automatic-gates" element={<Navigate to="/" replace />} />
              <Route path="/access-control" element={<Navigate to="/" replace />} />
              <Route path="/gate-repair" element={<Navigate to="/" replace />} />
              <Route path="/driveway-gates" element={<Navigate to="/" replace />} />
              <Route path="/fences" element={<Navigate to="/" replace />} />
              {/* Catch-all redirects to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </LocationProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
