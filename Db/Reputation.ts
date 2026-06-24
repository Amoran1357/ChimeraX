import { supabase } from "./supabase";

export async function updateReputation(
  elder: string,
  score: number
) {

  return supabase
    .from("reputation")
    .insert({
      elder,
      score
    });

}
