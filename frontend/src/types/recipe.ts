import type {
  Cuisine,
  Difficulty,
  KitchenEffort,
  Protein,
  Starch,
  Vegetable,
} from "./taxonomy";

export interface Nutrition {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  sugar: number;
  sodium: number;
}

export interface Ingredient {
  id: string;
  name: string;
  amount: number;
  unit: string;
  optional?: boolean;
}

export interface Step {
  step: number;
  instruction: string;
  timerMinutes?: number;
}

export interface Recipe {
  id: string;

  image: string;

  title: string;

  summary: string;

  cuisine: Cuisine;

  protein: Protein[];

  vegetables: Vegetable[];

  starches: Starch[];

  difficulty: Difficulty;

  kitchenEffort: KitchenEffort;

  prepTime: number;

  cookTime: number;

  servings: number;

  estimatedCost: number;

  rating: number;

  nutrition: Nutrition;

  ingredients: Ingredient[];

  instructions: Step[];
}