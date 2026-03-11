import { Button } from "@/components/ui/button";
import { PageLayout } from "@/layout";
import Link from "next/link";

export default function Home() {
   return (
      <PageLayout>
         <h1>Learn Next.js</h1>

         <Button variant="outline">
            <Link href="/backoffice/add">Backoffice ADD</Link>
         </Button>
         <Button variant="outline">
            <Link href="/backoffice/delete">Backoffice DELETE</Link>
         </Button>
         <Button variant="outline">
            <Link href="/backoffice/UPDATE">Backoffice UPDATE</Link>
         </Button>
         <Button variant="outline">
            <Link href="/backoffice/display">Backoffice DISPLAY</Link>
         </Button>
      </PageLayout>
   );
}
