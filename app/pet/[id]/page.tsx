"use client";

import PetDetail from "@/components/layout/petDetail/petdetail";
import React from "react";
import { pets } from "@/data/pets";
import { notFound, useParams } from "next/navigation";
import Navbar from "@/components/shared/navbar/navbar";
import Footer from "@/components/shared/footer/footer";
import CustomerList from "@/components/layout/costumer/customerListe";
import MorePuppiesListe from "@/components/layout/morePuppies/morePuppiesListe";

export default function Detail () {
    const {id} = useParams();
    const pet = pets.find((pet) => pet.id === id);

    if (!pet) return notFound();
    return(
        <>
            <Navbar />
            <PetDetail pet={pet} />
            <CustomerList />
            <MorePuppiesListe />
            <Footer />
        </>
    )
}