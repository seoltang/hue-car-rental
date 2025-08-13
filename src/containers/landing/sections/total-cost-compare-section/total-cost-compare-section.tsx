import Image from 'next/image';
import { motion } from 'motion/react';
import SectionTitle from '../section-title';
import totalCostMobileImg from '@/assets/images/landing/total-cost-sm.png';
import totalCostDesktopImg from '@/assets/images/landing/total-cost-lg.png';

const TotalCostCompareSection = () => {
  return (
    <section className="relative z-[1] flex flex-col items-center gap-y-10 xl:gap-y-25 py-20 md:py-30 xl:py-40 px-4 md:px-30 xl:px-60 bg-white">
      <SectionTitle
        title="인수 시 총 비용 비교"
        subTitle={`"렌트는 손해? 계산기 두드려보면 다릅니다."`}
        mobileSubTitle={`"렌트는 손해?\n계산기 두드려보면 다릅니다."`}
      />

      <p className="text-sm xl:text-28 text-gray-950 text-center">
        렌트사는 대량 계약을 통해 단가를 낮추기에,
        <br />
        <strong className="font-semibold">계약 종료 후에도 합리적인 가격으로 인수 가능</strong>
        합니다.
      </p>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="xl:max-w-6xl"
      >
        <Image src={totalCostMobileImg} alt="총 비용 비교" className="xl:hidden" />
        <Image src={totalCostDesktopImg} alt="총 비용 비교" className="hidden xl:block" />
      </motion.div>
    </section>
  );
};

export default TotalCostCompareSection;
