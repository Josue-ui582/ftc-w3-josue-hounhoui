"use client";
import { useContext } from "react";
import { CurrencyContext } from "@/components/layout/navbar/currencyContext";

/**
 * useCurrency Hook
 *
 * @hook
 * @description
 * Ce hook personnalisé permet d'accéder au contexte de la devise (`CurrencyContext`).
 * Il retourne l'objet de contexte qui contient la devise actuellement sélectionnée
 * ainsi que la fonction permettant de la modifier.  
 * 
 * ⚠️ Ce hook doit impérativement être utilisé à l'intérieur d'un `CurrencyProvider`.
 * Si ce n'est pas le cas, une erreur est levée.
 *
 * @returns {{ selected: { code: string, flag: string }, setSelected: Function }}
 * Un objet contenant :
 * - `selected` : l'objet devise actuellement sélectionné (code + drapeau).
 * - `setSelected` : fonction pour mettre à jour la devise.
 *
 * @throws {Error} Lance une erreur si le hook est utilisé en dehors du `CurrencyProvider`.
 *
 * @example
 * import { useCurrency } from "@/hooks/useCurrency";
 *
 * function Example() {
 *   const { selected, setSelected } = useCurrency();
 *
 *   return (
 *     <div>
 *       <p>Devise actuelle : {selected.code}</p>
 *       <button onClick={() => setSelected({ code: "EUR", flag: "/eu.png" })}>
 *         Changer en EUR
 *       </button>
 *     </div>
 *   );
 * }
 */

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return context;
}