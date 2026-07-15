"use client";

import { useState, FormEvent, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#pricing", label: "Pricing" },
];

const features = [
  {
    id: "document-assistant",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Document Assistant",
    description: "Upload any German document — letters, forms, contracts — and get instant AI-powered translations, summaries, and plain-language explanations.",
    items: [
      "Auto-detect document type",
      "Side-by-side translation",
      "Key deadline extraction",
      "Required action items",
    ],
  },
  {
    id: "letter-explanation",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Letter Explanation",
    description: "Received a letter from Finanzamt, Bürgeramt, or Ausländerbehörde? Upload it and get a clear breakdown of what it means, deadlines, and exactly what you need to do next.",
    items: [
      "Authority-specific context",
      "Deadline calendar integration",
      "Response letter templates",
      "Multi-language support",
    ],
  },
  {
    id: "step-by-step",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
    title: "Step-by-Step Guidance",
    description: "Get personalized, actionable checklists for any German bureaucratic process. From Anmeldung to citizenship — know exactly what to do, what to bring, and where to go.",
    items: [
      "Customized checklists",
      "Office locator & hours",
      "Appointment booking links",
      "Document preparation guide",
    ],
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="#"
              className="flex items-center gap-2 text-xl font-bold text-foreground hover:opacity-80 transition-opacity"
              aria-label="GovPilot AI Home"
            >
              <svg className="h-8 w-8 text-primary" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="currentColor" />
                <path d="M16 8L10 14h12L16 8Z" fill="white" />
                <path d="M16 20L22 14H10L16 20Z" fill="white" opacity="0.7" />
              </svg>
              <span>GovPilot AI</span>
            </Link>

            <div className="hidden md:flex md:items-center md:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link href="#login" className="btn-ghost hidden sm:inline-flex">
                Login
              </Link>
            </div>

            <div className="flex md:hidden items-center gap-4">
              <Link href="#login" className="btn-ghost text-sm px-4 py-2">
                Login
              </Link>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-muted-foreground hover:bg-muted transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            id="mobile-menu"
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="py-4 space-y-2 border-t border-border">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-xl transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="#login"
                className="block w-full text-center px-4 py-2.5 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden bg-white">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-white to-indigo-50/50" aria-hidden="true" />
          <div
            className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%233b82f6%22 fill-opacity=%220.03%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"
            opacity-50
            aria-hidden="true"
          />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
            <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-8 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
                </span>
                New: Government Letter Explainer now available
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground tracking-tight mb-6 text-balance animate-slide-up">
                Understand German bureaucracy{' '}
                <span className="text-gradient">with AI</span>
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed animate-slide-up animate-delay-100">
                Your AI assistant for German government procedures, documents and official letters.
              </p>

              <form onSubmit={handleSubmit} className="animate-slide-up animate-delay-200">
                <div className="relative max-w-2xl mx-auto mb-6">
                  <label htmlFor="hero-query" className="sr-only">
                    Ask about German bureaucracy
                  </label>
                  <div className="relative">
                    <svg
                      className="absolute left-5 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                      id="hero-query"
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Ask about any German procedure..."
                      className="input-primary pl-14 pr-16"
                      disabled={isLoading}
                      aria-describedby="query-hint"
                    />
                    <button
                      type="submit"
                      disabled={!query.trim() || isLoading}
                      className="absolute right-3 top-1/2 -translate-y-1/2 btn-primary px-6 py-2.5 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Ask AI"
                    >
                      {isLoading ? (
                        <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                      ) : (
                        "Ask AI"
                      )}
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground animate-fade-in-up animate-delay-400">
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No registration required</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>GDPR compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Available in 8 languages</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 sm:py-24 lg:py-32 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in-up">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Three AI tools for every bureaucracy challenge
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground">
                Whether you're registering your address, renewing a visa, or decoding a tax letter — GovPilot has you covered.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <article
                  key={feature.id}
                  className={`relative card group p-8 ${index === 0 ? "ring-2 ring-primary shadow-xl" : ""}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary-100 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>

                    <ul className="space-y-3 mb-8" role="list">
                      {feature.items.map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          <svg className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 text-primary hover:bg-primary-50 bg-primary-50">
                      Learn more
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center animate-fade-in-up">
              <p className="text-muted-foreground mb-4">Want to see it in action?</p>
              <a href="#demo" className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-hover transition-colors">
                Try the live demo
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 text-xl font-bold text-foreground mb-4">
                <svg className="h-8 w-8 text-primary" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                  <rect width="32" height="32" rx="8" fill="currentColor" />
                  <path d="M16 8L10 14h12L16 8Z" fill="white" />
                  <path d="M16 20L22 14H10L16 20Z" fill="white" opacity="0.7" />
                </svg>
                <span>GovPilot AI</span>
              </div>
              <p className="text-muted-foreground max-w-sm text-sm leading-relaxed mb-6">
                Your AI assistant for German bureaucracy. Simple explanations, required documents, and step-by-step guidance — no German skills required.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </a>
                <a href="#terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                <li><a href="#demo" className="hover:text-foreground transition-colors">Demo</a></li>
                <li><a href="#faq" className="hover:text-foreground transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground transition-colors">About Us</a></li>
                <li><a href="#blog" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#careers" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#press" className="hover:text-foreground transition-colors">Press</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Resources</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li><a href="#help" className="hover:text-foreground transition-colors">Help Center</a></li>
                <li><a href="#docs" className="hover:text-foreground transition-colors">Documentation</a></li>
                <li><a href="#community" className="hover:text-foreground transition-colors">Community</a></li>
                <li><a href="#api" className="hover:text-foreground transition-colors">API Docs</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 GovPilot AI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#twitter" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#github" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="GitHub">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/></svg>
              </a>
              <a href="#linkedin" className="text-muted-foreground hover:text-foreground transition-colors" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}