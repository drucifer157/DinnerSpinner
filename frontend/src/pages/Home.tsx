import RecipeCard from "../components/recipes/RecipeCard";
import { recipes } from "../data/recipes";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--color-background)] px-6 py-12">
      <div className="mx-auto max-w-6xl">

        <h1 className="text-5xl font-bold">
          Good Evening, Andrew!
        </h1>

        <p className="mt-2 text-gray-600">
          What are we cooking tonight?
        </p>

        <div className="mt-10 max-w-xl">
          <RecipeCard recipe={recipes[0]} />
        </div>

      </div>
    </main>
  );
}