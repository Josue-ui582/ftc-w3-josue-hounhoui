import { Faq } from "@/types/faq";
import Image from "next/image";
import React from "react";

export default function FaqCard ({faq}: {faq : Faq}) {
    return(
        <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10 p-2 flex flex-col gap-3">
            <Image 
                src={faq.image}
                alt="pet"
                width={400}
                height={300}
                className="w-full h-48 object-cover rounded-lg"
            />
            <button className="p-2 text-white bg-blue-400 rounded-full">Pet Knowledge</button>
            <h2 className="font-bold text-lg text-black">{faq.title}</h2>
            <p className="text-black text-[15px]">{faq.description}</p>
        </div>
    )
}