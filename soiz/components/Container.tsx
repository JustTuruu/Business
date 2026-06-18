import { type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide";
}

export function Container({
  className = "",
  size = "default",
  children,
  ...rest
}: ContainerProps) {
  const max =
    size === "narrow"
      ? "max-w-4xl"
      : size === "wide"
        ? "max-w-7xl"
        : "max-w-6xl";
  return (
    <div
      className={`mx-auto w-full ${max} px-5 sm:px-8 ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
}
