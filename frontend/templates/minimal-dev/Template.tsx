"use client";

import type { PortfolioData, Project, SocialLink } from "@/types/template";
import { Globe, Mail, ExternalLink, Link2 } from "lucide-react";

const PLATFORM_ICONS: Record<string, React.ReactNode> = {
  github:   <Link2    className="w-4 h-4" />,
  twitter:  <Link2    className="w-4 h-4" />,
  linkedin: <Link2    className="w-4 h-4" />,
  website:  <Globe    className="w-4 h-4" />,
};

export default function MinimalDevTemplate({ data }: { data: Partial<PortfolioData> }) {
  const accent = data.accentColor ?? "#E2FF55";

  return (
    <div
      className="min-h-screen"
      style={{ "--accent": accent, fontFamily: "'Geist', system-ui, sans-serif" } as React.CSSProperties}
    >
      <style>{`
        :root { --template-accent: ${accent}; }
        .t-accent { color: ${accent}; }
        .t-accent-bg { background-color: ${accent}; }
        .t-accent-border { border-color: ${accent}; }
        a:hover { color: ${accent}; transition: color 0.15s; }
      `}</style>

      <div className="max-w-2xl mx-auto px-6 py-20">
        {/* Hero */}
        <header className="mb-20">
          <div className="flex items-start justify-between gap-6 mb-8">
            <div>
              <div className="text-sm font-mono mb-3" style={{ color: accent }}>
                Available for work
              </div>
              <h1 className="text-5xl font-bold text-white leading-none tracking-tight mb-2">
                {data.name ?? "Your Name"}
              </h1>
              <p className="text-xl" style={{ color: "rgba(255,255,255,0.5)" }}>
                {data.role ?? "Developer"}
              </p>
            </div>
            {data.avatar && (
              <img
                src={data.avatar}
                alt={data.name}
                className="w-20 h-20 rounded-full object-cover border-2"
                style={{ borderColor: accent }}
              />
            )}
          </div>

          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
            {data.bio ?? "A short intro about you."}
          </p>

          <div className="flex items-center gap-4 flex-wrap">
            {data.email && (
              <a
                href={`mailto:${data.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-all"
                style={{ background: accent, color: "#0C0C11" }}
              >
                <Mail className="w-3.5 h-3.5" />
                Get in touch
              </a>
            )}
            {(data.links ?? []).map((link: SocialLink) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm transition-colors"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                {PLATFORM_ICONS[link.platform.toLowerCase()] ?? <Globe className="w-4 h-4" />}
                {link.platform}
              </a>
            ))}
          </div>
        </header>

        {/* Skills */}
        {(data.skills ?? []).length > 0 && (
          <section className="mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
              Skills
            </h2>
            <div className="flex flex-wrap gap-2">
              {(data.skills ?? []).map((skill: string) => (
                <span
                  key={skill}
                  className="px-3 py-1 text-sm rounded-md border"
                  style={{
                    borderColor: "rgba(255,255,255,0.1)",
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(255,255,255,0.04)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Projects */}
        {(data.projects ?? []).length > 0 && (
          <section className="mb-16">
            <h2 className="text-xs font-mono uppercase tracking-widest mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>
              Selected Work
            </h2>
            <div className="space-y-6">
              {(data.projects ?? []).map((project: Project) => (
                <article
                  key={project.id}
                  className="group p-5 rounded-lg border transition-all"
                  style={{
                    borderColor: "rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.03)",
                  }}
                >
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <h3 className="font-semibold text-white group-hover:text-[var(--template-accent)] transition-colors">
                      {project.title}
                    </h3>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "rgba(255,255,255,0.3)" }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm mb-3" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {project.description}
                  </p>
                  {project.tags.length > 0 && (
                    <div className="flex gap-2 flex-wrap">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono" style={{ color: accent }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Footer */}
        <footer
          className="pt-8 border-t text-sm"
          style={{ borderColor: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.3)" }}
        >
          <div className="flex items-center justify-between">
            <span>Built with FolioSnap</span>
            <span style={{ color: accent }}>✦</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
