// import Image from 'next/image';
// import carImg from '@/assets/3d/car.png';
// import moneyImg from '@/assets/3d/money.png';
import LandingTitle from './landing-title';

const LandingSection = () => {
  return (
    <div className="pt-header-height bg-gray-900 min-h-dvh flex flex-col items-center justify-center">
      <LandingTitle />
      {/* <Image src={carImg} alt="car" />
      <Image src={moneyImg} alt="money" /> */}
    </div>
  );
};

export default LandingSection;
