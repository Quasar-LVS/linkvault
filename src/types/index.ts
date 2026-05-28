// Common TypeScript definitions for the LinkVault platform
export interface User {
  id: string;
  name: string;
  email: string;
  role: "buyer" | "seller" | "admin";
  createdAt: Date;
}

export interface VaultItem {
  id: string;
  title: string;
  description: string;
  url: string;
  price: number;
  sellerId: string;
  downloadsCount: number;
  createdAt: Date;
}

export interface Transaction {
  id: string;
  vaultItemId: string;
  buyerId: string;
  amount: number;
  status: "pending" | "completed" | "failed";
  createdAt: Date;
}
