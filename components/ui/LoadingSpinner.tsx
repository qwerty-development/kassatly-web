import React from "react";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  text?: string;
  className?: string;
}

/**
 * Loading spinner component with customizable size and text
 */
export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = "md",
  text = "Loading",
  className = "",
}) => {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  const textSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div
        className={`${sizeClasses[size]} rounded-full border-4 border-transparent animate-spin`}
        style={{ borderTopColor: "var(--color-brand-primary)" }}
      />
      <div
        className={`mt-4 ${textSizeClasses[size]} tracking-wide uppercase font-frutiger`}
        style={{ color: "var(--color-brand-primary)" }}
      >
        {text}
      </div>
    </div>
  );
};
