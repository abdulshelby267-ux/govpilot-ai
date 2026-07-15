"use client";

import { useState, FormEvent } from "react";

export function Hero() {
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!query.trim() || isLoading) return;
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("AI response would appear here in the full application!");
    }, 1500);
  };

  const quickQuestions = [
    "What documents do I need for Anmeldung?",
    "How to get a tax ID (Steueridentifikationsnummer)?",
    "Student visa extension requirements Germany",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white">
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
            Get simple explanations, required documents, and step-by-step guidance for any German government
            procedure. No German skills required.
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
                  placeholder="Example: How can I renew my residence permit?"
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
              <p id="query-hint" className="mt-3 text-sm text-muted-foreground text-center">
                Try: "Anmeldung process", "Health insurance for freelancers", "Citizenship requirements"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up animate-delay-300">
              {quickQuestions.map((q, i) => (
                <button
                  key={q}
                  type="button"
                  className="btn-secondary text-sm px-6 py-3"
                  onClick={() => setQuery(q)}
                >
                  {q}
                </button>
              ))}
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

        <div className="mt-24 relative animate-fade-in-up animate-delay-500">
          <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent z-10 pointer-events-none h-32 bottom-0 top-auto" aria-hidden="true" />
          <div className="relative rounded-2xl border border-border bg-white shadow-2xl overflow-hidden max-w-5xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 text-center text-sm text-muted-foreground font-mono">govpilot.ai/chat</div>
            </div>
            <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="bg-muted rounded-2xl p-4">
                    <p className="text-foreground">Hello! I'm your GovPilot AI assistant. Ask me anything about German bureaucracy — from Anmeldung to citizenship, visa renewals to tax returns.</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="flex-1 max-w-xs">
                  <div className="bg-primary rounded-2xl p-4 rounded-br-md">
                    <p className="text-primary-foreground text-sm">What documents do I need for Anmeldung in Berlin?</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="bg-muted rounded-2xl p-4">
                    <p className="text-foreground">For Anmeldung in Berlin, you'll need:</p>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Completed registration form (Anmeldeformular)</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Valid ID/passport</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Wohnungsgeberbestätigung (landlord confirmation)</li>
                      <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-primary" /> Marriage/birth certificates if applicable</li>
                    </ul>
                    <p className="mt-3 text-sm text-primary font-medium">Would you like me to find your nearest Bürgeramt and check appointment availability?</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3 justify-end">
                <div className="flex-1 max-w-xs">
                  <div className="bg-primary rounded-2xl p-4 rounded-br-md">
                    <p className="text-primary-foreground text-sm">Yes, please find appointments near me</p>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-muted-foreground" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                  <svg className="h-5 w-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="bg-muted rounded-2xl p-4">
                    <p className="text-foreground">I've found 3 Bürgeramt locations near you with available appointments this week. The closest is Bürgeramt Mitte (Karl-Marx-Allee). Would you like me to book one for you or show you the available time slots?</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-border bg-muted">
              <div className="flex items-center gap-3">
                <svg className="h-6 w-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-sm text-muted-foreground flex-1">AI responses are for guidance only. Verify critical info with official sources.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}