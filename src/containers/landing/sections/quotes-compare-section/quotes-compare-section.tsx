import Image from 'next/image';
import { motion } from 'motion/react';
import quotationMobileImg from '@/assets/images/landing/quotation-sm.png';
import SectionTitle from '../section-title';

const QuotesCompareSection = () => {
  return (
    <section className="relative z-[1] flex flex-col items-center gap-y-10 pt-20 px-4 bg-white">
      <SectionTitle title="견적서 비교" subTitle="실제로 얼마나 아끼나요?" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image src={quotationMobileImg} alt="견적서 비교" />
      </motion.div>

      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: 80 }}
        transition={{ duration: 0.7 }}
        className="w-px h-20 bg-gray-500 mx-auto mt-10"
      />
    </section>
  );
};

export default QuotesCompareSection;
