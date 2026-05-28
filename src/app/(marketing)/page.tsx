import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Shield, Sparkles, Zap, ArrowRight, CheckCircle2, Lock, ArrowUpRight } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="relative overflow-hidden bg-zinc-50 dark:bg-black">
      {/* Decorative background grids & circles */}
      <div className="absolute top-0 left-1/2 -z-10 h-[600px] w-full -translate-x-1/2 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)]" />
      <div className="absolute top-[-10%] left-[-10%] -z-10 h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/5" />
      <div className="absolute top-[20%] right-[-10%] -z-10 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-3xl dark:bg-purple-500/5" />

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-32 lg:px-8 flex flex-col items-center text-center">
        {/* Banner Pill */}
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/80 bg-indigo-50/50 px-3.5 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-950/20 dark:text-indigo-400">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Introducing LinkVault 1.0</span>
        </div>

        {/* Headline */}
        <h1 className="mt-8 max-w-4xl text-4xl font-extrabold tracking-tight text-zinc-950 sm:text-6xl dark:text-zinc-50">
          Secure, Sell, and Monetize Your{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Digital Assets
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-655 dark:text-zinc-400">
          Upload files, share exclusive links, and lock license codes behind secure vaults. Get paid instantly while we handle download links, authentication, and security.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/signup">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started for Free <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View Demo Portal
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 border-t border-zinc-150 dark:border-zinc-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Engineered for Digital Sellers
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            From secure storage to frictionless customer downloading, we provide everything needed to run your asset business.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Card hoverable className="border-indigo-100/50 dark:border-indigo-950/20">
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500 text-white">
                <Lock className="h-5 w-5" />
              </div>
              <CardTitle className="mt-4 text-lg">Secure Link Vaults</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Encrypt and store access links, PDFs, zip archives, or API tokens. Keep files secure until the transaction verifies.
              </p>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card hoverable className="border-indigo-100/50 dark:border-indigo-950/20">
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500 text-white">
                <Zap className="h-5 w-5" />
              </div>
              <CardTitle className="mt-4 text-lg">Frictionless Checkouts</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                A streamlined buyer journey. Purchase with standard card checkout and get redirected straight to vault access.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card hoverable className="border-indigo-100/50 dark:border-indigo-950/20">
            <CardHeader>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-500 text-white">
                <Shield className="h-5 w-5" />
              </div>
              <CardTitle className="mt-4 text-lg">Anti-Piracy & Audits</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Track download access, verify buyer email logs, generate expiring link URLs, and monitor suspicious download traffic.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="mx-auto max-w-7xl px-6 py-20 lg:px-8 border-t border-zinc-150 dark:border-zinc-900">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
            Choose the plan that matches your business growth. Scale up at any time.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Hobby Tier */}
          <Card hoverable className="relative flex flex-col justify-between border-zinc-200 dark:border-zinc-800">
            <CardHeader>
              <CardTitle className="text-xl">Starter Tier</CardTitle>
              <CardDescription>Perfect for exploring and side projects.</CardDescription>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">$0</span>
                <span className="ml-1 text-sm font-semibold text-zinc-500">/ month</span>
              </div>
              <p className="mt-1 text-xs text-indigo-650 dark:text-indigo-400 font-semibold">+ 5% transaction fee</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 pt-4">
                {["Up to 5 active vaults", "Basic download analytics", "Standard checkout flow", "Secure link redirects"].map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="mr-2.5 h-4 w-4 text-indigo-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Link href="/signup" className="w-full">
                <Button variant="outline" className="w-full">Sign Up Free</Button>
              </Link>
            </div>
          </Card>

          {/* Pro Tier */}
          <Card hoverable className="relative flex flex-col justify-between border-2 border-indigo-600 dark:border-indigo-500 shadow-lg bg-white dark:bg-zinc-950">
            <div className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-3 py-0.5 text-xs font-semibold text-white">
              Most Popular
            </div>
            <CardHeader>
              <CardTitle className="text-xl">Pro Creator</CardTitle>
              <CardDescription>For creators scaling their digital businesses.</CardDescription>
              <div className="mt-4 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight">$19</span>
                <span className="ml-1 text-sm font-semibold text-zinc-500">/ month</span>
              </div>
              <p className="mt-1 text-xs text-emerald-650 dark:text-emerald-400 font-semibold">0% transaction fee</p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3 pt-4">
                {[
                  "Unlimited active vaults",
                  "Advanced download analytics",
                  "Expiring and IP-locked links",
                  "Custom branding & domains",
                  "Priority customer support",
                  "API developer access",
                ].map((feature) => (
                  <li key={feature} className="flex items-center text-sm text-zinc-600 dark:text-zinc-400">
                    <CheckCircle2 className="mr-2.5 h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <div className="p-6 pt-0">
              <Link href="/signup" className="w-full">
                <Button variant="primary" className="w-full">Get Started Pro</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 border-t border-zinc-150 dark:border-zinc-900">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-tr from-indigo-900 to-violet-900 px-8 py-16 text-center shadow-2xl sm:px-16">
          <div className="absolute top-0 left-1/2 -z-10 h-full w-full -translate-x-1/2 [mask-image:radial-gradient(100%_100%_at_top,transparent,white)] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:20px_20px]" />
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Start Securing Your Assets Today
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-indigo-200">
            Join thousands of developers and creators hosting and selling their code templates, assets, and files securely.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/signup">
              <Button variant="secondary" size="lg">
                Create Your Account Now <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
