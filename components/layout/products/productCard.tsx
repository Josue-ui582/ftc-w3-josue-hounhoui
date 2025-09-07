import { Product } from "@/types/product";
import React from "react";
import Image from "next/image";

/**
 * ProductCard Component
 *
 * @component
 * @description
 * Ce composant affiche une carte individuelle représentant un produit.
 * Il utilise le composant `next/image` pour optimiser l'affichage de l'image
 * et applique un style avec TailwindCSS.
 *
 * Props :
 * - `product` (`Product`) : Objet représentant un produit, conforme au type
 *   défini dans `@/types/product`. Les champs attendus incluent :
 *   - `id`    : Identifiant unique.
 *   - `image` : URL ou chemin de l'image du produit.
 *   - `title` : Nom ou titre du produit.
 *   - `type`  : Catégorie ou type du produit.
 *   - `size`  : Taille ou capacité du produit (optionnel selon `isSize`).
 *   - `price` : Prix du produit (nombre).
 *   - `isSize` (optionnel) : Booléen indiquant si la taille doit être affichée.
 *
 * Structure :
 * - Image du produit en haut, avec un ratio fixe.
 * - Détails en dessous : titre, type, taille (si applicable) et prix.
 *
 * Exemple d'utilisation :
 * ```tsx
 * import { Product } from "@/types/product";
 * import ProductCard from "@/components/products/ProductCard";
 *
 * const sampleProduct: Product = {
 *   id: 1,
 *   image: "/dog-food.png",
 *   title: "Dog Food Premium",
 *   type: "Food",
 *   size: 500,
 *  trash: "/tash.png"
 *  detail: ""
 *   price: 15000,
 *   isSize: true,
 * };
 *
 * export default function Example() {
 *   return <ProductCard product={sampleProduct} />;
 * }
 * ```
 */
export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden mt-10 p-2">
      <Image
        src={product.image}
        alt={product.title}
        width={400}
        height={300}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4 flex flex-col gap-3">
        <h3 className="font-bold">{product.title}</h3>
        <p className="text-sm text-gray-600">
          Product : {product.type}{" "}
          {product.isSize ? `- Size : ${product.size}` : ""}
        </p>
        <p className="font-bold mt-2">{product.price.toLocaleString()}</p>
        <div className="bg-[#f7dba7] p-2 rounded flex justify-center items-center gap-2">
          <Image 
            src={product.trash}
            alt="Trash"
            width={20}
            height={20}
          />
          <p className="text-black text-bold"> - {product.detail}</p>
        </div>
      </div>
    </div>
  );
}