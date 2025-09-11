"use client";

import React, { useEffect, useRef, useState } from "react";
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
  // On fait appel à l'état React pour gérer l'affichage du input
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  }

  // Fermer si clic en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSearch(false);
      }
    }

    if (showSearch) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showSearch]);

  // Gérer la touche Entrée
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log("Recherche envoyée :", query);
      setShowSearch(false);
    }
  };

  return (
    <>
      {/* Nav desktop */}
      <nav className="relative hidden lg:flex justify-between items-center md:h-16 sm:h-14 h-12 lg:h-20 px-14 z-40">
        <div className="flex gap-8 items-center">
          <Image src={logo} alt="Logo" />
          <ul className="flex gap-6 text-[#003459] font-semibold">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/category">Category</Link></li>
            <li><Link href="/">About</Link></li>
            <li><Link href="/">Contact</Link></li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <Input type="text" placeholder="Search something here..." />
            <CiSearch className="absolute top-3 left-2 text-lg" />
          </div>
          <Button variant="darckblue" size="md">Join the community</Button>
          <CurrencySelector />
        </div>
      </nav>

      {/* Nav mobile */}
      <nav className="flex lg:hidden flex-col h-20 px-6 z-40">
        <div className="flex relative justify-between items-center">
          <div onClick={handleMenu}>
            {openMenu ? <MdClose className="cursor-pointer" /> : <MdOutlineMenu className="cursor-pointer" />}
          </div>
          <Image src={logo} alt="Logo" />
          <CiSearch 
            className="text-lg cursor-pointer"
            onClick={() => setShowSearch(!showSearch)}
          />

          {showSearch && (
            <input
              ref={inputRef}
              type="text"
              placeholder="Search something ..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="absolute top-0 right-6 w-40 px-2 py-1 text-sm rounded-md border border-gray-300 shadow-md bg-white focus:outline-none"
              autoFocus
            />
          )}
        </div>

        {openMenu && (
          <div className="w-full flex flex-col items-center justify-between gap-6 h-screen z-50 bg-gray-900 rounded-xl py-6">
            <ul className="flex flex-col gap-4 text-gray-300 font-semibold">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/category">Category</Link></li>
              <li><Link href="/">About</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
            <Button variant="white" size="md">Join the community</Button>
            <CurrencySelector />
          </div>
        )}
      </nav>
    </>
  );
}