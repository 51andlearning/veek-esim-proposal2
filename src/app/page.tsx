import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import ExecutiveSummary from "@/components/sections/ExecutiveSummary";
import Opportunity from "@/components/sections/Opportunity";
import WhyEsim from "@/components/sections/WhyEsim";
import Proposition from "@/components/sections/Proposition";
import BusinessCase from "@/components/sections/BusinessCase";
import Integration from "@/components/sections/Integration";
import Timeline from "@/components/sections/Timeline";
import OtherOpportunities from "@/components/sections/OtherOpportunities";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ExecutiveSummary />
        <Opportunity />
        <WhyEsim />
        <Proposition />
        <BusinessCase />
        <Integration />
        <Timeline />
        <OtherOpportunities />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
