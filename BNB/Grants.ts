export async function findGrantOpportunities() {

  return [

    {
      program: "BNB Ecosystem Grant",
      fitScore: 94,
      category: "AI"
    },

    {
      program: "Infrastructure Program",
      fitScore: 88,
      category: "Developer Tools"
    }

  ];

}
import { supabase }
from "@/lib/db/supabase";

export async function saveGrantOpportunity(
  program: string,
  fitScore: number,
  category: string
) {

  return supabase
    .from("grant_opportunities")
    .insert({
      program,
      fit_score: fitScore,
      category
    });

}
