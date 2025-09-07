import { CategoryItem } from "@/types/category";
import Image from "next/image";
import React from "react";

/**
 * @component CategoryCard
 * 
 * @description
 * Ce composant affiche une carte individuelle représentant une catégorie
 * (par exemple un animal : chiot, petit chien, etc.).
 *
 * Fonctionnalités principales :
 * - Afficher une image de la catégorie via `next/image` (optimisation automatique).
 * - Afficher le nom de la catégorie en titre.
 * - Afficher des informations supplémentaires comme le sexe et l’âge.
 * - Afficher le prix formaté avec `toLocaleString` (format localisé).
 * - Fournir un effet visuel avec ombre et transition au survol (`hover:shadow-lg`).
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {CategoryItem} props.category - Objet contenant les informations de la catégorie.
 * @param {string} props.category.image - URL de l’image.
 * @param {string} props.category.name - Nom de la catégorie.
 * @param {string} props.category.gender - Sexe (Male/Female).
 * @param {string} props.category.age - Âge de l’animal.
 * @param {number} props.category.price - Prix de l’animal.
 *
 * @dependencies
 * - next/image : pour optimiser le rendu des images.
 * - tailwindcss : pour la mise en forme (shadow, spacing, flex...).
 */
export default function CategoryCard({ category }: { category: CategoryItem }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition p-2">
      <Image
        src={category.image}
        alt={category.name}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="flex flex-col gap-2 justify-start items-start">
        <h4 className="font-bold">{category.name}</h4>
        <div className="flex justify-center items-center gap-2 text-[14px] text-gray-500">
          <p>Gender : {category.gender}</p> - 
          <p>Age : {category.age}</p>
        </div>
        <p className="font-bold">{category.price.toLocaleString()}</p>
      </div>
    </div>
  );
}