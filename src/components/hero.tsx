"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, CheckCircle2 } from "lucide-react";

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.6, ease },
  }),
};

const avatars = [
  { initials: "RA", color: "#2563eb" },
  { initials: "PK", color: "#4f46e5" },
  { initials: "AN", color: "#22c55e" },
  { initials: "SR", color: "#f59e0b" },
  { initials: "MT", color: "#ec4899" },
];

const chatLeads = [
  { name: "Vikram Mehta", msg: "Interested in bulk lead procurement", time: "2m ago", unread: 3, color: "#2563eb", status: "New" },
  { name: "Neha Sharma", msg: "Need pricing for 5000 leads/mo", time: "8m ago", unread: 1, color: "#4f46e5", status: "Hot" },
  { name: "Ravi Kumar", msg: "Can you assign more calling agents?", time: "25m ago", unread: 0, color: "#22c55e", status: "Follow-up" },
  { name: "Ananya Patel", msg: "Demo was great. Send proposal", time: "1h ago", unread: 2, color: "#f59e0b", status: "Closed" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-background px-6 pt-24">
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="absolute h-[500px] w-[500px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.25), transparent 70%)",
            top: "-150px",
            left: "-100px",
            animation: "float 8s ease-in-out infinite",
          }}
        />
        <div
          className="absolute h-[400px] w-[400px] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(79,70,229,0.2), transparent 70%)",
            top: "-80px",
            right: "-100px",
            animation: "float 10s ease-in-out infinite 2s",
          }}
        />
        <div
          className="absolute h-[600px] w-[600px] rounded-full opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)",
            bottom: "-250px",
            left: "20%",
            animation: "float 12s ease-in-out infinite 4s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10 flex w-full max-w-[1200px] flex-col items-center text-center">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible" className="badge-pill mb-6">
          <span className="relative inline-flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-pulse-dot" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
          </span>
          Trusted by 500+ sales organizations across India
        </motion.div>

        <motion.h1
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="max-w-5xl text-[clamp(44px,7vw,80px)] font-extrabold leading-[1.0] tracking-[-0.04em]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Supercharge Your
          <br />
          <span className="gradient-text">Lead Management</span>
        </motion.h1>

        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 max-w-[600px] text-lg leading-relaxed text-text-secondary"
        >
          Automate your lead procurement, distribution, and follow-up workflows. 
          From Super Admin to Specialist — every role gets the tools they need to close faster.
        </motion.p>

        <motion.div
          custom={0.3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button className="btn-primary !h-[52px] w-full !px-8 !text-base sm:w-auto">
            Start Free Trial
            <ArrowRight className="h-4 w-4" />
          </button>
          <button className="btn-secondary !h-[52px] w-full !px-8 !text-base sm:w-auto">
            <Play className="h-4 w-4" />
            Watch Demo
          </button>
        </motion.div>

        <motion.div
          custom={0.35}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-6 flex items-center gap-4"
        >
          <div className="flex -space-x-2">
            {avatars.map((a, i) => (
              <div
                key={i}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0f172a] text-[11px] font-bold text-white"
                style={{ backgroundColor: a.color }}
              >
                {a.initials}
              </div>
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            Join 500+ teams already using DGT Wrapper
          </span>
        </motion.div>

        <motion.div
          custom={0.45}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-[60px] w-full max-w-[920px]"
        >
          <div className="glass overflow-hidden rounded-2xl glow">
            <div className="flex h-10 items-center border-b border-white/10 bg-white/5 px-4">
              <div className="flex items-center gap-[6px]">
                <span className="h-[10px] w-[10px] rounded-full bg-red-500" />
                <span className="h-[10px] w-[10px] rounded-full bg-amber-500" />
                <span className="h-[10px] w-[10px] rounded-full bg-green-500" />
              </div>
              <div className="mx-auto rounded bg-white/10 px-3 py-0.5 text-[12px] text-text-muted">
                app.dgtwrapper.com
              </div>
              <div className="w-16" />
            </div>

            <div className="p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <div className="text-base font-semibold text-foreground">
                    Good morning, Aditya 👋
                  </div>
                  <div className="text-[13px] text-text-muted">
                    Super Admin · DGT Wrapper — 12 organizations
                  </div>
                </div>
                <button className="flex items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-blue-500 transition-colors">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  Upload CSV
                </button>
              </div>

              <div className="mb-5 grid grid-cols-4 gap-3">
                {[
                  { label: "Total Leads", value: "12,847", color: "#2563eb" },
                  { label: "Active Users", value: "1,240", color: "#4f46e5" },
                  { label: "Conversion", value: "24.8%", color: "#22c55e" },
                  { label: "Avg. Response", value: "1.2m", color: "#f59e0b" },
                ].map((s, i) => (
                  <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-sm font-bold" style={{ color: s.color }}>{s.value}</div>
                    <div className="text-[11px] text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-3">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-text-secondary">Recent Lead Activity</span>
                  <span className="text-[11px] text-blue-400">View all</span>
                </div>
                <div className="space-y-2">
                  {chatLeads.map((chat, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-full text-[12px] font-bold text-white flex-shrink-0"
                        style={{ backgroundColor: chat.color }}
                      >
                        {chat.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground">{chat.name}</span>
                          <span className="text-[11px] text-text-muted">{chat.time}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="truncate text-[13px] text-muted-foreground">{chat.msg}</span>
                          {chat.unread > 0 && (
                            <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
                              {chat.unread}
                            </span>
                          )}
                        </div>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium ${
                          chat.status === "New"
                            ? "bg-blue-500/10 text-blue-400"
                            : chat.status === "Hot"
                            ? "bg-red-500/10 text-red-400"
                            : chat.status === "Follow-up"
                            ? "bg-amber-500/10 text-amber-400"
                            : "bg-green-500/10 text-green-400"
                        }`}
                      >
                        {chat.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
