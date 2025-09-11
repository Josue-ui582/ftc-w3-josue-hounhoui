import React from "react";
import adult from "../../../app/images/adult-girl.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { IoPlayCircleOutline } from "react-icons/io5";

export function Section() {
  return (
    <section className="flex justify-center items-center mt-10">
      <div className="w-[90%] bg-[#003459] flex flex-col-reverse md:flex-row gap-4 rounded-2xl justify-center overflow-hidden">
        
        {/* Bloc gauche - image */}
        <div className="relative flex justify-center items-center p-4 md:w-1/2">
          <Image
            src={adult}
            alt="adult girl"
            className="relative z-10 w-full max-w-[400px] h-auto"
          />
          <div className="bg-[#012c4a] rounded-4xl w-[80%] h-[300px] absolute rotate-45 z-0 top-20"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center md:items-end text-center md:text-right gap-2 p-6 md:w-1/2">
        
          <div className="bg-[#fff7e9] rounded-4xl w-[120%] md:h-[400px] h-[500px] absolute z-0 rotate-45 -right-10 md:-top-10 -top-32"></div>

          <h1 className="font-bold text-2xl md:text-3xl text-[#003459] relative z-10">
            One more friend
          </h1>
          <h4 className="font-bold text-lg text-[#003459] relative z-10">
            Thousands more fun!
          </h4>
          <p className="text-sm md:text-[14px] relative z-10 max-w-[400px]">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex gap-4 relative z-10 mt-4">
            <Button variant="default" size="md">
              View Intro <IoPlayCircleOutline />
            </Button>
            <Button variant="darckblue" size="md">Explore more</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section;