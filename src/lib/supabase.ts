import { createClient } from "@supabase/supabase-js";

import { Database } from "../../database.types";

if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
  throw new Error("NEXT_PUBLIC_SUPABASE_URL environment varialble is not defined.");
}

if (!process.env.NEXT_PUBLIC_SUPABASE_KEY) {
  throw new Error("NEXT_PUBLIC_SUPABASE_KEY environment varialble is not defined.");
}

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY,
);
