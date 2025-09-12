// types/category.ts
export type CategoryItem = {
  id: string;
  name: string;
  breed: string;
  gender: string;
  age: string;
  price: number;
  color: string;
  image: string;
};

export type Filters = {
  genre: string[];
  couleur: string[];
  race: string[];
};

export type FiltersProps = {
  filters: Filters;
  onChange: (filterType: "genre" | "couleur" | "race", value: string) => void;
};

export type CategoryListeProps = {
  // IMPORTANT: ici c'est un tableau de CategoryItem
  categorys: CategoryItem[];
  filters: Filters;
  onFilterChange: (filterType: "genre" | "couleur" | "race", value: string) => void;
};