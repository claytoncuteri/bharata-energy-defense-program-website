import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  images?: string[];
}

interface TimelineAccordionProps {
  events: TimelineEvent[];
}

export default function TimelineAccordion({ events }: TimelineAccordionProps) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {events.map((event, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="border-l-4 border-primary bg-card rounded-lg overflow-hidden"
        >
          <AccordionTrigger className="px-6 py-4 hover:no-underline hover-elevate" data-testid={`accordion-trigger-${event.year}`}>
            <div className="flex items-center gap-4 text-left">
              <span className="text-2xl font-serif font-bold text-primary" data-testid={`text-year-${event.year}`}>
                {event.year}
              </span>
              <span className="text-lg font-semibold" data-testid={`text-title-${event.year}`}>
                {event.title}
              </span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="px-6 pb-6">
            <p className="text-muted-foreground leading-relaxed mb-4" data-testid={`text-description-${event.year}`}>
              {event.description}
            </p>
            {event.images && event.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {event.images.map((image, imgIndex) => (
                  <Card key={imgIndex} className="overflow-hidden">
                    <img
                      src={image}
                      alt={`${event.title} - Image ${imgIndex + 1}`}
                      className="w-full h-48 object-cover"
                      data-testid={`image-${event.year}-${imgIndex}`}
                    />
                  </Card>
                ))}
              </div>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
