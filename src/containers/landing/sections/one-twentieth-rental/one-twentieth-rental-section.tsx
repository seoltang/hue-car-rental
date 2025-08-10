'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useTransform } from 'motion/react';
import { useScroll } from 'motion/react';
import roadImg from '@/assets/images/landing/road-sm.png';
import TwoRowText from '../two-row-text';

const OneTwentiethRentalSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 70%', 'end 30%'],
  });

  const firstLineOpacity = useTransform(scrollYProgress, [0.1, 0.2], [0, 1]);
  const secondLineOpacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const descriptionOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);

  const firstLineY = useTransform(scrollYProgress, [0.1, 0.2], [16, 0]);
  const secondLineY = useTransform(scrollYProgress, [0.25, 0.5], [16, 0]);
  const descriptionY = useTransform(scrollYProgress, [0.35, 0.5], [16, 0]);

  return (
    <>
      <section
        ref={sectionRef}
        className="flex flex-col items-center justify-center gap-y-20 sticky top-header-height z-0"
      >
        <Image src={roadImg} alt="도로 위 차량" className="size-full" />
        <div className="absolute inset-0 z-[1] size-full bg-radial from-black/20 from 0% to-black/80 to 20%" />

        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center gap-y-10">
          <TwoRowText
            firstLine="지금 도로 위 차량"
            secondLine="20대 중 1대는 렌터카"
            firstLineStyle={{ opacity: firstLineOpacity, y: firstLineY }}
            secondLineStyle={{ opacity: secondLineOpacity, y: secondLineY }}
          />
          <motion.div
            style={{ opacity: descriptionOpacity, y: descriptionY }}
            className="flex flex-col justify-start items-center gap-y-1 text-white text-sm leading-[-2%]"
          >
            <p>이건 단순히 ‘빌려 타는 사람’이 늘어난 게 아닙니다.</p>
            <p>
              <strong className="font-semibold">
                ‘합리적으로 새 차를 타는 법’을 아는 사람들이 늘어난 결과
              </strong>
              입니다.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OneTwentiethRentalSection;
