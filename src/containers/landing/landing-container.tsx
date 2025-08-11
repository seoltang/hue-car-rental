'use client';

import LandingSection from './sections/landing/landing-section';
import RegisteredCarsNumberSection from './sections/registered-cars-number/registered-cars-number-section';
import OneTwentiethRentalSection from './sections/one-twentieth-rental/one-twentieth-rental-section';
import ServiceIntroductionSection from './sections/service-introduction-section/service-introduction-section';
import QuotesCompareSection from './sections/quotes-compare-section/quotes-compare-section';
import TotalCostCompareSection from './sections/total-cost-compare-section/total-cost-compare-section';
import ConsumerCentricSection from './sections/consumer-centric-section/consumer-centric-section';
import PersonaSection from './sections/persona-section/persona-section';
import BenefitsSection from './sections/benefits-section/benefits-section';
import ReviewSection from './sections/review-section/review-section';
import ContactSection from './sections/contact-section/contact-section';

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
