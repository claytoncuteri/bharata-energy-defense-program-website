import TimelineAccordion from "@/components/TimelineAccordion";
import hebbyaBhoomiPuja from "@assets/hebbya_bhoomi_puja.png";
import borderYagna from "@assets/border_yagna.png";
import armyCamps from "@assets/army_camps.png";
import chitradurgaFort from "@assets/chitradurga_fort.png";
import panchaPativrata from "@assets/pancha_pativrata.png";
import jammuTemple from "@assets/jammu_temple.png";

export default function PastTimeline() {
  const timelineEvents = [
    {
      year: "2005",
      title: "Foundation & Rajasuya Maha Yagna",
      description: "'Akhila Vishw Bharathiya Seva Samaj', was registered at Mysuru, Karnataka by Prince A. Amithaab – our chief convenor. The Chola prince began conducting 'Rajasuya Maha Yagna' under divine guidance to protect Mother Nature and her inhabitants from negative energies trying to destroy our planet by starting a nuclear war. This special fire ritual, successfully conducted only twice before in history by Sri Ramachandra Prabhu and Matha Chamundeshwari, has been performed every new moon and full moon, lasting 12 hours on new moons and five days ending on full moons.",
    },
    {
      year: "2006",
      title: "Prison Meditation & Public Classes",
      description: "Meditation classes were given to the inmates of Mysuru Jail by Mr. A. Amithaab. It was an initiative under 'Akhil Vishw Bharathiya Seva Samaj' to purify the inner conscience and rid them of the stress due to social stigma. He also began meditation classes for the public of Mysuru city, spreading spiritual awareness and inner peace.",
    },
    {
      year: "2007",
      title: "Beggar-Free Mysuru Project",
      description: "By the guidance of the divine, the young prince at age 23 took up the social welfare project 'Beggar free city – Mysuru' to stop beggary in the heritage city. Beggars were provided with shelter in rehabilitation centers restored to good hygienic conditions. They were provided with employment to sustain their livelihood. This project maintained a hygienic environment in the city, attracted foreign tourists and more importantly put an end to Child trafficking, Begging Mafia, Prostitution rackets and Poverty driven crimes. Mysuru Deputy Commissioner's office announced the success of the project on 08th of March, 2008.",
    },
    {
      year: "2008",
      title: "Matha Gandhareshwari Temple & Secured Mysuru",
      description: "On 19th June 2008, bhoomi puja of Matha Gandhareshwari temple at Hebbya, Mysuru was performed by Sri Vishwesha Thirtha swami. According to divine cosmos, this temple must be built to neutralize Matha Gandhari's curse that threatens the universe with nuclear war. On 04th September 2008, a rally was conducted to promote installation of metal detectors and CCTV cameras in public places under 'Secured Mysuru' project. This was realized with installations in bus stands, train stations, tourist places and cinema halls, later inspiring similar projects across the nation.",
      images: [hebbyaBhoomiPuja],
    },
    {
      year: "2009",
      title: "NURM Infrastructure Development",
      description: "Central government released Rs. 1850 crore for Mysuru's infrastructural development under NURM project, but funds were stagnant. Mr. A. Amithaab with his trust and media support pressurized authorities to release the amount. The funds were finally utilized and the majestic new KSRTC bus stand in the heart of the city was built under this project.",
    },
    {
      year: "2010",
      title: "Sri Lanka Diplomatic Mission",
      description: "Mr. Amithaab visited Sri Lanka and met with Mr. Rahul (personal secretary of President Rajapakshe), Mr. Vigneshwaran (Chief Justice of Sri Lanka), and Members of Sri Lankan Parliament for diplomatic talks. The prince requested the Sri Lankan government not to provide military base to Pakistan and China and warned of probable consequences if the government decided otherwise.",
    },
    {
      year: "2011",
      title: "Nuclear Awareness Conference",
      description: "On 01st March 2011, Palestinian Minister Mr. M. H. Zuhair arrived at Mysuru to attend Rajasuya Maha Yagna and participate in a conference to educate public about the threats of Nuclear weapons, ill effects of radiation leaks from nuclear power plants and the bad state of laborers involved in mining of radioactive materials.",
    },
    {
      year: "2012",
      title: "8-Point Border Protection & Temple Renovation",
      description: "Rajasuya Maha Yagna was conducted at 8 places bordering India to protect our nation from threats of neighboring hostile countries and terrorists: Bavali Matha mandir (Jammu), Kamakya (Assam), Adi Shakti temple (Kanchipuram), Indira point (Andaman & Nicobar), Kanyakumari (Tamil Nadu), Agatti Islands (Lakshadweep), Kannur (Kerala), and Har Siddhi Matha mandir (Dwaraka). The program ended with Rajasuya Maha Yagna at Chamundivanam, Mysuru. Mr. Amithaab also reconstructed and renovated the dilapidated Siddharameshwara temple at Hebbya at his own expense. Jeernoddhaara ceremony was conducted on 20th December 2012.",
      images: [borderYagna],
    },
    {
      year: "2013",
      title: "High-Altitude Military Support",
      description: "The Cholan prince visited Indian borders at Ladakh, Tawang and Kargil and conducted Rajasuya Maha Yagna at army camps under supervision and support of Indian army. The fire rituals were conducted for the well being of our soldiers at the borders and to create an energy shield to protect borders from enemy attacks. Mr. Amithaab also discussed problems faced by Indian army at such high altitudes and rough climatic conditions.",
      images: [armyCamps],
    },
    {
      year: "2014",
      title: "Year of Continuous Cosmic Energy",
      description: "Mr. Amithaab and his team were involved in Rajasuya Mahayagna for the entire year of 2014. A reservoir of Cosmo energy was formed by the continuous fire rituals which served to manifest positive energies around the globe. Many major mishaps that might have led to loss of many lives were prevented through this sustained spiritual effort.",
      images: [chitradurgaFort, panchaPativrata],
    },
    {
      year: "2015",
      title: "J&K Temple Construction",
      description: "Amithaab ji and his team visited Jammu & Kashmir in April and built a temple of Adi Rakshana Jwala Narasimhini Prathyangire and Adi Rakshana Jwala Narasimha at Dalair in Jammu. The temple was built on a site previously destroyed by a terror attack. He also met with J&K police officers and discussed issues faced by the natives.",
      images: [jammuTemple],
    },
    {
      year: "2016",
      title: "Thailand Visit & Shiva Lingha Installations",
      description: "Mr. Amithaab visited Thailand for his energy programs and visited places that support him in his mission. Later, by the guidance of the cosmos, he started a spiritual project to install Shiva Linghas that are formed naturally in Narmada river bed due to the turbulent flow. The Shiva Linghas were installed at different places in the states of Karnataka, Tamil Nadu, Maharashtra, New Delhi and Uttar Pradesh. Around 20 Shiva Linghas were installed in that year. He also visited Elephanta caves in Mumbai, Maharashtra and installed the Atma lingh of Adi Rakshana Gayathri Devi Prathyangira and Adi Vishwakarma deva.",
    },
    {
      year: "2017",
      title: "Cambodia Angkor Wat Installation & PMO Visit",
      description: "Mr. Amithaab and his team visited Cambodia and installed Adi Rakshana Aghora Pretheshwari Prathyangire and Adi Rakshana Aghora Pretheshwara atma lingh at UNESCO site of Angkor Wat temple under special permission. This served as a major energy breakthrough in the mission. A mysterious cloud formed over the site of Angkor Wat soon after the installation as if an energy portal opened and positive cosmos entered the site. He also visited New Delhi and installed Atma lingh of Adi Rakshana Subadra Prathyangire and Adi Rakshana Arjuna, and visited Prime Minister's Office (PMO) and submitted a letter seeking permission and support to install idols and Shiva Linghas at sensitive and critical energy spots. Around 10 more Shiva Linghas were installed that year.",
    },
    {
      year: "2018",
      title: "Varanasi Pilgrimage & Western Ghats Installations",
      description: "In April 2018, Mr. Amithaab and team visited Varanasi, Uttar Pradesh and installed the Shiva Lingha at the sacred pilgrimage. Around 14 more Shiva Linghas were installed in the year 2018. The installations were carried out in the hilly regions of Western ghats. The team conducted various fire rituals with different Yantras (formations) of Rajasuya Maha Yagna to channel different frequencies of Cosmos as per requirement of application.",
    },
    {
      year: "2019",
      title: "Dhana Lakshmi Installation & Inter Faith Temple Plan",
      description: "Mr. Amithaab and his team installed Adi Rakshana Dhana Lakshmi Prathyangira idol in Mysuru on 15th February 2019. Amithaab ji and team has been planning to build an Inter faith temple at his site in Hebbya, Mysuru to bestow peace and harmony among all religions and bless everyone to live together peacefully irrespective of Religion, Race, Gender, Caste and Creed. The temple would house gods and goddesses of different religions and a prayer hall. The idols required for the Inter faith temple have already been carved out and are waiting to be installed at Hebbya. However, the project has stopped due to lack of financial support and various local hurdles. The 13 year legacy of unstopped Rajasuya Maha Yagna and hard work is now difficult to continue with insufficient financial help.",
    },
  ];

  return (
    <div className="min-h-screen py-10 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-3" data-testid="text-page-title">
            Past Timeline (2005-2019)
          </h1>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-page-subtitle">
            A comprehensive journey of our spiritual and social activities protecting Bharata
          </p>

          <TimelineAccordion events={timelineEvents} />
        </div>
      </div>
    </div>
  );
}
