import { Clock4, Database, FileText, Shield, Users, Vote } from "lucide-react";
import { Feature } from "../types/features";

export const featuresData: Feature[] = [
  {
    icon: <Shield className="size-[26px] text-[#22BBF9]" />,
    title: "Smart Contract-Based Policies",
    description:
      "Insurance policies created and managed through self-executing smart contracts, ensuring fairness and transparency.",
    category: "Security",
    benefits: [
      "Automatic policy execution",
      "Transparent terms and conditions",
      "Reduced fraud risk",
      "Lower administrative costs",
    ],
  },
  {
    icon: <Clock4 className="size-[26px] text-[#22BBF9]" />,
    title: "Automated Claim Settlements",
    description:
      "Claims processed automatically based on predefined criteria, reducing the need for manual intervention.",
    category: "Automation",
    benefits: [
      "Instant claim processing",
      "24/7 availability",
      "Reduced processing costs",
      "Elimination of paperwork",
    ],
  },
  {
    icon: <Users className="size-[26px] text-[#22BBF9]" />,
    title: "Decentralized Risk Pools",
    description:
      "Users contribute funds to decentralized insurance pools with payouts based on community governance.",
    category: "Community",
    benefits: [
      "Community-driven decisions",
      "Shared risk distribution",
      "Democratic governance",
      "Lower overhead costs",
    ],
  },
  {
    icon: <FileText className="size-[26px] text-[#22BBF9]" />,
    title: "Immutable Audit Trail",
    description:
      "Every transaction is recorded on the blockchain, ensuring an immutable audit trail for all activities.",
    category: "Transparency",
    benefits: [
      "Complete transaction history",
      "Tamper-proof records",
      "Regulatory compliance",
      "Enhanced trust",
    ],
  },
  {
    icon: <Database className="size-[26px] text-[#22BBF9]" />,
    title: "Multi-Asset Coverage",
    description:
      "Support for various insurance categories including health, travel, vehicle, property, and crypto-assets.",
    category: "Coverage",
    benefits: [
      "Diverse asset protection",
      "Unified platform",
      "Cross-category benefits",
      "Simplified management",
    ],
  },
  {
    icon: <Vote className="size-[26px] text-[#22BBF9]" />,
    title: "Community-Driven Governance",
    description:
      "Policyholders vote on key decisions using a DAO model for truly decentralized management.",
    category: "Governance",
    benefits: [
      "Democratic decision making",
      "Stakeholder participation",
      "Transparent voting",
      "Community ownership",
    ],
  },
];
