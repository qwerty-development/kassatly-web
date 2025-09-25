"use client";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center">
            <div
              className="w-12 h-12 rounded-full border-4 border-transparent animate-spin"
              style={{ borderTopColor: "var(--color-brand-primary)" }}
            />
            <div
              className="mt-4 text-sm tracking-wide uppercase font-frutiger"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Loading
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <header
        className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b"
        style={{ borderColor: "var(--color-grey-200)" }}
      >
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div
            className="text-2xl font-frutiger-bold tracking-tight"
            style={{ color: "var(--color-brand-primary)" }}
          >
            KASSATLY CHTAURA
          </div>
          <nav className="hidden sm:flex items-center gap-8 text-sm font-frutiger">
            <a
              href="#about"
              className="hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-brand-primary)" }}
            >
              About
            </a>
            <a
              href="#products"
              className="hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Products
            </a>
            <a
              href="#tours"
              className="hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Virtual Tours
            </a>
            <a
              href="#contact"
              className="hover:opacity-70 transition-opacity"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Contact
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-white font-frutiger-bold hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "var(--color-brand-primary)" }}
            >
              Get in Touch
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section with Video */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Video Background Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-secondary">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Video placeholder - will be replaced with actual video */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-white/30 flex items-center justify-center">
                <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
              </div>
              <p className="text-lg font-frutiger">Advertisement Showreel</p>
              <p className="text-sm opacity-80 font-frutiger">
                Video will be embedded here
              </p>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-5xl sm:text-6xl font-frutiger-bold leading-tight tracking-tight text-white mb-6">
              Catering quality products since 1974
            </h1>
            <p className="text-xl text-white/90 mb-8 font-frutiger leading-relaxed">
              A state-of-the-art brewery in the heart of Lebanon, delivering 10
              types of refreshments to quench every thirst.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#products"
                className="px-8 py-4 rounded-full text-white text-lg font-frutiger-bold hover:opacity-90 transition-opacity inline-flex items-center justify-center"
                style={{ backgroundColor: "var(--color-brand-accent)" }}
              >
                Explore Products
              </a>
              <a
                href="#tours"
                className="px-8 py-4 rounded-full border-2 border-white text-white text-lg font-frutiger-bold hover:bg-white hover:text-brand-primary transition-all inline-flex items-center justify-center"
              >
                Virtual Tours
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section
        id="about"
        className="py-20"
        style={{ backgroundColor: "var(--color-brand-light)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            <div>
              <h2
                className="text-4xl font-frutiger-bold mb-6"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Welcome to Kassatly Chtaura
              </h2>
              <p
                className="text-lg mb-6 font-frutiger"
                style={{ color: "var(--color-charcoal-700)" }}
              >
                Get to know us better! Kassatly Chtaura was established in 1974,
                launching a revolutionary product at the time, bottled Jallab
                for home preparation. The beloved creation proved successful
                introducing Kassatly Chtaura as a repute and innovative
                establishment.
              </p>
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div
                    className="text-3xl font-frutiger-bold mb-2"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    50+
                  </div>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Years of Excellence
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-frutiger-bold mb-2"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    10+
                  </div>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Product Categories
                  </div>
                </div>
                <div className="text-center">
                  <div
                    className="text-3xl font-frutiger-bold mb-2"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Global
                  </div>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Distribution
                  </div>
                </div>
              </div>
              <a
                href="#products"
                className="inline-flex items-center px-6 py-3 rounded-lg font-frutiger-bold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "var(--color-brand-primary)" }}
              >
                Learn More About Us
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <div
                  className="w-full h-full flex items-center justify-center text-white font-frutiger-bold text-2xl"
                  style={{ backgroundColor: "var(--color-brand-primary)" }}
                >
                  Company Heritage Image
                </div>
              </div>
              {/* Floating elements */}
              <div
                className="absolute -top-4 -right-4 w-24 h-24 rounded-full flex items-center justify-center text-white font-frutiger-bold text-sm"
                style={{ backgroundColor: "var(--color-brand-accent)" }}
              >
                1974
              </div>
              <div
                className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full flex items-center justify-center text-white font-frutiger-bold text-sm"
                style={{ backgroundColor: "var(--color-brand-secondary)" }}
              >
                Lebanon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-frutiger-bold mb-4"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Our Products
            </h2>
            <p
              className="text-xl font-frutiger"
              style={{ color: "var(--color-charcoal-600)" }}
            >
              The Range - 10 types of refreshments to quench every thirst
            </p>
          </div>

          {/* Non-Alcoholic Products */}
          <div className="mb-16">
            <h3
              className="text-2xl font-frutiger-bold mb-8 text-center"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Non-Alcoholic Range
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Mezza */}
              <div className="group">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border"
                  style={{ borderColor: "var(--color-grey-200)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-teal-100)" }}
                  >
                    <span className="text-2xl">🥤</span>
                  </div>
                  <h4
                    className="text-xl font-frutiger-bold mb-3"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Mezza
                  </h4>
                  <p
                    className="font-frutiger mb-4"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Low-calorie, non-alcoholic malt beverage available in 6
                    different flavors. Round-the-clock refreshing beverage.
                  </p>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-brand-accent)" }}
                  >
                    Launched 2018
                  </div>
                </div>
              </div>

              {/* Freez */}
              <div className="group">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border"
                  style={{ borderColor: "var(--color-grey-200)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-pink-100)" }}
                  >
                    <span className="text-2xl">🧊</span>
                  </div>
                  <h4
                    className="text-xl font-frutiger-bold mb-3"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Freez
                  </h4>
                  <p
                    className="font-frutiger mb-4"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Flavored, non-alcoholic carbonated drink with 14 different
                    flavors. Available globally.
                  </p>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-brand-accent)" }}
                  >
                    Launched 2001
                  </div>
                </div>
              </div>

              {/* Fruitastic */}
              <div className="group">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border"
                  style={{ borderColor: "var(--color-grey-200)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-terracotta-100)" }}
                  >
                    <span className="text-2xl">🍊</span>
                  </div>
                  <h4
                    className="text-xl font-frutiger-bold mb-3"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Fruitastic
                  </h4>
                  <p
                    className="font-frutiger mb-4"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    100% juices, nectar concentrates, and fruit drinks. Natural
                    and flavored colorful range.
                  </p>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-brand-accent)" }}
                  >
                    Launched 1998
                  </div>
                </div>
              </div>

              {/* Syrups */}
              <div className="group">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border"
                  style={{ borderColor: "var(--color-grey-200)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-burgundy-100)" }}
                  >
                    <span className="text-2xl">🍯</span>
                  </div>
                  <h4
                    className="text-xl font-frutiger-bold mb-3"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Syrups
                  </h4>
                  <p
                    className="font-frutiger mb-4"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    The very first bottled Jallab for home preparation. Rose,
                    Tamarind, Almond flavors.
                  </p>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-brand-accent)" }}
                  >
                    Since 1974
                  </div>
                </div>
              </div>

              {/* Jams */}
              <div className="group">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border"
                  style={{ borderColor: "var(--color-grey-200)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-primary-100)" }}
                  >
                    <span className="text-2xl">🍓</span>
                  </div>
                  <h4
                    className="text-xl font-frutiger-bold mb-3"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Jams
                  </h4>
                  <p
                    className="font-frutiger mb-4"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Wholesome fruity spreads and mini-jars. Perfect for snack
                    breaks and sweet cravings.
                  </p>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-brand-accent)" }}
                  >
                    Traditional
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Alcoholic Products */}
          <div>
            <h3
              className="text-2xl font-frutiger-bold mb-8 text-center"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Alcoholic Range
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Beirut Beer */}
              <div className="group">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border"
                  style={{ borderColor: "var(--color-grey-200)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-navy-100)" }}
                  >
                    <span className="text-2xl">🍺</span>
                  </div>
                  <h4
                    className="text-xl font-frutiger-bold mb-3"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Beirut Beer
                  </h4>
                  <p
                    className="font-frutiger mb-4"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Authentic Pilsner beer following strict purity laws. Water,
                    Barley, Hops, Yeast only.
                  </p>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-brand-accent)" }}
                  >
                    Launched 2014
                  </div>
                </div>
              </div>

              {/* Buzz */}
              <div className="group">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border"
                  style={{ borderColor: "var(--color-grey-200)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-brand-accent)" }}
                  >
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h4
                    className="text-xl font-frutiger-bold mb-3"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Buzz
                  </h4>
                  <p
                    className="font-frutiger mb-4"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Ready-to-drink vodka-mix beverage. Available in cans with or
                    without energy ingredients.
                  </p>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-brand-accent)" }}
                  >
                    Popular Choice
                  </div>
                </div>
              </div>

              {/* Chateau Ka */}
              <div className="group">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border"
                  style={{ borderColor: "var(--color-grey-200)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-burgundy-100)" }}
                  >
                    <span className="text-2xl">🍷</span>
                  </div>
                  <h4
                    className="text-xl font-frutiger-bold mb-3"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Chateau Ka
                  </h4>
                  <p
                    className="font-frutiger mb-4"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Fine young wine with bold flavor and subtle notes.
                    Internationally recognized with awards.
                  </p>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-brand-accent)" }}
                  >
                    Launched 2005
                  </div>
                </div>
              </div>

              {/* Liqueurs */}
              <div className="group">
                <div
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border"
                  style={{ borderColor: "var(--color-grey-200)" }}
                >
                  <div
                    className="w-16 h-16 rounded-full mb-6 flex items-center justify-center"
                    style={{ backgroundColor: "var(--color-lavender-100)" }}
                  >
                    <span className="text-2xl">🥃</span>
                  </div>
                  <h4
                    className="text-xl font-frutiger-bold mb-3"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Liqueurs
                  </h4>
                  <p
                    className="font-frutiger mb-4"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Fine selection of sweet and colorful liqueurs, including
                    cream liqueurs like Irish Cream.
                  </p>
                  <div
                    className="text-sm font-frutiger"
                    style={{ color: "var(--color-brand-accent)" }}
                  >
                    Premium Range
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tours Section */}
      <section
        id="tours"
        className="py-20"
        style={{ backgroundColor: "var(--color-brand-light)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-frutiger-bold mb-4"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Virtual Tours
            </h2>
            <p
              className="text-xl font-frutiger"
              style={{ color: "var(--color-charcoal-600)" }}
            >
              Experience our state-of-the-art facilities from anywhere in the
              world
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Chateau Ka Winery Tour */}
            <div className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-burgundy-400 to-burgundy-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-white/30 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                    <h3 className="text-2xl font-frutiger-bold mb-2">
                      Chateau Ka Winery
                    </h3>
                    <p className="font-frutiger opacity-90">
                      360° Virtual Experience
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <h3
                    className="text-2xl font-frutiger-bold mb-4"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Chateau Ka Winery Tour
                  </h3>
                  <p
                    className="font-frutiger mb-6"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Explore our award-winning winery, discover the wine
                    production process, and experience our tasting room. Learn
                    about our founder's dream-come-true and the international
                    recognition we've achieved.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 rounded-lg font-frutiger-bold text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "var(--color-brand-accent)" }}
                  >
                    Start Tour
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Beirut Beer Brewery Tour */}
            <div className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow">
                <div className="aspect-video bg-gradient-to-br from-navy-400 to-navy-600 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full border-4 border-white/30 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-white border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                    <h3 className="text-2xl font-frutiger-bold mb-2">
                      Beirut Beer Brewery
                    </h3>
                    <p className="font-frutiger opacity-90">
                      Interactive Experience
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <h3
                    className="text-2xl font-frutiger-bold mb-4"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Beirut Beer Brewery Tour
                  </h3>
                  <p
                    className="font-frutiger mb-6"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Visit our state-of-the-art brewery in the heart of Lebanon.
                    See our brewing process, quality control procedures, and
                    packaging facilities. Experience the authentic Pilsner beer
                    production.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 rounded-lg font-frutiger-bold text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "var(--color-brand-primary)" }}
                  >
                    Start Tour
                    <svg
                      className="ml-2 w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-frutiger-bold mb-4"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Contact Us
            </h2>
            <p
              className="text-xl font-frutiger"
              style={{ color: "var(--color-charcoal-600)" }}
            >
              Get in touch with our team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3
                className="text-2xl font-frutiger-bold mb-6"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Get in Touch
              </h3>
              <div className="space-y-6">
                <div>
                  <h4
                    className="font-frutiger-bold mb-2"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Headquarters
                  </h4>
                  <p
                    className="font-frutiger"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    Nahr Al Mot, Metn, Lebanon
                  </p>
                </div>
                <div>
                  <h4
                    className="font-frutiger-bold mb-2"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Email
                  </h4>
                  <a
                    href="mailto:info@kassatly.net"
                    className="font-frutiger hover:opacity-70 transition-opacity"
                    style={{ color: "var(--color-brand-accent)" }}
                  >
                    info@kassatly.net
                  </a>
                </div>
                <div>
                  <h4
                    className="font-frutiger-bold mb-2"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Phone
                  </h4>
                  <p
                    className="font-frutiger"
                    style={{ color: "var(--color-charcoal-600)" }}
                  >
                    +961 4 123 456
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3
                className="text-2xl font-frutiger-bold mb-6"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Send us a Message
              </h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border font-frutiger focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    style={{ borderColor: "var(--color-grey-300)" }}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 rounded-lg border font-frutiger focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    style={{ borderColor: "var(--color-grey-300)" }}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border font-frutiger focus:outline-none focus:ring-2 focus:ring-brand-primary"
                    style={{ borderColor: "var(--color-grey-300)" }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg font-frutiger-bold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "var(--color-brand-primary)" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="py-12 text-white"
        style={{ backgroundColor: "var(--color-brand-primary)" }}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-frutiger-bold mb-4">
                Kassatly Chtaura
              </h3>
              <p className="font-frutiger text-sm opacity-80">
                Catering quality products since 1974. A state-of-the-art brewery
                in the heart of Lebanon.
              </p>
            </div>
            <div>
              <h4 className="font-frutiger-bold mb-4">Products</h4>
              <ul className="space-y-2 text-sm font-frutiger opacity-80">
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Non-Alcoholic
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Alcoholic
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Chateau Ka Wines
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-frutiger-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm font-frutiger opacity-80">
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Virtual Tours
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:opacity-70 transition-opacity">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-frutiger-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm font-frutiger opacity-80">
                <li>Nahr Al Mot, Metn, Lebanon</li>
                <li>info@kassatly.net</li>
                <li>+961 4 123 456</li>
              </ul>
            </div>
          </div>
          <div
            className="border-t pt-8 text-center text-sm font-frutiger opacity-80"
            style={{ borderColor: "var(--color-navy-700)" }}
          >
            © 2024 Kassatly Chtaura. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
