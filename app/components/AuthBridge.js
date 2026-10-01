"use client";

import { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const XSITE_SUPABASE_URL = "https://zydhfhfhspflvhlpmokj.supabase.co";
const XSITE_SUPABASE_KEY = "sb_publishable_DJN48TNChvPce3MZ7bDaiw_5Q8Eam6x";
const XSITE_HOME = "https://xsite-live.vercel.app/";
const STORAGE_KEY = "xsiteAuthReturnTargetV1";
const LOCAL_STORAGE_KEY = "xsiteAuthReturnTargetPersistentV1";
const ALLOWED_TARGETS = [
  "https://classroom-bingo-live.vercel.app",
  "https://linkup-classroom-live.vercel.app",
  "https://domiknow.vercel.app",
  "https://x-squared-live.vercel.app",
  "https://four-on-four-live.vercel.app"
];

function allowedTarget(raw) {
  try {
    const url = new URL(raw);
    return ALLOWED_TARGETS.some(origin => url.origin === origin) ? url.toString() : "";
  } catch {
    return "";
  }
}

export default function AuthBridge() {
  useEffect(() => {
    let active = true;
    const supabase = createClient(XSITE_SUPABASE_URL, XSITE_SUPABASE_KEY, {
      auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
    });

    async function run() {
      const params = new URLSearchParams(window.location.search);
      const requestedTarget = allowedTarget(params.get("next") || "");

      if (requestedTarget) {
        sessionStorage.setItem(STORAGE_KEY, requestedTarget);
        localStorage.setItem(LOCAL_STORAGE_KEY, requestedTarget);
      }

      const pendingTarget = allowedTarget(
        sessionStorage.getItem(STORAGE_KEY) ||
        localStorage.getItem(LOCAL_STORAGE_KEY) ||
        ""
      );
      if (!pendingTarget) return;

      const { data: sessionData } = await supabase.auth.getSession();
      const session = sessionData?.session || null;

      if (session?.access_token && session?.refresh_token) {
        sessionStorage.removeItem(STORAGE_KEY);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        const hash = new URLSearchParams({
          oauth_bridge: "1",
          access_token: session.access_token,
          refresh_token: session.refresh_token,
          token_type: session.token_type || "bearer",
          expires_at: String(session.expires_at || "")
        }).toString();
        window.location.replace(pendingTarget + (pendingTarget.includes("#") ? "&" : "#") + hash);
        return;
      }

      if (requestedTarget) {
        const { error } = await supabase.auth.signInWithOAuth({
          provider: "google",
          options: {
            redirectTo: XSITE_HOME,
            queryParams: { access_type: "offline", prompt: "select_account" }
          }
        });
        if (error && active) {
          sessionStorage.removeItem(STORAGE_KEY);
          localStorage.removeItem(LOCAL_STORAGE_KEY);
          console.error("Xsite OAuth bridge failed", error);
        }
      }
    }

    run();
    return () => { active = false; };
  }, []);

  return null;
}
