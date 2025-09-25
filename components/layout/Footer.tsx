import React from "react";
import { COMPANY_INFO } from "@/constants/company";

/**
 * Main footer component
 * Contains company information, links, and copyright
 */
export const Footer: React.FC = () => {
  return (
    <footer
      className="py-12 text-white"
      style={{ backgroundColor: "var(--color-brand-primary)" }}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-frutiger-bold mb-4">
              {COMPANY_INFO.name}
            </h3>
            <p className="font-frutiger text-sm opacity-80">
              {COMPANY_INFO.tagline}. A state-of-the-art brewery in the heart of
              Lebanon.
            </p>
          </div>

          {/* Products Links */}
          <div>
            <h4 className="font-frutiger-bold mb-4">Products</h4>
            <ul className="space-y-2 text-sm font-frutiger opacity-80">
              <li>
                <a
                  href="#products"
                  className="hover:opacity-70 transition-opacity"
                >
                  Non-Alcoholic
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:opacity-70 transition-opacity"
                >
                  Alcoholic
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  className="hover:opacity-70 transition-opacity"
                >
                  Chateau Ka Wines
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-frutiger-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm font-frutiger opacity-80">
              <li>
                <a
                  href="#about"
                  className="hover:opacity-70 transition-opacity"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#tours"
                  className="hover:opacity-70 transition-opacity"
                >
                  Virtual Tours
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:opacity-70 transition-opacity"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-frutiger-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm font-frutiger opacity-80">
              <li>{COMPANY_INFO.headquarters}</li>
              <li>{COMPANY_INFO.email}</li>
              <li>{COMPANY_INFO.phone}</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="border-t pt-8 text-center text-sm font-frutiger opacity-80"
          style={{ borderColor: "var(--color-navy-700)" }}
        >
          © 2024 {COMPANY_INFO.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
