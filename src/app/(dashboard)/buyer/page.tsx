"use client";

import * as React from "react";
import { StatsCard } from "@/components/dashboard/stats-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, FolderOpen, Copy, Check, ExternalLink, Key } from "lucide-react";

interface VaultItem {
  id: string;
  name: string;
  seller: string;
  price: string;
  status: "active" | "revoked" | "pending";
  date: string;
  secureUrl: string;
}

const mockPurchasedVaults: VaultItem[] = [
  {
    id: "v-1",
    name: "Next.js 16 Production Starter Kit",
    seller: "quasar_devs",
    price: "$49.00",
    status: "active",
    date: "May 24, 2026",
    secureUrl: "https://vault.linkvault.com/access/9ff2-a1b9-38cc",
  },
  {
    id: "v-2",
    name: "Sleek UI Tailwind Component Library",
    seller: "ui_craftsman",
    price: "$29.00",
    status: "active",
    date: "May 18, 2026",
    secureUrl: "https://vault.linkvault.com/access/77cc-44aa-dd12",
  },
  {
    id: "v-3",
    name: "Expiring Database Backup Script",
    seller: "ops_guru",
    price: "$10.00",
    status: "pending",
    date: "May 27, 2026",
    secureUrl: "https://vault.linkvault.com/access/55bb-eeff-0022",
  },
  {
    id: "v-4",
    name: "Obsolete PHP legacy bundle",
    seller: "retro_coder",
    price: "$15.00",
    status: "revoked",
    date: "Dec 12, 2025",
    secureUrl: "",
  },
];

export default function BuyerDashboard() {
  const [selectedVault, setSelectedVault] = React.useState<VaultItem | null>(null);
  const [copied, setCopied] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");

  const handleCopyLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const filteredVaults = mockPurchasedVaults.filter((vault) =>
    vault.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vault.seller.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl">
          Welcome to your Library
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Access your secured link vaults, view keys, and download files.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <StatsCard
          title="Total Purchased"
          value="4 Vaults"
          iconName="ShoppingBag"
          description="Across 3 sellers"
          color="indigo"
        />
        <StatsCard
          title="Spent Overall"
          value="$103.00"
          iconName="DollarSign"
          description="Stripe transactions"
          color="emerald"
        />
        <StatsCard
          title="Active Keys"
          value="2 Active"
          iconName="Key"
          description="Expiring links monitored"
          color="violet"
        />
      </div>

      {/* Vault List Section */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h3 className="text-lg font-semibold tracking-tight">Your Digital Vaults</h3>
          {/* Search bar */}
          <div className="relative w-full sm:w-72">
            <Search className="absolute top-2.5 left-2.5 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
            <input
              type="text"
              placeholder="Search library..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="h-9 w-full rounded-lg border border-zinc-200 bg-white pl-8 pr-3 text-xs outline-hidden focus:border-indigo-500 dark:border-zinc-800 dark:bg-zinc-950 dark:focus:border-indigo-400"
            />
          </div>
        </div>

        {/* Vault Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {filteredVaults.map((vault) => (
            <Card key={vault.id} hoverable className="flex flex-col justify-between">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-900">
                    <FolderOpen className="h-5 w-5 text-indigo-500" />
                  </div>
                  <Badge
                    variant={
                      vault.status === "active"
                        ? "success"
                        : vault.status === "pending"
                        ? "warning"
                        : "danger"
                    }
                  >
                    {vault.status}
                  </Badge>
                </div>
                <CardTitle className="mt-4 text-base line-clamp-1">{vault.name}</CardTitle>
                <CardDescription className="text-xs">
                  Sold by <span className="font-semibold text-zinc-700 dark:text-zinc-300">@{vault.seller}</span> • Purchased on {vault.date}
                </CardDescription>
              </CardHeader>
              <CardContent className="pb-3 text-sm">
                <div className="flex justify-between items-center text-xs text-zinc-500 dark:text-zinc-400">
                  <span>Price</span>
                  <span className="font-semibold text-zinc-900 dark:text-zinc-100">{vault.price}</span>
                </div>
              </CardContent>
              <CardFooter className="pt-3 border-t border-zinc-100 dark:border-zinc-800/80">
                {vault.status === "active" ? (
                  <Button
                    variant="primary"
                    className="w-full"
                    onClick={() => setSelectedVault(vault)}
                  >
                    Reveal Secure Vault
                  </Button>
                ) : vault.status === "pending" ? (
                  <Button variant="outline" className="w-full" disabled>
                    Awaiting Payment Verification
                  </Button>
                ) : (
                  <Button variant="secondary" className="w-full" disabled>
                    Access Revoked
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal Dialog for Secure Vault Link */}
      {selectedVault && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-xs">
          <Card className="w-full max-w-md shadow-2xl border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <CardHeader className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                <Key className="h-6 w-6" />
              </div>
              <CardTitle className="mt-4 text-lg">Secure Vault Access Link</CardTitle>
              <CardDescription className="text-xs">
                {selectedVault.name}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-center text-zinc-500 dark:text-zinc-400">
                This link serves as your credentials to access the shared files. Do not share this URL.
              </p>
              <div className="flex items-center space-x-2 rounded-lg border border-zinc-200 bg-zinc-50 p-2 dark:border-zinc-800 dark:bg-zinc-900">
                <span className="flex-1 truncate text-xs text-zinc-600 dark:text-zinc-300">
                  {selectedVault.secureUrl}
                </span>
                <button
                  onClick={() => handleCopyLink(selectedVault.secureUrl)}
                  className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
                >
                  {copied ? (
                    <Check className="h-4 w-4 text-emerald-500" />
                  ) : (
                    <Copy className="h-4 w-4 text-zinc-500" />
                  )}
                </button>
              </div>
            </CardContent>
            <CardFooter className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setSelectedVault(null)}>
                Close
              </Button>
              <a
                href={selectedVault.secureUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1"
              >
                <Button className="w-full flex items-center justify-center gap-1.5">
                  Open Vault <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
