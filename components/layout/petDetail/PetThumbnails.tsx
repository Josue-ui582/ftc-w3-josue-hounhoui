"use client";

import { Image } from "antd";
import { pets } from "@/data/pets";
import Link from "next/link";

export default function PetThumbnails() {
  return (
    <div className="mt-4 w-full">
      <Image.PreviewGroup>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {pets.map((p) => (
            <Link key={p.id} href={`/pet/${p.id}`}>
              <Image
                src={p.image}
                alt={p.name}
                className="rounded-md object-cover cursor-pointer hover:ring-2 hover:ring-blue-500 w-[70px] h-[70px]"
                preview={false}
              />
            </Link>
          ))}
        </div>
      </Image.PreviewGroup>
    </div>
  );
}