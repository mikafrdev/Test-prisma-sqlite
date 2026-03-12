import { Button } from "@/components/ui/button";
import { prisma } from "../../../src/lib/prisma";
import { Article } from "@/prisma/generated/client";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";

export default async function Page() {
   const articles = await prisma.article.findMany();

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

   //Article
   const id = "Mensonges Olivier Véran";
   const title = "[TITLE] "+"Mensonges Olivier Véran";
   const slug = "[SLUG] "+"/Mensonges-Olivier-Veran";
   const content = "[CONTENT] "+"Mensonges Olivier Véran";
   const published = "published";
   const createdAt = "createdAt";
   const updatedAt = "updatedAt";

   //Video

   return (
      <main className="mainContainer">
         <h1>Display</h1>
         {!articles || articles.length === 0 ? (
            <p> Pas d&apos;enregistrements</p>
         ) : (
            <ul>
               {articles.map((article) => (
                  <li key={article.id}>{article.title}</li>
               ))}
            </ul>
         )}
         <h1>Modèle d&apos;article</h1>
         <Card className="">
            <CardHeader>
               <CardTitle>{title || ""}</CardTitle>
               <CardDescription>{content || ""}</CardDescription>
            </CardHeader>
            <CardContent>
               <ul>
                  <li>{published || ""}</li>
                  <li>{createdAt || ""}</li>
                  <li>{updatedAt || ""}</li>
               </ul>
            </CardContent>
            <CardFooter className="justify-center">
               <h2>
                  <code>{slug}</code>
               </h2>
            </CardFooter>
         </Card>
      </main>
   );
}
