"use client";

import PetCarousel from "./PetCarousel";
import PetInfo from "./petInfo";
import PetThumbnails from "./PetThumbnails";
import { PetDetailProps } from "@/types/petDetail";

export default function PetDetail({ pet }: PetDetailProps) {
  return (
    <div className="flex justify-center">

      <div className="p-3 flex gap-4">
        <div className="w-1/4">
            <PetCarousel pet={pet} />
            <PetThumbnails />
        </div>
        <div className="mt-6 w-3/4">
            <PetInfo pet={pet} />
        </div>
      </div>
    </div>
  );
}