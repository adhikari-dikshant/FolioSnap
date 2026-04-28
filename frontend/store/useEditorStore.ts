"use client";

import { create } from "zustand";
import type { TemplateSchema } from "@/types/template";

interface EditorStore {
  templateId: string;
  schema: TemplateSchema | null;
  data: Record<string, unknown>;
  isDirty: boolean;
  isSaving: boolean;
  activeSection: string | null;

  setTemplate: (id: string, schema: TemplateSchema, defaults: Record<string, unknown>) => void;
  setField: (key: string, value: unknown) => void;
  setActiveSection: (key: string | null) => void;
  markSaved: () => void;
  setIsSaving: (v: boolean) => void;
  reset: () => void;
}

export const useEditorStore = create<EditorStore>((set) => ({
  templateId: "",
  schema: null,
  data: {},
  isDirty: false,
  isSaving: false,
  activeSection: null,

  setTemplate: (id, schema, defaults) =>
    set({ templateId: id, schema, data: { ...defaults }, isDirty: false }),

  setField: (key, value) =>
    set((s) => ({ data: { ...s.data, [key]: value }, isDirty: true })),

  setActiveSection: (key) => set({ activeSection: key }),

  markSaved: () => set({ isDirty: false }),

  setIsSaving: (v) => set({ isSaving: v }),

  reset: () => set({ templateId: "", schema: null, data: {}, isDirty: false, activeSection: null }),
}));
