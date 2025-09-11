import React from "react";
import paw from "../../../app/images/paw.png";
import adopte from "../../../app/images/adopte.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoPlayCircleOutline } from "react-icons/io5";

/**
 * Adoption Component
 *
 * @component
 * @description
 * Ce composant affiche une section "Adoption" avec un message d’appel à l’action
 * pour inciter les utilisateurs à adopter un animal de compagnie.
 *
 * Structure :
 * - **Section principale** : conteneur centré avec un fond coloré (`bg-[#ffb775]`)
 *   et des coins arrondis.
 * - **Éléments décoratifs** : deux cercles de fond positionnés en `absolute`
 *   (gauche et droite), pour ajouter du style visuel.
 * - **Contenu principal** :
 *   - Titre "Adoption" avec une petite icône (patte).
 *   - Sous-titre et description.
 *   - Deux boutons d’action :
 *     - `Explore more`
 *     - `View Intro` avec une icône `IoPlayCircleOutline`.
 *   - Une image illustrative (animal à adopter).
 *
 * Exemple d’utilisation :
 * ```tsx
 * import Adoption from "@/components/sections/Adoption";
 *
 * export default function HomePage() {
 *   return (
 *     <main>
 *       <Adoption />
 *     </main>
 *   );
 * }
 * ```
 */
export default function Adoption() {
  return (
    <section className="lg:flex justify-center items-center mt-10 hidden">
      <div className="w-[90%] bg-[#ffb775] rounded-2xl relative overflow-hidden">

        <div className="flex items-center justify-between relative px-6">
          <div className="flex flex-col gap-2 relative">
            <div className="bg-[#fceed5] rounded-4xl w-[600px] h-[600px] absolute -left-32 z-0 -rotate-45 -top-62"></div>
            <h1 className="text-[#003459] font-bold text-5xl flex items-center gap-2 relative z-10">
              Adoption
              <Image src={paw} alt="pet paw" className="relative z-10" />
            </h1>
            <h4 className="text-[#003459] text-2xl font-semibold relative z-10">
              We need help. So Do They.
            </h4>
            <p className="text-[14px] text-[#003459] relative z-10">
              Adopt a pet and give it a home, it will love you back
              unconditionally.
            </p>
            <div className="flex gap-2 mt-4 relative z-10">
              <Button variant="darckblue" size="md">
                Explore more
              </Button>
              <Button>
                View Intro <IoPlayCircleOutline />
              </Button>
            </div>
          </div>

          <div className="relative">
            <Image src={adopte} alt="adopte pet" className="relative z-10" />
            <div className="bg-[#f7dba7] rounded-4xl w-[500px] h-[700px] absolute -right-20 z-0 -top-10 rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
  );
}