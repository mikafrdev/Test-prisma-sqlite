import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { PageLayout } from "@/layout";
import Link from "next/link";
import cn from 'classnames';
import styles from "./styles/HomePage.module.css";

export default function Home() {
   return (
      <PageLayout>
         <main className={cn(styles.homeContainer, "mainContainer")}>
            <h1 className="w-full py-4 text-2xl">Test Prisma Sqlite</h1>

            <div className={styles.homeCards}>
               <Card className={styles.homeCard}>
                  <CardHeader>
                     <CardTitle>Articles</CardTitle>
                     <CardDescription>
                        Backoffice
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <ul>
                        <li><Button variant="outline"><Link href="/backoffice/articles/list">Afficher / Supprimez les actualités</Link></Button></li>
                        <li><Button variant="secondary"><Link href="/backoffice/articles/add">Ajouter une actualité</Link></Button></li>
                        <li><Button variant="secondary"><Link href="/backoffice/articles/edit">Mettre à jour les actualités</Link></Button></li>
                     </ul>
                  </CardContent>
               </Card>
               <Card className={styles.homeCard}>
                  <CardHeader>
                     <CardTitle>Category</CardTitle>
                     <CardDescription>
                        Backoffice
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <ul>
                        <li><Button variant="outline"><Link href="/backoffice/category/list">Afficher / Supprimez les category</Link></Button></li>
                        <li><Button variant="secondary"><Link href="/backoffice/category/add">Ajouter une category</Link></Button></li>
                        <li><Button variant="secondary"><Link href="/backoffice/category/edit">Mettre à jour les category</Link></Button></li>
                     </ul>
                  </CardContent>
               </Card>
               
            </div>
         </main>
      </PageLayout>
   );
}
