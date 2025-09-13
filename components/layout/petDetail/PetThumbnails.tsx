"use client";

import { Image } from "antd";
import { pets } from "@/data/pets";
import Link from "next/link";

export default function PetThumbnails() {
  return (
    <div className="mt-4 w-fullflex flex-col gap-4">
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
      <div className="sm:flex hidden justify-center items-center gap-2 p-2 rounded-lg bg-[#fff7e9]">
        <div className="flex gap-1 justify-center items-center text-[10px] text-[#003459] font-semibold">
          <Image src="/Frame 110.png" width={30} height={30} alt="frame" />
          <p>100% health guarantes for pets</p>
        </div>
        <div className="flex gap-1 justify-center items-center text-[10px] text-[#003459] font-semibold">
          <Image src="/Group.png" width={30} height={30} alt="frame" />
          <p>100% guarantes of pet identification</p>
        </div>
      </div>
    </div>
  );
}