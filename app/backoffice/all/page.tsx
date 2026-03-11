import { prisma } from "../../../src/lib/prisma";
import { Article } from "@/prisma/generated/client";

export default async function Page() {
   const articles = await prisma.article.findMany();

   console.log(articles)

   return (
   <div>
      <h1>Add</h1>
      <ul>
         {articles.map((article: Article) => (
            <li key={article.id}>{article.title}</li>
         ))}
      </ul>
      <form>
         <input type="text" name="title" placeholder="title" className="px-2 py-1 rounded-sm border-2" />
      </form>
   </div>);
}
