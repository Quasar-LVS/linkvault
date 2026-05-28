import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/40">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-sm text-zinc-500 hover:text-indigo-600 transition-colors dark:text-zinc-400 dark:hover:text-indigo-400"
            >
              {item.title}
            </Link>
          ))}
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-zinc-500 dark:text-zinc-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}, Inc. All rights
            reserved. Built for creators and developers.
          </p>
        </div>
      </div>
    </footer>
  );
}
