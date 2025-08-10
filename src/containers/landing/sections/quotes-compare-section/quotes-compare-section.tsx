'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import quotationMobileImg from '@/assets/images/landing/quotation-sm.png';
import SectionTitle from '../section-title';

const QuotesCompareSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 60%'],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const y = useTransform(scrollYProgress, [0.1, 0.2], [16, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative z-[1] flex flex-col items-stretch gap-y-10 pt-20 px-4 bg-white"
    >
      <SectionTitle title="견적서 비교" subTitle="실제로 얼마나 아끼나요?" />
      <motion.div style={{ opacity, y }}>
        <Image src={quotationMobileImg} alt="견적서 비교" />
      </motion.div>
      <span className="w-px h-20 bg-gray-500 mx-auto mt-10" />
    </section>
  );
};

export default QuotesCompareSection;
