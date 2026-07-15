import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GovPilot AI — Understand German Bureaucracy with AI",
  description:
    "Get simple explanations, required documents, and step-by-step guidance for German government procedures. Your AI assistant for Anmeldung, visa, taxes, and more.",
  keywords: [
    "German bureaucracy",
    "AI assistant",
    "Anmeldung",
    "residence permit",
    "German government",
    "expat Germany",
    "visa Germany",
    "Finanzamt",
    "Bürgeramt",
  ],
  authors: [{ name: "GovPilot AI" }],
  creator: "GovPilot AI",
  publisher: "GovPilot AI",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://govpilot.ai",
    title: "GovPilot AI — Understand German Bureaucracy with AI",
    description:
      "Get simple explanations, required documents, and step-by-step guidance for German government procedures.",
    siteName: "GovPilot AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "GovPilot AI — Understand German Bureaucracy with AI",
    description:
      "Get simple explanations, required documents, and step-by-step guidance for German government procedures.",
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}