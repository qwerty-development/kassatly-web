'use client'
import React, { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#111]">
      {/* Loader Overlay */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full border-4 border-black border-t-transparent animate-spin" />
            <div className="mt-4 text-sm tracking-wide uppercase">Loading</div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-semibold tracking-tight">Your Company</div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#about" className="hover:opacity-70 transition-opacity">About</a>
            <a href="#services" className="hover:opacity-70 transition-opacity">Services</a>
            <a href="#work" className="hover:opacity-70 transition-opacity">Work</a>
            <a href="#contact" className="px-4 py-2 rounded-full bg-black text-white hover:bg-black/90 transition">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,0,0,0.06),_transparent_50%),radial-gradient(ellipse_at_bottom_left,_rgba(0,0,0,0.06),_transparent_50%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 grid gap-10 sm:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
              We build modern web experiences
            </h1>
            <p className="mt-4 text-base text-black/70 max-w-prose">
              From idea to launch, we craft fast, reliable, and delightful digital products
              that help companies grow.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#contact" className="px-5 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-black/90 transition">Start a project</a>
              <a href="#work" className="px-5 py-3 rounded-full border border-black/10 text-sm font-medium hover:bg-black/5 transition">See our work</a>
            </div>
          </div>
          <div className="h-[320px] sm:h-[420px] rounded-2xl bg-gradient-to-br from-black/[0.06] to-black/[0.12] border border-black/10" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="mx-auto max-w-6xl px-6 py-20 border-t border-black/5">
        <div className="grid gap-8 sm:grid-cols-3">
          <div className="sm:col-span-1">
            <h2 className="text-2xl font-semibold">About us</h2>
          </div>
          <div className="sm:col-span-2 text-black/75 leading-relaxed">
            We are a multidisciplinary team focused on design, engineering, and product strategy. Our
            mission is to deliver measurable business outcomes through thoughtful user-centered solutions.
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-20 border-t border-black/5">
        <h2 className="text-2xl font-semibold">Services</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="p-6 rounded-xl border border-black/10 hover:shadow-sm transition">
            <div className="text-sm font-medium text-black/60">01</div>
            <div className="mt-2 font-semibold">Product Design</div>
            <p className="mt-2 text-sm text-black/70">UX research, wireframes, UI design, and prototyping.</p>
          </div>
          <div className="p-6 rounded-xl border border-black/10 hover:shadow-sm transition">
            <div className="text-sm font-medium text-black/60">02</div>
            <div className="mt-2 font-semibold">Web Development</div>
            <p className="mt-2 text-sm text-black/70">Next.js, React, TypeScript, APIs, and integrations.</p>
          </div>
          <div className="p-6 rounded-xl border border-black/10 hover:shadow-sm transition">
            <div className="text-sm font-medium text-black/60">03</div>
            <div className="mt-2 font-semibold">Growth & Analytics</div>
            <p className="mt-2 text-sm text-black/70">SEO, performance, instrumentation, and insights.</p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-20 border-t border-black/5">
        <h2 className="text-2xl font-semibold">Selected work</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {[1,2,3].map((i) => (
            <div key={i} className="group p-4 rounded-xl border border-black/10 hover:shadow-sm transition">
              <div className="h-36 rounded-lg bg-black/[0.06] border border-black/10" />
              <div className="mt-3 font-medium">Project {i}</div>
              <div className="text-sm text-black/60">Short description goes here.</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-20 border-t border-black/5">
        <div className="rounded-2xl bg-black text-white p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-semibold">Have an idea? Let's build it.</div>
            <div className="text-white/80 mt-2">We take on a limited number of new projects each quarter.</div>
          </div>
          <a href="#contact" className="px-5 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition">Get in touch</a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20 border-t border-black/5">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <div className="font-medium">Email</div>
            <a href="mailto:hello@yourcompany.com" className="text-black/70 hover:opacity-70 transition">hello@yourcompany.com</a>
          </div>
          <div>
            <div className="font-medium">Social</div>
            <div className="flex gap-4 text-black/70">
              <a href="#" className="hover:opacity-70 transition">Twitter</a>
              <a href="#" className="hover:opacity-70 transition">LinkedIn</a>
              <a href="#" className="hover:opacity-70 transition">Instagram</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/5">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-black/60 flex items-center justify-between">
          <div>© {new Date().getFullYear()} Your Company. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-70 transition">Privacy</a>
            <a href="#" className="hover:opacity-70 transition">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}