import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { blogPosts } from "@/data/blog";
import { BlogCard } from "@/components/blog-card";
import { LeadMagnet } from "@/components/lead-magnet";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Insights, tips, and evidence-based approaches to body wellness, mobility, and fitness.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero 
        title="Wellness Journal" 
        description="Actionable advice on mobility, strength, and recovery to help you feel better every day."
      />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <LeadMagnet />
    </>
  );
}
