import React from "react";
import { PetCarouselProps } from "@/types/petCarrousel";
import { Carousel, Image } from "antd";

export default function PetCarousel({ pet }: PetCarouselProps) {
  const images = [pet.image];

  return (
    <div className="w-full">
      <Carousel arrows infinite={true} className="rounded-xl shadow w-full">
        {images.map((img, idx) => (
          <div key={idx} className="flex justify-center">
            <Image
              src={img}
              alt={`${pet.name}-${idx}`}
              className="rounded-xl object-cover w-full max-w-[350px] h-auto"
              preview={false}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}