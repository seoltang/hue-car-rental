'use client';

import LandingSection from './sections/landing/landing-section';
import RegisteredCarsNumberSection from './sections/registeredCarsNumber/registered-cars-number-section';

const LandingContainer = () => {
  return (
    <div className="flex flex-col">
      <LandingSection />
      <RegisteredCarsNumberSection />
    </div>
  );
};

export default LandingContainer;
