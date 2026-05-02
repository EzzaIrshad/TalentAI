import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/components/shadcn/accordion";
import { FaqData } from "@/constants/faq-data";


export default function FaqAccordian() {
  return (
    <Accordion
      className="my-4 w-full max-w-217 mx-auto space-y-4"
      collapsible
      type="single"
    >
      {FaqData.map(({ title, content }, index) => (
        <AccordionItem
          className="rounded-md px-5 md:px-8 py-5 bg-[#f5f5f5] border-none cursor-pointer"
          key={index}
          value={`item-${index}`}
        >
          <AccordionTrigger className="font-semibold sm:text-lg py-2.5 cursor-pointer">{title}</AccordionTrigger>
          <AccordionContent className="text-muted-foreground 2xl:text-lg max-w-[90%] pb-0 cursor-pointer">{content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
