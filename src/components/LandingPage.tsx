import { Hero } from './Hero';
import { Navbar } from './Navbar';
import { HowItWorks } from './HowItWorks';
import { KeyBenefits } from './KeyBenefits';
import { OurProducts } from './OurProducts';
import { GetInvolved } from './GetInvolved';
import { Footer } from './Footer';

interface LandingPageProps {
  onNavigateToPitchDeck: () => void;
  onNavigateToApp: () => void;
}

export function LandingPage({ onNavigateToPitchDeck, onNavigateToApp }: LandingPageProps) {
  return (
    <div className="w-full">
      <Navbar 
        onPitchDeckClick={onNavigateToPitchDeck}
        onTryNowClick={onNavigateToApp}
      />
      <Hero 
        onPitchDeckClick={onNavigateToPitchDeck}
        onTryNowClick={onNavigateToApp}
      />
      <HowItWorks />
      <KeyBenefits />
      <OurProducts />
      <GetInvolved />
      <Footer />
    </div>
  );
}
