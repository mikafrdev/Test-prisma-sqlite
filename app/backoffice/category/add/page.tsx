import { createCategory } from "@/actions/category";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { Article } from "@/prisma/generated/client";
import {
   Field,
   FieldDescription,
   FieldGroup,
   FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";


export default async function Page() {

   return (
      <main className="mainContainer">
         <h1>Ajouter une catégorie</h1>
         
         <form action={createCategory} className="w-full max-w-sm">
            <FieldGroup>
               <Field>
                  <FieldLabel htmlFor="form-name">Catégorie</FieldLabel>
                  <Input id="name" name="name" type="text" placeholder="Nom" required />
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
