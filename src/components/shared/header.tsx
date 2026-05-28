"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search, LogOut, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  const pathname = usePathname();

  // Determine current active section name
  const getSectionName = () => {
    if (pathname.startsWith("/buyer")) return "Buyer Workspace";
    if (pathname.startsWith("/seller")) return "Seller Workspace";
    if (pathname.startsWith("/admin")) return "Administrator Panel";
    return "Dashboard";
  };

  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-zinc-950">
      {/* Left side: Mobile Menu Trigger + Section Name */}
      <div className="flex items-center space-x-4">
        {onMenuToggle && (
          <button
            onClick={onMenuToggle}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 md:hidden dark:border-zinc-800 dark:text-zinc-400 cursor-pointer"
          >
            <Menu className="h-5 w-5" />
          </button>
        )}
        <h1 className="text-md font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:text-lg">
          {getSectionName()}
        </h1>
      </div>

      {/* Right side: Developer Role Quick-Switcher & Notifications */}
      <div className="flex items-center space-x-4">
        {/* Dev Quick-Switcher (Premium feature for reviewing scaffolding) */}
        <div className="hidden lg:flex items-center rounded-lg bg-zinc-100 p-0.5 dark:bg-zinc-900">
          <Link href="/buyer">
            <button
              className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                pathname.startsWith("/buyer")
                  ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-zinc-50"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              }`}
            >
              Buyer
            </button>
          </Link>
          <Link href="/seller">
            <button
              className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                pathname.startsWith("/seller")
                  ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-zinc-50"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              }`}
            >
              Seller
            </button>
          </Link>
          <Link href="/admin">
            <button
              className={`rounded-md px-2.5 py-1 text-xs font-semibold transition-all cursor-pointer ${
                pathname.startsWith("/admin")
                  ? "bg-white text-zinc-900 shadow-xs dark:bg-zinc-800 dark:text-zinc-50"
                  : "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
              }`}
            >
              Admin
            </button>
          </Link>
        </div>

        {/* Search Mockup */}
        <div className="relative hidden sm:block w-48 xl:w-64">
          <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Quick search..."
            className="h-9 w-full rounded-lg border border-zinc-200 bg-zinc-50/50 pl-8 pr-3 text-xs outline-hidden focus:border-indigo-500 focus:bg-white dark:border-zinc-800 dark:bg-zinc-900/50 dark:focus:border-indigo-400 dark:focus:bg-zinc-950"
          />
        </div>

        {/* Notifications Icon */}
        <button className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-200 text-zinc-600 hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-900 cursor-pointer">
          <Bell className="h-4.5 w-4.5" />
          <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-indigo-600" />
        </button>

        {/* Logout / Exit Dashboard */}
        <Link href="/">
          <Button variant="ghost" size="icon" title="Exit Dashboard">
            <LogOut className="h-4.5 w-4.5 text-zinc-500 dark:text-zinc-400" />
          </Button>
        </Link>
      </div>
    </header>
  );
}
