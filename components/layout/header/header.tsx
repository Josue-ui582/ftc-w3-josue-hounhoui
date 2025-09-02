import Image from "next/image";
import React from "react";
import goodWoman from "../../../app/images/good-humored-woman.png"
import { Button } from "@/components/ui/button";
import { IoPlayCircleOutline } from "react-icons/io5";

export default function Header () {
    return(
        <header className="flex justify-center items-end relative z-40 h-[87vh]">
            <div className="flex justify-between items-start w-[90%]">
                <div className="flex flex-col gap-4">
                    <div className="text-[#003459]">
                        <h1 className="font-bold text-5xl">One more friend</h1>
                        <h4 className="font-bold text-3xl">Thousands more fun!</h4>
                    </div>
                    <div className="w-1/2">
                        <p className="text-[15px]">Having a pet means you have more joy, a new friend, a happy person who will always be with you to have fun. We have 200+ different pets that can meet your needs!</p>
                    </div>
                    <div className="flex gap-4">
                        <Button>View Intro <IoPlayCircleOutline /></Button>
                        <Button variant="darckblue">Explore more</Button>
                    </div>
                </div>
                <div>
                    <Image src={goodWoman} alt="" />
                </div>
            </div>
        </header>
    )
}