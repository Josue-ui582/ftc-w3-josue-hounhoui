import React from "react";
import { faqs } from "@/data/faq";
import { Button } from "@/components/ui/button";
import { IoPlayCircleOutline } from "react-icons/io5";
import FaqCard from "./faqCard";

/**
 * FaqList Component
 *
 * @component
 * @description
 * Ce composant affiche une section de type FAQ (questions/réponses)
 * avec un en-tête et un bouton d’action.
 *
 * Structure :
 * - **En-tête** :
 *   - Sous-titre : "You already know ?"
 *   - Titre principal : "Useful Pet Knowledge"
 *   - Bouton d’action : "View more" avec une icône `IoPlayCircleOutline`.
 *
 * - **Grille FAQ** :
 *   - Affiche une liste de questions/réponses en utilisant les données
 *     provenant du tableau `faqs` (défini dans `@/data/faq`).
 *   - Chaque élément FAQ est censé être rendu via un composant enfant
 *     (par exemple `FaqCard`).
 *
 * Exemple d’utilisation :
 * ```tsx
 * import FaqList from "@/components/sections/FaqList";
 *
 * export default function Page() {
 *   return (
 *     <main>
 *       <FaqList />
 *     </main>
 *   );
 * }
 * ```
 */
export default function FaqList() {
  return (
    <section className="flex justify-center items-center mt-10">
      <div className="w-[90%]">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="text-black">You already know ?</h5>
            <h2 className="text-xl text-[#003459] font-bold">Useful Pet Knowledge</h2>
          </div>
          <div>
            <Button>
              View more <IoPlayCircleOutline />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq) => (
            <FaqCard key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}