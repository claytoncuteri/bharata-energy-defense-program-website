import HighlightCard from '../HighlightCard';
import { Flame } from 'lucide-react';

export default function HighlightCardExample() {
  return (
    <div className="p-4">
      <HighlightCard
        icon={Flame}
        title="4500+ Maha Yagnas"
        description="Sacred fire rituals conducted since 2005 to protect Bharata and balance planetary energies, preventing nuclear conflicts and environmental disasters."
      />
    </div>
  );
}
