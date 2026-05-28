export const siteConfig = {
  name: "LinkVault",
  description: "The secure, production-grade digital vault and marketplace for content creators, developers, and sellers.",
  url: "https://linkvault.com",
  mainNav: [
    { title: "Features", href: "#features" },
    { title: "Pricing", href: "#pricing" },
    { title: "Testimonials", href: "#testimonials" },
  ],
  buyerNav: [
    { title: "Library", href: "/buyer", icon: "Library" },
    { title: "Order History", href: "/buyer/orders", icon: "History" },
    { title: "Downloads", href: "/buyer/downloads", icon: "Download" },
    { title: "Profile Settings", href: "/buyer/settings", icon: "Settings" },
  ],
  sellerNav: [
    { title: "Overview", href: "/seller", icon: "TrendingUp" },
    { title: "My Vaults", href: "/seller/vaults", icon: "Folder" },
    { title: "Customers", href: "/seller/customers", icon: "Users" },
    { title: "Payouts", href: "/seller/payouts", icon: "DollarSign" },
    { title: "Store Settings", href: "/seller/settings", icon: "Sliders" },
  ],
  adminNav: [
    { title: "Dashboard", href: "/admin", icon: "Shield" },
    { title: "User Base", href: "/admin/users", icon: "Users" },
    { title: "Active Vaults", href: "/admin/vaults", icon: "FolderCheck" },
    { title: "Security Log", href: "/admin/security", icon: "Terminal" },
    { title: "Platform Settings", href: "/admin/settings", icon: "Settings" },
  ],
};

export type SiteConfig = typeof siteConfig;
