import { notFound } from "next/navigation";
import MinimalDevTemplate from "@/templates/minimal-dev/Template";
import { mockPortfolios } from "@/lib/mock-data";
import type { PortfolioData } from "@/types/template";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;
  const portfolio = mockPortfolios.find((p) => p.slug === username);
  if (!portfolio) return { title: "Portfolio not found" };

  const data = portfolio.contentJSON as Partial<PortfolioData>;
  return {
    title: `${data.name ?? username} — Portfolio`,
    description: data.bio ?? "Built with FolioSnap",
  };
}

// Map templateId → component (add new templates here as you build them)
const TEMPLATE_MAP: Record<string, React.ComponentType<{ data: Partial<PortfolioData> }>> = {
  "minimal-dev": MinimalDevTemplate,
};

export default async function PublicPortfolioPage({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  // Replace this lookup with a real API call: GET /api/portfolios/:slug
  const portfolio = mockPortfolios.find(
    (p) => p.slug === username && p.published
  );

  if (!portfolio) notFound();

  const TemplateComponent = TEMPLATE_MAP[portfolio.templateId];

  if (!TemplateComponent) notFound();

  return (
    <TemplateComponent data={portfolio.contentJSON as Partial<PortfolioData>} />
  );
}
