"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Templates", href: "/templates" },
  { label: "Pricing",   href: "/pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Backdrop blur bar */}
      <div
        className="absolute inset-0 border-b"
        style={{
          background: "rgba(12,12,17,0.8)",
          backdropFilter: "blur(12px)",
          borderColor: "var(--color-border)",
        }}
      />

      <nav className="relative max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div
            className="w-7 h-7 rounded-md flex items-center justify-center transition-all duration-150 group-hover:scale-105"
            style={{ background: "var(--color-accent)" }}
          >
            <Zap className="w-4 h-4" style={{ color: "#0C0C11" }} />
          </div>
          <span className="font-semibold text-sm tracking-tight" style={{ color: "var(--color-text-primary)" }}>
            FolioSnap
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm rounded-md transition-colors"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
          <Button variant="accent" size="sm" asChild>
            <Link href="/signup">Get started free</Link>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: "var(--color-text-secondary)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden border-b px-6 py-4 flex flex-col gap-2"
          style={{
            background: "rgba(12,12,17,0.95)",
            backdropFilter: "blur(12px)",
            borderColor: "var(--color-border)",
          }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm py-2 transition-colors"
              style={{ color: "var(--color-text-secondary)" }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" asChild className="flex-1">
              <Link href="/login">Sign in</Link>
            </Button>
            <Button variant="accent" size="sm" asChild className="flex-1">
              <Link href="/signup">Get started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
