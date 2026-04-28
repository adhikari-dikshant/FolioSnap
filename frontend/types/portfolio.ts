export interface Portfolio {
  id: string;
  userId: string;
  templateId: string;
  slug: string;
  title: string;
  contentJSON: Record<string, unknown>;
  published: boolean;
  publishedAt?: string;
  customDomain?: string;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  username: string;
  plan: "free" | "pro" | "team";
  portfolioCount: number;
}
