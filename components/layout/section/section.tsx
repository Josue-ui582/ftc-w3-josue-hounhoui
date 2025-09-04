import React from "react";
import adult from "../../../app/images/adult-girl.png"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoPlayCircleOutline } from "react-icons/io5";

export function Section () {
    return(
        <section className="flex justify-center items-center mt-10">
            <div className="w-[90%] bg-[#003459] relative flex md:flex-row gap-4 overflow-hidden rounded-2xl justify-center">
                <div className="bg-[#012c4a] rounded-4xl w-[700px] h-[500px] absolute rotate-45 z-10 left-0 top-48"></div>
                <div className="bg-[#fff7e9] rounded-4xl w-[580px] h-[700px] absolute z-10 rotate-45 -right-16 -top-48"></div>
                <div className="flex z-50 justify-between">
                    <div>
                        <Image 
                            src={adult}
                            alt="adult girl"
                        />
                    </div>
                    <div className="flex flex-col justify-center items-end w-[500px] gap-2">
                        <h1 className="font-bold text-3xl text-[#003459]">One more friend</h1>
                        <h4 className="font-bold text-lg text-[#003459]">Thousands more fun!</h4>
                        <p className="text-[14px] text-end">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                        <div className="flex gap-4">
                            <Button variant="default" size="md">View Intro <IoPlayCircleOutline /></Button>
                            <Button variant="darckblue" size="md">Explore more</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section;