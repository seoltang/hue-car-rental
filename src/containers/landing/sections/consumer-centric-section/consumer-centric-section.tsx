'use client';

import { useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';
import TwoRowText from '../two-row-text';

const ConsumerCentricSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 30%'],
  });

  const firstLineOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const secondLineOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative z-[1] flex flex-col items-center justify-center gap-y-10 py-20 px-4 h-[600px] bg-gray-900"
    >
      <TwoRowText
        firstLine="소비자 중심의 차량 사용 방식,"
        secondLine="이제 선택이 아닌 기본입니다."
        firstLineStyle={{ opacity: firstLineOpacity }}
        secondLineStyle={{ opacity: secondLineOpacity }}
      />
    </section>
  );
};

export default ConsumerCentricSection;
