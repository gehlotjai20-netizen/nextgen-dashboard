// import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://phlqasrijpxcwtawjdnh.supabase.co",
  "sb_publishable_olTgP9abYdogxDwk4j06rg_i9D0P_GC"
);