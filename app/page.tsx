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
import styles from "./styles/HomePage.module.css";

export default function Home() {
   return (
      <PageLayout>
         <main className={styles.homeContainer}>
            <h1 className="w-full py-4 text-2xl">Test Prisma Sqlite</h1>

            <div className={styles.homeCards}>
               <Card className={styles.homeCard}>
                  <CardHeader>
                     <CardTitle>Administration</CardTitle>
                     <CardDescription>
                        Retrouver ici tous les services pour gérer
                        l&apos;administration
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <ul>
                        <li>Affichez les actualités</li>
                        <li>Ajoutez une actualité</li>
                        <li>Mettez à jour les actualités</li>
                        <li>Supprimez les actualités</li>
                     </ul>
                  </CardContent>
                  <CardFooter className="justify-center">
                     <Button variant="outline">
                        <Link href="/backoffice/all">Backoffice ALL</Link>
                     </Button>
                  </CardFooter>
               </Card>
               <Card className={styles.homeCard}>
                  <CardHeader>
                     <CardTitle>Administration</CardTitle>
                     <CardDescription>
                        Retrouver ici tous les services pour gérer
                        l&apos;administration
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <ul>
                        <li>Affichez les actualités</li>
                     </ul>
                  </CardContent>
                  <CardFooter className="justify-center">
                     <Button variant="outline">
                        <Link href="/backoffice/display">
                           Backoffice DISPLAY
                        </Link>
                     </Button>
                  </CardFooter>
               </Card>

               <Card className={styles.homeCard}>
                  <CardHeader>
                     <CardTitle>Administration</CardTitle>
                     <CardDescription>
                        Retrouver ici tous les services pour gérer
                        l&apos;administration
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <ul>
                        <li>Affichez les actualités</li>
                     </ul>
                  </CardContent>
                  <CardFooter className="justify-center">
                     <Button variant="outline">
                        <Link href="/backoffice/add">Backoffice ADD</Link>
                     </Button>
                  </CardFooter>
               </Card>

               <Card className={styles.homeCard}>
                  <CardHeader>
                     <CardTitle>Administration</CardTitle>
                     <CardDescription>
                        Retrouver ici tous les services pour gérer
                        l&apos;administration
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <ul>
                        <li>Affichez les actualités</li>
                     </ul>
                  </CardContent>
                  <CardFooter className="justify-center">
                     <Button variant="outline">
                        <Link href="/backoffice/update">Backoffice UPDATE</Link>
                     </Button>
                  </CardFooter>
               </Card>

               <Card className={styles.homeCard}>
                  <CardHeader>
                     <CardTitle>Administration</CardTitle>
                     <CardDescription>
                        Retrouver ici tous les services pour gérer
                        l&apos;administration
                     </CardDescription>
                  </CardHeader>
                  <CardContent>
                     <ul>
                        <li>Affichez les actualités</li>
                     </ul>
                  </CardContent>
                  <CardFooter className="justify-center">
                     <Button variant="outline">
                        <Link href="/backoffice/delete">Backoffice DELETE</Link>
                     </Button>
                  </CardFooter>
               </Card>
            </div>
         </main>
      </PageLayout>
   );
}
