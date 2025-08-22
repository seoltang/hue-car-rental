'use client';

import LandingContainer from '@/containers/landing/landing-container';
import { Slide, ToastContainer } from 'react-toastify';
import { useIsMobile } from '@/hooks/useIsMobile';

export default function Home() {
  const { isMobile } = useIsMobile();

  return (
    <>
      <LandingContainer />
      <ToastContainer
        position={isMobile ? 'top-center' : 'top-right'}
        toastClassName="top-header-height shadow-md max-md:mt-4 max-md:max-w-[calc(100%-32px)]"
        autoClose={3000}
        transition={Slide}
        hideProgressBar
        closeButton={false}
      />
    </>
  );
}
