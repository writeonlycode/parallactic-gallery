"use server";

import { supabase } from "@/lib/supabase";
import { revalidatePath } from "next/cache";

export async function imagesUpload(previousState: any, formData: FormData) {
  const response = await supabase.storage
    .from("images")
    .upload(formData.get("path") as string, formData.get("file") as File);

  if (!response.error) revalidatePath("/");

  return response;
}
