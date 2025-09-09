import { Button } from "@/components/ui/button";
import { PetCarouselProps } from "@/types/petCarrousel";
import React from "react";

export default function PetInfo ({pet} : PetCarouselProps) {
    return(
        <div className="flex flex-col gap-3">
            <div>
                <h1 className="text-xl font-bold pb-4">{pet.name}</h1>
                <p className="text-lg text-[#003459] font-semibold mb-6">
                {pet.price.toLocaleString()} VND
                </p>
            </div>

            <div className="flex gap-4">
                <Button variant="darckblue" size="md">Contact Us</Button>
                <Button variant="default" size="md">Chat With Monito</Button>
            </div>

            <div className=" text-gray-500 text-[14px] flex flex-col gap-4">
                <div className="flex justify-between items-start text-start border-b-[.5px] pb-4">
                    <p>Breed</p>
                    <p>: {pet.breed}</p>
                </div>
                <div className="flex justify-between items-start text-start border-b-[.5px] pb-4">
                    <p>Age</p> 
                    <p>: {pet.age}</p>
                </div>
                <div className="flex justify-between items-start text-start border-b-[.5px] pb-4">
                    <p>Size</p> 
                    <p>:{pet.breed}</p>
                </div>
                <div className="flex justify-between items-start text-start border-b-[.5px] pb-4">
                    <p>Color</p> 
                    <p>: {pet.color}</p>
                </div>
                <div className="flex justify-between items-start text-start border-b-[.5px] pb-4">
                    <p>Vaccinated</p> 
                    <p>: {pet.vaccinated ? "Yes" : "No"}</p>
                </div>
                <div className="flex justify-between items-start text-start border-b-[.5px] pb-4">
                    <p>Dewormed:</p> 
                    <p>: {pet.dewormed ? "Yes" : "No"}</p>
                </div>
                <div className="flex justify-between items-start text-start border-b-[.5px] pb-4">
                    <p>Certificate</p> 
                    <p>: {pet.cert}</p>
                </div>
                <div className="flex justify-between items-start text-start border-b-[1px]">
                    <p>Microchip</p> 
                    <p>: {pet.microchip ? "Yes" : "No"}</p>
                </div>
                <div className="flex justify-between items-start text-start border-b-[.5px] pb-4">
                    <p>Location:</p> 
                    <p>: {pet.location}</p>
                </div>
                <div className="flex justify-between items-start text-start border-b-[.5px] pb-4">
                    <p>Published Date</p> 
                    <p>: {pet.publishedDate}</p>
                </div>
                <div className="flex justify-between items-start text-start border-b-[.5px] pb-4">
                    <p>Additionnal Info </p>
                    <p className="mt-6 text-gray-600 ">: {pet.additionalInfo}</p>
                </div>
            </div>
        </div>
    )
}