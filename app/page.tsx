"use client";
import React from "react";
import { useLoading } from "@/hooks/useLoading";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { VirtualToursSection } from "@/components/sections/VirtualToursSection";
import { ContactSection } from "@/components/sections/ContactSection";

/**
 * Main landing page component
 * Orchestrates all sections and handles loading state
 */
export default function Home() {
  const { loading } = useLoading(1200);

  return (
    <div className="min-h-screen bg-white">
      {/* Loading Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <LoadingSpinner size="md" text="Loading" />
        </div>
      )}

      {/* Main Content */}
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <VirtualToursSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
