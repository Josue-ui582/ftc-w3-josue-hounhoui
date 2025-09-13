import { Button } from "@/components/ui/button";
import { PetCarouselProps } from "@/types/petCarrousel";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FcNext } from "react-icons/fc";

export default function PetInfo({ pet }: PetCarouselProps) {
  return (
    <div className="flex flex-col gap-3 w-full px-4 sm:px-6">
      {/* Header */}
      <div>
        <ul className="flex gap-2 text-[14px]">
          <li>
            <Link
              href="/"
              className="flex justify-center items-center gap-2"
            >
              Home <FcNext />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex justify-center items-center gap-2"
            >
              Dog <FcNext />
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex justify-center items-center gap-2"
            >
              Small Dog <FcNext />
            </Link>
          </li>
        </ul>
      </div>
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
      <div className="sm:hidden flex flex-col justify-center items-center gap-2 p-2 rounded-lg ">
        <div className="flex gap-1 justify-center items-center text-[10px] text-[#003459] font-semibold bg-[#fff7e9]">
          <Image src="/Frame 110.png" width={30} height={30} alt="frame" />
          <p>100% health guarantes for pets</p>
        </div>
        <div className="flex gap-1 justify-center items-center text-[10px] text-[#003459] font-semibold bg-[#fff7e9]">
          <Image src="/Group.png" width={30} height={30} alt="frame" />
          <p>100% guarantes of pet identification</p>
        </div>
      </div>
    </div>
  );
}