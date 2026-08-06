type RecipeImageProps = {
  image: string;
  title: string;
};

export default function RecipeImage({
  image,
  title,
}: RecipeImageProps) {
  return (
    <div className="relative h-56 overflow-hidden bg-slate-200">

      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />

      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
        🍽️ Recipe Image
      </div>

    </div>
  );
}