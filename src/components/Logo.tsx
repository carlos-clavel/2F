interface LogoProps {
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  iconOnly?: boolean;
}

export default function Logo({ variant = "dark", size = "md", iconOnly = false }: LogoProps) {
  const color = variant === "light" ? "#ffffff" : "#134074";
  const sizes = { sm: 20, md: 28, lg: 40 };
  const h = sizes[size];
  const fontSize = { sm: "text-base", md: "text-xl", lg: "text-3xl" };

  return (
    <div className="flex items-center gap-2">
      <svg width={h} height={h} viewBox="0 0 40 40" fill="none">
        <path d="M4 8H22M4 20H16M4 32H28" stroke={color} strokeWidth="4.5" strokeLinecap="round"/>
        <path d="M26 22L36 32M36 32H26M36 32V22" stroke={color} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      {!iconOnly && (
        <span
          className={`font-display font-bold tracking-tight ${fontSize[size]}`}
          style={{ color, fontFamily: "'Outfit', sans-serif", letterSpacing: "-0.02em" }}
        >
          FLUXUS
        </span>
      )}
    </div>
  );
}
