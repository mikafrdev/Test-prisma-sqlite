//pnpm prisma db seed
import { prisma } from "../src/lib/prisma"

async function main() {
   await prisma.article.createMany({
      data: [
         { title: "Réchauffement climatique : les chiffres du GIEC", slug: "rechauffement-climatique-chiffres-giec", content: "Le GIEC publie ses dernières données sur le réchauffement climatique mondial.", published: true },
         { title: "Vaccins et effets secondaires : ce que dit l'OMS", slug: "vaccins-effets-secondaires-oms", content: "L'OMS fait le point sur les effets secondaires des vaccins actuels.", published: true },
         { title: "Le Front National face aux élections", slug: "front-national-elections", content: "Analyse des positions du Front National à l'approche des élections.", published: true },
         { title: "Trump et la politique étrangère américaine", slug: "trump-politique-etrangere-americaine", content: "Retour sur les décisions de Trump en matière de politique étrangère.", published: true },
         { title: "NASA : la prochaine mission vers Mars", slug: "nasa-mission-mars", content: "La NASA dévoile les détails de sa prochaine mission habitée vers Mars.", published: true },
         { title: "Station spatiale internationale : bilan 2025", slug: "station-spatiale-internationale-bilan-2025", content: "Retour sur une année d'expériences scientifiques à bord de l'ISS.", published: true },
         { title: "Cholestérol : les nouveaux traitements", slug: "cholesterol-nouveaux-traitements", content: "Des chercheurs de l'Institut Pasteur annoncent une avancée majeure.", published: true },
         { title: "Écologie : les actions concrètes des États", slug: "ecologie-actions-etats", content: "Tour d'horizon des politiques écologiques mises en place dans le monde.", published: false },
         { title: "LGBT : droits et avancées en Europe", slug: "lgbt-droits-avancees-europe", content: "État des lieux des droits LGBT dans les différents pays européens.", published: true },
         { title: "Les stars hollywoodiennes et leur engagement politique", slug: "stars-hollywoodiennes-engagement-politique", content: "De plus en plus de célébrités s'engagent sur la scène politique.", published: false },
         { title: "Maternelle : réforme du système éducatif", slug: "maternelle-reforme-systeme-educatif", content: "Le gouvernement annonce une réforme majeure de l'école maternelle.", published: true },
         { title: "Masques : efficacité réelle ou mythe ?", slug: "masques-efficacite-reelle-mythe", content: "Une étude remet en question l'efficacité des masques chirurgicaux.", published: false },
         { title: "Institut Pasteur : découverte d'un nouveau vaccin", slug: "institut-pasteur-nouveau-vaccin", content: "L'Institut Pasteur annonce une percée majeure dans la lutte contre la dengue.", published: true },
         { title: "GIEC : rapport spécial sur les océans", slug: "giec-rapport-special-oceans", content: "Le nouveau rapport du GIEC tire la sonnette d'alarme sur l'état des océans.", published: true },
         { title: "OMS et pandémie : les leçons du Covid", slug: "oms-pandemie-lecons-covid", content: "L'OMS tire les enseignements de la gestion de la pandémie de Covid-19.", published: false },
         { title: "NASA : découverte d'eau sur la Lune", slug: "nasa-decouverte-eau-lune", content: "La NASA confirme la présence d'eau sous forme de glace dans les cratères lunaires.", published: true },
         { title: "Écologie : le bilan carbone des grandes entreprises", slug: "ecologie-bilan-carbone-grandes-entreprises", content: "Enquête sur les pratiques environnementales des multinationales.", published: true },
         { title: "Trump : bilan économique de son mandat", slug: "trump-bilan-economique-mandat", content: "Analyse des résultats économiques sous la présidence de Donald Trump.", published: false },
         { title: "Stars françaises et causes humanitaires", slug: "stars-francaises-causes-humanitaires", content: "Ces célébrités françaises qui s'engagent pour des causes humanitaires.", published: true },
         { title: "Cholestérol : alimentation et prévention", slug: "cholesterol-alimentation-prevention", content: "Les recommandations des nutritionnistes pour prévenir le mauvais cholestérol.", published: true },
      ]
   })
}

main()
   .catch(console.error)
   .finally(() => prisma.$disconnect())