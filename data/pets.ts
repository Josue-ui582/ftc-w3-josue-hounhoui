import { Pet } from "@/types/pet";

/**
 * Liste de pets disponibles dans l'application.
 *
 * Chaque élément du tableau représente un pet et respecte
 * le type `Pet` définie dans `@/types/pet`.
 *
 * Champs :
 * - `id`    : Identifiant unique du pet.
 * - `image` : URL ou chemin relatif vers l'image du pet.
 * - `title` : Nom ou titre du pet affiché dans l'UI.
 * - `type`  : Catégorie ou type du pet (ex : "Pour chien", "Pour chat").
 * - `trash` : Ajouter un pet au panier.
 * - `detail`: Les détails sur le pet à ajouter au panier
 * - `size`  : Taille ou capacité du pet (par ex. poids en grammes, volume en ml).
 * - `price` : Prix du pet en devise locale (par ex. en FCFA ou €).
 *
 * Exemple d'utilisation :
 * ```ts
 * import { products } from "@/data/pets";
 *
 * // Récupérer le premier pet
 * const firstProduct = products[0];
 * console.log(firstProduct.title, firstProduct.price);
 * ```
 *
 * ⚠️ Les données présentes ici sont statiques et servent
 * généralement de **mock data** pour le développement ou les tests.
 * En production, elles devront être remplacées par des données
 * venant d'une API ou d'une base de données.
 */

export const pets: Pet[] = [
  {
    id: "1",
    name: "MO234 - Pomeranian White",
    breed: "Pomeranian",
    gender: "Male",
    age: "02 months",
    price: 6900000,
    image: "/dog1.png",
  },
  {
    id: "2",
    name: "MO102 - Poodle Tiny Yellow",
    breed: "Poodle",
    gender: "Female",
    age: "02 months",
    price: 3900000,
    image: "/dog2.png",
  },
  {
    id: "3",
    name: "MO202 - Poodle Tiny Sepia",
    breed: "Poodle",
    gender: "Male",
    age: "02 months",
    price: 4000000,
    image: "/dog3.png",
  },
  {
    id: "4",
    name: "MO512 - Alaskan Malamute Grey",
    breed: "Alaskan",
    gender: "Male",
    age: "02 months",
    price: 8900000,
    image: "/dog4.png",
  },
  {
    id: "5",
    name: "MO231 - Pembroke Corgi Cream",
    breed: "Pembroke",
    gender: "Male",
    age: "02 months",
    price: 7900000,
    image: "/dog5.png",
  },
  {
    id: "6",
    name: "MO502 - Pembroke Corgi Tricolor",
    breed: "Pembroke",
    gender: "Female",
    age: "02 months",
    price: 9000000,
    image: "/dog6.png",
  },
  {
    id: "7",
    name: "MO231 - Pembroke Corgi Tricolor",
    breed: "Pembroke",
    gender: "Female",
    age: "02 months",
    price: 9000000,
    image: "/dog7.png",
  },
  {
    id: "8",
    name: "MO512 - Poodle Tiny Dairy Cow",
    breed: "Poodle",
    gender: "Male",
    age: "02 months",
    price: 5000000,
    image: "/dog8.png",
  },
];