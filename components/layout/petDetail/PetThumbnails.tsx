"use client";

import { Image } from "antd";
import { pets } from "@/data/pets";
import Link from "next/link";

export default function PetThumbnails() {
  return (
    <div className="mt-4">
      <Image.PreviewGroup>
        <div className="flex gap-2 overflow-x-auto">
          {pets.map((p) => (
            <Link key={p.id} href={`/pet/${p.id}`}>
              <Image
                src={p.image}
                alt={p.name}
                width={80}
                height={80}
                className="rounded-md object-cover cursor-pointer hover:ring-2 hover:ring-blue-500"
                preview={false}
              />
            </Link>
          ))}
        </div>
      </Image.PreviewGroup>
    </div>
  );
}