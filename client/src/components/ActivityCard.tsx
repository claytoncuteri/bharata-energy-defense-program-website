import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ActivityCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ActivityCard({ icon: Icon, title, description }: ActivityCardProps) {
  return (
    <Card className="hover-elevate transition-all duration-200">
      <CardHeader>
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-md bg-chart-1/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-chart-1" />
          </div>
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold mb-2" data-testid={`text-activity-title-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {title}
            </CardTitle>
            <CardDescription className="text-sm leading-relaxed" data-testid={`text-activity-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {description}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
