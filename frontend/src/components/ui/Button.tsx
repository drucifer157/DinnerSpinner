type ButtonProps = {
  icon: string;
  label: string;
  onClick?: () => void;
};

export default function Button({
  icon,
  label,
  onClick,
}: ButtonProps) {
  return (
    <div
      className="flex flex-col items-center gap-4 cursor-pointer select-none"
      onClick={onClick}
    >
      <div
        className="
          w-28
          h-28
          rounded-2xl
          bg-[var(--color-primary)]
          text-white
          flex
          items-center
          justify-center
          text-5xl
          shadow-xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:rotate-[360deg]
          hover:shadow-2xl
        "
      >
        {icon}
      </div>

      <p className="text-lg font-semibold text-[var(--color-text)]">
        {label}
      </p>
    </div>
  );
}