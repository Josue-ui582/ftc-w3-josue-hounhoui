"use client";

import Image from "next/image";
import { LuChevronDown } from "react-icons/lu";
import { currencies } from "@/data/currencie";
import { useCurrency } from "@/hooks/useCurrency";
import { useState, useEffect, useRef } from "react";

/**
 * CurrencySelector Component
 *
 * @component
 * @description
 * Ce composant React affiche un sélecteur de devises avec le drapeau et le code
 * de la devise sélectionnée. L'utilisateur peut cliquer pour ouvrir un menu
 * déroulant et choisir une autre devise. La sélection est gérée via un hook
 * personnalisé `useCurrency`.
 *
 * @returns {JSX.Element} Un bouton de sélection de devise avec un menu déroulant
 *
 * @example
 * // Exemple d'utilisation
 * import CurrencySelector from "@/components/CurrencySelector";
 *
 * export default function Header() {
 *   return (
 *     <header>
 *       <CurrencySelector />
 *     </header>
 *   );
 * }
 */

export default function CurrencySelector() {
  const { selected, setSelected } = useCurrency();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermer le menu si on clique en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div ref={menuRef} className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-1 py-1 cursor-pointer rounded-md hover:bg-gray-100"
      >
        <Image
          src={selected.flag}
          alt={selected.code}
          width={20}
          height={20}
          className="rounded-full object-cover"
        />
        <span className="font-medium">{selected.code}</span>
        <LuChevronDown />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg z-50">
          <ul className="py-1">
            {currencies.map((currency) => (
              <li
                key={currency.code}
                className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  setSelected(currency);
                  setOpen(false);
                }}
              >
                <Image
                  src={currency.flag}
                  alt={currency.code}
                  width={20}
                  height={20}
                  className="rounded-full object-cover"
                />
                <span>{currency.code}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}