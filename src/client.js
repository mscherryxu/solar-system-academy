import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://ilmlllqbsicqehdybrlp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsbWxsbHFic2ljcWVoZHlicmxwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzIxOTg0NDUsImV4cCI6MTk4Nzc3NDQ0NX0.pBFPBwoWqP5HYoSTSVPLjOcfIfQHyarkqiXFauhtvuE"
);
