"use client";

import PetCarousel from "./PetCarousel";
import PetThumbnails from "./PetThumbnails";
import { PetDetailProps } from "@/types/petDetail";

export default function PetDetail({ pet }: PetDetailProps) {
  return (
    <div className="flex justify-center">

      <div className="p-3 bg-gray-50 rounded-xl shadow-md">
        <div>
            <PetCarousel pet={pet} />
            <PetThumbnails />
        </div>
        <div className="mt-6">
            <h1 className="text-2xl font-bold mb-2">{pet.name}</h1>
            <p className="text-xl text-red-500 font-semibold mb-4">
            {pet.price.toLocaleString()} VND
            </p>
        </div>
      </div>
    </div>
  );
}