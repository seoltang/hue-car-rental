'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import landingMoneyImg from '@/assets/images/landing/landing-money.png';

const LandingSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const firstSpanColor = useTransform(
    scrollYProgress,
    [0.2, 0.3, 0.4],
    ['#1e86ff', '#ffffff', '#ffffff'],
  );
  const secondSpanColor = useTransform(
    scrollYProgress,
    [0.0, 0.3, 0.6],
    ['#ffffff', '#1e86ff', '#ffffff'],
  );
  const thirdSpanColor = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.4],
    ['#ffffff', '#ffffff', '#1e86ff'],
  );

  return (
    <section
      ref={sectionRef}
      className="relative z-0 w-full pt-[calc(100dvh-52px*0.75)] md:pt-[calc(100vh-80px*0.75)] xl:pt-[calc(100vh-180px*0.75)] pb-[33vh] bg-gray-900"
    >
      <Image
        src={landingMoneyImg}
        priority
        alt="landing-money"
        width={655}
        height={655}
        className="fixed left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-[1] max-sm:size-48"
      />

      <h1 className="relative w-full text-white text-center text-[52px] md:text-[80px] xl:text-[180px] font-extrabold flex flex-col items-center">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.0 }}
          className="relative z-0"
        >
          <motion.span style={{ color: firstSpanColor }}>차값,</motion.span> 이제는
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="relative -z-[2]"
        >
          <motion.span style={{ color: secondSpanColor }}>지출</motion.span>이 아니라
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="relative z-0"
        >
          <motion.span style={{ color: thirdSpanColor }}>절약</motion.span>할 때입니다
        </motion.div>
      </h1>
    </section>
  );
};

export default LandingSection;
