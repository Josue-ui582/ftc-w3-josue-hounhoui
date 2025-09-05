import React from "react";
import { products } from "@/data/products";
import ProductCard from "./productCard";
import { Button } from "../../ui/button";
import { IoPlayCircleOutline } from "react-icons/io5";

/**
 * ProductList Component
 *
 * @component
 * @description
 * Ce composant affiche une liste de produits sous forme de cartes (`ProductCard`),
 * avec un en-tête et un bouton permettant d'accéder à plus de produits.
 *
 * Structure :
 * - Un conteneur principal centré avec un titre et un sous-titre.
 * - Un bouton **"View more"** (actuellement sans logique associée).
 * - Une grille responsive affichant les produits (1 colonne sur mobile,
 *   2 colonnes sur tablettes, 4 colonnes sur desktop).
 *
 * Données :
 * - Les produits sont importés depuis `@/data/products`.
 * - Chaque produit est passé en prop au composant enfant `ProductCard`.
 * - La clé unique (`key`) est basée sur l'`id` du produit.
 *
 * Exemple d'utilisation :
 * ```tsx
 * import ProductList from "@/components/products/ProductList";
 *
 * export default function HomePage() {
 *   return (
 *     <main>
 *       <ProductList />
 *     </main>
 *   );
 * }
 * ```
 *
 * ⚠️ Remarque :
 * - Le bouton **"View more"** peut être relié à une navigation ou à
 *   une fonction de pagination selon le besoin.
 * - Les données actuelles (`products`) sont statiques ; en production,
 *   elles devraient être récupérées dynamiquement via une API.
 */
export default function ProductList() {
  return (
    <article className="flex justify-center items-center mt-10">
      <div className="w-[90%]">
        <div className="flex justify-between items-center">
          <div>
            <h5 className="text-black">Hard to choose right products for your pets?</h5>
            <h2 className="text-lg text-[#003459] font-bold">Our Products</h2>
          </div>
          <div>
            <Button>View more <IoPlayCircleOutline /></Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </article>
  );
}