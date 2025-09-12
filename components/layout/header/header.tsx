import Image from "next/image";
import React from "react";
import goodWoman from "../../../app/images/good-humored-woman.png";
import { Button } from "@/components/ui/button";
import { IoPlayCircleOutline } from "react-icons/io5";

/**
 * @component Header
 *
 * @description
 * Composant représentant la **section d'en-tête principale** de la page d'accueil.
 * Il combine un texte de présentation, un message marketing, des boutons d'action et une illustration.
 *
 * Fonctionnalités principales :
 * - Affiche un titre accrocheur et un sous-titre.
 * - Fournit un **texte descriptif** sur le service ou produit.
 * - Propose deux boutons :
 *   - "View Intro" avec icône (`IoPlayCircleOutline`)
 *   - "Explore more" (bouton principal stylisé avec variante `darckblue`)
 * - Affiche une **image décorative** à droite pour illustrer le contenu.
 *
 * @dependencies
 * - next/image : pour un rendu optimisé de l'image.
 * - @/components/ui/button : boutons stylisés réutilisables.
 * - react-icons : `IoPlayCircleOutline` pour l’icône du bouton.
 * - TailwindCSS : pour la mise en page, la typographie et la responsivité.
 */
export default function Header() {
  return (
    <header className="flex justify-center center overflow-hidden">
      <div className="flex lg:flex-row flex-col gap-24 md:gap-5 lg:gap-6 justify-between md:items-start items-end lg:items-center">

        <div className="flex flex-col gap-4">
          <div className="text-[#003459] relative">
            <h1 className="font-bold md:text-5xl text-4xl relative z-10">One more friend</h1>
            <h4 className="font-bold md:text-3xl text-2xl">Thousands more fun!</h4>
            <div className="md:w-[50px] md:h-[50px] w-[40px] h-[40px] bg-[#f7dba7] md:rounded-2xl rounded-lg absolute top-0 left-0 rotate-45 z-0"></div>
          </div>

          <div className="md:w-1/2">
            <p className="text-[15px] text-start">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
          </div>

          <div className="flex md:gap-4 gap-2">
            <Button>
              View Intro <IoPlayCircleOutline />
            </Button>
            <Button variant="darckblue">Explore more</Button>
          </div>
        </div>

        <div className="relative">
          <div className="md:w-[400px] md:h-[400px] w-[300px] h-[300px] bg-[#003459] rounded-[5rem] absolute md:left-0 top-20 left-5 sm:top-24 md:top-16 rotate-12 z-0"></div>
          <div className="md:w-[400px] md:h-[700px] w-[300px] h-[400px] bg-[#f7dba7] rounded-[5rem] absolute sm: md:left-0 left-14 top-16 rotate-35 z-0"></div>

          <Image 
            src={goodWoman} 
            alt="Good humored woman"
            className="relative z-10 "
          />
        </div>
      </div>
    </header>
  );
}