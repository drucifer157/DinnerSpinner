import { Clock3, DollarSign, Users } from "lucide-react";

type RecipeStatsProps = {
  prepTime: number;
  cookTime: number;
  servings: number;
  estimatedCost: number;
};

export default function RecipeStats({
  prepTime,
  cookTime,
  servings,
  estimatedCost,
}: RecipeStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 border-t pt-5">

      <div className="flex flex-col items-center">
        <Clock3 size={20} className="text-orange-500" />
        <span className="mt-1 text-sm text-gray-500">Time</span>
        <span className="font-semibold">
          {prepTime + cookTime} min
        </span>
      </div>

      <div className="flex flex-col items-center">
        <Users size={20} className="text-sky-500" />
        <span className="mt-1 text-sm text-gray-500">Servings</span>
        <span className="font-semibold">
          {servings}
        </span>
      </div>

      <div className="flex flex-col items-center">
        <DollarSign size={20} className="text-green-600" />
        <span className="mt-1 text-sm text-gray-500">Cost</span>
        <span className="font-semibold">
          ${estimatedCost.toFixed(2)}
        </span>
      </div>

    </div>
  );
}