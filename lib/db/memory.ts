import { supabase } from "./supabase";

export async function saveMemory(
  record:any
) {

  return supabase
    .from("memory")
    .insert(record);

}
