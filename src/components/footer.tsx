import Link from "next/link";
import { BarChart3 } from "lucide-react";

const sections = [
  {
    title: "Product",
    links: [
      "Features",
      "Pricing",
      "Integrations",
      "Lead Marketplace",
      "API Docs",
      "Changelog",
    ],
  },
  {
    title: "Company",
    links: [
      "About Us",
      "Blog",
      "Careers",
      "Press Kit",
      "Contact Us",
      "Partners",
    ],
  },
  {
    title: "Support",
    links: [
      "Documentation",
      "Help Center",
      "Contact Support",
      "Status Page",
      "Community Forum",
    ],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Security",
      "GDPR Compliance",
    ],
  },
];

const socials = [
  { label: "Twitter/X" },
  { label: "LinkedIn" },
  { label: "Instagram" },
  { label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background">
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600">
                <BarChart3 className="h-4 w-4 text-white" />
              </div>
              <span className="text-lg font-bold text-foreground">
                DGT<span className="text-blue-400">Wrapper</span>
              </span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-text-muted max-w-[260px]">
              Enterprise-grade multi-tenant lead management platform. Procure, distribute, and close leads at scale.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-text-muted text-[11px] font-bold transition-all duration-150 hover:border-blue-500/30 hover:text-blue-400"
                  aria-label={s.label}
                >
                  {s.label[0]}
                </a>
              ))}
            </div>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-[13px] font-semibold text-foreground uppercase tracking-wider">
                {section.title}
              </h4>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="cursor-pointer text-sm text-text-muted transition-colors duration-150 hover:text-text-secondary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-2 border-t border-white/[0.04] pt-6 text-[13px] text-text-muted md:flex-row">
          <span>
            &copy; {new Date().getFullYear()} Pixaflip Technologies. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Made with <span className="text-red-500">&#9829;</span> in Pune, India
          </span>
        </div>
      </div>
    </footer>
  );
}
