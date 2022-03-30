import { createClient } from "@supabase/supabase-js";

// Provide a custom schema. Defaults to "public".
const supabase = createClient(
  "https://peqgyvfxrmrwokruwopr.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBlcWd5dmZ4cm1yd29rcnV3b3ByIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDUwNjM5MTQsImV4cCI6MTk2MDYzOTkxNH0.KMerQLrsV2uzbfTPlafw-lEdpk4BMfQRK8UUSgav0hc",
  {
    schema: "other_schema",
  }
);
