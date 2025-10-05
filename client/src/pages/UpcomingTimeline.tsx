import ActivityCard from "@/components/ActivityCard";
import { Church, Globe, Handshake, Heart, TreePine, Building, Sparkles, Users } from "lucide-react";

export default function UpcomingTimeline() {
  const activities = [
    {
      icon: Church,
      title: "Complete Matha Gandhareshwari Church at Hebbya",
      description: "Finish construction and consecration of the temple to neutralize Matha Gandhari's curse and restore cosmic balance, preventing global nuclear conflict."
    },
    {
      icon: Globe,
      title: "Establish World Peace Centers",
      description: "Create multiple spiritual centers across India and internationally to amplify positive energy transmission and global harmony."
    },
    {
      icon: Handshake,
      title: "Inter-Faith Church Complex",
      description: "Build a unified spiritual complex honoring all religions, promoting universal brotherhood and spiritual unity beyond sectarian boundaries."
    },
    {
      icon: Heart,
      title: "Expand Social Welfare Programs",
      description: "Scale successful initiatives like the Beggar-Free City model to other major Indian cities, eliminating poverty and crime."
    },
    {
      icon: TreePine,
      title: "Massive Environmental Restoration",
      description: "Launch 10 million tree plantation drive and river rejuvenation projects across drought-affected regions of Bharata."
    },
    {
      icon: Building,
      title: "Defense Energy Grid Establishment",
      description: "Create a network of spiritual energy installations at strategic military locations for enhanced national protection."
    },
    {
      icon: Sparkles,
      title: "Advanced Cosmic Communication",
      description: "Establish systematic protocols for interaction with benevolent extraterrestrial beings to solve planetary crises."
    },
    {
      icon: Users,
      title: "Youth Spiritual Training Programs",
      description: "Train next generation in ancient mystic sciences, meditation practices, and cosmic energy manipulation for national service."
    }
  ];

  return (
    <div className="min-h-screen py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4" data-testid="text-page-title">
            Upcoming Activities
          </h1>
          <p className="text-lg text-muted-foreground mb-12" data-testid="text-page-subtitle">
            Our planned initiatives for the next phase of planetary protection and spiritual rejuvenation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <ActivityCard
                key={index}
                icon={activity.icon}
                title={activity.title}
                description={activity.description}
              />
            ))}
          </div>

          <div className="mt-16 bg-gradient-to-r from-primary/10 via-chart-2/10 to-chart-1/10 rounded-lg p-8">
            <h2 className="text-2xl font-serif font-semibold mb-4" data-testid="text-budget-title">
              Budget Requirement
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-budget-description">
              All these ambitious programs can be achieved with approximately <strong className="text-primary">0.000001% 
              of the national defense budget</strong>. This minimal investment will provide maximum protection through 
              spiritual energy, preventing conflicts before they manifest physically and saving countless lives 
              and resources.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
