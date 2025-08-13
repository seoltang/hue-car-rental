import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import TwoRowText from '../two-row-text';
import landingImg from '@/assets/images/landing/landing.png';

const LandingSectionDesktop = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 0.8', 'end 0.2'] });

  const headlineOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  const headlineY = useTransform(scrollYProgress, [0, 0.2], [30, 0]);

  const badgeScale = useTransform(scrollYProgress, [0.15, 0.35], [0.9, 1]);
  const badgeOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  const carY = useTransform(scrollYProgress, [0, 1], [300, -100]);
  const carScale = useTransform(scrollYProgress, [0, 1], [1.7, 1.2]);
  const vignetteOpacity = useTransform(scrollYProgress, [0, 0.3], [0.2, 0.6]);

  return (
    <section ref={sectionRef} className="relative max-xl:hidden h-screen overflow-hidden">
      <motion.div style={{ y: carY, scale: carScale }} className="absolute inset-0 -z-10">
        <Image src={landingImg} alt="도로" fill priority className="object-cover object-center" />
      </motion.div>

      <motion.div
        style={{ opacity: vignetteOpacity }}
        className="absolute inset-0 -z-10 bg-radial from-black/50 from-30% to-black/80 to-80%"
      />

      <div className="relative z-10 h-full grid place-items-center">
        <TwoRowText
          firstLine="차값, 이제는 ‘지출’이 아니라"
          secondLine="‘절약’으로 바꿔야 할 때입니다"
          firstLineStyle={{ opacity: headlineOpacity, y: headlineY }}
          secondLineStyle={{ opacity: badgeOpacity, scale: badgeScale }}
        />
      </div>
    </section>
  );
};

export default LandingSectionDesktop;
