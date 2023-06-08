"use client";
import Link from "next/link";

export default function StepMode() {
  return (
    <div className="container mx-auto">
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="w-90">
      <h1 className="text-5xl font-bold">Premium ou Gratuit</h1>
      <p className="py-6">
      Vous y êtes presque! Prêt à vivre une expérience d'interview inégalée avec Ajiratomo ? Nous vous proposons deux options : notre offre gratuite pour une brève introduction, ou notre offre Premium à seulement 2 euros. Avec cette dernière, bénéficiez de jusqu'à 10 questions sur vos compétences techniques et humaines, ainsi que d'un bilan personnalisé en fin d'interview. C'est une occasion unique pour vous démarquer et progresser dans votre préparation. Alors, prêt à saisir cette opportunité exceptionnelle ?
      </p>
<div className="flex flex-col lg:flex-row justify-center">
<Link href={""} className="btn btn-primary m-10">Premium - environ 10 questions</Link>
      <Link href="/chat" className="btn btn-outline btn-primary m-10">Gratuit - 1 question</Link>
</div>
    </div>
  </div>
</div>
    </div>
  );
}
