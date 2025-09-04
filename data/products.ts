import { Product } from "@/types/product";

/**
 * Liste de produits disponibles dans l'application.
 *
 * Chaque élément du tableau représente un produit et respecte
 * l'interface `Product` définie dans `@/types/product`.
 *
 * Champs :
 * - `id`    : Identifiant unique du produit.
 * - `image` : URL ou chemin relatif vers l'image du produit.
 * - `title` : Nom ou titre du produit affiché dans l'UI.
 * - `type`  : Catégorie ou type du produit (ex : "Pour chien", "Pour chat").
 * - `size`  : Taille ou capacité du produit (par ex. poids en grammes, volume en ml).
 * - `price` : Prix du produit en devise locale (par ex. en FCFA ou €).
 *
 * Exemple d'utilisation :
 * ```ts
 * import { products } from "@/data/products";
 *
 * // Récupérer le premier produit
 * const firstProduct = products[0];
 * console.log(firstProduct.title, firstProduct.price);
 * ```
 *
 * ⚠️ Les données présentes ici sont statiques et servent
 * généralement de **mock data** pour le développement ou les tests.
 * En production, elles devront être remplacées par des données
 * venant d'une API ou d'une base de données.
 */
export const products: Product[] = [
  {
    id: 1,
    image: "/product1.png",
    title: "Reflex Plus Adult Cat Food Salmon",
    type: "Dog Food",
    size: "885mg",
    price: 140000,
    isSize: true
  },
  {
    id: 2,
    image: "/product2.png",
    title: "Reflex Plus Adult Cat Food Salmon",
    type: "Cat Food",
    size: "1.5kg",
    price: 165000,
    isSize: true
  },
  {
    id: 3,
    image: "/product3.png",
    title: "Cat scratching ball toy kitten sisall rope ball",
    type: "Toy",
    size: "",
    price: 1100000,
    isSize: false
  },
  {
    id: 4,
    image: "/product4.png",
    title: "Cute Pet Cat Warm Nest",
    type: "Toy",
    size: "",
    price: 410000,
    isSize: false
  },
  {
    id: 5,
    image: "/product5.png",
    title: "NaturVet Dogs-Omega-Gold Plus Salmon Oil",
    type: "Dog Food",
    size: "385gm",
    price: 350000,
    isSize: true
  },
  {
    id: 6,
    image: "/product6.png",
    title: "Customes Fashion Pet Clother Cowboy Rider",
    type: "Costume",
    size: "1.5kg",
    price: 500000,
    isSize: true
  },
  {
    id: 7,
    image: "/product7.png",
    title: "Costumes Kichen Drumsti ck Headband",
    type: "Costume",
    size: "",
    price: 400000,
    isSize: false
  },
  {
    id: 8,
    image: "/product8.png",
    title: "Plush Pet Toy",
    type: "Toy",
    size: "",
    price: 250000,
    isSize: false
  },
];
