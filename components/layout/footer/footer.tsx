import React from "react";
import Suscribe from "../suscribe/suscribe";
import QuicklyLink from "../quicklyLink/quicklyLink";
import Image from "next/image";
import logo from "../../../app/images/Frame.svg"
import Link from "next/link";

export default function Footer () {
    return(
        <footer className="bg-[#fff7e9] rounded-4xl flex justify-center items-center mt-10 py-6">
            <div className="w-[90%] flex flex-col gap-4">
                <Suscribe />
                <QuicklyLink />
                <div className="bg-gray-400 h-[1px] w-full"></div>
                <div className="flex justify-between items-center">
                    <div className="text-gray-400 text-[14px]">
                        <p>© 2022 Monito. All rights reserved.</p>
                    </div>
                    <div>
                        <Image 
                            src={logo}
                            alt="Logo"
                        />
                    </div>
                    <div className="flex gap-4 justify-center items-center text-[14px] text-gray-400">
                        <Link href="/">Term of service</Link>
                        <Link href="/">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}