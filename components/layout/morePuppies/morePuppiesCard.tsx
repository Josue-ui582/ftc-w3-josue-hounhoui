import React from "react";
import { MorePuppie } from "@/types/morepuppie";
import Image from "next/image";

export default function MorePuppiesCard ({puppie} : {puppie : MorePuppie}) {
    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-2">
            <Image
                src={puppie.image}
                alt={puppie.name}
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
            />
            <div className="p-4">
                <h3 className="font-bold">
                    {puppie.name}
                </h3>
                <p className="text-sm text-gray-600">
                    Gender: {puppie.gender} • Age: {puppie.age}
                </p>
                <p className="font-bold mt-2">{puppie.price}</p>
            </div>
        </div>
    )
}