'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, type MotionStyle, useScroll, useTransform } from 'motion/react';
import landingCarImg from '@/assets/images/landing/landing-car.png';
import landingBackgroundLargeImg from '@/assets/images/landing/landing-bg-lg.png';
import landingBackgroundSmallImg from '@/assets/images/landing/landing-bg-sm.png';

const LandingSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const pStyle: MotionStyle = {
    y: useTransform(scrollYProgress, [0.05, 0.15], [0, -20]),
    opacity: useTransform(scrollYProgress, [0.05, 0.15], [1, 0]),
  };

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
      className="relative z-0 w-full pt-[calc(100dvh-52px*0.8)] md:pt-[calc(100vh-80px*0.8)] xl:pt-[calc(100vh-180px*0.8)] pb-[33vh] bg-black"
    >
      <Image
        src={landingBackgroundLargeImg}
        priority
        alt=""
        width={1920}
        height={1080}
        className="fixed top-0 inset-x-0 -z-[3] w-screen h-screen object-cover hidden sm:block"
      />
      <Image
        src={landingBackgroundSmallImg}
        priority
        alt=""
        width={768}
        height={1475}
        className="fixed top-0 inset-x-0 -z-[3] w-screen h-screen object-cover sm:hidden"
      />

      <div className="fixed top-0 inset-x-0 -z-[1] flex flex-col items-center justify-center gap-y-10 w-full h-screen">
        <motion.p
          style={pStyle}
          className="w-full text-white text-center text-[26px] md:text-[40px] xl:text-[52px] font-extrabold"
        >
          차값, 지출하고 계시나요?
        </motion.p>
        <Image
          src={landingCarImg}
          priority
          alt=""
          width={800}
          className="w-full md:w-[80%] xl:w-auto"
        />
      </div>

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
