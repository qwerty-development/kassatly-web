export default function TestPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className="py-8"
        style={{ backgroundColor: "var(--color-brand-primary)" }}
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-frutiger-bold text-center text-white">
            KASSATLY CHTAURA
          </h1>
          <p className="text-center mt-2 text-white">Brand System Test Page</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Typography Section */}
        <section className="mb-16">
          <h2
            className="text-3xl font-frutiger-bold mb-8"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Typography System
          </h2>

          <div className="space-y-6">
            <div>
              <h3
                className="text-xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Frutiger Cn Bold
              </h3>
              <div className="space-y-2">
                <p
                  className="text-6xl font-frutiger-bold"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  Aa
                </p>
                <p
                  className="text-2xl font-frutiger-bold"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p
                  className="text-2xl font-frutiger-bold"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  abcdefghijklmnopqrstuvwxyz
                </p>
                <p
                  className="text-2xl font-frutiger-bold"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  0123456789
                </p>
              </div>
            </div>

            <div>
              <h3
                className="text-xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Frutiger Cn Regular
              </h3>
              <div className="space-y-2">
                <p
                  className="text-6xl font-frutiger"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  Aa
                </p>
                <p
                  className="text-2xl font-frutiger"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p
                  className="text-2xl font-frutiger"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  abcdefghijklmnopqrstuvwxyz
                </p>
                <p
                  className="text-2xl font-frutiger"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  0123456789
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Brand Colors Section */}
        <section className="mb-16">
          <h2
            className="text-3xl font-frutiger-bold mb-8"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Brand Color Palette
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Primary Colors */}
            <div>
              <h3
                className="text-xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Primary (Beige)
              </h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <div key={shade} className="flex items-center space-x-4">
                      <div
                        className="w-12 h-12 rounded border"
                        style={{
                          backgroundColor: `var(--color-primary-${shade})`,
                        }}
                      ></div>
                      <span className="font-frutiger text-sm">
                        primary-{shade}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Navy Colors */}
            <div>
              <h3
                className="text-xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Navy (Primary Brand)
              </h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <div key={shade} className="flex items-center space-x-4">
                      <div
                        className="w-12 h-12 rounded border"
                        style={{
                          backgroundColor: `var(--color-navy-${shade})`,
                        }}
                      ></div>
                      <span className="font-frutiger text-sm">
                        navy-{shade}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Secondary Colors */}
            <div>
              <h3
                className="text-xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Secondary (Brown)
              </h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <div key={shade} className="flex items-center space-x-4">
                      <div
                        className="w-12 h-12 rounded border"
                        style={{
                          backgroundColor: `var(--color-secondary-${shade})`,
                        }}
                      ></div>
                      <span className="font-frutiger text-sm">
                        secondary-{shade}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Terracotta Colors */}
            <div>
              <h3
                className="text-xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Terracotta (Accent)
              </h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <div key={shade} className="flex items-center space-x-4">
                      <div
                        className="w-12 h-12 rounded border"
                        style={{
                          backgroundColor: `var(--color-terracotta-${shade})`,
                        }}
                      ></div>
                      <span className="font-frutiger text-sm">
                        terracotta-{shade}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Burgundy Colors */}
            <div>
              <h3
                className="text-xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Burgundy
              </h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <div key={shade} className="flex items-center space-x-4">
                      <div
                        className="w-12 h-12 rounded border"
                        style={{
                          backgroundColor: `var(--color-burgundy-${shade})`,
                        }}
                      ></div>
                      <span className="font-frutiger text-sm">
                        burgundy-{shade}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Teal Colors */}
            <div>
              <h3
                className="text-xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Teal
              </h3>
              <div className="space-y-2">
                {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
                  (shade) => (
                    <div key={shade} className="flex items-center space-x-4">
                      <div
                        className="w-12 h-12 rounded border"
                        style={{
                          backgroundColor: `var(--color-teal-${shade})`,
                        }}
                      ></div>
                      <span className="font-frutiger text-sm">
                        teal-{shade}
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Brand Aliases Section */}
        <section className="mb-16">
          <h2
            className="text-3xl font-frutiger-bold mb-8"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Brand Color Aliases
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="p-6 rounded-lg text-white"
              style={{ backgroundColor: "var(--color-brand-primary)" }}
            >
              <h3 className="text-xl font-frutiger-bold mb-2">brand-primary</h3>
              <p className="font-frutiger">Main brand color (navy-900)</p>
            </div>

            <div
              className="p-6 rounded-lg text-white"
              style={{ backgroundColor: "var(--color-brand-secondary)" }}
            >
              <h3 className="text-xl font-frutiger-bold mb-2">
                brand-secondary
              </h3>
              <p className="font-frutiger">
                Secondary brand color (secondary-500)
              </p>
            </div>

            <div
              className="p-6 rounded-lg text-white"
              style={{ backgroundColor: "var(--color-brand-accent)" }}
            >
              <h3 className="text-xl font-frutiger-bold mb-2">brand-accent</h3>
              <p className="font-frutiger">Accent color (terracotta-500)</p>
            </div>

            <div
              className="p-6 rounded-lg border"
              style={{
                backgroundColor: "var(--color-brand-light)",
                color: "var(--color-brand-primary)",
                borderColor: "var(--color-brand-primary)",
              }}
            >
              <h3 className="text-xl font-frutiger-bold mb-2">brand-light</h3>
              <p className="font-frutiger">Light background (primary-50)</p>
            </div>

            <div
              className="p-6 rounded-lg text-white"
              style={{ backgroundColor: "var(--color-brand-dark)" }}
            >
              <h3 className="text-xl font-frutiger-bold mb-2">brand-dark</h3>
              <p className="font-frutiger">Dark background (navy-900)</p>
            </div>
          </div>
        </section>

        {/* Component Examples */}
        <section className="mb-16">
          <h2
            className="text-3xl font-frutiger-bold mb-8"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Component Examples
          </h2>

          <div className="space-y-8">
            {/* Buttons */}
            <div>
              <h3
                className="text-xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Buttons
              </h3>
              <div className="flex flex-wrap gap-4">
                <button
                  className="px-6 py-3 rounded-lg font-frutiger-bold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "var(--color-brand-primary)" }}
                >
                  Primary Button
                </button>
                <button
                  className="px-6 py-3 rounded-lg font-frutiger-bold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "var(--color-brand-secondary)" }}
                >
                  Secondary Button
                </button>
                <button
                  className="px-6 py-3 rounded-lg font-frutiger-bold text-white hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "var(--color-brand-accent)" }}
                >
                  Accent Button
                </button>
                <button
                  className="px-6 py-3 rounded-lg font-frutiger-bold border-2 hover:opacity-90 transition-opacity"
                  style={{
                    borderColor: "var(--color-brand-primary)",
                    color: "var(--color-brand-primary)",
                    backgroundColor: "transparent",
                  }}
                >
                  Outline Button
                </button>
              </div>
            </div>

            {/* Cards */}
            <div>
              <h3
                className="text-xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Cards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div
                  className="border rounded-lg p-6 shadow-lg"
                  style={{
                    backgroundColor: "white",
                    borderColor: "var(--color-grey-200)",
                  }}
                >
                  <h4
                    className="text-lg font-frutiger-bold mb-2"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Product Card
                  </h4>
                  <p
                    className="font-frutiger mb-4"
                    style={{ color: "var(--color-charcoal-700)" }}
                  >
                    This is a sample product card with brand styling.
                  </p>
                  <button
                    className="px-4 py-2 rounded text-white font-frutiger text-sm"
                    style={{ backgroundColor: "var(--color-brand-primary)" }}
                  >
                    Learn More
                  </button>
                </div>

                <div
                  className="border rounded-lg p-6 shadow-lg"
                  style={{
                    backgroundColor: "var(--color-brand-light)",
                    borderColor: "var(--color-primary-200)",
                  }}
                >
                  <h4
                    className="text-lg font-frutiger-bold mb-2"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Light Card
                  </h4>
                  <p
                    className="font-frutiger mb-4"
                    style={{ color: "var(--color-charcoal-700)" }}
                  >
                    This card uses the brand light background.
                  </p>
                  <button
                    className="px-4 py-2 rounded text-white font-frutiger text-sm"
                    style={{ backgroundColor: "var(--color-brand-accent)" }}
                  >
                    Action
                  </button>
                </div>

                <div
                  className="text-white rounded-lg p-6 shadow-lg"
                  style={{ backgroundColor: "var(--color-brand-primary)" }}
                >
                  <h4 className="text-lg font-frutiger-bold mb-2">Dark Card</h4>
                  <p className="font-frutiger mb-4">
                    This card uses the primary brand color background.
                  </p>
                  <button
                    className="px-4 py-2 rounded font-frutiger text-sm font-frutiger-bold"
                    style={{
                      backgroundColor: "white",
                      color: "var(--color-brand-primary)",
                    }}
                  >
                    Action
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Logo Examples */}
        <section className="mb-16">
          <h2
            className="text-3xl font-frutiger-bold mb-8"
            style={{ color: "var(--color-brand-primary)" }}
          >
            Logo Examples
          </h2>

          <div className="space-y-8">
            <div
              className="border p-8 rounded-lg"
              style={{ borderColor: "var(--color-grey-200)" }}
            >
              <h3
                className="text-xl font-frutiger-bold mb-4"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Logo on Light Background
              </h3>
              <div
                className="inline-block border-2 rounded-lg p-6 bg-white"
                style={{ borderColor: "var(--color-brand-primary)" }}
              >
                <div
                  className="text-4xl font-frutiger-bold"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  KASSATLY
                </div>
                <div
                  className="text-3xl font-frutiger-bold"
                  style={{ color: "var(--color-brand-primary)" }}
                >
                  CHTAURA
                </div>
              </div>
            </div>

            <div
              className="p-8 rounded-lg"
              style={{ backgroundColor: "var(--color-brand-primary)" }}
            >
              <h3 className="text-xl font-frutiger-bold mb-4 text-white">
                Logo on Dark Background
              </h3>
              <div
                className="inline-block border-2 rounded-lg p-6"
                style={{
                  borderColor: "white",
                  backgroundColor: "var(--color-brand-primary)",
                }}
              >
                <div className="text-4xl font-frutiger-bold text-white">
                  KASSATLY
                </div>
                <div className="text-3xl font-frutiger-bold text-white">
                  CHTAURA
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        className="py-8 text-white"
        style={{ backgroundColor: "var(--color-brand-primary)" }}
      >
        <div className="container mx-auto px-4 text-center">
          <p className="font-frutiger">
            © 2024 Kassatly Chtaura - Brand System Test
          </p>
        </div>
      </footer>
    </div>
  );
}
