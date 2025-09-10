"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "../../../app/images/Frame.svg";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import CurrencySelector from "./currency";
import { Button } from "@/components/ui/button";
import { MdOutlineMenu } from "react-icons/md";
import { MdClose } from "react-icons/md";

/**
 * @component Navbar
 *
 * @description
 * Ce composant représente la **barre de navigation principale** de l’application.
 * Il contient le logo, les liens de navigation, un champ de recherche, 
 * un bouton d’action et un sélecteur de devise.
 *
 * Fonctionnalités principales :
 * - Afficher le **logo** de l’application.
 * - Fournir un **menu de navigation** avec les liens : Home, Category, About, Contact.
 * - Intégrer un **champ de recherche** avec une icône (`CiSearch`) placée à l’intérieur.
 * - Ajouter un **bouton CTA** (“Join the community”).
 * - Inclure un **sélecteur de devise** (`CurrencySelector`) pour gérer l’affichage des prix.
 *
 * @dependencies
 * - next/image : rendu optimisé pour le logo.
 * - next/link : navigation interne entre les pages.
 * - @/components/ui/input : champ de recherche stylisé.
 * - react-icons : `CiSearch` (icône de recherche).
 * - @/components/ui/button : bouton réutilisable (CTA).
 * - ./currency : composant personnalisé pour le choix de la devise.
 * - TailwindCSS : pour la mise en page et la responsivité.
 */
export default function Navbar() {
  // On fait appelle à l'état React pour gérer le menu
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <nav className="relative flex-row justify-center items-center h-20 px-14 z-40 md:block hidden">
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
                <Link href="/category">Category</Link>
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
            <Input type="text" placeholder="Search something here..." />
            <CiSearch className="absolute top-3 bottom-2 left-2 text-lg" />
          </div>

          <div>
            <Button variant="darckblue" size="md">
              Join the community
            </Button>
          </div>

          <div>
            <CurrencySelector />
          </div>
        </div>
      </div>

      {/* Afficharge mobile du menu */}
      <div className="flex md:hidden justify-between">
        <div onClick={handleMenu}>
          {
            openMenu ? <MdClose className="cursor-pointer" /> : <MdOutlineMenu className="cursor-pointer" />
          }
        </div>
        <div>
          <Image src={logo} alt="Logo" />
        </div>
        <div>
          <CiSearch className="text-lg" />
        </div>
      </div>
      {
        openMenu &&
        <div className="flex flex-col items-center justify-center gap-6 h-screen z-50 bg-gray-900 rounded-xl mt-10">
          <div>
            <ul className="flex flex-col gap-4 text-gray-300 font-semibold">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/category">Category</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">

          <div>
            <Button variant="white" size="md">
              Join the community
            </Button>
          </div>

          <div>
            <CurrencySelector />
          </div>
        </div>

        </div>
      }
    </nav>
  );
}