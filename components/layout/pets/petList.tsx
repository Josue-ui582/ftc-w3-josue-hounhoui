"use client";

import { pets } from "@/data/pets";
import PetCard from "./petCard";
import { Button } from "@/components/ui/button";

export default function PetList() {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="w-[90%]">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="text-black">What new ?</h5>
            <h2 className="text-xl text-[#003459] font-bold">Tacke a look at some pets</h2>
          </div>
          <div>
            <Button>View more</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pets.map((pet) => (
            <PetCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
    </div>
  );
}
