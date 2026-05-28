import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    status: 200,
    message: "Placeholder Products API. Backend database logic will go here.",
    data: [],
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    return NextResponse.json({
      status: 201,
      message: "Placeholder Products API. Product created (scaffolded).",
      data: body,
    });
  } catch {
    return NextResponse.json(
      { status: 400, message: "Invalid request payload." },
      { status: 400 }
    );
  }
}
