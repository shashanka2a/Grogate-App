'use client';

import { MobileApp } from '@/components/MobileApp';
import { useRouter } from 'next/navigation';

export default function AppPage() {
  const router = useRouter();

  const handleBackToLanding = () => {
    router.push('/');
  };

  return <MobileApp onBackToLanding={handleBackToLanding} />;
}

