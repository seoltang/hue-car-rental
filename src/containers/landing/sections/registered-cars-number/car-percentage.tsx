import Image from 'next/image';
import { motion } from 'motion/react';
import backgroundImg from '@/assets/images/landing/registered-cars-number/background.png';
import scaleImg from '@/assets/images/landing/registered-cars-number/scale.png';
import carChartImg from '@/assets/images/landing/registered-cars-number/car-chart.png';

const CarPercentage = () => {
  return (
    <div className="relative w-full aspect-square">
      <Image src={backgroundImg} alt="" fill className="absolute inset-0" />
      <motion.img
        src={carChartImg.src}
        alt="자동차 등록 증가율"
        className="absolute inset-0"
        initial={{ rotate: -60, opacity: 0 }}
        whileInView={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.75, delay: 0.3 }}
      />
      <Image src={scaleImg} alt="" fill className="absolute inset-0" />
    </div>
  );
};

export default CarPercentage;
