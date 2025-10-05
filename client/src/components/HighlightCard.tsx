import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface HighlightCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function HighlightCard({ icon: Icon, title, description }: HighlightCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-200 hover:shadow-lg">
      <CardHeader>
        <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl font-serif" data-testid={`text-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base leading-relaxed" data-testid={`text-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
