export type FiltersProps = {
  filters: {
    genre: string[];
    couleur: string[];
    race : string[]
  };
  onChange: (filterType: "genre" | "couleur" | "race", value: string) => void;
}