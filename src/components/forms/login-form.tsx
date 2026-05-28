"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { KeyRound, Shield, User, ArrowRight } from "lucide-react";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setError("");
    setLoading(true);
    // Simulate login based on email hint or defaults to buyer
    setTimeout(() => {
      setLoading(false);
      if (email.includes("admin")) {
        router.push("/admin");
      } else if (email.includes("seller")) {
        router.push("/seller");
      } else {
        router.push("/buyer");
      }
    }, 1000);
  };

  const handleQuickLogin = (role: "buyer" | "seller" | "admin") => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      router.push(`/${role}`);
    }, 500);
  };

  return (
    <Card className="w-full max-w-md shadow-xl border-zinc-200/80 dark:border-zinc-800/80">
      <CardHeader className="space-y-1 text-center">
        <CardTitle className="text-2xl font-bold tracking-tight">
          Welcome back
        </CardTitle>
        <CardDescription>
          Enter your credentials or use a quick demo login
        </CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          {error && (
            <div className="rounded-lg bg-rose-50 p-3 text-xs font-medium text-rose-600 dark:bg-rose-500/10 dark:text-rose-400">
              {error}
            </div>
          )}
          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400"
              >
                Password
              </label>
              <a
                href="#"
                className="text-xs text-indigo-600 hover:underline dark:text-indigo-400"
              >
                Forgot?
              </a>
            </div>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
              className="mt-1"
            />
          </div>

          <Button type="submit" className="w-full mt-2" loading={loading}>
            Sign In with Email
          </Button>
        </CardContent>
      </form>

      {/* Divider */}
      <div className="relative px-6 pb-2">
        <div className="absolute inset-0 flex items-center px-6">
          <div className="w-full border-t border-zinc-200 dark:border-zinc-800" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-white px-2 text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
            Quick Demo Portals
          </span>
        </div>
      </div>

      {/* Quick Portal Switchers */}
      <CardFooter className="flex flex-col gap-2 pt-2">
        <button
          onClick={() => handleQuickLogin("buyer")}
          disabled={loading}
          className="flex w-full items-center justify-between rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 transition-all cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <User className="h-4.5 w-4.5 text-emerald-500" />
            Sign in as Buyer
          </span>
          <ArrowRight className="h-4 w-4 text-zinc-400" />
        </button>
        <button
          onClick={() => handleQuickLogin("seller")}
          disabled={loading}
          className="flex w-full items-center justify-between rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 transition-all cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <KeyRound className="h-4.5 w-4.5 text-indigo-500" />
            Sign in as Seller
          </span>
          <ArrowRight className="h-4 w-4 text-zinc-400" />
        </button>
        <button
          onClick={() => handleQuickLogin("admin")}
          disabled={loading}
          className="flex w-full items-center justify-between rounded-lg border border-zinc-200 px-4 py-2.5 text-sm font-medium hover:bg-zinc-50 dark:border-zinc-800 dark:hover:bg-zinc-900 transition-all cursor-pointer"
        >
          <span className="flex items-center gap-2">
            <Shield className="h-4.5 w-4.5 text-violet-500" />
            Sign in as Admin
          </span>
          <ArrowRight className="h-4 w-4 text-zinc-400" />
        </button>
      </CardFooter>
    </Card>
  );
}
