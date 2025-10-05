import ActivityCard from '../ActivityCard';
import { Church } from 'lucide-react';

export default function ActivityCardExample() {
  return (
    <div className="p-4">
      <ActivityCard
        icon={Church}
        title="Rajasuya Yagna at Hebbya"
        description="Complete the construction and consecration of the Matha Gandhareshwari Church at Hebbya, Mysuru to neutralize ancient curses and restore planetary balance."
      />
    </div>
  );
}
