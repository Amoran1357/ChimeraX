import { supabase } from "./supabase";

export async function saveTrade(
  trade:any
) {

  return supabase
    .from("trades")
    .insert(trade);

}
import { supabase } from "./supabase";

export async function saveTrade(
  action: string,
  token: string,
  amount: number
) {

  return supabase
    .from("trades")
    .insert({
      action,
      token,
      amount
    });

}
