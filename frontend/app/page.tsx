import Link from "next/link";
import { ArrowRight, Zap, Globe, Layers, Sparkles, CheckCircle2, Star } from "lucide-react";
import Navbar from "@/components/marketing/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockTemplates } from "@/lib/mock-data";

const FEATURES = [
  {
    icon: Layers,
    title: "Admin-crafted templates",
    desc: "Every template is hand-coded by our team — no cookie-cutter AI garbage. Each one is a real, deployable portfolio.",
  },
  {
    icon: Zap,
    title: "Schema-driven editor",
    desc: "Fill in your name, bio, projects, skills. The editor is generated from the template's own field schema.",
  },
  {
    icon: Globe,
    title: "Go live instantly",
    desc: "One click publishes your portfolio to yourname.foliosnap.co. Custom domain support coming.",
  },
  {
    icon: Sparkles,
    title: "Live preview",
    desc: "See every change in real time. Toggle between desktop, tablet, and mobile before you publish.",
  },
];

const PRICING = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    features: ["1 portfolio", "3 templates", "FolioSnap subdomain", "Live preview"],
    cta: "Start for free",
    href: "/signup",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "₹299",
    period: "/ month",
    features: ["Unlimited portfolios", "All templates", "Custom domain", "Priority support", "Analytics (coming)"],
    cta: "Get Pro",
    href: "/signup?plan=pro",
    highlighted: true,
  },
];

const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    role: "Frontend Developer",
    quote: "Got my portfolio live in under 8 minutes. Looks way better than anything I would've built myself.",
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    role: "Product Designer",
    quote: "Finally a portfolio tool that doesn't look like every other Webflow clone. The templates are actually good.",
    avatar: "PS",
  },
  {
    name: "Rohan Das",
    role: "Freelance Developer",
    quote: "The editor is dead simple. My clients can update their own portfolios now without asking me.",
    avatar: "RD",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--color-base)" }}>
      <Navbar />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden dot-grid">
        {/* Radial glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[120px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(226,255,85,0.06) 0%, transparent 70%)" }}
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="reveal reveal-1 inline-flex items-center gap-2 mb-6">
            <Badge variant="accent">
              <Zap className="w-3 h-3 mr-1" />
              Beta — Free while we cook
            </Badge>
          </div>

          <h1 className="reveal reveal-2 font-display italic text-6xl md:text-8xl leading-[0.95] tracking-tight mb-6 text-balance">
            <span style={{ color: "var(--color-text-primary)" }}>Portfolio websites</span>
            <br />
            <span className="gradient-text">that actually look good.</span>
          </h1>

          <p className="reveal reveal-3 text-lg md:text-xl max-w-xl mx-auto mb-10 text-pretty leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
            Pick a hand-coded template. Fill in your details. Go live in under 10 minutes.
            No drag-and-drop chaos — just your portfolio, exactly as designed.
          </p>

          <div className="reveal reveal-4 flex items-center justify-center gap-3 flex-wrap">
            <Button variant="accent" size="lg" asChild>
              <Link href="/templates">
                Browse templates
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/p/demo">See a live portfolio</Link>
            </Button>
          </div>

          <p className="reveal reveal-5 mt-6 text-xs" style={{ color: "var(--color-text-muted)" }}>
            No credit card required · Free plan available
          </p>
        </div>
      </section>

      {/* ── Template Showcase ─────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
                Templates
              </p>
              <h2 className="font-display italic text-4xl md:text-5xl" style={{ color: "var(--color-text-primary)" }}>
                Every one is production-ready.
              </h2>
            </div>
            <Button variant="ghost" asChild className="hidden md:flex">
              <Link href="/templates">
                See all <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mockTemplates.slice(0, 3).map((template, i) => (
              <Link
                key={template.id}
                href={`/editor/${template.id}`}
                className="group glow-border rounded-xl overflow-hidden block"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                {/* Preview area */}
                <div
                  className="aspect-[4/3] relative overflow-hidden"
                  style={{ background: "var(--color-elevated)" }}
                >
                  {/* Placeholder template preview */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center px-8">
                      <div
                        className="w-12 h-1 rounded-full mx-auto mb-4 transition-all duration-300 group-hover:w-20"
                        style={{ background: "var(--color-accent)" }}
                      />
                      <div className="space-y-2">
                        <div className="h-3 rounded-full w-32 mx-auto" style={{ background: "var(--color-border-bright)" }} />
                        <div className="h-2 rounded-full w-24 mx-auto" style={{ background: "var(--color-border)" }} />
                        <div className="h-2 rounded-full w-28 mx-auto" style={{ background: "var(--color-border)" }} />
                      </div>
                    </div>
                  </div>

                  {template.featured && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="accent">
                        <Star className="w-2.5 h-2.5 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}

                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ background: "rgba(12,12,17,0.7)" }}
                  >
                    <Button variant="accent" size="sm">
                      Use template
                    </Button>
                  </div>
                </div>

                {/* Card footer */}
                <div className="p-4" style={{ background: "var(--color-elevated)" }}>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                        {template.name}
                      </p>
                      <p className="text-xs mt-0.5 capitalize" style={{ color: "var(--color-text-muted)" }}>
                        {template.category}
                      </p>
                    </div>
                    <ArrowRight
                      className="w-4 h-4 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-200"
                      style={{ color: "var(--color-accent)" }}
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ──────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--color-void)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
              How it works
            </p>
            <h2 className="font-display italic text-4xl md:text-5xl" style={{ color: "var(--color-text-primary)" }}>
              Stupidly simple. Seriously good.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {FEATURES.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: "var(--color-elevated)",
                  borderColor: "var(--color-border)",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center mb-4"
                  style={{ background: "var(--color-accent-muted)", border: "1px solid var(--color-accent-glow)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "var(--color-accent)" }} />
                </div>
                <h3 className="font-semibold mb-2 text-sm" style={{ color: "var(--color-text-primary)" }}>
                  {title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ──────────────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display italic text-4xl md:text-5xl" style={{ color: "var(--color-text-primary)" }}>
              People are actually using it.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TESTIMONIALS.map(({ name, role, quote, avatar }) => (
              <div
                key={name}
                className="p-6 rounded-xl border"
                style={{ background: "var(--color-elevated)", borderColor: "var(--color-border)" }}
              >
                <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
                  &ldquo;{quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                    style={{ background: "var(--color-accent)", color: "#0C0C11" }}
                  >
                    {avatar}
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "var(--color-text-primary)" }}>{name}</p>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ───────────────────────────────────────────────────────── */}
      <section className="py-24 px-6" style={{ background: "var(--color-void)" }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
              Pricing
            </p>
            <h2 className="font-display italic text-4xl md:text-5xl" style={{ color: "var(--color-text-primary)" }}>
              Simple. Honest. Cheap.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {PRICING.map(({ name, price, period, features, cta, href, highlighted }) => (
              <div
                key={name}
                className="p-6 rounded-xl border"
                style={{
                  background: highlighted ? "var(--color-elevated)" : "var(--color-elevated)",
                  borderColor: highlighted ? "var(--color-accent)" : "var(--color-border)",
                  boxShadow: highlighted ? "var(--shadow-accent)" : "none",
                }}
              >
                {highlighted && (
                  <Badge variant="accent" className="mb-4">Most popular</Badge>
                )}
                <p className="text-sm font-medium mb-1" style={{ color: "var(--color-text-secondary)" }}>
                  {name}
                </p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold" style={{ color: "var(--color-text-primary)" }}>
                    {price}
                  </span>
                  <span className="text-sm" style={{ color: "var(--color-text-muted)" }}>{period}</span>
                </div>

                <ul className="space-y-2.5 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" style={{ color: "var(--color-accent)" }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button variant={highlighted ? "accent" : "outline"} className="w-full" asChild>
                  <Link href={href}>{cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA strip ─────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, rgba(226,255,85,0.05) 0%, transparent 70%)" }}
        />
        <div className="relative max-w-2xl mx-auto text-center">
          <h2 className="font-display italic text-5xl md:text-6xl mb-6" style={{ color: "var(--color-text-primary)" }}>
            Your portfolio is<br />
            <span className="gradient-text">10 minutes away.</span>
          </h2>
          <Button variant="accent" size="lg" asChild>
            <Link href="/templates">
              Pick a template <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────────────────────── */}
      <footer
        className="border-t py-8 px-6"
        style={{ borderColor: "var(--color-border)", background: "var(--color-void)" }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div
              className="w-5 h-5 rounded flex items-center justify-center"
              style={{ background: "var(--color-accent)" }}
            >
              <Zap className="w-3 h-3" style={{ color: "#0C0C11" }} />
            </div>
            <span className="text-sm font-medium" style={{ color: "var(--color-text-secondary)" }}>
              FolioSnap
            </span>
          </div>
          <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            © 2026 FolioSnap. Built with intention.
          </p>
          <div className="flex gap-4">
            {["Privacy", "Terms", "Contact"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs transition-colors"
                style={{ color: "var(--color-text-muted)" }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
