import type { Cuisine } from "../../types/taxonomy";

type CuisineBadgeProps = {
  cuisine: Cuisine;
};

export default function CuisineBadge({
  cuisine,
}: CuisineBadgeProps) {
  return (
    <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium">
      {cuisine}
    </span>
  );
}