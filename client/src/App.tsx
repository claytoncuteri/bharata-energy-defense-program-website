import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import ExecutiveSummary from "@/pages/ExecutiveSummary";
import PastTimeline from "@/pages/PastTimeline";
import UpcomingTimeline from "@/pages/UpcomingTimeline";
import Convenor from "@/pages/Convenor";
import Cosmic from "@/pages/Cosmic";
import Appendix from "@/pages/Appendix";
import Message from "@/pages/Message";
import Downloads from "@/pages/Downloads";
import Contact from "@/pages/Contact";
import Admin from "@/pages/Admin";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/executive" component={ExecutiveSummary} />
        <Route path="/past-timeline" component={PastTimeline} />
        <Route path="/upcoming-timeline" component={UpcomingTimeline} />
        <Route path="/convenor" component={Convenor} />
        <Route path="/cosmic" component={Cosmic} />
        <Route path="/appendix" component={Appendix} />
        <Route path="/message" component={Message} />
        <Route path="/downloads" component={Downloads} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
