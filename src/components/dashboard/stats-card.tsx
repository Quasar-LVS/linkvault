import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils/cn";

interface StatsCardProps {
  title: string;
  value: string | number;
  description?: string;
  iconName: string;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  color?: "indigo" | "emerald" | "amber" | "rose" | "violet";
}

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = Icons[name as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  if (!IconComponent) return <Icons.TrendingUp className={className} />;
  return <IconComponent className={className} />;
};

export function StatsCard({
  title,
  value,
  description,
  iconName,
  trend,
  color = "indigo",
}: StatsCardProps) {
  return (
    <Card hoverable className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            {title}
          </p>
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg",
              {
                "bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400":
                  color === "indigo",
                "bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400":
                  color === "emerald",
                "bg-amber-50 text-amber-600 dark:bg-amber-950 dark:text-amber-400":
                  color === "amber",
                "bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400":
                  color === "rose",
                "bg-violet-50 text-violet-600 dark:bg-violet-950 dark:text-violet-400":
                  color === "violet",
              }
            )}
          >
            <DynamicIcon name={iconName} className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-3 flex items-baseline justify-between">
          <div>
            <h4 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              {value}
            </h4>
            {description && (
              <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                {description}
              </p>
            )}
          </div>
          {trend && (
            <span
              className={cn(
                "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold",
                trend.isPositive
                  ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-900/20 dark:text-emerald-400"
                  : "bg-rose-50 text-rose-750 dark:bg-rose-900/20 dark:text-rose-400"
              )}
            >
              {trend.isPositive ? "+" : ""}
              {trend.value}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
