import React from "react";
import { CustomerProps } from "@/types/customer";
import Image from "next/image";

export default function CustomerCard ({customer} : {customer : CustomerProps}) {
    return(
        <Image 
            src={customer.image}
            alt="our customer"
            width={400}
            height={300}
            className="w-full h-48 object-cover rounded-lg"
        />
    )
}