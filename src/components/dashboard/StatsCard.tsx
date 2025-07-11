import { StatsCardProps } from "@/src/types/dashboard";

export default function StatsCard({
  title,
  value,
  subtitle,
  subtitleColor = "gray",
  icon,
}: StatsCardProps) {
  return (
    <div className="bg-[#1A1F35] p-4 rounded-lg flex flex-col justify-between h-32 w-full">
      <div className="flex justify-between items-start">
        <h3 className="text-sm font-medium text-gray-400">{title}</h3>
        <div className="shrink-0">{icon}</div>
      </div>
      <div className="flex flex-col">
        <p className="text-2xl font-bold text-white mt-2">{value}</p>
        <p
          className={`text-xs mt-1 ${
            subtitleColor === "green" ? "text-green-400" : "text-gray-400"
          }`}
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
}
