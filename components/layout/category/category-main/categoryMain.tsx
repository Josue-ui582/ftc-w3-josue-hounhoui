"use client";

import React, { useState } from "react";
import { categorys } from "@/data/category";
import Filter from "../filter/filter";
import CategoryListe from "./categoryList";

/**
 * @component CategoryMain
 * 
 * @description
 * Ce composant constitue la **page principale des catégories**.  
 * Il combine les filtres (`Filter`) et la liste paginée des catégories (`CategoryListe`).  
 * L’utilisateur peut appliquer des filtres (genre, couleur), et la liste affichée s’adapte automatiquement.
 *
 * Fonctionnalités principales :
 * - Définir et gérer l’état des filtres (genre, couleur).
 * - Mettre à jour les filtres lorsqu’un utilisateur coche/décoche une option.
 * - Filtrer les données de `categorys` (issues de `@/data/category`) selon les filtres sélectionnés.
 * - Afficher le panneau de filtres à gauche (`aside`) et la liste des catégories filtrées à droite (`section`).
 *
 * @state
 * - filters : objet contenant deux tableaux
 *   - genre : liste des genres sélectionnés (ex. ["Male", "Female"]).
 *   - couleur : liste des couleurs sélectionnées (ex. ["Gray", "White"]).
 *   - race : liste des races sélectionnées (ex. ["large", "medium"])
 *
 * @dependencies
 * - Filter : composant pour l’affichage et la gestion des filtres.
 * - CategoryListe : composant pour afficher les catégories paginées.
 * - React useState : pour gérer l’état des filtres.
 * - categorys : données simulées (mock) provenant de `@/data/category`.
 */
export default function CategoryMain() {
  // on déclanche un état pour stocker les valeurs à filtrer
  const [filters, setFilters] = useState({
    genre: [] as string[],
    couleur: [] as string[],
    race : [] as string[]
  });

  // ici on déclare une fonction pour mettre à jour les filtres et faire plusieurs filtres à la fois
  const filterChange = (filterType: "genre" | "couleur" | "race", value: string) => {
    setFilters((prev) => {
      const alreadyChecked = prev[filterType].includes(value);
      return {
        ...prev,
        [filterType]: alreadyChecked
          ? prev[filterType].filter((v) => v !== value)
          : [...prev[filterType], value],
      };
    });
  };

  // ici on déclare une fonction pour gérer l'afficharge des categories filtrées, par défaut rien n'est coché donc aucune filtre n'est appliquée
  const filterCategorys = categorys.filter((category) => {
    const genreMatch =
      filters.genre.length === 0 || filters.genre.includes(category.gender);
    const couleurMatch =
      filters.couleur.length === 0 || filters.couleur.includes(category.color);
    const raceMatch =
      filters.race.length === 0 || filters.race.includes(category.breed);
    return genreMatch && couleurMatch && raceMatch;
  });

  return (
    <main className="flex justify-center items-center mt-10">
      <div className="flex justify-between items-start w-[90%]">
        <aside className="lg:block hidden">
          <Filter filters={filters} onChange={filterChange} />
        </aside>
        <section>
          <CategoryListe 
            categorys={filterCategorys}
            filters={filters}
            onFilterChange={filterChange} />
        </section>
      </div>
    </main>
  );
}