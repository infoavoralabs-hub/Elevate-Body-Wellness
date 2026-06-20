import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { renderMarkdown } from "@/lib/markdown";
import { buildMetadata } from "@/lib/seo";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { LeadMagnet } from "@/components/lead-magnet";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    image: post.coverImage,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const contentHtml = renderMarkdown(post.content);

  return (
    <>
      <article className="pt-32 pb-16 bg-background min-h-screen">
        <div className="container max-w-3xl">
          <Button asChild variant="ghost" className="mb-8 -ml-4 text-gray-500 hover:text-charcoal">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="bg-sand/50 text-primary font-semibold px-3 py-1 rounded-full uppercase tracking-wider text-xs">
              {post.category}
            </span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-bold text-charcoal leading-tight mb-8">
            {post.title}
          </h1>

          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden mb-12 shadow-sm">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          <div 
            className="prose-wellness"
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          />
        </div>
      </article>

      <LeadMagnet />
    </>
  );
}
