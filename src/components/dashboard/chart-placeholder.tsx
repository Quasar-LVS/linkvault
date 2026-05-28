import * as React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface ChartPlaceholderProps {
  title: string;
  description?: string;
  className?: string;
}

export function ChartPlaceholder({ title, description, className }: ChartPlaceholderProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-sm font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          {title}
        </CardTitle>
        {description && (
          <CardDescription className="text-xs">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="h-64 flex items-center justify-center">
        {/* Modern Vector SVG line graph mockup */}
        <div className="relative w-full h-full flex flex-col justify-between">
          <div className="flex-1 w-full relative">
            <svg
              className="w-full h-full text-indigo-500/10 dark:text-indigo-500/5"
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Grid Lines */}
              <line x1="0" y1="30" x2="500" y2="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4" />
              <line x1="0" y1="75" x2="500" y2="75" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4" />
              <line x1="0" y1="120" x2="500" y2="120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4" />

              {/* Area Path */}
              <path
                d="M0,150 L0,120 Q50,90 100,105 T200,60 T300,75 T400,30 T500,45 L500,150 Z"
                fill="url(#gradient)"
              />

              {/* Line Path */}
              <path
                d="M0,120 Q50,90 100,105 T200,60 T300,75 T400,30 T500,45"
                fill="none"
                stroke="rgb(99, 102, 241)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              {/* Glow Dot */}
              <circle cx="400" cy="30" r="5" fill="rgb(168, 85, 247)" />
              <circle cx="400" cy="30" r="10" fill="none" stroke="rgb(168, 85, 247)" strokeWidth="2" className="animate-ping origin-center" style={{ transformOrigin: "400px 30px" }} />
            </svg>
          </div>
          {/* X Axis Labels */}
          <div className="flex justify-between text-[10px] font-semibold text-zinc-400 dark:text-zinc-500 pt-2 border-t border-zinc-100 dark:border-zinc-800">
            <span>Jan</span>
            <span>Feb</span>
            <span>Mar</span>
            <span>Apr</span>
            <span>May</span>
            <span>Jun</span>
            <span>Jul</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
