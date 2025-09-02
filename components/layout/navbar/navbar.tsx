"use client"
import React from "react";
import Image from "next/image";
import logo from "../../../app/images/Frame.svg"
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import CurrencySelector from "./currency";
import { Button } from "@/components/ui/button";

export default function Navbar () {
    return(
        <nav className="relative flex justify-center items-center h-20 px-14 z-40">
            <div className="flex justify-between items-center w-full">
                <div className="flex gap-8 justify-center items-center">
                    <div>
                        <Image src={logo} alt="Logo" />
                    </div>
                    <div>
                        <ul className="flex gap-6 text-[#003459] font-semibold">
                            <li>
                                <Link href="/">Home</Link>
                            </li>
                            <li>
                                <Link href="/">Category</Link>
                            </li>
                            <li>
                                <Link href="/">About</Link>
                            </li>
                            <li>
                                <Link href="/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-4">
                    <div className="relative">
                        <Input 
                            type="text"
                            placeholder="Search something here..."
                        />
                        <CiSearch className="absolute top-3 bottom-2 left-2 text-lg" />
                    </div>
                    <div>
                        <Button>
                            Join the community
                        </Button>
                    </div>
                    <div>
                        <CurrencySelector />
                    </div>
                </div>
            </div>
        </nav>
    )
}