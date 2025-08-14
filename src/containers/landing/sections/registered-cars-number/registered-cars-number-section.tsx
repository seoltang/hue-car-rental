import Image from 'next/image';
import { motion } from 'motion/react';
import chart1Mobile from '@/assets/images/landing/chart-1-sm.png';
import chart2Mobile from '@/assets/images/landing/chart-2-sm.png';
import chart1Desktop from '@/assets/images/landing/chart-1-lg.png';
import chart2Desktop from '@/assets/images/landing/chart-2-lg.png';
import SectionTitle from '../section-title';
import CarPercentage from './car-percentage';
import RentalPercentage from './rental-percentage';

const RegisteredCarsNumberSection = () => {
  return (
    <section className="relative z-[1] bg-white flex flex-col items-center justify-center gap-y-20 py-30 px-4 xl:px-16 xl:py-60">
      <SectionTitle title="자동차 VS 렌터카" subTitle="누적 등록 대수" />

      <div className="flex flex-col xl:flex-row items-center justify-center gap-y-6 xl:gap-x-[4.5rem]">
        <div className="relative">
          <motion.div
            className="absolute inset-0 z-[1] flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CarPercentage />
          </motion.div>
          <Image
            src={chart1Mobile}
            alt="자동차 누적 등록 대수 차트"
            width={343}
            height={178}
            className="xl:hidden"
          />
          <Image
            src={chart1Desktop}
            alt="자동차 누적 등록 대수 차트"
            width={686}
            height={356}
            className="hidden xl:block"
          />
        </div>

        <div className="relative">
          <motion.div
            className="absolute inset-0 z-[1] flex items-center justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <RentalPercentage />
          </motion.div>
          <Image
            src={chart2Mobile}
            alt="렌터카 누적 등록 대수 차트"
            width={343}
            height={178}
            className="xl:hidden"
          />
          <Image
            src={chart2Desktop}
            alt="렌터카 누적 등록 대수 차트"
            width={686}
            height={356}
            className="hidden xl:block"
          />
        </div>
      </div>
    </section>
  );
};

export default RegisteredCarsNumberSection;
