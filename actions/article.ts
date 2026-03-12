"use server";

import slugify from "slugify";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createArticle(formData: FormData) {
   const title = formData.get("title") as string;

   console.log("formData : ", formData);
   console.log("title : ", title);

   await prisma.article.create({
      data: {
         title,
         slug: slugify(title, { lower: true, strict: true }),
         content: formData.get("content") as string,
         /* author: {
            connect: { id: formData.get("authorId") as string },
         }, */
      },
   });
   revalidatePath("/backoffice");
}
