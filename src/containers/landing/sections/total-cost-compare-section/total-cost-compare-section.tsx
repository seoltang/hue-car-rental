'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import SectionTitle from '../section-title';
import Image from 'next/image';
import totalCostMobileImg from '@/assets/images/landing/total-cost-sm.png';

const TotalCostCompareSection = () => {
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
      className="relative z-[1] flex flex-col items-stretch gap-y-10 py-20 px-4 bg-white"
    >
      <SectionTitle
        title="인수 시 총 비용 비교"
        subTitle={`렌트는 손해?\n계산기 두드려보면 다릅니다`}
      />
      <motion.div style={{ opacity, y }}>
        <Image src={totalCostMobileImg} alt="총 비용 비교" />
      </motion.div>
    </section>
  );
};

export default TotalCostCompareSection;
