import type { Difficulty } from "../../types/taxonomy";

type DifficultyBadgeProps = {
  difficulty: Difficulty;
};

const colors: Record<Difficulty, string> = {
  Weeknight: "bg-green-100 text-green-800",
  Skilled: "bg-blue-100 text-blue-800",
  Advanced: "bg-purple-100 text-purple-800",
  "Weekend Project": "bg-orange-100 text-orange-800",
  Masterpiece: "bg-yellow-100 text-yellow-800",
};

export default function DifficultyBadge({
  difficulty,
}: DifficultyBadgeProps) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${colors[difficulty]}`}
    >
      {difficulty}
    </span>
  );
}