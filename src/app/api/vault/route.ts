import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const vaultId = searchParams.get("id");

  if (!vaultId) {
    return NextResponse.json(
      { status: 400, message: "Missing vault ID parameter." },
      { status: 400 }
    );
  }

  return NextResponse.json({
    status: 200,
    message: "Placeholder Vault Access API. Real link verification logic goes here.",
    vaultId,
    secureUrl: `https://vault.linkvault.com/access/${vaultId}`,
  });
}
