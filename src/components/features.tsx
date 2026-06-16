"use client";

import { motion } from "framer-motion";
import {
  Store,
  GitBranch,
  MessageSquare,
  Wand2,
  Shield,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: Store,
    color: "#2563eb",
    title: "Lead Marketplace",
    desc: "Buy and sell leads with credit-based procurement. Automated distribution ensures every lead reaches the right team instantly.",
  },
  {
    icon: GitBranch,
    color: "#4f46e5",
    title: "Smart Workflows",
    desc: "Visual drag-and-drop builder for calling flows, SMS sequences, and WhatsApp automation. No coding required.",
  },
  {
    icon: MessageSquare,
    color: "#22c55e",
    title: "Omnichannel Inbox",
    desc: "Unified inbox for calls, SMS, WhatsApp, and social messages. Your team works from one place, not five tabs.",
  },
  {
    icon: Wand2,
    color: "#f59e0b",
    title: "AI Marketing Suite",
    desc: "Content studio, social media calendar, campaign manager, and brand voice AI. Generate campaigns in minutes.",
  },
  {
    icon: Shield,
    color: "#06b6d4",
    title: "Role-Based Access",
    desc: "Granular RBAC from Super Admin to Specialist. Each role sees exactly what they need — nothing more, nothing less.",
  },
  {
    icon: BarChart3,
    color: "#ec4899",
    title: "Real-Time Analytics",
    desc: "Live dashboard with lead source tracking, conversion funnels, team performance metrics, and exportable reports.",
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

export function Features() {
  return (
    <section id="features" className="bg-background">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-4 text-center"
        >
          <span className="text-[12px] font-medium tracking-[0.1em] uppercase" style={{ color: "var(--accent-text)" }}>
            Platform Capabilities
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: 0.05 }}
          className="text-center text-[clamp(32px,5vw,56px)] font-bold leading-[1.1] tracking-[-0.03em]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Everything you need to{" "}
          <span className="gradient-text">scale leads</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="mx-auto mt-4 mb-16 max-w-[600px] text-center text-lg leading-relaxed text-text-secondary"
        >
          From procurement to closure — DGT Wrapper covers the full lead lifecycle
          with tools purpose-built for each role.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                className="glass-card group p-6"
              >
                <div
                  className="icon-box mb-4"
                  style={{ backgroundColor: `${f.color}15` }}
                >
                  <Icon className="h-5 w-5" style={{ color: f.color }} />
                </div>
                <h3 className="mb-2 text-[20px] font-semibold tracking-[-0.01em] text-foreground">
                  {f.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
                <span
                  className="inline-flex items-center gap-1 text-[13px] font-medium transition-colors duration-200"
                  style={{ color: f.color }}
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
