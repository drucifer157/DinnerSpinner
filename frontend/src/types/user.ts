import type { Cuisine, CookingExperience } from "./taxonomy";

export interface User {
  id: string;

  name: string;

  householdSize: number;

  favoriteCuisines: Cuisine[];

  experience: CookingExperience;

  level: number;

  kitchenXp: number;
}