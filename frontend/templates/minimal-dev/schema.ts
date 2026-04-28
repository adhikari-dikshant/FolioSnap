import type { TemplateSchema } from "@/types/template";

export const schema: TemplateSchema = {
  fields: [
    { key: "name",        label: "Full Name",    type: "text",         placeholder: "Dikshant Singh",          required: true },
    { key: "role",        label: "Role / Title", type: "text",         placeholder: "Frontend Developer",      required: true },
    { key: "bio",         label: "Bio",          type: "textarea",     placeholder: "A short intro about you…", required: true },
    { key: "email",       label: "Email",        type: "url",          placeholder: "hello@you.com" },
    { key: "avatar",      label: "Avatar",       type: "image" },
    { key: "accentColor", label: "Accent Color", type: "color" },
    { key: "skills",      label: "Skills",       type: "skill-list" },
    { key: "projects",    label: "Projects",     type: "project-list" },
    { key: "links",       label: "Social Links", type: "link-list" },
  ],
  defaults: {
    name: "Your Name",
    role: "Developer & Creator",
    bio: "I build things for the web. Currently open to new opportunities.",
    email: "",
    avatar: "",
    accentColor: "#E2FF55",
    skills: ["React", "TypeScript", "Next.js"],
    projects: [],
    links: [],
  },
};
