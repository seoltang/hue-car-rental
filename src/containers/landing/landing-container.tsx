'use client';

import { lazy } from 'react';
import LandingSection from './sections/landing/landing-section';

const RegisteredCarsNumberSection = lazy(
  () => import('./sections/registered-cars-number/registered-cars-number-section'),
);
const OneTwentiethRentalSection = lazy(
  () => import('./sections/one-twentieth-rental/one-twentieth-rental-section'),
);
const ServiceIntroductionSection = lazy(
  () => import('./sections/service-introduction-section/service-introduction-section'),
);
const QuotesCompareSection = lazy(
  () => import('./sections/quotes-compare-section/quotes-compare-section'),
);
const TotalCostCompareSection = lazy(
  () => import('./sections/total-cost-compare-section/total-cost-compare-section'),
);
const ConsumerCentricSection = lazy(
  () => import('./sections/consumer-centric-section/consumer-centric-section'),
);
const PersonaSection = lazy(() => import('./sections/persona-section/persona-section'));
const BenefitsSection = lazy(() => import('./sections/benefits-section/benefits-section'));
const ReviewSection = lazy(() => import('./sections/review-section/review-section'));
const ContactSection = lazy(() => import('./sections/contact-section/contact-section'));

const LandingContainer = () => {
  return (
    <div className="flex flex-col">
      <LandingSection />
      <RegisteredCarsNumberSection />
      <OneTwentiethRentalSection />
      <ServiceIntroductionSection />
      <QuotesCompareSection />
      <TotalCostCompareSection />
      <ConsumerCentricSection />
      <PersonaSection />
      <BenefitsSection />
      <ReviewSection />
      <ContactSection />
    </div>
  );
};

export default LandingContainer;
