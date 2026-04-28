"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import {
  Monitor, Tablet, Smartphone, Save, Globe, ArrowLeft,
  Zap, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SchemaForm from "@/components/editor/SchemaForm";
import { useEditorStore } from "@/store/useEditorStore";
import { getTemplate } from "@/templates/registry";
import type { PortfolioData } from "@/types/template";

const VIEWPORTS = [
  { id: "desktop", icon: Monitor,    label: "Desktop", width: "100%" },
  { id: "tablet",  icon: Tablet,     label: "Tablet",  width: "768px" },
  { id: "mobile",  icon: Smartphone, label: "Mobile",  width: "375px" },
] as const;

type ViewportId = typeof VIEWPORTS[number]["id"];

function EditorHeader({
  templateName,
  isDirty,
  isSaving,
  onSave,
  onPublish,
}: {
  templateName: string;
  isDirty: boolean;
  isSaving: boolean;
  onSave: () => void;
  onPublish: () => void;
}) {
  return (
    <header
      className="h-12 border-b flex items-center px-4 gap-3 shrink-0"
      style={{ borderColor: "var(--color-border)", background: "var(--color-void)" }}
    >
      <Button variant="ghost" size="icon" asChild className="shrink-0">
        <Link href="/dashboard">
          <ArrowLeft className="w-4 h-4" />
        </Link>
      </Button>

      <div className="flex items-center gap-1.5 text-xs" style={{ color: "var(--color-text-muted)" }}>
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <ChevronRight className="w-3 h-3" />
        <span style={{ color: "var(--color-text-secondary)" }}>{templateName}</span>
      </div>

      <div className="ml-auto flex items-center gap-2">
        {isDirty && (
          <span className="text-xs" style={{ color: "var(--color-text-muted)" }}>
            Unsaved changes
          </span>
        )}
        <Button
          variant="default"
          size="sm"
          onClick={onSave}
          disabled={isSaving || !isDirty}
        >
          <Save className="w-3.5 h-3.5" />
          {isSaving ? "Saving…" : "Save"}
        </Button>
        <Button variant="accent" size="sm" onClick={onPublish}>
          <Globe className="w-3.5 h-3.5" />
          Publish
        </Button>
      </div>
    </header>
  );
}

export default function EditorPage({
  params,
}: {
  params: Promise<{ templateId: string }>;
}) {
  const { templateId } = use(params);
  const entry = getTemplate(templateId);

  const { schema, data, isDirty, isSaving, setTemplate, setIsSaving, markSaved } =
    useEditorStore();

  const [viewport, setViewport] = useState<ViewportId>("desktop");
  const [activeTab, setActiveTab] = useState<"content" | "theme">("content");

  useEffect(() => {
    if (entry) {
      setTemplate(templateId, entry.schema, entry.schema.defaults);
    }
  }, [templateId, entry, setTemplate]);

  if (!entry) {
    return (
      <div className="flex items-center justify-center h-screen" style={{ background: "var(--color-base)" }}>
        <div className="text-center">
          <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
            Template <code className="font-mono">{templateId}</code> not found.
          </p>
          <Button variant="accent" asChild>
            <Link href="/templates">Browse templates</Link>
          </Button>
        </div>
      </div>
    );
  }

  async function handleSave() {
    setIsSaving(true);
    await new Promise((r) => setTimeout(r, 800)); // replace with real API call
    markSaved();
    setIsSaving(false);
  }

  function handlePublish() {
    // replace with real API call
    alert("Published! (wire up to backend API)");
  }

  // Dynamically import the template component
  const TemplateComponent = dynamic<{ data: Partial<PortfolioData> }>(
    () => import(`@/templates/${templateId}/Template`).then((m) => ({ default: m.default })),
    {
      loading: () => (
        <div className="flex items-center justify-center h-full">
          <div className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
            Loading preview…
          </div>
        </div>
      ),
    }
  );

  const currentViewport = VIEWPORTS.find((v) => v.id === viewport)!;

  return (
    <div
      className="flex flex-col h-screen overflow-hidden"
      style={{ background: "var(--color-base)" }}
    >
      <EditorHeader
        templateName={entry.meta.name}
        isDirty={isDirty}
        isSaving={isSaving}
        onSave={handleSave}
        onPublish={handlePublish}
      />

      <div className="flex flex-1 overflow-hidden">
        {/* ── Left sidebar: form ────────────────────────────────────────── */}
        <aside
          className="w-72 shrink-0 border-r flex flex-col overflow-hidden"
          style={{ borderColor: "var(--color-border)", background: "var(--color-void)" }}
        >
          {/* Tabs */}
          <div className="flex border-b" style={{ borderColor: "var(--color-border)" }}>
            {(["content", "theme"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="flex-1 py-2.5 text-xs font-medium capitalize transition-colors border-b-2"
                style={{
                  borderBottomColor: activeTab === tab ? "var(--color-accent)" : "transparent",
                  color: activeTab === tab ? "var(--color-accent)" : "var(--color-text-muted)",
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form */}
          <div className="flex-1 overflow-y-auto p-4">
            {schema && activeTab === "content" && (
              <SchemaForm fields={schema.fields} />
            )}
            {activeTab === "theme" && (
              <div className="text-xs text-center py-8" style={{ color: "var(--color-text-muted)" }}>
                Theme customisation coming soon.
              </div>
            )}
          </div>
        </aside>

        {/* ── Right: preview ───────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Viewport toolbar */}
          <div
            className="h-10 border-b flex items-center justify-center gap-1 shrink-0"
            style={{ borderColor: "var(--color-border)", background: "var(--color-elevated)" }}
          >
            {VIEWPORTS.map(({ id, icon: Icon, label }) => (
              <button
                key={id}
                onClick={() => setViewport(id)}
                title={label}
                className="p-1.5 rounded-md transition-colors"
                style={{
                  color: viewport === id ? "var(--color-accent)" : "var(--color-text-muted)",
                  background: viewport === id ? "var(--color-accent-muted)" : "transparent",
                }}
              >
                <Icon className="w-4 h-4" />
              </button>
            ))}
          </div>

          {/* Preview area */}
          <div
            className="flex-1 overflow-auto flex items-start justify-center p-6"
            style={{ background: "var(--color-overlay)" }}
          >
            <div
              className="rounded-xl overflow-hidden shadow-2xl transition-all duration-300 min-h-96"
              style={{
                width: currentViewport.width,
                maxWidth: "100%",
                background: "#0C0C11",
              }}
            >
              {data && Object.keys(data).length > 0 && (
                <TemplateComponent data={data as Partial<PortfolioData>} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
