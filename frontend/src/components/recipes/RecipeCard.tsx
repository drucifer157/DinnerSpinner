import type { Recipe } from "../../types/recipe";

import CuisineBadge from "./CuisineBadge";
import DifficultyBadge from "./DifficultyBadge";
import RecipeImage from "./RecipeImage";
import RecipeStats from "./RecipeStats";

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({
  recipe,
}: RecipeCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

      <RecipeImage
        image={recipe.image}
        title={recipe.title}
      />

      <div className="p-6">

        <h2 className="text-3xl font-bold">
          {recipe.title}
        </h2>

        <p className="mt-3 text-gray-600">
          {recipe.summary}
        </p>

        <div className="mt-5 flex gap-2">

          <CuisineBadge cuisine={recipe.cuisine} />

          <DifficultyBadge difficulty={recipe.difficulty} />

        </div>

        <div className="mt-6">

          <RecipeStats
            prepTime={recipe.prepTime}
            cookTime={recipe.cookTime}
            servings={recipe.servings}
            estimatedCost={recipe.estimatedCost}
          />

        </div>

      </div>

    </article>
  );
}