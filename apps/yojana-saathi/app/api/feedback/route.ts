import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";
import { isSupabaseConfigured, SUPABASE_ANON_KEY, SUPABASE_URL } from "@/lib/supabase/env";

const KINDS = new Set(["scheme-issue", "contact"]);
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const clip = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Scheme issue reports and contact messages. Stored in Supabase when configured. */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid json" }, { status: 400 });
  }

  const row = {
    kind: clip(body.kind, 20),
    slug: clip(body.slug, 120) || null,
    type: clip(body.type, 20) || null,
    name: clip(body.name, 120) || null,
    message: clip(body.message, 2000),
    email: clip(body.email, 200) || null,
    page: clip(body.page, 300) || null,
  };

  if (!KINDS.has(row.kind) || row.message.length < 5 || (row.email && !EMAIL.test(row.email))) {
    return NextResponse.json({ error: "invalid input" }, { status: 400 });
  }

  if (!isSupabaseConfigured()) {
    // TODO: configure Supabase (see README) to store feedback; until then it only reaches the server logs.
    console.info("[feedback]", JSON.stringify({ ...row, email: row.email ? "(provided)" : null }));
    return NextResponse.json({ ok: true, stored: false });
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { auth: { persistSession: false } });
  const { error } = await supabase.from("feedback").insert(row);
  if (error) {
    console.error("[feedback] insert failed", error.message);
    return NextResponse.json({ error: "could not save" }, { status: 502 });
  }
  return NextResponse.json({ ok: true, stored: true });
}
