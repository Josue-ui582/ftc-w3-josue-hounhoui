/**
 * Composant Input réutilisable
 *
 * Ce composant rend un champ de saisie (`<input>`) stylisé avec Tailwind CSS,
 * tout en offrant une gestion intégrée des erreurs et la possibilité d'ajouter
 * des classes personnalisées.
 *
 * @param {InputProps} props - Les propriétés attendues par le composant.
 * 
 * Propriétés principales :
 * - `className?: string` → Permet d’ajouter des classes Tailwind supplémentaires
 *   pour personnaliser le style de l’input.
 * - `error?: string` → Si une erreur est fournie, l’input sera affiché avec une
 *   bordure rouge et le message d’erreur apparaîtra en dessous.
 * - `...props` → Toutes les autres propriétés HTML standard d’un `<input>` 
 *   (ex: `type`, `placeholder`, `value`, `onChange`, etc.).
 *
 * Fonctionnement :
 * - Utilise la fonction `cn` (clsx + tailwind-merge) pour fusionner les classes
 *   Tailwind par défaut avec les classes personnalisées.
 * - Change la couleur de la bordure en fonction de la présence d’une erreur :
 *   - Bordure rouge si `error` est défini.
 *   - Bordure grise par défaut sinon.
 * - Affiche un message d’erreur sous l’input si `error` contient une chaîne.
 *
 * Exemple d’utilisation :
 * ```tsx
 * <Input 
 *   type="text"
 *   placeholder="Entrez votre nom"
 *   error="Ce champ est obligatoire"
 * />
 * ```
 */

import { InputProps } from "@/types/input";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function Input({ className, error, clearable, ...props }: InputProps & { clearable?: boolean }) {
  const [value, setValue] = useState(props.value || "");
  const [showPassword, setShowPassword] = useState(false);

  const inputType = props.type === "password" ? (showPassword ? "text" : "password") : props.type;

  return (
    <div className="relative flex flex-col space-y-1">
      <input
        className={cn(
          "rounded-xl border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400",
          error ? "border-red-500" : "border-gray-300",
          className
        )}
        {...props}
        type={inputType}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-invalid={!!error}
      />
      {clearable && value && (
        <button
          type="button"
          className="absolute right-2 top-1/2 transform -translate-y-1/2"
          onClick={() => setValue("")}
        >
          ✕
        </button>
      )}
      {props.type === "password" && (
        <button
          type="button"
          className="absolute right-8 top-1/2 transform -translate-y-1/2"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "👁" : "👁‍🗨"}
        </button>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}