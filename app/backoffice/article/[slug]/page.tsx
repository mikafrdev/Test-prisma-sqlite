import { prisma } from "@/lib/prisma";

/*********************************************
    * 
    * 
    * model Article {
      id         String    @id @default(uuid(7))
      title      String    @unique
      slug       String    @unique
      content    String    
      published  Boolean   @default(false)
      createdAt  DateTime  @default(now())
      updatedAt  DateTime  @updatedAt

      // Relations
      authorId   Int?
      author     Author?      @relation(fields: [authorId], references: [id])
      category   Category? @relation(fields: [categoryId], references: [id])
      categoryId Int?

      // Relations
      videos     Video[]
      comments   Comment[]
      }
    * 
    * 
    * *******************************************/

export default async function Page({
   params,
}: {
   params: Promise<{ slug: string }>;
}) {
   const { slug } = await params;

   const article = await prisma.article.findUnique({
      where: { slug },
   });

   if (!article) {
      return <div>Article non trouvé !</div>;
   }
   return (
      <div>
         <ul>
            <li>{article.id}</li>
            <li>{article.slug}</li>
            <li>{article.slug}</li>
            <li>{article.content}</li>
            <li>{article.published}</li>
            <li>{new Date(article.createdAt).toLocaleDateString("fr-FR")}</li>
            <li>{new Date(article.updatedAt).toLocaleDateString("fr-FR")}</li>
         </ul>
      </div>
   );
}
