"use client";

import StatsCards from "@/src/components/dashboard/StatsCards";
import PoliciesCard from "@/src/components/dashboard/PoliciesCard";
import RiskOfAssessmentsCard from "@/src/components/dashboard/RiskAssessmentsCards";

export default function DashboardPage() {


  return (
    <div className="space-y-6 text-white p-1 md:p-1 w-full bg-darkBlue">
      <StatsCards />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PoliciesCard />
        <RiskOfAssessmentsCard />
      </div>
    </div>
  );
}
