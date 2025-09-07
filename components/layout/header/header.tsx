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
    <header className="flex justify-center items-end relative z-40 h-[87vh]">
      <div className="flex justify-between items-start w-[90%]">
        {/* Texte principal */}
        <div className="flex flex-col gap-4">
          <div className="text-[#003459]">
            <h1 className="font-bold text-5xl">One more friend</h1>
            <h4 className="font-bold text-3xl">Thousands more fun!</h4>
          </div>

          {/* Description */}
          <div className="w-1/2">
            <p className="text-[15px]">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-4">
            <Button>
              View Intro <IoPlayCircleOutline />
            </Button>
            <Button variant="darckblue">Explore more</Button>
          </div>
        </div>

        {/* Image illustrative */}
        <div>
          <Image src={goodWoman} alt="Good humored woman" />
        </div>
      </div>
    </header>
  );
}