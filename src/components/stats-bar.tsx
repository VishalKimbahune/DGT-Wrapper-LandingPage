"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CounterProps {
  end: number;
  suffix: string;
  label: string;
}

function AnimatedCounter({ end, suffix, label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(end / 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, duration / 60);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-[clamp(32px,4vw,48px)] font-extrabold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="mt-1 text-sm text-text-secondary">{label}</div>
    </div>
  );
}

const stats = [
  { end: 10000, suffix: "+", label: "Leads Processed" },
  { end: 500, suffix: "+", label: "Organizations Onboarded" },
  { end: 999, suffix: "%", label: "Uptime Guaranteed" },
  { end: 48, suffix: "★", label: "Average Rating" },
];

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function StatsBar() {
  return (
    <section className="border-y bg-section-alt" style={{ borderColor: "var(--border-color)" }}>
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="glass rounded-2xl px-8 py-10 md:py-14"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedCounter key={i} {...stat} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
