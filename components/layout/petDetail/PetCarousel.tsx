import React from "react";
import { PetCarouselProps } from "@/types/petCarrousel";
import { Carousel, Image } from "antd";

export default function PetCarousel ({pet} : PetCarouselProps) {
    // On récupère les images ici
    const images = [pet.image];
    return(
        <div>
            <Carousel arrows infinite={true} className="rounded-xl shadow">
                {images.map((img, idx) => (
                <div key={idx} className="flex justify-center">
                    <Image
                    src={img}
                    alt={`${pet.name}-${idx}`}
                    width={300}
                    height={300}
                    className="rounded-xl object-cover"
                    />
                </div>
                ))}
            </Carousel>
        </div>
    )
}