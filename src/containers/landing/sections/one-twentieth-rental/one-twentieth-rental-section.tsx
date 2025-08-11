import Image from 'next/image';
import { motion } from 'motion/react';
import roadSmallImg from '@/assets/images/landing/road-sm.png';
import roadLargeImg from '@/assets/images/landing/road-lg.png';
import TwoRowText from '../two-row-text';

const OneTwentiethRentalSection = () => {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-y-20 sticky top-0 z-0">
        <Image src={roadSmallImg} alt="도로 위 차량" className="size-full xl:hidden" />
        <Image src={roadLargeImg} alt="도로 위 차량" className="size-full hidden xl:block" />
        <div className="absolute inset-0 z-[1] size-full bg-radial from-black/20 from 0% to-black/80 to 20%" />

        <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center gap-y-10">
          <TwoRowText firstLine="지금 도로 위 차량" secondLine="20대 중 1대는 렌터카" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
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
