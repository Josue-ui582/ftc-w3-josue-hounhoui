export type FiltersProps = {
  filters: {
    genre: string[];
    couleur: string[];
  };
  onChange: (filterType: "genre" | "couleur", value: string) => void;
}