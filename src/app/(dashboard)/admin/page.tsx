"use client";

import * as React from "react";
import { StatsCard } from "@/components/dashboard/stats-card";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, ShieldCheck } from "lucide-react";

interface VerificationItem {
  id: string;
  title: string;
  seller: string;
  price: string;
  secureUrl: string;
  submittedAt: string;
}

const initialQueue: VerificationItem[] = [
  {
    id: "q-1",
    title: "Anti-DDoS Nginx Reverse Proxy Configs",
    seller: "ops_guru",
    price: "$35.00",
    secureUrl: "https://drive.google.com/drive/folders/nginx-ddos",
    submittedAt: "2 hours ago",
  },
  {
    id: "q-2",
    title: "Machine Learning Model Weights (ResNet)",
    seller: "ai_enthusiast",
    price: "$120.00",
    secureUrl: "https://huggingface.co/models/resnet-custom-weights",
    submittedAt: "5 hours ago",
  },
  {
    id: "q-3",
    title: "Obsolete PHP legacy bundle",
    seller: "retro_coder",
    price: "$15.00",
    secureUrl: "https://github.com/retro/php-legacy-vault",
    submittedAt: "1 day ago",
  },
];

export default function AdminDashboard() {
  const [queue, setQueue] = React.useState<VerificationItem[]>(initialQueue);
  const [verifiedCount, setVerifiedCount] = React.useState(142);
  const [logs, setLogs] = React.useState<string[]>([
    "System Startup: all service endpoints nominal.",
    "DB Connection: active, pool usage 4%.",
    "Platform Fee Audit: verified 100% matched transactions.",
  ]);

  const handleAction = (id: string, action: "approve" | "reject", title: string) => {
    setQueue(queue.filter((item) => item.id !== id));
    if (action === "approve") {
      setVerifiedCount((prev) => prev + 1);
      setLogs((prev) => [
        `[APPROVED] Vault "${title}" verified successfully.`,
        ...prev,
      ]);
    } else {
      setLogs((prev) => [
        `[REJECTED] Vault "${title}" flagged for terms violation.`,
        ...prev,
      ]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro */}
      <div>
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-2xl">
          Platform Overview
        </h2>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          Admin portal. Manage global transactions, evaluate security alerts, and review newly created Link Vaults.
        </p>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        <StatsCard
          title="Global Transactions"
          value="$45,820.00"
          iconName="Banknote"
          trend={{ value: "Platform Fee: $2,291.00", isPositive: true }}
          description="Gross digital volume"
          color="emerald"
        />
        <StatsCard
          title="Pending Moderation"
          value={`${queue.length} Vaults`}
          iconName="ShieldAlert"
          description="Awaiting manual inspection"
          color="rose"
        />
        <StatsCard
          title="Verified Vaults"
          value={verifiedCount}
          iconName="ShieldCheck"
          description="Total active listings online"
          color="indigo"
        />
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Verification Queue */}
        <Card className="lg:col-span-2 border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="text-base font-semibold">Vault Verification Queue</CardTitle>
            <CardDescription className="text-xs">
              Confirm legitimacy of hosted links before enabling buyer checkouts.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0 overflow-x-auto">
            {queue.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-8 text-center">
                <ShieldCheck className="h-10 w-10 text-emerald-500 mb-2" />
                <p className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">All caught up!</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">No vaults are currently awaiting review.</p>
              </div>
            ) : (
              <table className="w-full min-w-[500px] border-collapse text-left text-xs">
                <thead className="border-b border-zinc-150 bg-zinc-50/50 font-semibold uppercase tracking-wider text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950">
                  <tr>
                    <th className="px-6 py-3">Product details</th>
                    <th className="px-6 py-3">Price</th>
                    <th className="px-6 py-3">Link URL</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-150 dark:divide-zinc-850">
                  {queue.map((item) => (
                    <tr key={item.id} className="hover:bg-zinc-50/50 dark:hover:bg-zinc-900/30 transition-colors">
                      <td className="px-6 py-4">
                        <p className="font-semibold text-zinc-900 dark:text-zinc-50">{item.title}</p>
                        <p className="text-[10px] text-zinc-500 dark:text-zinc-400">by @{item.seller} • {item.submittedAt}</p>
                      </td>
                      <td className="px-6 py-4 font-medium text-zinc-950 dark:text-zinc-50">{item.price}</td>
                      <td className="px-6 py-4 truncate max-w-40 text-zinc-500 dark:text-zinc-400" title={item.secureUrl}>
                        {item.secureUrl}
                      </td>
                      <td className="px-6 py-4 text-right flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-rose-600 hover:bg-rose-50 hover:text-rose-600 dark:hover:bg-rose-500/10"
                          onClick={() => handleAction(item.id, "reject", item.title)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-600 dark:hover:bg-emerald-500/10"
                          onClick={() => handleAction(item.id, "approve", item.title)}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </CardContent>
        </Card>

        {/* Platform Logs / Security Feeds */}
        <Card className="border-zinc-200 dark:border-zinc-800">
          <CardHeader>
            <CardTitle className="text-base font-semibold">System Audit Trail</CardTitle>
            <CardDescription className="text-xs">Real-time status updates.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 rounded-lg bg-zinc-950 p-4 font-mono text-[11px] leading-relaxed text-zinc-300">
              {logs.map((log, index) => (
                <div key={index} className="flex items-start gap-2 border-b border-zinc-900 pb-2 last:border-0 last:pb-0">
                  <span className="text-zinc-600">&gt;&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
