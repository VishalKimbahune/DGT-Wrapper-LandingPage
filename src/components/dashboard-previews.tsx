"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  Users,
  UserCheck,
  UserCog,
  Upload,
  ShoppingCart,
  Phone,
  ChevronRight,
} from "lucide-react";

type Role = "superadmin" | "admin" | "manager" | "employee";

interface Tab {
  id: Role;
  label: string;
  icon: typeof Shield;
  title: string;
  description: string;
}

const tabs: Tab[] = [
  {
    id: "superadmin",
    label: "Super Admin",
    icon: Shield,
    title: "Global Command Center",
    description: "Full platform visibility. Manage multiple organizations, upload leads in bulk, configure credit wallets, and monitor every team's performance in real time.",
  },
  {
    id: "admin",
    label: "Admin",
    icon: UserCog,
    title: "Organization Control Hub",
    description: "Procure leads from the marketplace, manage your team hierarchy, set distribution rules, and access all campaign analytics for your organization.",
  },
  {
    id: "manager",
    label: "Manager",
    icon: Users,
    title: "Team Operations Dashboard",
    description: "Assign leads to your agents, track individual performance, review call recordings, and ensure SLAs are met across your team.",
  },
  {
    id: "employee",
    label: "Employee",
    icon: UserCheck,
    title: "Daily Task Queue",
    description: "Your assigned leads, calling queue, SMS tasks, and WhatsApp conversations. Update lead status, log calls, and move leads through the pipeline.",
  },
];

const roleData: Record<Role, { metrics: { label: string; value: string; color: string }[]; recent: { name: string; action: string; time: string; color: string }[] }> = {
  superadmin: {
    metrics: [
      { label: "Organizations", value: "12", color: "#2563eb" },
      { label: "Total Leads", value: "1,28,470", color: "#4f46e5" },
      { label: "Active Users", value: "1,240", color: "#22c55e" },
      { label: "Credits Used", value: "₹8.4L", color: "#f59e0b" },
    ],
    recent: [
      { name: "TechCorp", action: "Uploaded 5,000 leads", time: "10m ago", color: "#2563eb" },
      { name: "FinServe", action: "Added 12 new users", time: "24m ago", color: "#4f46e5" },
      { name: "EduGrow", action: "Credits recharged ₹50K", time: "1h ago", color: "#22c55e" },
    ],
  },
  admin: {
    metrics: [
      { label: "Team Size", value: "24", color: "#2563eb" },
      { label: "Leads This Month", value: "12,847", color: "#4f46e5" },
      { label: "Conversion", value: "31.2%", color: "#22c55e" },
      { label: "Credit Balance", value: "₹1.2L", color: "#f59e0b" },
    ],
    recent: [
      { name: "Lead Marketplace", action: "Purchased 2,000 leads", time: "5m ago", color: "#2563eb" },
      { name: "Team Growth", action: "New agent added", time: "18m ago", color: "#4f46e5" },
      { name: "Campaign", action: "WhatsApp blast sent", time: "42m ago", color: "#22c55e" },
    ],
  },
  manager: {
    metrics: [
      { label: "My Team", value: "8", color: "#2563eb" },
      { label: "Assigned Leads", value: "3,240", color: "#4f46e5" },
      { label: "Calls Today", value: "187", color: "#22c55e" },
      { label: "Team Target", value: "78%", color: "#f59e0b" },
    ],
    recent: [
      { name: "Rahul S.", action: "Closed 2 deals today", time: "12m ago", color: "#22c55e" },
      { name: "Priya M.", action: "Logging 45th call", time: "30m ago", color: "#2563eb" },
      { name: "Amit K.", action: "Needs lead reassignment", time: "1h ago", color: "#f59e0b" },
    ],
  },
  employee: {
    metrics: [
      { label: "My Queue", value: "24", color: "#2563eb" },
      { label: "Calls Made", value: "18", color: "#4f46e5" },
      { label: "Converted", value: "4", color: "#22c55e" },
      { label: "Pending SMS", value: "6", color: "#f59e0b" },
    ],
    recent: [
      { name: "Vikram M.", action: "Call back at 3 PM", time: "urgent", color: "#2563eb" },
      { name: "Neha S.", action: "Send proposal", time: "today", color: "#4f46e5" },
      { name: "Ravi K.", action: "Follow-up WhatsApp", time: "overdue", color: "#f59e0b" },
    ],
  },
};

const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

export function DashboardPreviews() {
  const [active, setActive] = useState<Role>("superadmin");

  return (
    <section id="solutions" className="bg-background">
      <div className="section-wrapper">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease }}
          className="mb-4 text-center"
        >
          <span className="text-[12px] font-medium tracking-[0.1em] uppercase" style={{ color: "var(--accent-text)" }}>
            Role-Based Access
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
          One platform.{" "}
          <span className="gradient-text">Every perspective.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease, delay: 0.1 }}
          className="mx-auto mb-10 max-w-[600px] text-center text-lg leading-relaxed text-text-secondary"
        >
          Every role sees a dashboard tailored to their responsibilities —
          from global oversight to daily task execution.
        </motion.p>

        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = active === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/25"
                    : "text-text-secondary border hover:text-foreground"
                }`}
                style={{
                  backgroundColor: isActive ? undefined : "var(--inactive-tab-bg)",
                  borderColor: isActive ? undefined : "var(--inactive-tab-border)",
                }}
              >
                <Icon className="h-4 w-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease }}
          >
            <div className="glass overflow-hidden rounded-2xl p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-heading)" }}>
                  {tabs.find((t) => t.id === active)?.title}
                </h3>
                <p className="mt-1 text-sm text-text-secondary">
                  {tabs.find((t) => t.id === active)?.description}
                </p>
              </div>

              <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4">
                {roleData[active].metrics.map((m, i) => (
                  <div key={i} className="rounded-xl border p-4" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg-subtle)" }}>
                    <div className="text-xl font-bold" style={{ color: m.color }}>{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4" style={{ borderColor: "var(--border-color)" }}>
                <div className="flex items-center gap-2 mb-3">
                  {active === "superadmin" && <Upload className="h-4 w-4" style={{ color: "var(--accent-text)" }} />}
                  {active === "admin" && <ShoppingCart className="h-4 w-4" style={{ color: "var(--accent-text)" }} />}
                  {active === "manager" && <Users className="h-4 w-4" style={{ color: "var(--accent-text)" }} />}
                  {active === "employee" && <Phone className="h-4 w-4" style={{ color: "var(--accent-text)" }} />}
                  <span className="text-xs font-medium text-text-secondary">
                    {active === "superadmin" && "Recent Organization Activity"}
                    {active === "admin" && "Recent Activity"}
                    {active === "manager" && "Team Activity"}
                    {active === "employee" && "My Tasks"}
                  </span>
                </div>
                <div className="space-y-2">
                  {roleData[active].recent.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 rounded-xl border p-3" style={{ borderColor: "var(--border-color)", backgroundColor: "var(--card-bg-subtle)" }}>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full text-[11px] font-bold text-white" style={{ backgroundColor: item.color }}>
                        {item.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-foreground">{item.name}</div>
                        <div className="text-xs text-muted-foreground">{item.action}</div>
                      </div>
                      <span className={`text-[11px] ${item.time === "urgent" ? "text-red-400" : item.time === "overdue" ? "text-amber-400" : "text-text-muted"}`}>
                        {item.time}
                      </span>
                      <ChevronRight className="h-4 w-4 text-text-muted" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
