export interface FeatureComparison {
  traditional: string;
  blockchain: string;
}

export interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  category: string;
  benefits: string[];
}

export interface FeatureCardProps {
  feature: Feature;
  index: number;
}

export type FilterCategory =
  | "all"
  | "Security"
  | "Automation"
  | "Community"
  | "Transparency"
  | "Coverage"
  | "Governance";

export const categories: FilterCategory[] = [
  "all",
  "Security",
  "Automation",
  "Community",
  "Transparency",
  "Coverage",
  "Governance",
];
