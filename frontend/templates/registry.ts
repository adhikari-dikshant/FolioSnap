import type { TemplateRegistryEntry } from "@/types/template";
import { meta as minimalDevMeta } from "./minimal-dev/meta";
import { schema as minimalDevSchema } from "./minimal-dev/schema";

export const templateRegistry: Record<string, TemplateRegistryEntry> = {
  "minimal-dev": {
    meta: minimalDevMeta,
    schema: minimalDevSchema,
  },
};

export function getTemplate(id: string): TemplateRegistryEntry | null {
  return templateRegistry[id] ?? null;
}

export function getAllTemplates(): TemplateRegistryEntry[] {
  return Object.values(templateRegistry);
}
