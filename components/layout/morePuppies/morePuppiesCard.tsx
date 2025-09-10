import React from "react";
import { MorePuppie } from "@/types/morepuppie";
import Image from "next/image";

/**
 * MorePuppiesCrad Component
 * @component
 * @description
 * Ce composant affiche une carte individuelle représentant un chien.
 * Il utilise le composant `next/image` pour optimiser l'affichage de l'image
 * et applique un style avec TailwindCSS.
 * @props
 * Props :
 * - `puppie` (`Puppie`) : Objet représentant un produit, conforme au type
 *   défini dans `@/types/morepuppies`. Les champs attendus incluent :
 *   - `id`    : Identifiant unique.
 *   - `image` : URL ou chemin de l'image du produit.
 *   - `title` : Nom ou titre du produit.
 *   - `type`  : Catégorie ou type du produit.
 *   - `size`  : Taille ou capacité du produit (optionnel selon `isSize`).
 *   - `price` : Prix du produit (nombre).
 *   - `isSize` (optionnel) : Booléen indiquant si la taille doit être affichée.
 * 
 * Structure :
 * - Image du pupie en haut, avec un ratio fixe.
 * - Détails en dessous : titre, type, taille (si applicable) et prix.
 *
 * Exemple d'utilisation :
 * ```tsx
 * import { MorePuppie } from "@/types/morepuppie";
 * import MorePuppiesCard from "./morePuppiesCard";
 *
 * const sampleProduct: MorePuppie = {
 *   id: 1,
 *   image: "/dog-food.png",
 *   title: "Dog Food Premium",
 *   type: "Food",
 *   size: 500,
 *  trash: "/puppie.png"
 *  detail: ""
 *   price: 15000,
 *   isSize: true,
 * };
 *
 * export default function Example() {
 *   return <MorePuppiesCard puppie={puppie} />;
 * }
 * ```
 */

export default function MorePuppiesCard ({puppie} : {puppie : MorePuppie}) {
    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-2">
            <Image
                src={puppie.image}
                alt={puppie.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
                <h3 className="font-bold">
                    {puppie.name}
                </h3>
                <p className="text-sm text-gray-600">
                    Gender: {puppie.gender} • Age: {puppie.age}
                </p>
                <p className="font-bold mt-2">{puppie.price}</p>
            </div>
        </div>
    )
}