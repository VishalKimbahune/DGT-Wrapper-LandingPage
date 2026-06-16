"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function CTABanner() {
  return (
    <section className="bg-background px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease }}
        className="mx-auto max-w-[900px] overflow-hidden rounded-[28px] p-8 text-center md:p-16 relative"
        style={{
          background: "var(--cta-bg)",
          border: "1px solid var(--cta-border)",
          boxShadow: "var(--cta-shadow)",
        }}
      >
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div
            className="absolute h-[300px] w-[300px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(37,99,235,0.3), transparent 70%)",
              top: "-100px",
              right: "-50px",
              opacity: 0.2,
            }}
          />
          <div
            className="absolute h-[250px] w-[250px] rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(79,70,229,0.25), transparent 70%)",
              bottom: "-80px",
              left: "-50px",
              opacity: 0.15,
            }}
          />
        </div>

        <div className="relative">
          <h2
            className="text-[clamp(32px,5vw,52px)] font-bold leading-[1.1] tracking-[-0.03em]"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Ready to Transform Your{" "}
            <span className="gradient-text">Sales Pipeline?</span>
          </h2>
          <p className="mx-auto mt-4 mb-8 max-w-[500px] text-lg leading-relaxed text-text-secondary">
            Join 500+ organizations that have streamlined their lead management
            with DGT Wrapper. Start your free trial today.
          </p>

          <div className="mx-auto flex w-full max-w-[500px] flex-col items-center gap-3 sm:flex-row">
            <div className="relative flex-1 w-full">
              <input
                type="email"
                placeholder="Enter your work email"
                className="w-full rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-text-muted outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
                style={{
                  border: "1px solid var(--border-muted)",
                  backgroundColor: "var(--input-bg)",
                }}
              />
            </div>
            <button className="btn-primary w-full sm:w-auto whitespace-nowrap">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[13px] text-text-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-green-500" /> Free 14-day trial
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-green-500" /> No credit card
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-green-500" /> Cancel anytime
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-green-500" /> Dedicated support
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
