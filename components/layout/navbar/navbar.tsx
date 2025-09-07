"use client";

import React from "react";
import Image from "next/image";
import logo from "../../../app/images/Frame.svg";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import CurrencySelector from "./currency";
import { Button } from "@/components/ui/button";

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
  return (
    <nav className="relative flex justify-center items-center h-20 px-14 z-40">
      <div className="flex justify-between items-center w-full">
        {/* Logo + Menu */}
        <div className="flex gap-8 justify-center items-center">
          {/* Logo */}
          <div>
            <Image src={logo} alt="Logo" />
          </div>

          {/* Menu principal */}
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

        {/* Recherche + CTA + Sélecteur */}
        <div className="flex justify-center items-center gap-4">
          {/* Barre de recherche */}
          <div className="relative">
            <Input type="text" placeholder="Search something here..." />
            <CiSearch className="absolute top-3 bottom-2 left-2 text-lg" />
          </div>

          {/* Bouton CTA */}
          <div>
            <Button variant="darckblue" size="md">
              Join the community
            </Button>
          </div>

          {/* Sélecteur devise */}
          <div>
            <CurrencySelector />
          </div>
        </div>
      </div>
    </nav>
  );
}