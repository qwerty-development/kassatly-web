import React from "react";
import { CardProps } from "@/types";

/**
 * Reusable card component with hover effects and consistent styling
 */
export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = true,
  ...props
}) => {
  const baseClasses = "bg-white rounded-2xl border shadow-lg";
  const hoverClasses = hover ? "hover:shadow-xl transition-shadow" : "";

  const classes = `${baseClasses} ${hoverClasses} ${className}`;
  const style = { borderColor: "var(--color-grey-200)" };

  return (
    <div className={classes} style={style} {...props}>
      {children}
    </div>
  );
};
