import { supabase } from "./supabase";

export async function saveElderVote(
  elder: string,
  vote: string,
  confidence: number
) {

  return supabase
    .from("elders")
    .insert({
      elder,
      vote,
      confidence
    });

}

export async function getElderVotes() {

  return supabase
    .from("elders")
    .select("*")
    .order("created_at", {
      ascending: false
    });

}
