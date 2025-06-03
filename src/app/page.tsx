
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import InsuranceCategories from "../components/InsuranceCategories";
import HowItWorks from "../components/HowItWorks";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <HowItWorks/>
      <InsuranceCategories />     
    </div>
  );
}
