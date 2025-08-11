import Image from 'next/image';
import { motion } from 'motion/react';
import chart1 from '@/assets/images/landing/chart-1.png';
import chart2 from '@/assets/images/landing/chart-2.png';
import SectionTitle from '../section-title';
import CarPercentage from './car-percentage';
import RentalPercentage from './rental-percentage';

const RegisteredCarsNumberSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-y-20 py-[7.5rem]">
      <SectionTitle title="자동차 VS 렌터카" subTitle="누적 등록 대수" />

      <div className="flex flex-col items-center justify-center gap-y-6">
        <div className="relative">
          <motion.div
            className="absolute inset-0 z-[1] flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <CarPercentage />
          </motion.div>
          <Image src={chart1} alt="자동차 누적 등록 대수 차트" width={343} height={178} />
        </div>

        <div className="relative">
          <motion.div
            className="absolute inset-0 z-[1] flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <RentalPercentage />
          </motion.div>
          <Image src={chart2} alt="렌터카 누적 등록 대수 차트" width={343} height={178} />
        </div>
      </div>
    </section>
  );
};

export default RegisteredCarsNumberSection;
