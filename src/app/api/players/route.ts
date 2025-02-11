// src/app/api/players/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const players = await prisma.player.findMany({
      include: {
        matches: true,
      },
    });
    return NextResponse.json(players);
  } catch (error) {
    console.error("Database error:", error);
    return NextResponse.json(
      {
        error: "Failed to fetch players",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
