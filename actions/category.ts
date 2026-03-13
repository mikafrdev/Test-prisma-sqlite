"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createCategory(formData: FormData) {
   const name = formData.get("name") as string;

   console.log("formData : ", formData);
   console.log("name : ", name);

   await prisma.category.create({
      data: {
         name
      },
   });
   revalidatePath("/backoffice");
}
