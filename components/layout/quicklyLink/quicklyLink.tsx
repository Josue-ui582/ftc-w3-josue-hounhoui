import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

/**
 * QuicklyLink Component
 *
 * @component
 * @description
 * Ce composant affiche une section de liens rapides de navigation et des icônes de réseaux sociaux.
 * ---
 * **Structure :**
 * - Une liste de liens internes utilisant `next/link` pour la navigation côté client (SEO + performances).
 * - Une liste d’icônes de réseaux sociaux (Facebook, Twitter, Instagram, YouTube) rendues via `react-icons`.
 *
 * ---
 * **Comportement :**
 * - La navigation est gérée par `Next.js` (aucun rechargement de page).
 * - Les icônes sont simplement décoratives ici (pas encore liées à des URLs externes).
 *
 * ---
 * **Accessibilité :**
 * - Les icônes ne comportent pas d’alternatives textuelles (`aria-label`) → à ajouter si nécessaire pour les lecteurs d’écran.
 * - Les liens `next/link` assurent une bonne gestion du routage.
 *
 * ---
 * **Exemple d’utilisation :**
 * ```tsx
 * <footer>
 *   <QuicklyLink />
 * </footer>
 * ```
 *
 * Résultat attendu : un bloc avec
 * - Liens "Home", "Category", "About", "Contact".
 * - À droite, les icônes des réseaux sociaux.
 */
export default function QuicklyLink () {
    return(
        <div className="flex justify-between items-center">
            <div>
                <ul className="flex justify-center items-center gap-4 text-[14px]">
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/">Category</Link>
                    </li>
                    <li>
                        <Link href="/">About</Link>
                    </li>
                    <li>
                        <Link href="/">Contact</Link>
                    </li>
                </ul>
            </div>

            <div className="flex justify-center items-center gap-4">
                <FaFacebook />
                <FaTwitter />
                <FaInstagram />
                <FaYoutube />
            </div>
        </div>
    )
}