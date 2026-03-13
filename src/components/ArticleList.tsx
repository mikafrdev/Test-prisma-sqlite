"use client";

import { useState } from "react";
import { deleteArticle, updateArticle } from "@/actions/article";
import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { X, Pencil, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/prisma/generated/client";

function ArticleCard({ article }: { article: Article }) {
   const [editing, setEditing] = useState(false);
   const [title, setTitle] = useState(article.title);
   const [content, setContent] = useState(article.content);

   async function handleUpdate() {
      const formData = new FormData();
      formData.set("title", title);
      formData.set("slug", article.slug);
      formData.set("content", content);
      await updateArticle(article.id, formData);
      setEditing(false);
   }

   return (
      <Card key={article.id} className="relative">
         <Image
            src="/Capture-d-ecran-2026-03-13-110424.jpg"
            alt="Event cover"
            className="relative aspect-video w-full object-cover"
            width={120}
            height={120}
            priority
         />
         <CardHeader className="relative">
            <div className="absolute top-1 right-1 flex gap-1">
               {editing ? (
                  <Button variant="outline" size="icon" onClick={handleUpdate}>
                     <Check />
                  </Button>
               ) : (
                  <Button
                     variant="outline"
                     size="icon"
                     onClick={() => setEditing(true)}
                  >
                     <Pencil />
                  </Button>
               )}
               <Button
                  size="icon"
                  variant="destructive"
                  className="bg-white border-[lab(90.952_-0.0000596046_0)]"
                  onClick={() => deleteArticle(article.id)}
               >
                  <X />
               </Button>
            </div>

            {editing ? (
               <>
                  <input
                     className="w-full border rounded px-2 py-1 text-lg font-semibold"
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                  />
                  <textarea
                     className="w-full border rounded px-2 py-1 mt-2"
                     value={content}
                     onChange={(e) => setContent(e.target.value)}
                     rows={4}
                  />
               </>
            ) : (
               <>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription>{content}</CardDescription>
               </>
            )}
         </CardHeader>
         <CardContent>
            <ul>
               <li>{article.published ? "Publié" : "Brouillon"}</li>
               <li>
                  {new Date(article.createdAt).toLocaleDateString("fr-FR")}
               </li>
               <li>
                  {new Date(article.updatedAt).toLocaleDateString("fr-FR")}
               </li>
            </ul>
            <code>{article.slug}</code>
         </CardContent>
         <CardFooter>
            <Button className="w-full" asChild>
               <Link href={`/backoffice/articles/${article.slug}`}>Voir</Link>
            </Button>
         </CardFooter>
      </Card>
   );
}

export default function ArticleList({ articles }: { articles: Article[] }) {
   if (!articles || articles.length === 0) {
      return (
         <div className="flex h-screen items-center justify-center">
            Pas d&apos;articles trouvés
         </div>
      );
   }

   return (
      <div className="flex flex-col gap-5">
         {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
         ))}
      </div>
   );
}
