import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message } = await req.json();

    const pythonRes = await fetch(`${process.env.BACKEND_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    if (!pythonRes.ok) {
      throw new Error(
        `Python backend responded with status: ${pythonRes.status}`
      );
    }

    const data = await pythonRes.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json({
      response: "Sorry, there was an error processing your request.",
    });
  }
}
