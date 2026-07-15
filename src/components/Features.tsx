"use client";

import { useState } from "react";

const featureCards = [
  {
    id: "document-assistant",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    title: "Document Assistant",
    description: "Upload any German document — letters, forms, contracts — and get instant AI-powered translations, summaries, and plain-language explanations.",
    features: [
      "Auto-detect document type",
      "Side-by-side translation",
      "Key deadline extraction",
      "Required action items",
    ],
    gradient: "from-primary to-primary-hover",
    iconBg: "bg-primary-100",
    iconColor: "text-primary",
    borderColor: "border-primary-200",
    hoverBorderColor: "hover:border-primary-300",
  },
  {
    id: "letter-explanation",
    icon: (
      <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Government Letter Explainer",
    description: "Received a letter from Finanzamt, Bürgeramt, or Ausländerbehörde? Upload it and get a clear breakdown of what it means, deadlines, and exactly what you need to do next.",
    features: [
      "Authority-specific context",
      "Deadline calendar integration",
      "Response letter templates",
      "Multi-language support",
    ],
    gradient: "from-indigo-500 to-indigo-600",
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
    borderColor: "border-indigo-200",
    hoverBorderColor: "hover:border-indigo-300",
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
    features: [
      "Customized checklists",
      "Office locator & hours",
      "Appointment booking links",
      "Document preparation guide",
    ],
    gradient: "from-emerald-500 to-emerald-600",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-200",
    hoverBorderColor: "hover:border-emerald-300",
  },
];

export function Features() {
  const [activeFeature, setActiveFeature] = useState<string | null>("document-assistant");

  return (
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
          {featureCards.map((feature, index) => (
            <article
              key={feature.id}
              className={`relative card group p-8 ${activeFeature === feature.id ? "ring-2 ring-primary shadow-xl" : ""}`}
              onMouseEnter={() => setActiveFeature(feature.id)}
              onMouseLeave={() => setActiveFeature(null)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} aria-hidden="true" />
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.iconBg} ${feature.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{feature.description}</p>

                <ul className="space-y-3 mb-8" role="list">
                  {feature.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      <svg className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold rounded-xl transition-all duration-200 ${feature.iconColor} hover:bg-opacity-10 ${feature.iconBg}`}
                >
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
  );
}