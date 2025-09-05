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
    <section className="flex justify-center items-center mt-10">
      <div className="w-[90%] bg-[#ffb775] rounded-2xl relative overflow-hidden">
        <div className="bg-[#fceed5] rounded-4xl w-[500px] h-[700px] absolute -left-20 z-10 -rotate-45 -top-32"></div>
        <div className="bg-[#f7dba7] rounded-4xl w-[500px] h-[700px] absolute -right-20 z-10 -top-10 rotate-45"></div>

        <div className="flex items-center justify-between relative z-50 px-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-[#003459] font-bold text-5xl flex items-center gap-2">
              Adoption
              <Image src={paw} alt="pet paw" />
            </h1>
            <h4 className="text-[#003459] text-2xl font-semibold">
              We need help. So Do They.
            </h4>
            <p className="text-[14px] text-[#003459]">
              Adopt a pet and give it a home, it will love you back
              unconditionally.
            </p>
            <div className="flex gap-2 mt-4">
              <Button variant="darckblue" size="md">
                Explore more
              </Button>
              <Button>
                View Intro <IoPlayCircleOutline />
              </Button>
            </div>
          </div>

          <div>
            <Image src={adopte} alt="adopte pet" />
          </div>
        </div>
      </div>
    </section>
  );
}