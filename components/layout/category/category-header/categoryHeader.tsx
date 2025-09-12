import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import dogs from "../../../../app/images/dogs.png";
import React from "react";
import { FcNext } from "react-icons/fc";
import { IoPlayCircleOutline } from "react-icons/io5";

/**
 * @component CategoryHeader
 *
 * @description
 * Ce composant représente l’**en-tête de la page des catégories**.  
 * Il combine une navigation en fil d’Ariane (breadcrumbs) et une section visuelle
 * mettant en avant une image de chien et un texte promotionnel.
 *
 * Fonctionnalités principales :
 * - Affiche un **breadcrumb** sous forme de liste (`Home > Dog > Small Dog`).
 * - Met en avant une **bannière visuelle** avec :
 *   - une image (`dogs.png`),
 *   - un bloc textuel accrocheur avec titre, sous-titre et description,
 *   - deux boutons d’action : 
 *     - `View Intro` (avec une icône `IoPlayCircleOutline`),
 *     - `Explore more` (bouton stylisé via le composant `Button`).
 * - Utilise TailwindCSS pour la mise en page et les couleurs.
 * - Utilise un background décoratif (`div` rotatif bleu foncé) pour donner du style.
 *
 * @dependencies
 * - next/image : pour l’optimisation et l’affichage de l’image.
 * - next/link : pour la navigation interne (breadcrumbs).
 * - react-icons : `FcNext` (séparateur du fil d’Ariane), `IoPlayCircleOutline` (icône bouton).
 * - @/components/ui/button : composant bouton réutilisable.
 * - TailwindCSS : mise en page responsive et stylisation.
 */
export default function CategoryHeader() {
  return (
    <header className="flex justify-center items-center">
      <div className="md:w-[90%] w-[98%]">
        {/* Fil d'Ariane */}
        <div>
          <ul className="flex gap-2 text-[14px]">
            <li>
              <Link
                href="/"
                className="flex justify-center items-center gap-2"
              >
                Home <FcNext />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex justify-center items-center gap-2"
              >
                Dog <FcNext />
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="flex justify-center items-center gap-2"
              >
                Small Dog <FcNext />
              </Link>
            </li>
          </ul>
        </div>

        {/* Bannière */}
        <div className="bg-[#fff7e9] relative overflow-hidden flex justify-end items-end rounded-4xl w-full mt-10 pt-10 pl-2 pr-2">
          {/* Décor bleu */}
          <div className="bg-[#003459] h-[900px] w-[700px] absolute rounded-4xl z-10 transform rotate-60 right-0 -top-80"></div>

          {/* Contenu principal */}
          <div className="flex flex-col-reverse justify-center items-center md:flex-row md:justify-between md:items-end md:left-20 relative z-40">
            {/* Image chien */}
            <div>
              <Image src={dogs} alt="dogs" className="relative z-50" />
            </div>

            {/* Texte + CTA */}
            <div className="flex flex-col gap-4 items-center justify-center md:justify-end pb-5">
              <div className="text-white md:text-end">
                <h1 className="font-bold text-5xl">One more friend</h1>
                <h4 className="font-bold text-3xl">Thousands more fun!</h4>
              </div>
              <div className="md:w-1/2">
                <p className="text-[15px] md:text-end text-white">
                  Having a pet means you have more joy, a new friend, a happy
                  person who will always be with you to have fun. We have 200+
                  different pets that can meet your needs!
                </p>
              </div>
              <div className="flex gap-4">
                <button className="bg-transparent border border-[#ffffff] text-[#ffffff] cursor-pointer flex justify-center items-center gap-2 px-2 rounded-full">
                  View Intro <IoPlayCircleOutline />
                </button>
                <Button variant="white">Explore more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}