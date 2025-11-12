'use client';

import { LandingPage } from '@/components/LandingPage';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleNavigateToPitchDeck = () => {
    router.push('/pitch-deck');
  };

  const handleNavigateToApp = () => {
    router.push('/app');
  };

  return (
    <LandingPage
      onNavigateToPitchDeck={handleNavigateToPitchDeck}
      onNavigateToApp={handleNavigateToApp}
    />
  );
}

