"use client";

import { useState } from "react";
import Image from "next/image";
import { LuChevronDown } from "react-icons/lu";
import { Currency } from "@/types/currency";

/**
 * Tableau des devises disponibles
 * Chaque objet contient :
 * - code : symbole de la devise
 * - label : nom complet
 * - flag : URL du drapeau correspondant
*/

const currencies: Currency[] = [
  { code: "VND", label: "Vietnamese Dong", flag: "https://flagcdn.com/w20/vn.png" },
  { code: "USD", label: "US Dollar", flag: "https://flagcdn.com/w20/us.png" },
  { code: "EUR", label: "Euro", flag: "https://flagcdn.com/w20/eu.png" },
];

export default function CurrencySelector() {
  const [selected, setSelected] = useState<Currency>(currencies[0]);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-1 py-1 cursor-pointer rounded-md hover:bg-gray-100"
      >
        <Image src={selected.flag} alt={selected.code} width={20} height={20} className="rounded-full object-cover"/>
        <span className="font-medium">{selected.code}</span>
        <LuChevronDown />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded-md shadow-lg">
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
                <Image src={currency.flag} alt={currency.code} width={20} height={20} className="rounded-2xl object-cover"/>
                <span>{currency.code}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}