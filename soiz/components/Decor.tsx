import { type CSSProperties } from "react";

export function Sparkle({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
    >
      <path
        d="M12 2 13.7 9.3 21 11l-7.3 1.7L12 20l-1.7-7.3L3 11l7.3-1.7L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function StarDot({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
    >
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <path
        d="M12 2v3M12 19v3M2 12h3M19 12h3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function Planet({
  className = "",
  style,
}: {
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
      aria-hidden
    >
      <circle cx="32" cy="32" r="18" fill="currentColor" opacity="0.85" />
      <ellipse
        cx="32"
        cy="34"
        rx="28"
        ry="6"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.45"
        transform="rotate(-18 32 34)"
      />
      <circle cx="26" cy="28" r="2" fill="white" opacity="0.6" />
      <circle cx="36" cy="34" r="1.4" fill="white" opacity="0.5" />
    </svg>
  );
}

interface SkyBackdropProps {
  className?: string;
  intensity?: "soft" | "medium";
}

export function SkyBackdrop({
  className = "",
  intensity = "soft",
}: SkyBackdropProps) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-sky-soft/70 via-white to-cream" />
      <Sparkle
        className="absolute top-[12%] left-[8%] w-4 h-4 text-sky animate-twinkle"
        style={{ animationDelay: "0.2s" }}
      />
      <Sparkle
        className="absolute top-[22%] right-[12%] w-5 h-5 text-sun animate-twinkle"
        style={{ animationDelay: "1.2s" }}
      />
      <Sparkle
        className="absolute top-[55%] left-[14%] w-3 h-3 text-blush animate-twinkle"
        style={{ animationDelay: "2s" }}
      />
      <StarDot
        className="absolute top-[32%] right-[28%] w-4 h-4 text-sky/60 animate-twinkle"
        style={{ animationDelay: "0.9s" }}
      />
      <StarDot
        className="absolute bottom-[18%] left-[24%] w-3 h-3 text-mint animate-twinkle"
        style={{ animationDelay: "1.6s" }}
      />
      {intensity === "medium" && (
        <>
          <Planet className="absolute -top-6 -right-10 w-32 h-32 text-sun/40 animate-float-slower" />
          <Planet className="absolute bottom-[-40px] left-[-30px] w-40 h-40 text-blush/30 animate-float-slow" />
        </>
      )}
    </div>
  );
}
