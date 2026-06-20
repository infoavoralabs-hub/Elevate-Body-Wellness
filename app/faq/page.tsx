import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/page-hero";
import { CtaSection } from "@/components/cta-section";
import { faqs } from "@/data/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const metadata = buildMetadata({
  title: "FAQ",
  description: "Frequently asked questions about personal training and body wellness.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      <PageHero 
        title="Frequently Asked Questions" 
        description="Everything you need to know about working together, from pricing to process."
      />

      <section className="py-24 bg-background">
        <div className="container max-w-3xl">
            <Accordion className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-display font-semibold text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
