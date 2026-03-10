import { prisma } from "../../src/lib/prisma";
import { Article } from "@/prisma/generated/client";

export default async function Page() {
   const articles = await prisma.article.findMany();

   return;
   <div>
      <ul>
         {articles.map((article: Article) => (
            <li key={article.id}>{article.title}</li>
         ))}
      </ul>
   </div>;
}
