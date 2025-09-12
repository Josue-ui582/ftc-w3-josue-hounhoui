"use client";

import Image from "next/image";
import { useCurrency } from "@/hooks/useCurrency";
import { Pet } from "@/types/pet";
import Link from "next/link";

/**
 * PetCard
 *
 * @component
 * @description
 * Affiche une carte pour un animal (image, nom, âge, genre) et le prix converti
 * selon la devise actuellement sélectionnée dans le contexte.
 *
 * Le composant supporte deux formes possibles de l'objet retourné par `useCurrency` :
 * - `{ selected, setSelected }` (ancien nom)
 * - `{ currency, setSelected }` (ou nouvelle variante)
 *
 * Pour la conversion, on utilise `current.rate` (nombre) et `current.code` (ex: "USD").
 *
 * @param {{ pet: Pet }} props - L'animal à afficher
 * @returns {JSX.Element}
 */


export default function PetCard({ pet }: { pet: Pet }) {
  const { selected, rates } = useCurrency(); // ✅ On récupère uniquement la devise choisie

  const priceNumber = Number(pet.price);

  // si pas de taux => on reste en VND
  const rate = rates[selected.code] ?? 1;

  const converted = priceNumber * rate;

  const convertedPrice = converted.toLocaleString(undefined, {
    style: "currency",
    currency: selected?.code ?? "VND",
  });

  return (
    <Link href={`/pet/${pet.id}`}>
      <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10 p-2">
        <Image
          src={pet.image}
          alt={pet.name}
          width={400}
          height={300}
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="p-4">
          <h3 className="font-bold">
            {pet.name}
          </h3>
          <p className="text-sm text-gray-600">
            Gender: {pet.gender} • Age: {pet.age}
          </p>
          <p className="font-bold mt-2">{convertedPrice}</p>
        </div>
      </div>
    </Link>
  );
}