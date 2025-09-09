import React from "react";
import MorePuppiesCard from "./morePuppiesCard";
import { puppies } from "@/data/puppie";

export default function MorePuppiesListe () {
    return(
        <section className="flex justify-center mt-10">
            <div className="w-[90%]">
                <div>
                    <h4 className="text-xl font-bold">See more puppies</h4>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {
                        puppies.map((puppie) => (
                        <MorePuppiesCard key={puppie.id} puppie={puppie} />
                        ))
                    }
                    </div>
            </div>
        </section>
    )
}