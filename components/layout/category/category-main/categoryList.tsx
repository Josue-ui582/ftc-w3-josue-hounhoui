"use client";

import React, { useState } from "react";
import CategoryCard from "./categoryCard";
import { BiChevronDown } from "react-icons/bi";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { CategoryType } from "@/types/category";

/**
 * @component CategoryListe
 * 
 * @description
 * Ce composant affiche une liste paginée de catégories (par ex. "Small Dogs").
 * Il utilise **Ant Design** pour la pagination et personnalise le rendu des boutons
 * de navigation (précédent/suivant). Chaque catégorie est affichée via le composant
 * `CategoryCard`.
 *
 * Fonctionnalités principales :
 * - Définir le nombre d’éléments affichés par page (`ITEMS_PER_PAGE = 9`).
 * - Gérer la pagination avec un state React (`currentPage`).
 * - Calculer la portion de catégories à afficher selon la page active.
 * - Afficher chaque catégorie dans une grille responsive.
 * - Inclure un bouton de tri statique ("Sort by Popular").
 * - Personnaliser le style de la pagination Ant Design avec TailwindCSS.
 *
 * @param {Object} props - Les propriétés du composant.
 * @param {CategoryType} props.categorys - Tableau d’objets catégorie contenant au minimum :
 *   - id : identifiant unique
 *   - name, image, price, etc. (infos nécessaires au `CategoryCard`).
 *
 * @dependencies
 * - react-icons : pour les icônes (chevrons, flèches).
 * - antd : pour la pagination.
 * - tailwindcss : pour la mise en forme.
 * - CategoryCard : sous-composant pour afficher chaque catégorie.
 */
const ITEMS_PER_PAGE = 9;

export default function CategoryListe({ categorys }: CategoryType) {
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = categorys.length;
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentCategory = categorys.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const onChange: PaginationProps["onChange"] = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <p className="text-2xl text-[#003459] font-bold">Small Dog</p>
          <span className="text-gray-400 text-[15px]">{totalItems} pupples</span>
        </div>
        <div>
          <button className="p-3 rounded-full border text-gray-500 flex items-center justify-center">
            Sort by Popular : <BiChevronDown />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {currentCategory.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>

      <div className="flex items-center justify-center mt-6">
        <Pagination
          current={currentPage}
          pageSize={ITEMS_PER_PAGE}
          total={totalItems}
          onChange={onChange}
          showSizeChanger={false}
          itemRender={(page, type, originalElement) => {
            if (type === "prev") {
              return (
                <button className="px-2">
                  <GrFormPreviousLink />
                </button>
              );
            }
            if (type === "next") {
              return (
                <button className="px-2">
                  <GrFormNextLink />
                </button>
              );
            }
            return originalElement;
          }}
        />

        <style jsx global>{`
          .ant-pagination-item {
            @apply text-white hover:bg-blue-600 rounded-md px-3 py-1;
          }
          .ant-pagination-item-active {
            @apply bg-blue-900 text-white rounded-md;
          }
          .ant-pagination-item-active a {
            color: white !important;
          }
          .ant-pagination-prev button,
          .ant-pagination-next button {
            @apply text-gray-700 hover:bg-gray-200 rounded-md px-3 py-1;
          }
        `}</style>
      </div>
    </div>
  );
}