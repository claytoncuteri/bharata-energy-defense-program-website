export default function ExecutiveSummary() {
  return (
    <div className="min-h-screen py-10 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6" data-testid="text-page-title">
            Executive Summary
          </h1>

          <div className="prose prose-lg max-w-none space-y-4 text-foreground">
            <p className="text-lg leading-relaxed" data-testid="text-intro">
              Chola Mandala Mahaa Samsthaanam is a congregation of royal families, spiritual gurus and social 
              activists who envisage reestablishing Bharata (currently known as India) in its full glory. We shall do this 
              by first protecting our motherland, reenergizing our spiritual epicenters such as Hebbya, Hampi 
              (Kishkinda), Ayodhya etc. and finally balance human, environmental and spiritual energies of this planet.
            </p>

            <p className="text-lg leading-relaxed" data-testid="text-methods">
              To achieve this grand vision, we employ both socio-political and spiritual-mystic processes such as 
              Rajasooya Maha Yagnas, Vishwa Shanthi Parama Yagnas, mass visualization and education via main 
              stream media, spiritual meditative practices that activate the hidden astral and cosmic abilities of 
              human beings.
            </p>

            <p className="text-lg leading-relaxed" data-testid="text-achievements">
              Since 2005, following a divine ordainment, we have successfully conducted <strong>4500 Maha yagnas</strong>, around 
              <strong> 54 Shiva Lingha installations</strong>, multiple idol consecrations, launching of a mass media instrument, more than 
              <strong> a million tree plantations</strong> & many socio cultural rejuvenations - at national & international locations.
            </p>

            <div className="bg-card rounded-lg p-6 my-6">
              <h2 className="text-2xl font-serif font-semibold mb-3" data-testid="text-capabilities-title">Our Demonstrated Capabilities</h2>
              <p className="mb-4" data-testid="text-capabilities-intro">
                Our yagnas and processes have very deep mystic connection with the political, economic, social and 
                environmental activities across the planet. We have enabled:
              </p>
              <ul className="space-y-3 list-disc list-inside text-muted-foreground">
                <li data-testid="text-capability-1">Torrential rain falls to draught stricken areas</li>
                <li data-testid="text-capability-2">Caused economic cataclysms to close the rich-poor gap across the planet</li>
                <li data-testid="text-capability-3">Economic crisis to prevent military and terror attacks to Bharat from hostile countries & organizations</li>
                <li data-testid="text-capability-4">Political instability in unfriendly countries through government shut downs (e.g., recently in the USA)</li>
                <li data-testid="text-capability-5">Inviting & interacting with benevolent extra galactic, inter stellar beings to eradicate the insolvable problems of the planet (global warming, drying of river beds, poisonous earth, over population)</li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed" data-testid="text-verification">
              These abilities have been witnessed & cross verified by credible third parties including government 
              ministers, military personnel, television media, scientific communities & spiritual organizations. This 
              establishes the scientific nature of our mystic instruments.
            </p>

            <div className="bg-primary/10 rounded-lg p-6 my-6">
              <h2 className="text-2xl font-serif font-semibold mb-3 text-primary" data-testid="text-pledge-title">Our Pledge to Bharata</h2>
              <p className="text-lg leading-relaxed" data-testid="text-pledge-content">
                In light of the recent terrorist and military attacks on the Indian army, the Mahaa Samsthaanam has 
                pledged to offer our mystic and psychic abilities in a professional manner to aid the goings-on and 
                protect the interests of the military and defense establishments of the Indian government. Through our 
                unique abilities, we shall help the agencies to achieve their objectives of terror cell eradication, 
                economic suppression, environmental destabilization & eventually total surrender of the enemy nations 
                to Bharata. <strong>All these can be achieved with a minuscule share (~0.000001%) of national defense budget.</strong>
              </p>
            </div>

            <p className="text-lg leading-relaxed italic text-center mt-6" data-testid="text-closing">
              This dossier explains in detail about our journey so far and also serves as a blue print for our upcoming 
              activities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
