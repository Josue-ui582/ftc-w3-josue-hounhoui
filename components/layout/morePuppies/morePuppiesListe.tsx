import React from "react";
import MorePuppiesCard from "./morePuppiesCard";
import { puppies } from "@/data/puppie";

/**
 * ProductList Component
 *
 * @component
 * @description
 * Ce composant affiche une liste de puppies sous forme de cartes (`MorePuppiesCrad`),
 * avec un en-tête et un bouton permettant d'accéder à plus de puppies.
 *
 * Structure :
 * - Un conteneur principal centré avec un titre et un sous-titre.
 * - Un bouton **"View more"** (actuellement sans logique associée).
 * - Une grille responsive affichant les puppies (1 colonne sur mobile,
 *   2 colonnes sur tablettes, 4 colonnes sur desktop).
 *
 * Données :
 * - Les puppies sont importés depuis `@/data/pupies`.
 * - Chaque puppie est passé en prop au composant enfant `morePuppieCard`.
 * - La clé unique (`key`) est basée sur l'`id` du puppie.
 *
 * Exemple d'utilisation :
 * ```tsx
 * import MorePuppieList from "@/components/morePuppies/morePuppieList";
 *
 * export default function HomePage() {
 *   return (
 *     <main>
 *       <ProductList />
 *     </main>
 *   );
 * }
 * ```
 *
 * ⚠️ Remarque :
 * - Le bouton **"View more"** peut être relié à une navigation ou à
 *   une fonction de pagination selon le besoin.
 * - Les données actuelles (`products`) sont statiques ; en production,
 *   elles devraient être récupérées dynamiquement via une API.
 */

export default function MorePuppiesListe () {
    return(
        <section className="flex justify-center mt-10">
            <div className="w-[90%]">
                <div>
                    <h4 className="text-xl font-bold">See more puppies</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        puppies.map((puppie) => (
                        <MorePuppiesCard key={puppie.id} puppie={puppie} />
                        ))
                    }
                    </div>
            </div>
        </section>
    )
}