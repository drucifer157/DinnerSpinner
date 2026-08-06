export interface UserRecipe {
  userId: string;

  recipeId: string;

  favorite: boolean;

  personalRating: number;

  timesCooked: number;

  lastCooked?: Date;

  notes: string;

  mastered: boolean;
}