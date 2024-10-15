import { createCookieSessionStorage } from '@remix-run/node';
import { createClient } from '@supabase/supabase-js';

if (!process.env.SUPABASE_URL) {
  throw new Error("SUPABASE_URL is required");
}

if (!process.env.SUPABASE_ANON_KEY) {
  throw new Error("SUPABASE_ANON_KEY is required");
}

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseKey
);

export const authCookie = createCookieSessionStorage({
  cookie: {
    name: "sb:token",
    expires: new Date(Date.now() + 3600),
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
    sameSite: "lax",
    secrets: ["aStrongSecret"],
    secure: process.env.NODE_ENV === "production",
  },
});
