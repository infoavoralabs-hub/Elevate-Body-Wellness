import { Transformation } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export function TransformationCard({ transformation }: { transformation: Transformation }) {
  return (
    <Card className="overflow-hidden border-border bg-white shadow-soft group">
      <div className="grid grid-cols-2 aspect-[4/3] relative">
        <div className="relative h-full w-full border-r border-white/20">
          <Image
            src={transformation.beforeImage}
            alt={`${transformation.name} before`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-sm">
            Before
          </div>
        </div>
        <div className="relative h-full w-full">
          <Image
            src={transformation.afterImage}
            alt={`${transformation.name} after`}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 33vw"
          />
          <div className="absolute bottom-2 right-2 bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded backdrop-blur-sm">
            After
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-display text-xl font-semibold mb-2 text-charcoal">
          {transformation.name}&apos;s Journey
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {transformation.description}
        </p>
      </CardContent>
    </Card>
  );
}
