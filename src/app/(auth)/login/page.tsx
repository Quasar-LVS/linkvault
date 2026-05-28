import * as React from "react";
import { LoginForm } from "@/components/forms/login-form";

export const metadata = {
  title: "Sign In - LinkVault",
  description: "Sign in to your LinkVault account to access your digital files and download links.",
};

export default function LoginPage() {
  return <LoginForm />;
}
