'use client';

import LandingContainer from '@/containers/landing/landing-container';
import { Slide, ToastContainer } from 'react-toastify';

export default function Home() {
  return (
    <>
      <LandingContainer />
      <ToastContainer
        position="top-right"
        toastClassName="top-header-height shadow-md"
        autoClose={3000}
        transition={Slide}
        hideProgressBar
        closeButton={false}
      />
    </>
  );
}
