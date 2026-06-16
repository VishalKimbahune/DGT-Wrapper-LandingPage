"use client";

import { motion } from "framer-motion";
import { Upload, Users, Target } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Upload,
    color: "#2563eb",
    title: "Upload & Procure",
    desc: "Upload your lead CSV or tap into our marketplace to buy qualified leads. Credit-based system works like a prepaid wallet — you control the spend.",
  },
  {
    num: "02",
    icon: Users,
    color: "#4f46e5",
    title: "Distribute & Assign",
    desc: "Set auto-distribution rules by role, territory, or lead score. Super Admin sets the strategy, Managers assign to the right agents instantly.",
  },
  {
    num: "03",
    icon: Target,
    color: "#22c55e",
    title: "Track & Close",
    desc: "Real-time dashboards for every role. Employees manage their queue, Managers track team performance, and Admins see the full funnel.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-section-alt">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-4 text-center"
        >
          <span className="text-[12px] font-medium tracking-[0.1em] uppercase" style={{ color: "var(--accent-text)" }}>
            How It Works
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
          Three steps to{" "}
          <span className="gradient-text">lead management excellence</span>
        </motion.h2>

        <div className="relative">
          <svg
            className="pointer-events-none absolute top-12 left-1/2 hidden h-[2px] w-[calc(100%-8rem)] -translate-x-1/2 md:block"
            style={{ top: "48px" }}
          >
            <line
              x1="0"
              y1="0"
              x2="100%"
              y2="0"
              stroke="var(--animated-line)"
              strokeWidth="2"
              strokeDasharray="8 6"
            >
              <animate attributeName="stroke-dashoffset" from="0" to="-24" dur="1s" repeatCount="indefinite" />
            </line>
          </svg>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative flex flex-col gap-8 md:flex-row"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div key={i} variants={item} className="glass-card relative flex-1 p-8 text-center">
                  <div className="pointer-events-none absolute top-3 left-3 text-[72px] font-black leading-none select-none" style={{ color: "var(--step-number)" }}>
                    {step.num}
                  </div>
                  <div
                    className="relative mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold text-white"
                    style={{ background: "var(--stepper-bg)" }}
                  >
                    {step.num}
                  </div>
                  <div
                    className="icon-box mx-auto mb-4"
                    style={{ backgroundColor: `${step.color}15` }}
                  >
                    <Icon className="h-5 w-5" style={{ color: step.color }} />
                  </div>
                  <h3 className="mb-3 text-[20px] font-semibold tracking-[-0.01em] text-foreground">
                    {step.title}
                  </h3>
                  <p className="mx-auto max-w-[340px] text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
