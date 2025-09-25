import React from "react";
import { Button } from "@/ui/Button";
import { useContactForm } from "@/hooks/useContactForm";
import { COMPANY_INFO } from "@/constants/company";

/**
 * Contact section component with form and company information
 * Handles form submission and displays contact details
 */
export const ContactSection: React.FC = () => {
  const { formData, errors, isSubmitting, handleInputChange, handleSubmit } =
    useContactForm();

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
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
          {/* Contact Information */}
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
                  {COMPANY_INFO.headquarters}
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
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="font-frutiger hover:opacity-70 transition-opacity"
                  style={{ color: "var(--color-brand-accent)" }}
                >
                  {COMPANY_INFO.email}
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
                  {COMPANY_INFO.phone}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3
              className="text-2xl font-frutiger-bold mb-6"
              style={{ color: "var(--color-brand-primary)" }}
            >
              Send us a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border font-frutiger focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  style={{ borderColor: "var(--color-grey-300)" }}
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600 font-frutiger">
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border font-frutiger focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  style={{ borderColor: "var(--color-grey-300)" }}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 font-frutiger">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border font-frutiger focus:outline-none focus:ring-2 focus:ring-brand-primary"
                  style={{ borderColor: "var(--color-grey-300)" }}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 font-frutiger">
                    {errors.message}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                variant="primary"
                size="md"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
