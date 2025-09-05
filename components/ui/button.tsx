import { cn } from "@/lib/utils";
import { ButtonProps, ButtonVariant, ButtonSize } from "@/types/button";

/**
 * Bouton réutilisable avec variantes de style et tailles prédéfinies.
 *
 * - Les styles de base assurent une bonne accessibilité (focus, transitions).
 * - Les variantes définissent le thème du bouton (`darckblue`, `blue`, `gray`, `outline`).
 * - Les tailles définissent le padding et la taille du texte (`sm`, `md`, `lg`).
 * - Accepte toutes les props natives d’un `<button>` (`onClick`, `disabled`, `type="submit"`, etc.).
 *
 * Exemple :
 * ```tsx
 * <Button variant="darckblue" size="md">Enregistrer</Button>
 * <Button variant="gray" size="sm" onClick={handleDelete}>Supprimer</Button>
 * <Button variant="blue" className="w-full">Annuler</Button>
 * ```
 *
 * @param variant Définit la variante visuelle du bouton (`"blue" | "darckblue" | "gray" | "outline"`).
 * @param size Définit la taille du bouton (`"sm" | "md" | "lg"`).
 * @param className Ajoute des classes CSS supplémentaires.
 * @param props Toutes les autres props valides d’un élément `<button>`.
 * @returns Un composant bouton stylisé et accessible.
*/

export function Button({ 
  variant = "default", 
  size = "md", 
  className, 
  type = "button",
  ...props 
}: ButtonProps) {
  const baseStyles =
    "rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<ButtonVariant, string> = {
    darckblue: "bg-[#003459] text-white cursor-pointer",
    blue: "bg-blue-300 text-gray-900 cursor-pointer",
    gray: "bg-gray-100 text-gray-600 cursor-pointer",
    white: "bg-white text-[#003459] cursor-pointer",
    outline: "bg-[#263681] text-white cursor-pointer",
    default: "bg-transparent border border-[#003459] text-[#003459] cursor-pointer flex justify-center items-center gap-2"
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}