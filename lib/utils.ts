/**
 * Fusionne des classes CSS de manière intelligente.
 *
 * - Utilise `clsx` pour gérer les classes conditionnelles.
 * - Utilise `tailwind-merge` pour éviter les conflits entre classes Tailwind (ex: "p-2 p-4" → garde "p-4").
 *
 * Exemple :
 * ```tsx
 * <button className={cn("p-2", isActive && "bg-blue-500", "p-4")} />
 * ```
 *
 * Résultat : "p-4 bg-blue-500" (la classe `p-2` est supprimée car remplacée par `p-4`)
 *
 * @param inputs Liste de classes CSS (string, undefined, null, false).
 * @returns Chaîne de classes optimisée et fusionnée.
 */
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}