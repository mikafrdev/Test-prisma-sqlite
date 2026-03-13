import { prisma } from "@/lib/prisma"
import ArticleList from "@/components/ArticleList"

export default async function Page() {
   const articles = await prisma.article.findMany()
   return (
      <main className="mainContainer">
         <h1>Display</h1>
         <ArticleList articles={articles} />
      </main>
   )
}