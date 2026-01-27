import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import AutomaticGates from "./pages/AutomaticGates";
import AccessControl from "./pages/AccessControl";
import GateRepair from "./pages/GateRepair";
import DrivewayGates from "./pages/DrivewayGates";
import Fences from "./pages/Fences";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
