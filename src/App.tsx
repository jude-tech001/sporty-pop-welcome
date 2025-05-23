
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import BuyPassword from "./pages/BuyPassword";
import Payment from "./pages/Payment";
import ValidationCode from "./pages/ValidationCode";
import AddBalanceForm from "./pages/AddBalanceForm";
import BalanceHistory from "./pages/BalanceHistory";
import WatchFootball from "./pages/WatchFootball";
import Tutorial from "./pages/Tutorial";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy-password" element={<BuyPassword />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/validate-code" element={<ValidationCode />} />
          <Route path="/add-balance-form" element={<AddBalanceForm />} />
          <Route path="/balance-history" element={<BalanceHistory />} />
          <Route path="/watch-football" element={<WatchFootball />} />
          <Route path="/tutorial" element={<Tutorial />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
