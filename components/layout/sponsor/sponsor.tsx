import { Button } from "@/components/ui/button";
import React from "react";
import { IoPlayCircleOutline } from "react-icons/io5";
import sponsor1 from "../../../app/images/sponsor1.png";
import sponsor2 from "../../../app/images/sponsor2.png";
import sponsor3 from "../../../app/images/sponsor3.png";
import sponsor4 from "../../../app/images/sponsor4.png";
import sponsor5 from "../../../app/images/sponsor5.png";
import sponsor6 from "../../../app/images/sponsor6.png";
import sponsor7 from "../../../app/images/sponsor7.png";
import Image from "next/image";

/**
 * Sponsor Component (avec défilement horizontal infini)
 *
 * @component
 * @description
 * Cette version affiche les logos des sponsors qui défilent
 * automatiquement de façon horizontale, en boucle infinie.
 *
 * - Responsive (s’adapte à toutes les tailles d’écran).
 * - Animation fluide grâce à `animate-[...]` de Tailwind.
 */

export default function Sponsor() {
  const sponsors = [
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
    sponsor5,
    sponsor6,
    sponsor7,
  ];

  return (
    <section className="flex justify-center items-center mt-10">
      <div className="w-[90%]">
        <div className="flex justify-between items-center mb-5">
          <div>
            <h5 className="text-black text-[14px]">Proud to be part of</h5>
            <span className="text-2xl text-[#003459] font-bold"> Pets Sellers</span>
          </div>
          <div>
            <Button variant="default" size="md">
              View all our services <IoPlayCircleOutline />
            </Button>
          </div>
        </div>

        <div className="overflow-hidden relative w-full">
          <div className="flex animate-scroll gap-10 w-max">
            {sponsors.concat(sponsors).map((sponsor, index) => (
              <Image
                key={index}
                src={sponsor}
                alt={`sponsor-${index}`}
                className="h-16 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}