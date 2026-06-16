import type { Metadata } from "next";
import { BarChart3, Shield, Users, Target, Zap, Globe, MapPin, Server } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — DGT Wrapper by Pixaflip",
  description:
    "Learn about Pixaflip Technologies and DGT Wrapper — the multi-tenant lead management platform powering 500+ organizations across India.",
};

const milestones = [
  { year: "2022", title: "Founded", desc: "Pixaflip Technologies was founded in Pune with a mission to simplify lead management for Indian sales teams." },
  { year: "2023", title: "Platform Launch", desc: "DGT Wrapper v1.0 launched with core lead distribution, calling workflows, and multi-tenant RBAC." },
  { year: "2024", title: "Marketplace & AI", desc: "Launched the lead marketplace, AI marketing suite, WhatsApp automation, and crossed 200 organizations." },
  { year: "2025", title: "Scale", desc: "Grew to 500+ organizations, added omnichannel inbox, social media integrations, and achieved 99.9% uptime SLA." },
];

const values = [
  { icon: Shield, title: "Security First", desc: "Enterprise-grade data protection with strict RBAC, encryption at rest and in transit, and SOC 2 compliance." },
  { icon: Target, title: "Results Driven", desc: "Every feature is built to improve a metric — faster response times, higher conversion rates, better team productivity." },
  { icon: Users, title: "Customer Obsessed", desc: "Our support team has an average response time of under 5 minutes. We don't just build software — we build relationships." },
  { icon: Zap, title: "Innovation at Speed", desc: "We ship new features every two weeks. Our roadmap is shaped directly by customer feedback and real-world sales challenges." },
];

const team = [
  { initials: "VK", name: "Vishal Kale", role: "Founder & CEO", color: "#2563eb" },
  { initials: "VP", name: "Vishal Patil", role: "CTO", color: "#4f46e5" },
  { initials: "SR", name: "Sneha Rao", role: "Head of Product", color: "#22c55e" },
  { initials: "RK", name: "Rahul Kulkarni", role: "Head of Sales", color: "#f59e0b" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-32 pb-20 px-6">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute h-[500px] w-[500px] rounded-full opacity-15"
            style={{
              background: "radial-gradient(circle, rgba(37,99,235,0.2), transparent 70%)",
              top: "-200px",
              right: "-100px",
            }}
          />
          <div className="absolute h-[400px] w-[400px] rounded-full opacity-10"
            style={{
              background: "radial-gradient(circle, rgba(79,70,229,0.15), transparent 70%)",
              bottom: "-150px",
              left: "-100px",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-[800px] text-center">
          <div className="mb-4 flex items-center justify-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600">
              <BarChart3 className="h-5 w-5 text-white" />
            </div>
            <span className="text-lg font-bold text-foreground">
              DGT<span className="text-[var(--accent-text)]">Wrapper</span>
            </span>
            <span className="rounded-full border px-2.5 py-0.5 text-[10px] font-medium" style={{ borderColor: "var(--border-light)", color: "var(--text-muted)", backgroundColor: "var(--glass-bg)" }}>
              by Pixaflip
            </span>
          </div>
          <h1 className="text-[clamp(36px,5vw,64px)] font-extrabold leading-[1.05] tracking-[-0.03em]" style={{ fontFamily: "var(--font-heading)" }}>
            We&apos;re on a mission to{" "}
            <span className="gradient-text">transform lead management</span> in India
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-text-secondary max-w-[600px] mx-auto">
            Pixaflip Technologies builds software that helps sales teams procures, distribute, 
            and close leads faster. DGT Wrapper is our flagship platform — trusted by 500+ organizations 
            from startups to enterprises.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-section-alt border-y px-6 py-16" style={{ borderColor: "var(--border-color)" }}>
        <div className="mx-auto max-w-[1000px]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { value: "500+", label: "Organizations" },
              { value: "50K+", label: "Leads/Month" },
              { value: "99.9%", label: "Uptime" },
              { value: "4.8★", label: "Rating" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[clamp(28px,4vw,40px)] font-extrabold text-foreground gradient-text" style={{ fontFamily: "var(--font-heading)" }}>{s.value}</div>
                <div className="mt-1 text-sm text-text-secondary">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background px-6 py-24">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-center" style={{ fontFamily: "var(--font-heading)" }}>
            Our Story
          </h2>
          <p className="mt-6 text-base leading-relaxed text-text-secondary">
            DGT Wrapper was born from a simple observation: Indian sales teams were using 5-6 different tools 
            to manage leads, but none of them talked to each other. Leads were lost in spreadsheets, 
            follow-ups were missed, and managers had no real-time visibility into their team&apos;s performance.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            We built DGT Wrapper to be the single source of truth for lead management — from the moment 
            a lead enters the system to the moment it&apos;s closed. With role-based dashboards, automated 
            workflows, and an omnichannel inbox, sales teams can finally work from one platform instead of five.
          </p>
          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            Today, DGT Wrapper processes over 50,000 leads every month for 500+ organizations across India, 
            from real estate and edtech to fintech and healthcare. Our multi-tenant architecture means 
            enterprises can manage multiple business units from a single dashboard, while startups get 
            enterprise-grade features from day one.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="bg-section-alt px-6 py-24">
        <div className="mx-auto max-w-[900px]">
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-center mb-16" style={{ fontFamily: "var(--font-heading)" }}>
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-[19px] top-0 bottom-0 w-px" style={{ backgroundColor: "var(--animated-line)" }} />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={i} className="relative flex items-start gap-6">
                  <div className="relative z-10 flex h-[38px] w-[38px] flex-shrink-0 items-center justify-center rounded-full text-xs font-bold text-white" style={{ background: "var(--stepper-bg)" }}>
                    {m.year.slice(-2)}
                  </div>
                  <div className="pt-1">
                    <div className="text-lg font-bold text-foreground">{m.year}: {m.title}</div>
                    <p className="mt-1 text-sm leading-relaxed text-text-secondary">{m.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-background px-6 py-24">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-center mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            What We Stand For
          </h2>
          <p className="text-center text-text-secondary mb-16 max-w-[500px] mx-auto">
            These principles guide every decision we make and every feature we build.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="glass-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl mb-4" style={{ backgroundColor: "rgba(37,99,235,0.1)" }}>
                    <Icon className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-secondary">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="bg-background px-6 py-24">
        <div className="mx-auto max-w-[1000px]">
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-center mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Platform Architecture
          </h2>
          <p className="text-center text-text-secondary mb-16 max-w-[600px] mx-auto">
            Built for scale from day one. DGT Wrapper runs on a modern cloud-native stack with multi-tenant isolation at every layer.
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { icon: Server, color: "#2563eb", title: "Cloud Infrastructure", desc: "Deployed on AWS with auto-scaling, multi-region redundancy, and real-time data replication across availability zones." },
              { icon: Shield, color: "#4f46e5", title: "Multi-Tenant Isolation", desc: "Strict data isolation between organizations with separate database schemas, encrypted at rest with per-tenant keys." },
              { icon: Globe, color: "#22c55e", title: "API-First Design", desc: "RESTful APIs power every feature. Webhooks, event streams, and SDKs make integration with your existing stack seamless." },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="glass-card p-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl mb-4" style={{ backgroundColor: `${item.color}15` }}>
                    <Icon className="h-6 w-6" style={{ color: item.color }} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-secondary">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-section-alt px-6 py-24">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Meet the Team
          </h2>
          <p className="text-text-secondary mb-16 max-w-[500px] mx-auto">
            A small team with big ambitions — building the future of lead management from Pune, India.
          </p>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {team.map((m, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full text-xl font-bold text-white" style={{ backgroundColor: m.color }}>
                  {m.initials}
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{m.name}</h3>
                <p className="text-sm text-text-muted">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="bg-background px-6 py-24">
        <div className="mx-auto max-w-[800px]">
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.02em] text-center mb-4" style={{ fontFamily: "var(--font-heading)" }}>
            Our Office
          </h2>
          <p className="text-center text-text-secondary mb-12 max-w-[500px] mx-auto">
            Built in the heart of India&apos;s tech ecosystem.
          </p>
          <div className="glass-card p-8 text-center max-w-[500px] mx-auto">
            <div className="flex justify-center mb-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl" style={{ backgroundColor: "rgba(37,99,235,0.1)" }}>
                <MapPin className="h-7 w-7 text-blue-500" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-foreground">Pixaflip Technologies</h3>
            <p className="mt-2 text-sm text-text-secondary">
              202, Tech Park One, Baner Road<br />
              Pune, Maharashtra 411045<br />
              India
            </p>
            <p className="mt-4 text-sm text-text-muted">
              hello@pixaflip.com · +91 20 4123 4567
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background px-6 py-24">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="text-[clamp(28px,4vw,44px)] font-bold leading-[1.1] tracking-[-0.02em]" style={{ fontFamily: "var(--font-heading)" }}>
            Want to know more?
          </h2>
          <p className="mt-4 text-text-secondary">
            We&apos;d love to show you how DGT Wrapper can transform your lead management. 
            Book a demo or start your free trial today.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="btn-primary">Start Free Trial</button>
            <button className="btn-secondary">Contact Sales</button>
          </div>
        </div>
      </section>
    </>
  );
}
