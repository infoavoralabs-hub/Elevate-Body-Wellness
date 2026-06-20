import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-background">
      <h1 className="text-9xl font-display font-bold text-primary opacity-20">404</h1>
      <h2 className="text-3xl font-display font-bold text-charcoal -mt-8 mb-4">Page Not Found</h2>
      <p className="text-gray-600 max-w-md mx-auto mb-8">
        We couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
      </p>
      <Button asChild className="btn-primary">
        <Link href="/">Return to Home</Link>
      </Button>
    </div>
  );
}
