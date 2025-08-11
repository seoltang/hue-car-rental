import Image from 'next/image';
import { motion } from 'motion/react';
import SectionTitle from '../section-title';
import totalCostMobileImg from '@/assets/images/landing/total-cost-sm.png';

const TotalCostCompareSection = () => {
  return (
    <section className="relative z-[1] flex flex-col items-center gap-y-10 py-20 px-4 bg-white">
      <SectionTitle
        title="인수 시 총 비용 비교"
        subTitle={`렌트는 손해? 계산기 두드려보면 다릅니다`}
        mobileSubTitle={`렌트는 손해?\n계산기 두드려보면 다릅니다`}
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={totalCostMobileImg} alt="총 비용 비교" />
      </motion.div>
    </section>
  );
};

export default TotalCostCompareSection;
