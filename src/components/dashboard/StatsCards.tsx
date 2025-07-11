'use client'

import StatsCard from "@/src/components/dashboard/StatsCard";
import { StatsCardData } from "@/src/data/dashboard/stats-cards";



export default function StatsCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-4">
      {StatsCardData.map((card, index) => (
          <StatsCard {...card} key={index} />
      ))}
    </div>
  );
}
