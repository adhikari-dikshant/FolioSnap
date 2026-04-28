import Link from "next/link";
import { ArrowRight, Star, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/marketing/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { mockTemplates } from "@/lib/mock-data";

const CATEGORIES = ["All", "Developer", "Designer", "Freelancer", "Photographer", "Writer"];

export default function TemplatesPage() {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "var(--color-base)" }}>
      <Navbar />

      <main className="flex-1 pt-28 pb-24 px-6">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="mb-12">
            <p className="text-xs font-mono uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
              Template Gallery
            </p>
            <div className="flex items-end justify-between flex-wrap gap-4">
              <h1 className="font-display italic text-5xl md:text-6xl leading-tight" style={{ color: "var(--color-text-primary)" }}>
                Pick your foundation.
              </h1>
              <div className="flex items-center gap-2 text-sm" style={{ color: "var(--color-text-muted)" }}>
                <SlidersHorizontal className="w-4 h-4" />
                {mockTemplates.length} templates
              </div>
            </div>
          </div>

          {/* Category filter */}
          <div className="flex gap-2 flex-wrap mb-10">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat}
                className="px-4 py-1.5 text-sm rounded-full border transition-all duration-150"
                style={
                  i === 0
                    ? { background: "var(--color-accent)", color: "#0C0C11", borderColor: "var(--color-accent)", fontWeight: 600 }
                    : { background: "transparent", color: "var(--color-text-secondary)", borderColor: "var(--color-border)" }
                }
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockTemplates.map((template, i) => (
              <div
                key={template.id}
                className="group glow-border rounded-xl overflow-hidden reveal"
                style={{ animationDelay: `${i * 60}ms`, background: "var(--color-elevated)" }}
              >
                {/* Preview */}
                <div
                  className="aspect-[4/3] relative overflow-hidden"
                  style={{ background: "var(--color-overlay)" }}
                >
                  {/* Skeleton preview with personality */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5">
                    <div className="space-y-2">
                      <div
                        className="h-3 rounded-full transition-all duration-500 group-hover:w-3/4"
                        style={{ width: "60%", background: "var(--color-border-bright)" }}
                      />
                      <div className="h-2 rounded-full w-2/5" style={{ background: "var(--color-border)" }} />
                      <div className="h-2 rounded-full w-1/2 mt-3" style={{ background: "var(--color-border)" }} />
                    </div>
                    <div
                      className="absolute top-4 right-4 w-2 h-2 rounded-full"
                      style={{ background: "var(--color-accent)" }}
                    />
                  </div>

                  {/* Hover overlay */}
                  <div
                    className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-200"
                    style={{ background: "rgba(6,6,8,0.85)", backdropFilter: "blur(4px)" }}
                  >
                    <Button variant="accent" size="sm" asChild>
                      <Link href={`/editor/${template.id}`}>
                        Use template <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/p/demo?t=${template.id}`}>Preview</Link>
                    </Button>
                  </div>

                  {template.featured && (
                    <div className="absolute top-3 left-3 z-10">
                      <Badge variant="accent">
                        <Star className="w-2.5 h-2.5 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-4 border-t" style={{ borderColor: "var(--color-border)" }}>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-sm" style={{ color: "var(--color-text-primary)" }}>
                        {template.name}
                      </p>
                      <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                        {template.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-1.5 flex-wrap mt-3">
                    {template.tags.map((tag) => (
                      <Badge key={tag} variant="default" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
