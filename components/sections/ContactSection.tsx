import React from "react";
import { useContactForm } from "@/hooks/useContactForm";

/**
 * Enhanced Contact section with premium design and brand coherence
 * Features sophisticated forms, brand typography, and interactive elements
 */
export const ContactSection: React.FC = () => {
  const { formData, errors, isSubmitting, handleInputChange, handleSubmit } =
    useContactForm();

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Premium Background with Reversed Brand Gradient Layers */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "var(--color-navy-50)" }}
      ></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(45,53,67,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(175,125,105,0.05),transparent_50%)]"></div>

      {/* Floating Decorative Elements with Reversed Brand Colors */}
      <div
        className="absolute top-20 right-10 w-32 h-32 rounded-full blur-2xl animate-pulse"
        style={{ backgroundColor: "var(--color-navy-200)" }}
      ></div>
      <div
        className="absolute bottom-20 left-10 w-24 h-24 rounded-full blur-xl animate-pulse delay-1000"
        style={{ backgroundColor: "var(--color-terracotta-200)" }}
      ></div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Enhanced Section Header */}
        <div className="text-center mb-20">
          {/* Premium Badge with Reversed Brand Colors */}
          <div
            className="inline-flex items-center px-8 py-4 rounded-full border backdrop-blur-sm mb-8 transition-all duration-500 hover:scale-105 hover:shadow-lg cursor-pointer group"
            style={{
              backgroundColor: "var(--color-terracotta-50)",
              borderColor: "var(--color-terracotta-100)",
            }}
          >
            <div
              className="w-3 h-3 rounded-full mr-4 animate-pulse"
              style={{ backgroundColor: "var(--color-navy-400)" }}
            ></div>
            <span
              className="text-sm font-frutiger-bold tracking-wider uppercase group-hover:opacity-80 transition-opacity duration-300"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Get In Touch
            </span>
            <div
              className="w-3 h-3 rounded-full ml-4 animate-pulse delay-500"
              style={{ backgroundColor: "var(--color-terracotta-400)" }}
            ></div>
          </div>

          {/* Stunning Title with Brand Typography */}
          <div className="mb-8">
            <h2
              className="text-6xl lg:text-7xl font-frutiger-bold leading-tight mb-4"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Contact Us
            </h2>
            <div
              className="w-32 h-1 mx-auto rounded-full"
              style={{ backgroundColor: "var(--color-navy-400)" }}
            ></div>
          </div>

          {/* Enhanced Subtitle */}
          <p
            className="text-2xl font-frutiger max-w-4xl mx-auto leading-relaxed mb-8"
            style={{ color: "var(--color-charcoal-600)" }}
          >
            Let's start a conversation about your beverage needs
          </p>
          <p
            className="text-lg font-frutiger max-w-3xl mx-auto"
            style={{ color: "var(--color-charcoal-500)" }}
          >
            Our team is ready to help you discover the perfect solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="group relative">
            {/* Form Glow Effect with Reversed Colors */}
            <div
              className="absolute -inset-1 rounded-3xl blur-lg opacity-0 group-hover:opacity-10 transition-all duration-700"
              style={{
                background: `linear-gradient(45deg, var(--color-navy-400), var(--color-terracotta-400), var(--color-brand-primary))`,
              }}
            ></div>

            <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-xl transition-all duration-700 group-hover:shadow-3xl group-hover:bg-white/95">
              {/* Form Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,var(--color-navy-400)_1px,transparent_1px),linear-gradient(-45deg,var(--color-navy-400)_1px,transparent_1px)] bg-[length:20px_20px] rounded-3xl"></div>
              </div>

              <form onSubmit={handleSubmit} className="relative space-y-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      className="block text-sm font-frutiger-bold mb-3 transition-colors duration-300"
                      style={{ color: "var(--color-brand-primary)" }}
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full px-6 py-4 rounded-xl border-2 font-frutiger text-lg transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                      style={{
                        borderColor: errors.name
                          ? "var(--color-terracotta-400)"
                          : "var(--color-terracotta-200)",
                        backgroundColor: "white",
                        color: "var(--color-charcoal-700)",
                      }}
                    />
                    {errors.name && (
                      <p
                        className="mt-2 text-sm font-frutiger"
                        style={{ color: "var(--color-terracotta-500)" }}
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      className="block text-sm font-frutiger-bold mb-3 transition-colors duration-300"
                      style={{ color: "var(--color-brand-primary)" }}
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-6 py-4 rounded-xl border-2 font-frutiger text-lg transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                      style={{
                        borderColor: errors.email
                          ? "var(--color-terracotta-400)"
                          : "var(--color-terracotta-200)",
                        backgroundColor: "white",
                        color: "var(--color-charcoal-700)",
                      }}
                    />
                    {errors.email && (
                      <p
                        className="mt-2 text-sm font-frutiger"
                        style={{ color: "var(--color-terracotta-500)" }}
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-frutiger-bold mb-3 transition-colors duration-300"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 font-frutiger text-sm sm:text-base"
                    style={{
                      borderColor: errors.email
                        ? "var(--color-terracotta-400)"
                        : "var(--color-grey-300)",
                      backgroundColor: "var(--color-grey-50)",
                      color: "var(--color-charcoal-700)",
                    }}
                    placeholder="your.email@example.com"
                    required
                  />
                  {errors.email && (
                    <p
                      className="mt-2 text-sm font-frutiger"
                      style={{ color: "var(--color-terracotta-500)" }}
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    className="block text-sm font-frutiger-bold mb-3 transition-colors duration-300"
                    style={{ color: "var(--color-brand-primary)" }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    rows={6}
                    className="w-full px-6 py-4 rounded-xl border-2 font-frutiger text-lg transition-all duration-300 focus:scale-[1.02] focus:shadow-lg resize-none"
                    style={{
                      borderColor: errors.message
                        ? "var(--color-terracotta-400)"
                        : "var(--color-terracotta-200)",
                      backgroundColor: "white",
                      color: "var(--color-charcoal-700)",
                    }}
                  />
                  {errors.message && (
                    <p
                      className="mt-2 text-sm font-frutiger"
                      style={{ color: "var(--color-terracotta-500)" }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group/btn relative w-full px-10 py-5 text-white rounded-2xl font-frutiger-bold text-lg tracking-wide overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: `linear-gradient(135deg, var(--color-brand-accent), var(--color-terracotta-600))`,
                  }}
                >
                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></div>

                  {/* Button Content */}
                  <div className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <svg
                          className="mr-3 w-6 h-6 transition-transform duration-300 group-hover/btn:scale-110"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                        <span>Send Message</span>
                        <svg
                          className="ml-3 w-6 h-6 transition-transform duration-300 group-hover/btn:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </>
                    )}
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Company Info Card */}
            <div
              className="p-8 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
              style={{
                background: `linear-gradient(135deg, var(--color-terracotta-50), var(--color-navy-50))`,
                borderColor: "var(--color-terracotta-100)",
              }}
            >
              <h3
                className="text-2xl font-frutiger-bold mb-6"
                style={{ color: "var(--color-brand-primary)" }}
              >
                Visit Our Headquarters
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div
                    className="w-6 h-6 rounded-full mr-4 mt-1 flex-shrink-0"
                    style={{ backgroundColor: "var(--color-navy-400)" }}
                  ></div>
                  <div>
                    <p
                      className="font-frutiger-bold"
                      style={{ color: "var(--color-brand-primary)" }}
                    >
                      Kassatly Chtaura
                    </p>
                    <p
                      className="font-frutiger"
                      style={{ color: "var(--color-charcoal-600)" }}
                    >
                      Chtaura, Bekaa Valley
                      <br />
                      Lebanon
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div className="grid gap-6">
              <div
                className="p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
                style={{
                  backgroundColor: "var(--color-navy-50)",
                  borderColor: "var(--color-navy-200)",
                }}
              >
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: "var(--color-brand-primary)" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-frutiger-bold group-hover:opacity-80 transition-opacity duration-300"
                      style={{ color: "var(--color-brand-primary)" }}
                    >
                      Email Us
                    </p>
                    <p
                      className="font-frutiger"
                      style={{ color: "var(--color-charcoal-600)" }}
                    >
                      info@kassatlychtaura.com
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="p-6 rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer group"
                style={{
                  backgroundColor: "var(--color-terracotta-50)",
                  borderColor: "var(--color-terracotta-200)",
                }}
              >
                <div className="flex items-center">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{ backgroundColor: "var(--color-brand-accent)" }}
                  >
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="font-frutiger-bold group-hover:opacity-80 transition-opacity duration-300"
                      style={{ color: "var(--color-brand-primary)" }}
                    >
                      Call Us
                    </p>
                    <p
                      className="font-frutiger"
                      style={{ color: "var(--color-charcoal-600)" }}
                    >
                      +961 8 540 540
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
