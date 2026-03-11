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

   /*********************************************
    * 
    * 
    * model Article {
      id         Int       @id @default(autoincrement())
      title      String
      slug       String    @unique
      content    String
      published  Boolean   @default(false)
      createdAt  DateTime  @default(now())
      updatedAt  DateTime  @updatedAt
      author     User      @relation(fields: [authorId], references: [id])
      authorId   Int
      category   Category? @relation(fields: [categoryId], references: [id])
      categoryId Int?
      comments   Comment[]
      }
    * 
    * 
    * *******************************************/

   return (
      <main className="mainContainer">
         <h1>Add</h1>
         <ul>
            {articles.map((article: Article) => (
               <li key={article.id}>{article.title}</li>
            ))}
         </ul>
         <form className="w-full max-w-sm">
            <FieldGroup>
               <Field>
                  <FieldLabel htmlFor="form-name">Name</FieldLabel>
                  <Input
                     id="form-name"
                     type="text"
                     placeholder="Evil Rabbit"
                     required
                  />
               </Field>
               <Field>
                  <FieldLabel htmlFor="form-email">Email</FieldLabel>
                  <Input
                     id="form-email"
                     type="email"
                     placeholder="john@example.com"
                  />
                  <FieldDescription>
                     We&apos;ll never share your email with anyone.
                  </FieldDescription>
               </Field>
               <div className="grid grid-cols-2 gap-4">
                  <Field>
                     <FieldLabel htmlFor="form-phone">Phone</FieldLabel>
                     <Input
                        id="form-phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                     />
                  </Field>
                  <Field>
                     <FieldLabel htmlFor="form-country">Country</FieldLabel>
                     <Select defaultValue="us">
                        <SelectTrigger id="form-country">
                           <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                           <SelectItem value="us">United States</SelectItem>
                           <SelectItem value="uk">United Kingdom</SelectItem>
                           <SelectItem value="ca">Canada</SelectItem>
                        </SelectContent>
                     </Select>
                  </Field>
               </div>
               <Field>
                  <FieldLabel htmlFor="form-address">Address</FieldLabel>
                  <Input
                     id="form-address"
                     type="text"
                     placeholder="123 Main St"
                  />
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
