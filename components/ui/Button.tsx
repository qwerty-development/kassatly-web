import React from "react";
import { ButtonProps } from "@/types";

/**
 * Reusable button component with multiple variants and sizes
 * Handles both button and link functionality
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  href,
  type = "button",
  ...props
}) => {
  const baseClasses =
    "font-frutiger-bold rounded-lg transition-opacity hover:opacity-90 inline-flex items-center justify-center";

  const variantClasses = {
    primary: "text-white",
    secondary: "text-white",
    outline:
      "border-2 text-brand-primary border-brand-primary hover:bg-brand-primary hover:text-white",
    accent: "text-white",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const colorClasses = {
    primary: "var(--color-brand-primary)",
    secondary: "var(--color-brand-secondary)",
    outline: "transparent",
    accent: "var(--color-brand-accent)",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  const style =
    variant !== "outline" ? { backgroundColor: colorClasses[variant] } : {};

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        style={style}
        onClick={onClick}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      style={style}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
