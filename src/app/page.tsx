
import Hero from "@/src/components/Hero";
import Navbar from "@/src/components/Navbar";
import InsuranceCategories from "../components/InsuranceCategories";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <InsuranceCategories />     
    </div>
  );
}
