import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import InsuranceCategories from "../components/InsuranceCategories";
import { CtaSection } from "../components/CtaSection"
import CallToAction from '../components/cta';
import Footer from '../components/footer';;
// import "../components/CtaSection.css";
import "../styles/CtaSection.css";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CtaSection />
      <Features />
      <HowItWorks />
      <InsuranceCategories />
      <CallToAction />
      <Footer />
    </div>
  );
}