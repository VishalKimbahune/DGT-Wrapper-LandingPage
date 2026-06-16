import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "DGT Wrapper — Multi-Tenant Lead Management SaaS by Pixaflip",
  description:
    "Enterprise-grade lead management platform with lead marketplace, smart workflows, omnichannel inbox, WhatsApp automation, AI marketing suite, and strict role-based access. Built for organizations that take lead distribution seriously.",
  openGraph: {
    title: "DGT Wrapper — Lead Management SaaS",
    description:
      "Procure, distribute, and close leads at scale. Multi-tenant platform with RBAC, calling workflows, and WhatsApp automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`} suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
