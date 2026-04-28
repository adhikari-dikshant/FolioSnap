"use client";

import type { SchemaField } from "@/types/template";
import { useEditorStore } from "@/store/useEditorStore";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function SkillListField({ field }: { field: SchemaField }) {
  const { data, setField } = useEditorStore();
  const skills = (data[field.key] as string[]) ?? [];

  function handleChange(idx: number, val: string) {
    const next = [...skills];
    next[idx] = val;
    setField(field.key, next);
  }

  function add() {
    setField(field.key, [...skills, ""]);
  }

  function remove(idx: number) {
    setField(field.key, skills.filter((_, i) => i !== idx));
  }

  return (
    <div className="space-y-2">
      {skills.map((skill, idx) => (
        <div key={idx} className="flex gap-2">
          <Input
            value={skill}
            onChange={(e) => handleChange(idx, e.target.value)}
            placeholder="e.g. React"
            className="flex-1"
          />
          <button
            onClick={() => remove(idx)}
            className="px-2 text-xs rounded-md border transition-colors"
            style={{ borderColor: "var(--color-border)", color: "var(--color-danger)" }}
          >
            ×
          </button>
        </div>
      ))}
      <button
        onClick={add}
        className="text-xs px-3 py-1.5 rounded-md border border-dashed transition-colors w-full text-center"
        style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
      >
        + Add skill
      </button>
    </div>
  );
}

function ProjectListField({ field }: { field: SchemaField }) {
  const { data, setField } = useEditorStore();
  const projects = (data[field.key] as { id: string; title: string; description: string; url: string; tags: string[] }[]) ?? [];

  function update(idx: number, key: string, val: string) {
    const next = projects.map((p, i) => i === idx ? { ...p, [key]: val } : p);
    setField(field.key, next);
  }

  function add() {
    setField(field.key, [
      ...projects,
      { id: crypto.randomUUID(), title: "", description: "", url: "", tags: [] },
    ]);
  }

  function remove(idx: number) {
    setField(field.key, projects.filter((_, i) => i !== idx));
  }

  return (
    <div className="space-y-3">
      {projects.map((project, idx) => (
        <div
          key={project.id}
          className="p-3 rounded-lg border space-y-2"
          style={{ background: "var(--color-overlay)", borderColor: "var(--color-border)" }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono" style={{ color: "var(--color-text-muted)" }}>
              Project {idx + 1}
            </span>
            <button
              onClick={() => remove(idx)}
              className="text-xs"
              style={{ color: "var(--color-danger)" }}
            >
              Remove
            </button>
          </div>
          <Input placeholder="Title" value={project.title} onChange={(e) => update(idx, "title", e.target.value)} />
          <Textarea placeholder="Description" value={project.description} onChange={(e) => update(idx, "description", e.target.value)} className="min-h-[60px]" />
          <Input placeholder="URL (https://...)" value={project.url} onChange={(e) => update(idx, "url", e.target.value)} />
        </div>
      ))}
      <button
        onClick={add}
        className="text-xs px-3 py-1.5 rounded-md border border-dashed w-full text-center transition-colors"
        style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
      >
        + Add project
      </button>
    </div>
  );
}

function LinkListField({ field }: { field: SchemaField }) {
  const { data, setField } = useEditorStore();
  const links = (data[field.key] as { platform: string; url: string }[]) ?? [];

  function update(idx: number, key: string, val: string) {
    const next = links.map((l, i) => i === idx ? { ...l, [key]: val } : l);
    setField(field.key, next);
  }

  function add() {
    setField(field.key, [...links, { platform: "", url: "" }]);
  }

  function remove(idx: number) {
    setField(field.key, links.filter((_, i) => i !== idx));
  }

  return (
    <div className="space-y-2">
      {links.map((link, idx) => (
        <div key={idx} className="flex gap-2">
          <Input
            placeholder="Platform"
            value={link.platform}
            onChange={(e) => update(idx, "platform", e.target.value)}
            className="w-28 shrink-0"
          />
          <Input
            placeholder="URL"
            value={link.url}
            onChange={(e) => update(idx, "url", e.target.value)}
            className="flex-1"
          />
          <button
            onClick={() => remove(idx)}
            className="px-2 text-xs rounded-md border"
            style={{ borderColor: "var(--color-border)", color: "var(--color-danger)" }}
          >
            ×
          </button>
        </div>
      ))}
      <button
        onClick={add}
        className="text-xs px-3 py-1.5 rounded-md border border-dashed w-full text-center"
        style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
      >
        + Add link
      </button>
    </div>
  );
}

export default function SchemaForm({ fields }: { fields: SchemaField[] }) {
  const { data, setField } = useEditorStore();

  return (
    <div className="space-y-6">
      {fields.map((field) => (
        <div key={field.key}>
          <label
            className="block text-xs font-medium mb-1.5"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {field.label}
            {field.required && (
              <span className="ml-1" style={{ color: "var(--color-accent)" }}>*</span>
            )}
          </label>

          {field.type === "text" && (
            <Input
              value={(data[field.key] as string) ?? ""}
              onChange={(e) => setField(field.key, e.target.value)}
              placeholder={field.placeholder}
            />
          )}

          {field.type === "textarea" && (
            <Textarea
              value={(data[field.key] as string) ?? ""}
              onChange={(e) => setField(field.key, e.target.value)}
              placeholder={field.placeholder}
            />
          )}

          {field.type === "url" && (
            <Input
              type="url"
              value={(data[field.key] as string) ?? ""}
              onChange={(e) => setField(field.key, e.target.value)}
              placeholder={field.placeholder}
            />
          )}

          {field.type === "color" && (
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={(data[field.key] as string) ?? "#E2FF55"}
                onChange={(e) => setField(field.key, e.target.value)}
                className="w-9 h-9 rounded-lg cursor-pointer border-0 p-0"
                style={{ background: "none" }}
              />
              <Input
                value={(data[field.key] as string) ?? "#E2FF55"}
                onChange={(e) => setField(field.key, e.target.value)}
                placeholder="#E2FF55"
                className="font-mono w-28"
              />
            </div>
          )}

          {field.type === "image" && (
            <div
              className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors"
              style={{ borderColor: "var(--color-border)", color: "var(--color-text-muted)" }}
            >
              <p className="text-xs">Click to upload image</p>
              <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                PNG, JPG up to 4MB
              </p>
            </div>
          )}

          {field.type === "skill-list" && <SkillListField field={field} />}
          {field.type === "project-list" && <ProjectListField field={field} />}
          {field.type === "link-list" && <LinkListField field={field} />}
        </div>
      ))}
    </div>
  );
}
