import { CategoryItem } from "@/types/category";

/**
 * Liste de chat disponibles dans l'application.
 *
 * Chaque élément du tableau représente un chat et respecte
 * l'interface `Category` définie dans `@/types/category`.
 *
 * Champs :
 * - `id`    : Identifiant unique du chat.
 * - `image` : URL ou chemin relatif vers l'image du chat.
 * - `title` : Nom ou titre du chat affiché dans l'UI.
 * - `breed` : La taille du chat selon Small, Medium et Large
 * - `color` : La couleur du chat
 * - `gender` : Le sexe du chat selon male et femelle
 * - `age` : L'âge exact que le chat a
 * - `price` : Prix du chat en devise locale (par ex. en FCFA ou €).
 *
 * Exemple d'utilisation :
 * ```ts
 * import { categorys } from "@/data/category";
 *
 * // Récupérer le premier produit
 * const firstCategory = categorys[0];
 * console.log(firstCategory.title, firstCategory.price);
 * ```
 *
 * ⚠️ Les données présentes ici sont statiques et servent
 * généralement de **mock data** pour le développement ou les tests.
 * En production, elles devront être remplacées par des données
 * venant d'une API ou d'une base de données.
 */

export const categorys: CategoryItem[] = [
  { id: "1", 
    name: "CA001 - British Shorthair Blue", 
    breed: "small", 
    gender: "Male", 
    color : "White",
    age: "02 months", 
    price: 5500000, 
    image: "/dog1.png" },

  { id: "2", 
    name: "CA002 - Persian White", 
    breed: "small", 
    gender: "Female", 
    color : "Gray",
    age: "03 months", 
    price: 6000000, 
    image: "/dog3.png" },

  { id: "3", 
    name: "CA003 - Maine Coon Brown Tabby", 
    breed: "large", 
    gender: "Male", 
    color : "Chocolate",
    age: "04 months", 
    price: 7500000, 
    image: "/dog3.png" },

  { id: "4", 
    name: "CA004 - Siamese Seal Point", 
    breed: "small", 
    gender: "Female", 
    color : "White",
    age: "02 months", 
    price: 5000000, 
    image: "/dog4.png" },

  { id: "5", 
    name: "CA005 - Bengal Spotted", 
    breed: "medium", 
    gender: "Male", 
    color : "whiteGray",
    age: "03 months", 
    price: 8200000, 
    image: "/dog5.png" },

  { id: "6", 
    name: "CA006 - Ragdoll Blue Bicolor", 
    breed: "medium", 
    gender: "Female", 
    color : "BlackWhite",
    age: "04 months", 
    price: 9000000, 
    image: "/dog6.png" },

  { id: "7", 
    name: "CA007 - Scottish Fold Grey", 
    breed: "large", 
    gender: "Male", 
    color : "BlackWhite",
    age: "02 months", 
    price: 7000000, 
    image: "/dog7.png" },

  { id: "8", 
    name: "CA008 - Sphynx Pink", 
    breed: "small", 
    gender: "Female", 
    color : "BlackWhite",
    age: "03 months", 
    price: 8500000, 
    image: "/dog8.png" },

  { id: "9", 
    name: "CA009 - Russian Blue", 
    breed: "large", 
    gender: "Male", 
    color : "Yellow",
    age: "03 months", 
    price: 7200000, 
    image: "/cat9Yellow.jpeg" },

  { id: "10",
    name: "CA010 - Norwegian Forest", 
    breed: "large", 
    gender: "Female", 
    color : "White",
    age: "04 months", 
    price: 8900000, 
    image: "/cat10White.jpeg" },

  { id: "11", 
    name: "CA011 - American Shorthair Silver", 
    breed: "medium", 
    gender: "Male", 
    color : "Yellow",
    age: "02 months", 
    price: 6100000, 
    image: "/cat11Yellow.jpeg" },

  { id: "12", 
    name: "CA012 - Himalayan Cream",
    breed: "large", 
    gender: "Female", 
    color : "White",
    age: "05 months", 
    price: 9200000, 
    image: "/cat12White.jpeg" },

  { id: "13", 
    name: "CA013 - Burmese Brown", 
    breed: "small", 
    gender: "Male", 
    color : "BlackWhite",
    age: "02 months", 
    price: 5400000, 
    image: "/cat13BlackWhite.jpeg" },

  { id: "14", 
    name: "CA014 - Chartreux Blue", 
    breed: "large", 
    gender: "Female", 
    color : "Gray",
    age: "03 months", 
    price: 8000000, 
    image: "/cat14Gray.jpeg" },

  { id: "15", 
    name: "CA015 - Turkish Angora White", 
    breed: "medium", 
    gender: "Male", 
    color : "Gray",
    age: "02 months", 
    price: 7700000, 
    image: "/cat15Gray.jpeg" },

  { id: "16", 
    name: "CA016 - Devon Rex", 
    breed: "medium", 
    gender: "Female", 
    color : "White",
    age: "04 months", 
    price: 6900000, 
    image: "/cat16White.jpeg" },

  { id: "17", 
    name: "CA017 - Cornish Rex", 
    breed: "large", 
    gender: "Male", 
    color : "Yellow",
    age: "03 months", 
    price: 7100000, 
    image: "/cat17Yellow.jpeg" },

  { id: "18", 
    name: "CA018 - Manx", 
    breed: "small", 
    gender: "Female", 
    color : "Yellow",
    age: "02 months", 
    price: 6400000, 
    image: "/cat18Yellow.jpeg" },

  { id: "19", 
    name: "CA019 - Oriental Shorthair", 
    breed: "small", 
    gender: "Male", 
    color : "White",
    age: "05 months", 
    price: 9300000, 
    image: "/cat19White.jpeg" },

  { id: "20", 
    name: "CA020 - Balinese", 
    breed: "large", 
    gender: "Female", 
    color : "BlackWhite",
    age: "04 months", 
    price: 8600000, 
    image: "/cat20BlackWhite.jpeg" },

  { id: "21", 
    name: "CA021 - Ragamuffin", 
    breed: "medium", 
    gender: "Male", 
    color : "Yellow",
    age: "03 months", 
    price: 7500000, 
    image: "/cat21Yellow.jpeg" },

  { id: "22", 
    name: "CA022 - Somali", 
    breed: "medium", 
    gender: "Female", 
    color : "Yellow",
    age: "02 months", 
    price: 7000000, 
    image: "/cat22Yellow.jpeg" },

  { id: "23", 
    name: "CA023 - Exotic Shorthair", 
    breed: "large", 
    gender: "Male", 
    color : "Yellow",
    age: "04 months", 
    price: 8500000, 
    image: "/cat23Yellow.jpeg" },

  { id: "24", 
    name: "CA024 - Abyssinian", 
    breed: "small", 
    gender: "Female", 
    color : "Gray",
    age: "03 months", 
    price: 7700000, 
    image: "/cat24Gray.jpeg" },

  { id: "25", 
    name: "CA025 - Tonkinese", 
    breed: "marge", 
    gender: "Male", 
    color : "Yellow",
    age: "02 months", 
    price: 6500000, 
    image: "/cat25Yellow.jpeg" },

  { id: "26", 
    name: "CA026 - Singapura", 
    breed: "small", 
    gender: "Female", 
    color : "White",
    age: "03 months", 
    price: 8800000, 
    image: "/cat26White.jpeg" },

  { id: "27", 
    name: "CA027 - Ocicat", 
    breed: "large", 
    gender: "Male", 
    color : "Yellow",
    age: "02 months", 
    price: 7400000, 
    image: "/cat27Yellow.jpeg" },

  { id: "28", 
    name: "CA028 - Selkirk Rex", 
    breed: "large", 
    gender: "Female", 
    color : "BlackWhite",
    age: "04 months", 
    price: 9100000, 
    image: "/cat28BlackWhite.jpeg" },

  { id: "29", 
    name: "CA029 - LaPerm", 
    breed: "medium", 
    gender: "Male", 
    color : "White",
    age: "03 months", 
    price: 6600000, 
    image: "/cat29White.jpeg" },

  { id: "30", 
    name: "CA030 - Japanese Bobtail", 
    breed: "medium", 
    gender: "Female", 
    color : "White",
    age: "02 months", 
    price: 7000000, 
    image: "/cat30White.jpeg" },

  { id: "31", 
    name: "CA031 - Turkish Van", 
    breed: "large", 
    gender: "Male", 
    color : "Yellow",
    age: "05 months", 
    price: 9400000, 
    image: "/cat31Yellow.jpeg" },

  { id: "32", 
    name: "CA032 - Nebelung", 
    breed: "small", 
    gender: "Female", 
    color : "Gray",
    age: "03 months", 
    price: 7900000, 
    image: "/cat32Gray.jpeg" },

  { id: "33", 
    name: "CA033 - Savannah", 
    breed: "medium", 
    gender: "Male", 
    color : "White",
    age: "04 months", 
    price: 9500000, 
    image: "/cat33White.jpeg" },

  { id: "34", 
    name: "CA034 - Munchkin", 
    breed: "medium", 
    gender: "Female", 
    color : "",
    age: "02 months", 
    price: 6800000, 
    image: "/cat34.jpeg" },
]