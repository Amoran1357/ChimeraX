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
