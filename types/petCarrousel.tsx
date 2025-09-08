import { Pet } from "./pet";

export type PetCarouselProps = {
  pet: Pet;
  relatedImages?: string[]; // optionnel si tu veux plusieurs images pour un pet
};