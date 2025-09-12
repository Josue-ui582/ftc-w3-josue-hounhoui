import { Button } from "@/components/ui/button";
import { PetCarouselProps } from "@/types/petCarrousel";
import React from "react";

export default function PetInfo({ pet }: PetCarouselProps) {
  return (
    <div className="flex flex-col gap-3 w-full px-4 sm:px-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold pb-2">{pet.name}</h1>
        <p className="text-lg sm:text-xl text-[#003459] font-semibold mb-4">
          {pet.price.toLocaleString()} VND
        </p>
      </div>

      {/* Buttons */}
    <div className="flex flex-col sm:flex-row gap-3 w-full">
        <Button variant="darckblue" size="md" className="w-full sm:w-auto">
            Contact Us
        </Button>
        <Button variant="default" size="md" className="w-full sm:w-auto">
            Chat With Monito
        </Button>
    </div>


      {/* Pet Details */}
      <div className="text-gray-500 text-sm sm:text-[14px] flex flex-col gap-3 w-full mt-4">
        {[
          { label: "Breed", value: pet.breed },
          { label: "Age", value: pet.age },
          { label: "Size", value: pet.size },
          { label: "Color", value: pet.color },
          { label: "Vaccinated", value: pet.vaccinated ? "Yes" : "No" },
          { label: "Dewormed", value: pet.dewormed ? "Yes" : "No" },
          { label: "Certificate", value: pet.cert },
          { label: "Microchip", value: pet.microchip ? "Yes" : "No" },
          { label: "Location", value: pet.location },
          { label: "Published Date", value: pet.publishedDate },
          { label: "Additional Info", value: pet.additionalInfo },
        ].map((item, i) => (
          <div
            key={i}
            className="flex  justify-between sm:items-center border-b border-gray-200 pb-3"
          >
            <p className="font-medium text-gray-700">{item.label}</p>
            <p className="text-gray-600 sm:text-right break-words">
              : {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}