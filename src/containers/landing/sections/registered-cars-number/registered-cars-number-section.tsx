import { motion } from 'motion/react';
import SectionTitle from '../section-title';
import CarPercentage from './car-percentage';
import RentalPercentage from './rental-percentage';
import CountingNumber from './counting-number';

const RegisteredCarsNumberSection = () => {
  return (
    <section className="relative z-[1] flex flex-col items-stretch justify-center bg-white">
      <div className="flex flex-col items-stretch px-4 py-20 md:px-30 xl:px-60 xl:py-40">
        <SectionTitle title="자동차 VS 렌터카" subTitle="최근 4년간 등록 증가율" />
        <p className="my-10 xl:my-20 text-sm xl:text-28 text-gray-950 text-center">
          최근 4년, 렌터카 시장은 자동차보다
          <br />
          <strong className="font-semibold">4배 빠르게 성장</strong>했습니다.
        </p>

        <div className="flex justify-center gap-x-3.5 xl:gap-x-15 text-center break-keep">
          <div className="flex flex-col items-stretch justify-end max-w-[552px]">
            <div className="relative flex flex-col items-center justify-center px-3 xl:px-10">
              <CarPercentage />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-y-2 text-center text-white font-semibold leading-none">
                <span className="relative w-[2.375rem] md:w-24 xl:w-32">
                  <CountingNumber target={8} className="text-30 md:text-6xl xl:text-8xl" />
                  <span className="absolute bottom-1 xl:bottom-2 -right-4 md:-right-5 xl:-right-8 text-10 md:text-lg xl:text-2xl">
                    %
                  </span>
                </span>
                <span className="text-10 md:text-lg xl:text-2xl">Increased</span>
              </div>
            </div>
            <h4 className="mt-10 xl:mt-20 px-3 xl:px-5 py-2 xl:py-6 bg-gray-400 rounded-t-lg xl:rounded-t-3xl shadow-[0px_2px_10px_0px_rgba(20,20,20,0.25)] xl:shadow-[0px_6px_30px_0px_rgba(20,20,20,0.25)] flex items-center justify-center text-center text-white text-sm xl:text-38 font-semibold">
              자동차 등록 증가율
            </h4>
            <div className="h-[6.25rem] xl:h-[17.5rem] px-3 py-2 border-b xl:border-b-3 border-gray-100 flex flex-col justify-center items-center gap-y-1 xl:text-32 text-gray-700 font-semibold">
              <small className="text-10 xl:text-28 font-normal">4년간 8%</small>
              저성장
            </div>
          </div>

          <div className="flex flex-col items-stretch justify-end max-w-[552px]">
            <div className="relative flex flex-col items-center justify-center px-3 xl:px-10">
              <RentalPercentage />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-y-2 text-center text-white font-semibold leading-none">
                <span className="relative w-[2.375rem] md:w-24 xl:w-32">
                  <CountingNumber target={34} className="text-30 md:text-6xl xl:text-8xl" />
                  <span className="absolute bottom-1 xl:bottom-2 -right-4 md:-right-5 xl:-right-8 text-10 md:text-lg xl:text-2xl">
                    %
                  </span>
                </span>
                <span className="text-10 md:text-lg xl:text-2xl">Increased</span>
              </div>
            </div>
            <h4 className="mt-10 xl:mt-20 px-3 xl:px-5 py-2 xl:py-6 bg-primary-linear rounded-t-lg xl:rounded-t-3xl shadow-[0px_2px_10px_0px_rgba(20,20,20,0.25)] xl:shadow-[0px_6px_30px_0px_rgba(20,20,20,0.25)] flex items-center justify-center text-center text-white text-sm xl:text-38 font-semibold">
              렌터카 등록 증가율
            </h4>
            <div className="h-[6.25rem] xl:h-[17.5rem] px-3 py-2 border-b xl:border-b-3 border-gray-100 flex flex-col justify-center items-center gap-y-1 xl:text-32 text-gray-950 font-semibold">
              <small className="text-10 xl:text-28 font-normal">4년간 34%</small>
              <span>
                <span>자동차 대비 </span>
                <span className="relative inline-block">
                  4배 고성장
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 xl:h-1.5 w-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisteredCarsNumberSection;
