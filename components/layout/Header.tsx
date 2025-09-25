import React from "react";
import { Button } from "@/ui/Button";
import { NAV_LINKS } from "@/constants/company";

/**
 * Main navigation header component
 * Contains logo, navigation links, and CTA button
 */
export const Header: React.FC = () => {
  return (
    <header
      className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b"
      style={{ borderColor: "var(--color-grey-200)" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          className="text-2xl font-frutiger-bold tracking-tight"
          style={{ color: "var(--color-brand-primary)" }}
        >
          KASSATLY CHTAURA
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center gap-8 text-sm font-frutiger">
          {NAV_LINKS.map((link, index) => (
            <React.Fragment key={link.href + index}>
              {link.isButton ? (
                <Button
                  href={link.href}
                  variant="primary"
                  size="md"
                  className="px-6 py-3 rounded-full"
                >
                  {link.label}
                </Button>
              ) : (
                <a
                  href={link.href}
                  className="hover:opacity-70 transition-opacity"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  {link.label}
                </a>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </header>
  );
};
