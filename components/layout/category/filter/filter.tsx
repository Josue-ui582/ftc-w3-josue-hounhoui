import React from "react";
import { FiltersProps } from "@/types/filter";

/**
 * @component Filter
 * @description 
 * Composant permettant de filtrer une liste de catégories par **genre** et **couleur**.
 * Il affiche des cases à cocher (checkbox) pour chaque option disponible.
 *
 * @props {FiltersProps} props
 * @prop {Object} props.filters - Contient les filtres actuellement appliqués.
 * @prop {string[]} props.filters.genre - Liste des genres sélectionnés (Male/Female).
 * @prop {string[]} props.filters.couleur - Liste des couleurs sélectionnées.
 * @prop {(key: string, value: string) => void} props.onChange - Callback déclenché
 *        à chaque modification d’un filtre (genre ou couleur).
 *
 * @example
 * <Filter
 *   filters={{ genre: ["Male"], couleur: ["Gray"] }}
 *   onChange={(key, value) => console.log(key, value)}
 * />
 */
export default function Filter({ filters, onChange }: FiltersProps) {
  const gender = ["Male", "Female"];
  const color = ["Gray", "Chocolate", "Yellow", "White", "WhiteGray", "BlackWhite"];

  return (
    <div className="flex flex-col gap-4">
      {/* Section Genre */}
      <div className="flex flex-col items-start justify-start gap-2">
        <h3 className="text-lg font-bold">Gender</h3>
        {gender.map((g) => (
          <label key={g} className="flex justify-center items-center gap-2">
            <input
              type="checkbox"
              checked={filters.genre.includes(g)}
              onChange={() => onChange("genre", g)}
            />
            <span className="text-[14px] font-semibold">{g}</span>
          </label>
        ))}
      </div>

      {/* Section Couleur */}
      <div className="flex flex-col items-start justify-start gap-2">
        <h3 className="text-lg font-bold">Color</h3>
        {color.map((c) => (
          <label key={c} className="flex justify-center items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filters.couleur.includes(c)}
              onChange={() => onChange("couleur", c)}
            />
            <div
              className={`w-4 h-4 rounded-full ${
                filters.couleur.includes(c) ? "ring-2 ring-blue-500" : ""
              }`}
              style={{ backgroundColor: mapColor(c) }}
            ></div>
            <span className="text-[14px] font-semibold">{c}</span>
          </label>
        ))}
      </div>
    </div>
  );
}

/**
 * @function mapColor
 * @description 
 * Fonction utilitaire qui convertit le nom d’une couleur (string) 
 * en une valeur CSS valide.
 *
 * @param {string} color - Nom de la couleur (ex: "Gray", "Chocolate", "WhiteGray"...).
 * @returns {string} - Valeur CSS utilisable dans `style.backgroundColor`.
 */
function mapColor(color: string): string {
  switch (color.toLowerCase()) {
    case "gray":
      return "gray";
    case "chocolate":
      return "chocolate";
    case "yellow":
      return "yellow";
    case "white":
      return "white";
    case "whitegray":
      return "#d9d9d9";
    case "blackwhite":
      return "black";
    default:
      return "transparent";
  }
}