'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import carImg from '@/assets/3d/car.png';
import moneyImg from '@/assets/3d/money.png';
import LandingTitle from './landing-title';

const LandingSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const carX = useTransform(scrollYProgress, [0, 0.5], ['0vw', '-100vw']);
  const carY = useTransform(scrollYProgress, [0, 0.5], ['0vh', '100px']);

  const moneyY = useTransform(scrollYProgress, [0, 0.4], ['0vh', '-36px']);
  const moneyOpacity = useTransform(scrollYProgress, [0.1, 0.35], [1, 0]);

  return (
    <section ref={sectionRef} className="pt-header-height relative bg-gray-900 h-[1600px]">
      <div className="sticky top-0 inset-x-0 w-full h-dvh">
        <div className="absolute inset-0 grid place-items-center z-20 pointer-events-none">
          <LandingTitle progress={scrollYProgress} />
        </div>

        <div className="absolute inset-0 grid place-items-center">
          <div className="relative">
            <motion.div style={{ x: carX, y: carY }} className="z-10">
              <Image src={carImg} alt="car" priority width={239} height={156} />
            </motion.div>

            <motion.div
              style={{ y: moneyY, opacity: moneyOpacity }}
              className="absolute -right-8 -bottom-2 z-0"
            >
              <Image src={moneyImg} alt="money" priority width={144} height={91} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
