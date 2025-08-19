import { motion } from 'motion/react';
import Image from 'next/image';
import backgroundImg from '@/assets/images/landing/registered-cars-number/background.png';
import scaleImg from '@/assets/images/landing/registered-cars-number/scale.png';
import rentalChartImg from '@/assets/images/landing/registered-cars-number/rental-chart.png';

const RentalPercentage = () => {
  return (
    <div className="relative w-full aspect-square">
      <Image src={backgroundImg} alt="" fill className="absolute inset-0" />
      <motion.img
        src={rentalChartImg.src}
        alt="자동차 등록 증가율"
        className="absolute inset-0"
        initial={{ rotate: -120, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 1.25, delay: 0.3 }}
      />
      <Image src={scaleImg} alt="" fill className="absolute inset-0" />
    </div>
  );
};

export default RentalPercentage;
