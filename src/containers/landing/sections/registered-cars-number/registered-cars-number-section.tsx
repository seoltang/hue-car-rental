'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import chart1 from '@/assets/images/landing/chart-1.png';
import chart2 from '@/assets/images/landing/chart-2.png';
import SectionTitle from '../section-title';
import CarPercentage from './car-percentage';
import RentalPercentage from './rental-percentage';

const RegisteredCarsNumberSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 50%', 'end 30%'],
  });

  const carOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const carY = useTransform(scrollYProgress, [0, 0.2], [24, 0]);

  const rentalOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const rentalY = useTransform(scrollYProgress, [0.2, 0.4], [24, 0]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center gap-y-20 py-[7.5rem]"
    >
      <SectionTitle title="자동차 VS 렌터카" subTitle="누적 등록 대수" />

      <div className="flex flex-col items-center justify-center gap-y-6">
        <div className="relative">
          <motion.div
            className="absolute inset-0 z-[1] flex items-center justify-center"
            style={{ opacity: carOpacity, y: carY }}
          >
            <CarPercentage />
          </motion.div>
          <Image src={chart1} alt="자동차 누적 등록 대수 차트" width={343} height={178} />
        </div>

        <div className="relative">
          <motion.div
            className="absolute inset-0 z-[1] flex items-center justify-center"
            style={{ opacity: rentalOpacity, y: rentalY }}
          >
            <RentalPercentage />
          </motion.div>
          <Image src={chart2} alt="렌터카 누적 등록 대수 차트" width={343} height={178} />
        </div>
      </div>
    </section>
  );
};

export default RegisteredCarsNumberSection;
