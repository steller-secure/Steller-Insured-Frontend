import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import InsuranceCategories from "../components/InsuranceCategories";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <InsuranceCategories />
    </div>
  );
}
