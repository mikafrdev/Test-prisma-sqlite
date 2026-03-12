import { createArticle } from "../../../actions/article";
import { Button } from "@/components/ui/button";
import { prisma } from "../../../src/lib/prisma";
import { Article } from "@/prisma/generated/client";
import {
   Field,
   FieldDescription,
   FieldGroup,
   FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
   Select,
   SelectContent,
   SelectItem,
   SelectTrigger,
   SelectValue,
} from "@/components/ui/select";

export default async function Page() {
   const articles = await prisma.article.findMany();

   return (
      <main className="mainContainer">
         <h1>Add</h1>
         <ul>
            {articles.map((article: Article) => (
               <li key={article.id}>{article.title}</li>
            ))}
         </ul>
         <form action={createArticle} className="w-full max-w-sm">
            <FieldGroup>
               <Field>
                  <FieldLabel htmlFor="form-titre">Titre</FieldLabel>
                  <Input id="title" name="title" type="text" placeholder="Titre" required />
               </Field>
               <Field>
                  <FieldLabel htmlFor="form-content">Content</FieldLabel>
                  <Input
                     id="form-content"
                     name="content"
                     type="textarea"
                     placeholder="Content"
                  />
                  <FieldDescription>
                     Afficher le contenu de l`&apos;article
                  </FieldDescription>
               </Field>

               <Field orientation="horizontal">
                  <Button type="button" variant="outline">
                     Cancel
                  </Button>
                  <Button type="submit">Submit</Button>
               </Field>
            </FieldGroup>
         </form>
      </main>
   );
}
