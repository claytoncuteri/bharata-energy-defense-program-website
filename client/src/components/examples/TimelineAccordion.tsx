import TimelineAccordion from '../TimelineAccordion';

export default function TimelineAccordionExample() {
  const mockEvents = [
    {
      year: "2005",
      title: "Foundation & Rajasuya Maha Yagna",
      description: "Akhila Vishw Bharathiya Seva Samaj was registered at Mysuru by Prince A. Amithaab. The sacred Rajasuya Maha Yagna was initiated to protect Mother Nature from nuclear threats.",
      images: ["/placeholder-yagna.jpg", "/placeholder-temple.jpg"]
    },
    {
      year: "2007",
      title: "Beggar-Free Mysuru Project",
      description: "At age 23, the prince successfully completed the 'Beggar Free City - Mysuru' project, providing shelter and employment to beggars, ending child trafficking and poverty-driven crimes.",
      images: ["/placeholder-mysuru.jpg"]
    },
    {
      year: "2012",
      title: "Border Protection Yagnas",
      description: "Rajasuya Maha Yagna conducted at 8 strategic locations bordering India to create an energy shield protecting the nation from hostile threats.",
      images: ["/placeholder-border1.jpg", "/placeholder-border2.jpg", "/placeholder-border3.jpg"]
    }
  ];

  return <TimelineAccordion events={mockEvents} />;
}
