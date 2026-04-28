export type FieldType =
  | "text"
  | "textarea"
  | "image"
  | "color"
  | "url"
  | "project-list"
  | "link-list"
  | "skill-list";

export interface SchemaField {
  key: string;
  label: string;
  type: FieldType;
  placeholder?: string;
  required?: boolean;
}

export interface TemplateMeta {
  id: string;
  name: string;
  category: "developer" | "designer" | "freelancer" | "photographer" | "writer";
  description: string;
  featured: boolean;
  previewImage: string;
  tags: string[];
}

export interface TemplateSchema {
  fields: SchemaField[];
  defaults: Record<string, unknown>;
}

export interface TemplateRegistryEntry {
  meta: TemplateMeta;
  schema: TemplateSchema;
  // Component is imported dynamically per template
}

export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  image?: string;
  tags: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface PortfolioData {
  name: string;
  role: string;
  bio: string;
  avatar?: string;
  accentColor: string;
  projects: Project[];
  skills: string[];
  links: SocialLink[];
  email: string;
}
