import type { Portfolio, User } from "@/types/portfolio";
import type { TemplateMeta } from "@/types/template";

export const mockUser: User = {
  id: "user_01",
  name: "Dikshant Singh",
  email: "dikshant@example.com",
  username: "dikshant",
  plan: "pro",
  portfolioCount: 2,
};

export const mockTemplates: TemplateMeta[] = [
  {
    id: "minimal-dev",
    name: "Minimal Dev",
    category: "developer",
    description: "Clean, typography-led portfolio for developers who let the work speak.",
    featured: true,
    previewImage: "/template-previews/minimal-dev.png",
    tags: ["minimal", "dark", "developer"],
  },
  {
    id: "creative-grid",
    name: "Creative Grid",
    category: "designer",
    description: "Bold grid layout with full-bleed project images for visual creatives.",
    featured: true,
    previewImage: "/template-previews/creative-grid.png",
    tags: ["grid", "visual", "designer"],
  },
  {
    id: "freelancer-pro",
    name: "Freelancer Pro",
    category: "freelancer",
    description: "Conversion-focused layout with services, testimonials, and a strong CTA.",
    featured: false,
    previewImage: "/template-previews/freelancer-pro.png",
    tags: ["freelancer", "services", "cta"],
  },
  {
    id: "editorial",
    name: "Editorial",
    category: "writer",
    description: "Long-form, editorial aesthetic for writers, journalists, and researchers.",
    featured: false,
    previewImage: "/template-previews/editorial.png",
    tags: ["editorial", "writing", "text-heavy"],
  },
  {
    id: "lens",
    name: "Lens",
    category: "photographer",
    description: "Full-screen image-first layout for photographers and visual artists.",
    featured: true,
    previewImage: "/template-previews/lens.png",
    tags: ["photography", "fullscreen", "visual"],
  },
];

export const mockPortfolios: Portfolio[] = [
  {
    id: "port_01",
    userId: "user_01",
    templateId: "minimal-dev",
    slug: "dikshant",
    title: "My Dev Portfolio",
    contentJSON: {
      name: "Dikshant Singh",
      role: "Frontend Developer",
      bio: "Building fast, beautiful interfaces. Open to freelance.",
      accentColor: "#E2FF55",
      projects: [],
      skills: ["React", "Next.js", "TypeScript", "Tailwind"],
      links: [],
      email: "dikshant@example.com",
    },
    published: true,
    publishedAt: "2026-04-01T10:00:00Z",
    createdAt: "2026-03-28T08:00:00Z",
    updatedAt: "2026-04-01T10:00:00Z",
  },
  {
    id: "port_02",
    userId: "user_01",
    templateId: "creative-grid",
    slug: "dikshant-design",
    title: "Design Work",
    contentJSON: {},
    published: false,
    createdAt: "2026-04-10T12:00:00Z",
    updatedAt: "2026-04-10T12:00:00Z",
  },
];
