import { Clock, FileText, ShieldCheck } from "lucide-react";
import { StatsCardProps } from "@/src/types/dashboard";

export const StatsCardData: StatsCardProps[] = [
    {
      title: "Active Policies",
      value: "3",
      subtitle: "+1 from last month",
      subtitleColor: "green",
      icon: <FileText className="h-5 w-5 text-[#22BBF9]" />,
    },
    {
      title: "Total Coverage",
      value: "$125,000",
      subtitle: "across all policies",
      icon: <ShieldCheck className="h-5 w-5 text-[#22BBF9]" />,
    },
    {
      title: "Premium Due",
      value: "$350",
      subtitle: "Due in 14 days",
      icon: <Clock className="h-5 w-5 text-[#22BBF9]" />,
    },
    {
      title: "Wallet Balance",
      value: "$1,250",
      subtitle: "Available Balance",
      icon: <Clock className="h-5 w-5 text-[#22BBF9]" />,
    },
  ];