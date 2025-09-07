
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

// La liste complète
export type CategoryType = {
  categorys: CategoryItem[];
};
