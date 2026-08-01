export default function Logo() {
  return (
    <div className="flex flex-col items-center gap-4">

      <div className="text-6xl">
        🎲
      </div>

      <div className="text-center">

        <h1
          className="text-6xl font-bold text-[var(--color-primary)]"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Dinner Spinner
        </h1>

        <p className="mt-3 text-xl text-gray-700">
          Decide. Cook. Adventure.
        </p>

      </div>

    </div>
  )
}