import { useNavigate } from "react-router-dom";
import Logo from "../components/Logo";
import Button from "../components/ui/Button";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-6 text-center">
        <Logo />

        <p className="mt-10 max-w-xl text-lg text-gray-600">
          Stop wondering what to make for dinner.
          Discover delicious meals from around the world.
        </p>

        <div className="mt-10">
          <Button
            icon="🍽️"
            label="Get Started"
            onClick={() => navigate("/home")}
          />
        </div>
      </section>
    </main>
  );
}