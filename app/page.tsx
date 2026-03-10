/* import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/layout"; */
import Link from "next/link";

export default function Home() {
   return (
      <PageLayout>
         <h1>Learn Next.js</h1>

         <Button variant="outline">
            <Link href="/courses">Courses</Link>
         </Button>
         <Button variant="outline">
            <Link href="/formations">
               Plan de formation
            </Link>
         </Button>
         <ModeToggle />
      </PageLayout>
   );
}
