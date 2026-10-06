"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export function FaqList({ items }: { items: { id: string; q: string; a: string }[] }) {
  return (
    <Accordion type="single" collapsible className="divide-y rounded-[1.25rem] border bg-card px-5 shadow-soft sm:px-6">
      {items.map((f) => (
        <AccordionItem key={f.id} value={f.id} className="border-0">
          <AccordionTrigger className="min-h-14 items-center py-4 font-heading text-base font-semibold hover:no-underline">{f.q}</AccordionTrigger>
          <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
