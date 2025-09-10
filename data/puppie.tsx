import { MorePuppie } from "@/types/morepuppie"

/**
 * Liste de pupppies disponibles dans l'application.
 *
 * Chaque élément du tableau représente un puppie et respecte
 * le type `MorePuppie` définie dans `@/types/product`.
 *
 * Champs :
 * - `id`    : Identifiant unique du puppie.
 * - `image` : URL ou chemin relatif vers l'image du puppie.
 * - `title` : Nom ou titre du puppie affiché dans l'UI.
 * - `type`  : Catégorie ou type du puppie (ex : "Pour chien", "Pour chat").
 * - `trash` : Ajouter un puppie au panier.
 * - `detail`: Les détails sur le puppie à ajouter au panier
 * - `size`  : Taille ou capacité du puppie (par ex. poids en grammes, volume en ml).
 * - `price` : Prix du puppie en devise locale (par ex. en FCFA ou €).
 *
 * Exemple d'utilisation :
 * ```ts
 * import { puppies } from "@/data/puppies";
 *
 * // Récupérer le premier puppie
 * const firstPuppie = puppies[0];
 * console.log(firstPuppie.title, firstProduct.price);
 * ```
 *
 * ⚠️ Les données présentes ici sont statiques et servent
 * généralement de **mock data** pour le développement ou les tests.
 * En production, elles devront être remplacées par des données
 * venant d'une API ou d'une base de données.
 */

export const puppies : MorePuppie [] = [
    {
        id: "1",
        name: "MO234 - Pomeranian White",
        breed: "Pomeranian",
        gender: "Male",
        age: "02 months",
        size: "Small",
        color: "White",
        price: 6900000,
        image: "/puppie1.jpg",
    },
    {
        id: "2",
        name: "M0502 - Poodele Tiny Yellow",
        breed: "Pomeranian",
        gender: "Fameale",
        age: "02 months",
        size: "Small",
        color: "White",
        price: 3900000,
        image: "/puppie2.jpg",
    },
    {
        id: "3",
        name: "MO102 - Poodele Tiny Sepia",
        breed: "Pomeranian",
        gender: "Male",
        age: "02 months",
        size: "Small",
        color: "White",
        price: 4000000,
        image: "/puppie3.jpg",
    },
    {
        id: "4",
        name: "MO512 - Alaskan Malamute Grey",
        breed: "Pomeranian",
        gender: "Male",
        age: "02 months",
        size: "Small",
        color: "White",
        price: 8900000,
        image: "/puppie4.jpg",
    },
]