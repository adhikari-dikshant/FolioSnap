import Link from "next/link";
import { Plus, Globe, Edit3, Trash2, Copy, ExternalLink, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockPortfolios, mockUser, mockTemplates } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

function DashboardNavbar() {
  return (
    <header
      className="border-b px-6 h-14 flex items-center justify-between"
      style={{ borderColor: "var(--color-border)", background: "var(--color-void)" }}
    >
      <Link href="/" className="flex items-center gap-2">
        <div
          className="w-6 h-6 rounded flex items-center justify-center"
          style={{ background: "var(--color-accent)" }}
        >
          <Zap className="w-3.5 h-3.5" style={{ color: "#0C0C11" }} />
        </div>
        <span className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
          FolioSnap
        </span>
      </Link>

      <div className="flex items-center gap-3">
        <Badge variant={mockUser.plan === "pro" ? "accent" : "default"} className="capitalize">
          {mockUser.plan}
        </Badge>
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
          style={{ background: "var(--color-accent)", color: "#0C0C11" }}
        >
          {mockUser.name.charAt(0)}
        </div>
      </div>
    </header>
  );
}

export default function DashboardPage() {
  const getTemplateName = (id: string) =>
    mockTemplates.find((t) => t.id === id)?.name ?? id;

  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--color-base)" }}>
      <DashboardNavbar />

      <main className="flex-1 max-w-5xl mx-auto w-full px-6 py-12">
        {/* Header row */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-2xl font-semibold" style={{ color: "var(--color-text-primary)" }}>
              My Portfolios
            </h1>
            <p className="text-sm mt-0.5" style={{ color: "var(--color-text-secondary)" }}>
              Hey {mockUser.name.split(" ")[0]} — you have {mockPortfolios.length} portfolio{mockPortfolios.length !== 1 ? "s" : ""}.
            </p>
          </div>
          <Button variant="accent" asChild>
            <Link href="/templates">
              <Plus className="w-4 h-4" />
              New portfolio
            </Link>
          </Button>
        </div>

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-3 mb-10">
          {[
            { label: "Total",     value: mockPortfolios.length },
            { label: "Published", value: mockPortfolios.filter((p) => p.published).length },
            { label: "Drafts",    value: mockPortfolios.filter((p) => !p.published).length },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="p-4 rounded-xl border"
              style={{ background: "var(--color-elevated)", borderColor: "var(--color-border)" }}
            >
              <p className="text-2xl font-bold" style={{ color: "var(--color-text-primary)" }}>{value}</p>
              <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* Portfolio cards */}
        <div className="space-y-3">
          {mockPortfolios.map((portfolio) => (
            <div
              key={portfolio.id}
              className="p-5 rounded-xl border flex items-center justify-between gap-4 group transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--color-elevated)",
                borderColor: "var(--color-border)",
              }}
            >
              <div className="flex items-center gap-4 min-w-0">
                {/* Template color dot */}
                <div
                  className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center text-xs font-mono"
                  style={{ background: "var(--color-overlay)", color: "var(--color-accent)", border: "1px solid var(--color-border)" }}
                >
                  {portfolio.templateId.charAt(0).toUpperCase()}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="font-medium text-sm truncate" style={{ color: "var(--color-text-primary)" }}>
                      {portfolio.title}
                    </p>
                    <Badge variant={portfolio.published ? "success" : "default"}>
                      {portfolio.published ? "Live" : "Draft"}
                    </Badge>
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                    {getTemplateName(portfolio.templateId)} · Updated {formatDate(portfolio.updatedAt)}
                  </p>
                  {portfolio.published && (
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-accent)" }}>
                      foliosnap.co/p/{portfolio.slug}
                    </p>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                {portfolio.published && (
                  <Button variant="ghost" size="icon" asChild title="View live">
                    <Link href={`/p/${portfolio.slug}`} target="_blank">
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </Button>
                )}
                <Button variant="ghost" size="icon" title="Duplicate">
                  <Copy className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" asChild title="Edit">
                  <Link href={`/editor/${portfolio.templateId}?portfolioId=${portfolio.id}`}>
                    <Edit3 className="w-4 h-4" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" title="Delete">
                  <Trash2 className="w-4 h-4" style={{ color: "var(--color-danger)" }} />
                </Button>
              </div>

              {/* Always-visible edit CTA on mobile */}
              <Button variant="outline" size="sm" asChild className="shrink-0 group-hover:hidden">
                <Link href={`/editor/${portfolio.templateId}?portfolioId=${portfolio.id}`}>
                  <Edit3 className="w-3.5 h-3.5 mr-1.5" />
                  Edit
                </Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {mockPortfolios.length === 0 && (
          <div
            className="text-center py-24 rounded-xl border"
            style={{ borderColor: "var(--color-border)", borderStyle: "dashed" }}
          >
            <Globe className="w-10 h-10 mx-auto mb-4" style={{ color: "var(--color-text-muted)" }} />
            <p className="text-sm font-medium mb-1" style={{ color: "var(--color-text-primary)" }}>
              No portfolios yet
            </p>
            <p className="text-sm mb-6" style={{ color: "var(--color-text-muted)" }}>
              Pick a template and create your first one.
            </p>
            <Button variant="accent" asChild>
              <Link href="/templates">Browse templates</Link>
            </Button>
          </div>
        )}
      </main>
    </div>
  );
}
