'use client';

import { PitchDeck } from '@/components/PitchDeck';
import { useRouter } from 'next/navigation';

export default function PitchDeckPage() {
  const router = useRouter();

  const handleBackToLanding = () => {
    router.push('/');
  };

  return <PitchDeck onBackToLanding={handleBackToLanding} />;
}

