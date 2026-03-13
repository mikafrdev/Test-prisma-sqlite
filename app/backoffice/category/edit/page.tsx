import { prisma } from "@/lib/prisma";
import { Article } from "@/prisma/generated/client";

export default async function Page() {
   const articles = await prisma.article.findMany();

   console.log(articles)

   return (
   <div>
      <h1>Update</h1>
      <ul>
         {articles.map((article: Article) => (
            <li key={article.id}>{article.title}</li>
         ))}
      </ul>
   </div>);
}
