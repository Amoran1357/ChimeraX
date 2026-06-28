import { supabase }
from "@/lib/db/supabase";

export async function savePortfolioSnapshot(
  wallet: string,
  balance: number
) {

  return supabase
    .from("portfolio_snapshots")
    .insert({
      wallet,
      balance
    });

}
