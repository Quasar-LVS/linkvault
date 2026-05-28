"use client";

import * as React from "react";
import { StatsCard } from "@/components/dashboard/stats-card";
import { ChartPlaceholder } from "@/components/dashboard/chart-placeholder";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, FolderDot, X } from "lucide-react";

interface SellerVaultItem {
  id: string;
  title: string;
  price: string;
  salesCount: number;
  totalEarned: string;
  status: "verified" | "reviewing" | "rejected";
}

const initialSellerVaults: SellerVaultItem[] = [
  {
    id: "sv-1",
    title: "Next.js 16 Production Starter Kit",
    price: "$49.00",
    salesCount: 18,
    totalEarned: "$882.00",
    status: "verified",
  },
  {
    id: "sv-2",
    title: "Sleek UI Tailwind Component Library",
    price: "$29.00",
    salesCount: 20,
    totalEarned: "$580.00",
    status: "verified",
  },
  {
    id: "sv-3",
    title: "Expiring Database Backup Script",
    price: "$10.00",
    salesCount: 1,
    totalEarned: "$10.00",
    status: "reviewing",
  },
  {
    id: "sv-4",
    title: "Anti-DDoS Nginx Reverse Proxy Configs",
    price: "$35.00",
    salesCount: 0,
    totalEarned: "$0.00",
    status: "reviewing",
  },
];

export default function SellerDashboard() {
  const [vaults, setVaults] = React.useState<SellerVaultItem[]>(initialSellerVaults);
  const [createOpen, setCreateOpen] = React.useState(false);

  // Form states
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [secureUrl, setSecureUrl] = React.useState("");

  const handleCreateVault = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !price || !secureUrl) return;

    const newItem: SellerVaultItem = {
      id: `sv-${Date.now()}`,
      title,
      price: `$${parseFloat(price).toFixed(2)}`,
      salesCount: 0,
      totalEarned: "$0.00",
      status: "reviewing", // Starts in verification queue
    };

    setVaults([newItem, ...vaults]);
    setCreateOpen(false);
    // Reset form fields
    setTitle("");
    setPrice("");
    setSecureUrl("");
  };

  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl">
            Seller Dashboard
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Overview of your sales, payouts, and hosted link vaults.
          </p>
        </div>
        <Button onClick={() => setCreateOpen(true)} className="flex items-center gap-1.5 self-start sm:self-auto">
          <Plus className="h-4.5 w-4.5" /> Create Link Vault
        </Button>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <StatsCard
          title="Total Sales"
          value="$1,472.00"
          iconName="DollarSign"
          trend={{ value: "12% this week", isPositive: true }}
          description="Net of platform fees"
          color="emerald"
        />
        <StatsCard
          title="Hosted Vaults"
          value={vaults.length}
          iconName="FolderLock"
          description="2 verified, others reviewing"
          color="indigo"
        />
        <StatsCard
          title="Customer Base"
          value="39 Buyers"
          iconName="Users"
          trend={{ value: "+4 today", isPositive: true }}
          description="Total active subscriptions"
          color="violet"
        />
      </div>

      {/* Chart Placeholder */}
      <ChartPlaceholder
        title="Revenue Overview"
        description="Daily sales metrics for LinkVault product listings."
      />

      {/* Active Vaults Table */}
      <Card className="border-zinc-200 dark:border-zinc-800">
        <CardHeader>
          <CardTitle className="text-base font-semibold">Your Digital Product Listings</CardTitle>
        </CardHeader>
        <CardContent className="p-0 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead className="border-b border-zinc-150 bg-zinc-50/50 text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950">
              <tr>
                <th className="px-6 py-3.5">Vault Name</th>
                <th className="px-6 py-3.5">Price</th>
                <th className="px-6 py-3.5">Sales</th>
                <th className="px-6 py-3.5">Gross Revenue</th>
                <th className="px-6 py-3.5">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-150 dark:divide-zinc-850">
              {vaults.map((vault) => (
                <tr key={vault.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors">
                  <td className="px-6 py-4 font-medium text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                    <FolderDot className="h-4.5 w-4.5 text-indigo-500 shrink-0" />
                    <span>{vault.title}</span>
                  </td>
                  <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">{vault.price}</td>
                  <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">{vault.salesCount}</td>
                  <td className="px-6 py-4 font-semibold text-zinc-900 dark:text-zinc-100">{vault.totalEarned}</td>
                  <td className="px-6 py-4">
                    <Badge variant={vault.status === "verified" ? "success" : vault.status === "reviewing" ? "warning" : "danger"}>
                      {vault.status}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Create Vault Drawer Modal Dialog */}
      {createOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/60 p-4 backdrop-blur-xs">
          <Card className="w-full max-w-lg shadow-2xl border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
            <CardHeader className="flex flex-row items-center justify-between border-b border-zinc-150 pb-4 dark:border-zinc-800">
              <div>
                <CardTitle className="text-lg">Create a Link Vault</CardTitle>
                <CardDescription className="text-xs">Publish a secure vault link or product.</CardDescription>
              </div>
              <button
                onClick={() => setCreateOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-200 text-zinc-500 hover:text-zinc-900 dark:border-zinc-800 dark:text-zinc-400 cursor-pointer"
              >
                <X className="h-4 w-4" />
              </button>
            </CardHeader>
            <form onSubmit={handleCreateVault}>
              <CardContent className="space-y-4 pt-6">
                <Input
                  id="vault-title"
                  label="Product Title"
                  placeholder="e.g. Figma Source Files & Assets"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    id="vault-price"
                    label="Price (USD)"
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder="29.00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
                      Visibility
                    </label>
                    <div className="h-10 border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950 rounded-lg flex items-center px-3 text-sm text-zinc-500 dark:text-zinc-400">
                      Private (Expiring link)
                    </div>
                  </div>
                </div>
                <Input
                  id="vault-url"
                  label="Secure Redirect URL / Download Link"
                  type="url"
                  placeholder="https://drive.google.com/drive/folders/..."
                  value={secureUrl}
                  onChange={(e) => setSecureUrl(e.target.value)}
                  required
                />
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
                  ⚠️ Newly created vaults are automatically sent to the admin verification queue to prevent spam listings.
                </p>
              </CardContent>
              <CardHeader className="border-t border-zinc-150 pt-4 dark:border-zinc-800 flex flex-row justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setCreateOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" variant="primary">
                  Submit for Review
                </Button>
              </CardHeader>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
