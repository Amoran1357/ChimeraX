import { supabase } from "./supabase";

export async function saveTrade(
  trade:any
) {

  return supabase
    .from("trades")
    .insert(trade);

}
