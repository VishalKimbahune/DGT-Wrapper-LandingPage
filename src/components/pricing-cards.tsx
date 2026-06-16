"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    monthly: 9999,
    tagline: "For growing teams getting started with lead management",
    features: [
      "Up to 5 users",
      "10,000 leads/mo",
      "Basic lead distribution",
      "Calling workflow builder",
      "SMS & WhatsApp messaging",
      "Standard analytics dashboard",
      "Email support",
    ],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Growth",
    monthly: 24999,
    tagline: "For organizations serious about scaling lead operations",
    features: [
      "Up to 25 users",
      "50,000 leads/mo",
      "Lead marketplace access",
      "Advanced workflow automation",
      "AI chatbot & WhatsApp flows",
      "Multi-tenant management",
      "Full RBAC (5 roles)",
      "Unified inbox (calls, SMS, WhatsApp, social)",
      "AI marketing suite",
      "Real-time analytics & exports",
      "Priority support",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    monthly: 0,
    tagline: "For large organizations with custom requirements",
    features: [
      "Unlimited users",
      "Unlimited leads",
      "Custom credit wallet setup",
      "Dedicated infrastructure",
      "Custom integrations & API access",
      "Dedicated account manager",
      "SLA guarantee (99.9% uptime)",
      "On-premise deployment option",
      "24/7 phone & email support",
      "White-label option",
    ],
    cta: "Contact Sales",
    featured: false,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export function PricingCards() {
  const [annual, setAnnual] = useState(false);

  const formatPrice = (monthly: number) => {
    if (monthly === 0) return "Custom";
    const price = annual ? Math.round(monthly * 0.8) : monthly;
    return `₹${price.toLocaleString("en-IN")}/mo`;
  };

  return (
    <section id="pricing" className="bg-background">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-4 text-center"
        >
          <span className="text-[12px] font-medium tracking-[0.1em] uppercase" style={{ color: "var(--accent-text)" }}>
            Pricing
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          className="mb-4 text-center text-[clamp(32px,5vw,56px)] font-bold leading-[1.1] tracking-[-0.03em]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Simple, transparent{" "}
          <span className="gradient-text">pricing</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="mb-10 text-center text-lg leading-relaxed text-text-secondary"
        >
          No hidden fees. No surprises. Scale as you grow.
        </motion.p>

        <div className="mb-12 flex items-center justify-center gap-4">
          <span className={`text-sm ${!annual ? "text-foreground" : "text-text-muted"}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative h-6 w-11 cursor-pointer rounded-full transition-colors"
            style={{ backgroundColor: annual ? "#2563eb" : "var(--toggle-off-bg)" }}
          >
            <span
              className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
                annual ? "translate-x-5" : ""
              }`}
            />
          </button>
          <span className={`flex items-center gap-1.5 text-sm ${annual ? "text-foreground" : "text-text-muted"}`}>
            Annual
            <span className="rounded px-1.5 py-0.5 text-xs font-medium" style={{ backgroundColor: "var(--badge-green-bg)", color: "var(--badge-green-text)" }}>
              Save 20%
            </span>
          </span>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-3"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={item}
              className={`relative flex flex-col rounded-[24px] p-8 ${
                plan.featured
                  ? "gradient-border backdrop-blur-xl"
                  : "glass"
              }`}
              style={plan.featured ? {
                background: "var(--pricing-featured-bg)",
                boxShadow: "var(--pricing-featured-shadow)",
              } : undefined}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-white" style={{ background: "var(--most-popular-bg)" }}>
                  Most Popular
                </div>
              )}

              <div className="mb-1 text-[14px] font-medium tracking-[0.08em] uppercase text-text-muted">
                {plan.name}
              </div>
              <div className="mb-1 flex items-baseline gap-1">
                <span className="text-[clamp(36px,5vw,52px)] font-bold text-foreground">
                  {formatPrice(plan.monthly)}
                </span>
              </div>
              <div className="mb-6 text-sm text-text-muted">{plan.tagline}</div>
              <div className="mb-6 h-px w-full" style={{ backgroundColor: "var(--divider)" }} />

              <ul className="mb-8 flex flex-1 flex-col gap-3">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "var(--badge-green-text)" }} />
                    <span className="text-sm text-text-secondary">{f}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full rounded-xl py-3 text-sm font-semibold transition-all duration-200 ${
                  plan.featured
                    ? "btn-primary"
                    : "bg-transparent text-foreground"
                }`}
                style={!plan.featured ? {
                  border: "1px solid var(--card-btn-border)",
                } : undefined}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
