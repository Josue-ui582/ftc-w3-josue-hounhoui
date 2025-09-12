"use client";

import { createContext, useState, ReactNode, useEffect } from "react";
import { CurrencyContextType } from "@/types/currency";
import { Currency } from "@/types/currency";
import { fetchRates } from "../../../lib/exchangeRates";

/**
 * CurrencyContext & CurrencyProvider
 *
 * @context
 * @description
 * `CurrencyContext` est un contexte React qui permet de partager la devise
 * sélectionnée et une fonction pour la mettre à jour à travers l'arborescence
 * de composants, sans avoir besoin de passer des props manuellement.
 *
 * `CurrencyProvider` est un composant qui encapsule ses enfants et fournit
 * ce contexte. Il initialise la devise par défaut (la première du tableau
 * `currencies`) et expose la valeur via `CurrencyContext.Provider`.
 *
 * @typedef {Object} CurrencyContextType
 * @property {{ code: string, flag: string }} selected - Devise actuellement sélectionnée
 * @property {Function} setSelected - Fonction pour mettre à jour la devise sélectionnée
 *
 * @example
 * // Exemple d'utilisation
 * import { CurrencyProvider } from "@/components/layout/navbar/currencyContext";
 *
 * export default function App() {
 *   return (
 *     <CurrencyProvider>
 *       <YourComponent />
 *     </CurrencyProvider>
 *   );
 * }
*/

/**
 * Contexte global qui stocke la devise sélectionnée
*/

export const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

/**
 * CurrencyProvider
 *
 * @component
 * @param {Object} props
 * @param {ReactNode} props.children - Les composants enfants qui auront accès au contexte
 * @returns {JSX.Element} Fournit le contexte `CurrencyContext` aux composants enfants
*/

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [selected, setSelected] = useState<Currency>({
    code: "VND",
    label: "Vietnamese đồng",
    flag: "/flags/vn.png",
  });

  // Charger les taux depuis l’API au montage
  useEffect(() => {
    fetchRates(selected.code === "VND" ? "EUR" : selected.code)
      .then((fetchedRates) => {
        setRates(fetchedRates);
      })
      .catch((err) => {
        console.error(err);
        setRates({ USD: 1, EUR: 1, VND: 27000 }); // fallback
      });
  }, [selected]);


  return (
    <CurrencyContext.Provider value={{ selected, setSelected, rates }}>
      {children}
    </CurrencyContext.Provider>
  );
}