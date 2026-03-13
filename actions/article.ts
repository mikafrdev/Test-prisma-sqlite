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
   revalidatePath("/backoffice/add");
}

export async function deleteArticle(id: string) {
   await prisma.article.delete({
      where: { id },
   });
   revalidatePath("/backoffice/articles");
}

// actions/article.ts
export async function updateArticle(id: string, formData: FormData) {
   try {
      await prisma.article.update({
         where: { id },
         data: {
            title: formData.get("title") as string,
            slug: formData.get("slug") as string,
            content: formData.get("content") as string,
         },
      });
      revalidatePath("/backoffice/articles");
      return { success: true };
   } catch {
      return { success: false, error: "Erreur lors de la mise à jour" };
   }
}
