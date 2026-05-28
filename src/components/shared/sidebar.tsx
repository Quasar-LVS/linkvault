"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils/cn";
import * as Icons from "lucide-react";

interface SidebarProps {
  role: "buyer" | "seller" | "admin";
  className?: string;
}

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = Icons[name as keyof typeof Icons] as React.ComponentType<{ className?: string }>;
  if (!IconComponent) return <Icons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
};

export function Sidebar({ role, className }: SidebarProps) {
  const pathname = usePathname();

  const getNavItems = () => {
    switch (role) {
      case "buyer":
        return siteConfig.buyerNav;
      case "seller":
        return siteConfig.sellerNav;
      case "admin":
        return siteConfig.adminNav;
      default:
        return [];
    }
  };

  const navItems = getNavItems();

  return (
    <aside
      className={cn(
        "flex h-full w-64 flex-col border-r border-zinc-200 bg-zinc-50/50 p-4 dark:border-zinc-800 dark:bg-zinc-950/50",
        className
      )}
    >
      {/* Brand Header */}
      <div className="mb-8 flex items-center space-x-2 px-2">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-tr from-indigo-600 to-violet-600 text-white">
            <svg
              className="h-4.5 w-4.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {siteConfig.name}
          </span>
        </Link>
        <span className="rounded-md bg-indigo-50 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-600 uppercase tracking-wider dark:bg-indigo-500/10 dark:text-indigo-400">
          {role}
        </span>
      </div>

      {/* Navigation Items */}
      <nav className="flex-1 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "flex items-center space-x-3 rounded-lg px-3 py-2.5 text-sm font-medium text-zinc-600 transition-all hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-zinc-50",
                {
                  "bg-white text-indigo-600 shadow-xs border border-zinc-200/50 hover:bg-white hover:text-indigo-600 dark:bg-zinc-900 dark:text-indigo-400 dark:border-zinc-800 dark:hover:bg-zinc-900 dark:hover:text-indigo-400":
                    isActive,
                }
              )}
            >
              <DynamicIcon
                name={item.icon}
                className={cn("h-5 w-5 text-zinc-500 dark:text-zinc-400", {
                  "text-indigo-600 dark:text-indigo-400": isActive,
                })}
              />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>

      {/* Sidebar Footer / User Profile shortcut placeholder */}
      <div className="border-t border-zinc-200 pt-4 dark:border-zinc-800">
        <Link
          href={`/${role}`}
          className="flex items-center space-x-3 rounded-lg px-2 py-1.5 text-sm transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 font-semibold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
            {role[0].toUpperCase()}U
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Demo {role.charAt(0).toUpperCase() + role.slice(1)}
            </p>
            <p className="truncate text-[10px] text-zinc-500 dark:text-zinc-400">
              {role}@linkvault.com
            </p>
          </div>
        </Link>
      </div>
    </aside>
  );
}
