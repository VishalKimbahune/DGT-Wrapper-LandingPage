"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    initials: "RA",
    color: "#2563eb",
    name: "Rahul Agarwal",
    role: "Head of Sales",
    org: "PropTech India",
    quote:
      "DGT Wrapper transformed how we manage 50,000+ leads across 4 organizations. The role-based dashboards alone saved us hours of weekly reporting. Our conversion rate jumped 34% in the first quarter.",
  },
  {
    initials: "PD",
    color: "#4f46e5",
    name: "Priya Desai",
    role: "CEO",
    org: "EduGrowth Academy",
    quote:
      "We evaluated 8 lead management platforms before choosing DGT Wrapper. Nothing else came close to their lead marketplace and workflow automation. We onboarded 12 agents in one day.",
  },
  {
    initials: "AN",
    color: "#22c55e",
    name: "Arjun Nair",
    role: "VP of Operations",
    org: "QuickSell Solutions",
    quote:
      "The multi-tenant architecture is a game-changer. We manage leads for 3 different business units from a single dashboard. The credit-based procurement system eliminated all our billing headaches.",
  },
  {
    initials: "SM",
    color: "#f59e0b",
    name: "Sneha Mehta",
    role: "Sales Director",
    org: "FinServe Technologies",
    quote:
      "Our agents love the unified inbox. Having calls, SMS, WhatsApp, and social messages in one place cut our response time by 60%. The AI marketing suite helped us create campaigns 5x faster.",
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

export function Testimonials() {
  return (
    <section className="bg-section-alt">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-4 text-center"
        >
          <span className="text-[12px] font-medium tracking-[0.1em] uppercase" style={{ color: "var(--accent-text)" }}>
            Testimonials
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          className="mb-16 text-center text-[clamp(32px,5vw,56px)] font-bold leading-[1.1] tracking-[-0.03em]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Trusted by{" "}
          <span className="gradient-text">industry leaders</span>
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={item}
              className="glass-card flex flex-col p-6"
            >
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="flex-1 text-base italic leading-relaxed text-text-secondary">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white"
                  style={{ backgroundColor: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-[13px] text-text-muted">{t.role}, {t.org}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
