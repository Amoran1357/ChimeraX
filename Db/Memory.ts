import { supabase } from "./supabase";

export async function saveMemory(
  category: string,
  payload: any
) {

  return supabase
    .from("memory")
    .insert({
      category,
      payload
    });

}
