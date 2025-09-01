import { cn } from "@/lib/utils";
import { ButtonProps, ButtonVariant, ButtonSize } from "@/types/button";

/**
 * Bouton réutilisable avec variantes de style et tailles prédéfinies.
 *
 * - Les styles de base assurent une bonne accessibilité (focus, transitions).
 * - Les variantes définissent le thème du bouton (`primary`, `secondary`, `danger`, `outline`).
 * - Les tailles définissent le padding et la taille du texte (`sm`, `md`, `lg`).
 * - Accepte toutes les props natives d’un `<button>` (`onClick`, `disabled`, `type="submit"`, etc.).
 *
 * Exemple :
 * ```tsx
 * <Button variant="primary" size="md">Enregistrer</Button>
 * <Button variant="danger" size="sm" onClick={handleDelete}>Supprimer</Button>
 * <Button variant="outline" className="w-full">Annuler</Button>
 * ```
 *
 * @param variant Définit la variante visuelle du bouton (`"primary" | "secondary" | "danger" | "outline"`).
 * @param size Définit la taille du bouton (`"sm" | "md" | "lg"`).
 * @param className Ajoute des classes CSS supplémentaires.
 * @param props Toutes les autres props valides d’un élément `<button>`.
 * @returns Un composant bouton stylisé et accessible.
*/

export function Button({ 
  variant = "primary", 
  size = "md", 
  className, 
  ...props 
}: ButtonProps) {
  const baseStyles =
    "rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-400",
    secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-400",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 text-gray-900",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
