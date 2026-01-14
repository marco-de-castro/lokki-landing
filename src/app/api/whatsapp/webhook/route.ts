// src/app/api/whatsapp/webhook/route.ts
import { NextResponse } from "next/server";
import { oliviaReply } from "@/lib/oliviaDistribuidor";

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || "";
const ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN || "";
const PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID || "";

/**
 * GET: Meta webhook verification handshake
 * Meta calls: ?hub.mode=subscribe&hub.verify_token=...&hub.challenge=...
 */
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN && challenge) {
    return new NextResponse(challenge, { status: 200 });
  }
  return new NextResponse("Forbidden", { status: 403 });
}

async function sendWhatsAppText(to: string, body: string) {
  if (!ACCESS_TOKEN || !PHONE_NUMBER_ID) {
    // We haven't filled these yet; during early testing we just no-op.
    console.warn("WhatsApp token/phone_number_id not configured yet.");
    return;
  }

  const url = `https://graph.facebook.com/v20.0/${PHONE_NUMBER_ID}/messages`;

  const res = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messaging_product: "whatsapp",
      to,
      type: "text",
      text: { body },
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`WhatsApp send failed: ${res.status} ${err}`);
  }
}

/**
 * POST: Incoming messages
 * We parse message text and reply using Olivia's FAQ logic.
 */
export async function POST(req: Request) {
  const payload = await req.json();

  // Typical structure: entry[0].changes[0].value.messages[0]
  const entry = payload?.entry?.[0];
  const change = entry?.changes?.[0];
  const value = change?.value;

  const msg = value?.messages?.[0];
  const from = msg?.from; // user's number (string)
  const text = msg?.text?.body;

  // Ignore non-text messages and non-message callbacks (statuses, etc.)
  if (!from || !text) {
    return NextResponse.json({ ok: true });
  }

  const reply = oliviaReply(text);

  try {
    await sendWhatsAppText(from, reply);
  } catch (e) {
    console.error(e);
  }

  return NextResponse.json({ ok: true });
}
