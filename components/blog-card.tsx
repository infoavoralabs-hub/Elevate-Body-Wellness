import { BlogPost } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} className="block group h-full">
      <Card className="h-full overflow-hidden border-border bg-white shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col">
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-sand/20">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
            {post.category}
          </div>
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span>•</span>
            <span>{post.readingTime}</span>
          </div>
          <h3 className="font-display text-xl font-semibold text-charcoal mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-gray-600 line-clamp-3 mb-4 flex-1">
            {post.excerpt}
          </p>
          <div className="text-primary font-medium text-sm mt-auto inline-flex items-center group-hover:underline underline-offset-4">
            Read Article <span className="ml-1">→</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
