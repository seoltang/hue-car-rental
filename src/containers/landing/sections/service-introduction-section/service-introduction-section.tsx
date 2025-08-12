import Image from 'next/image';
import { motion } from 'motion/react';
import SectionTitle from '../section-title';
import questionMarkImg from '@/assets/images/3d/question-mark.png';
import exclamationMarkImg from '@/assets/images/3d/exclamation-mark.png';
import TwoRowText from '../two-row-text';

const ServiceIntroductionSection = () => {
  return (
    <section className="-mt-[100px] xl:-mt-[400px] z-[1] flex flex-col items-stretch justify-center bg-white rounded-t-[100px] xl:rounded-t-[400px] overflow-hidden">
      <div className="flex flex-col items-stretch px-4 py-20 md:px-30 xl:px-60 xl:py-40">
        <SectionTitle title="서비스 소개" subTitle="신차 장기렌트란?" />
        <p className="mt-10 xl:mt-20 mb-3 text-sm xl:text-28 text-gray-950 text-center">
          소유 대신 이용,
          <br />
          <strong className="font-semibold">비용은 줄이고 편의는 늘린</strong> 자동차 소비
          방식입니다.
        </p>

        <div className="flex justify-center gap-x-3.5 xl:gap-x-15 text-center break-keep">
          <div className="flex flex-col items-stretch max-w-[420px]">
            <Image src={questionMarkImg} alt="물음표" />
            <h4 className="px-3 xl:px-5 py-2 xl:py-6 bg-gray-400 rounded-t-lg xl:rounded-t-3xl shadow-[0px_2px_10px_0px_rgba(20,20,20,0.25)] xl:shadow-[0px_6px_30px_0px_rgba(20,20,20,0.25)] flex items-center justify-center text-center text-white text-sm xl:text-38 font-semibold">
              신차를 할부로 구매하면?
            </h4>
            <div className="h-[6.25rem] xl:h-[17.5rem] px-3 py-2 border-b xl:border-b-3 border-gray-100 flex flex-col justify-center items-center gap-y-1 xl:text-32 text-gray-700 font-semibold">
              차량가의 10% 이상
              <br />
              선납
            </div>
            <div className="h-[6.25rem] xl:h-[17.5rem] px-3 py-2 border-b xl:border-b-3 border-gray-100 flex flex-col justify-center items-center gap-y-1 xl:text-32 text-gray-700">
              <small className="text-10 xl:text-28">보험료, 등록비, 자동차세, 정비</small>
              <p className="font-semibold">구매자가 직접 관리</p>
            </div>
            <div className="h-[6.25rem] xl:h-[17.5rem] px-3 py-2 border-b xl:border-b-3 border-gray-100 flex flex-col justify-center items-center gap-y-1 xl:text-32 text-gray-700">
              <small className="text-10 xl:text-28">폐차? 중고차 판매? 시세 검색?</small>
              <p className="font-semibold">처리는 고객의 몫</p>
            </div>
          </div>

          <div className="flex flex-col items-stretch max-w-[420px]">
            <Image src={exclamationMarkImg} alt="느낌표" />
            <h4 className="px-3 xl:px-5 py-2 xl:py-6 bg-primary rounded-t-lg xl:rounded-t-3xl shadow-[0px_2px_10px_0px_rgba(20,20,20,0.25)] xl:shadow-[0px_6px_30px_0px_rgba(20,20,20,0.25)] flex items-center justify-center text-center text-white text-sm xl:text-38 font-semibold">
              신차를 장기렌트 한다면?
            </h4>
            <div className="h-[6.25rem] xl:h-[17.5rem] px-3 py-2 border-b xl:border-b-3 border-gray-100 flex flex-col justify-center items-center xl:text-32 text-gray-950 font-semibold">
              <span>
                <span className="relative inline-block">
                  &apos;0원&apos;
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 xl:h-1.5 w-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.15 }}
                  />
                </span>
                <span>으로</span>
              </span>
              <span>시작 가능</span>
            </div>
            <div className="h-[6.25rem] xl:h-[17.5rem] px-3 py-2 border-b xl:border-b-3 border-gray-100 flex flex-col justify-center items-center gap-y-1 xl:text-32 text-gray-950">
              <small className="text-10 xl:text-28">보험료, 등록비, 자동차세, 정비</small>
              <p className="font-semibold">
                <span className="relative inline-block">
                  렌트료에 포함
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 xl:h-1.5 w-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  />
                </span>
              </p>
            </div>
            <div className="h-[6.25rem] xl:h-[17.5rem] px-3 py-2 border-b xl:border-b-3 border-gray-100 flex flex-col justify-center items-center gap-y-1 xl:text-32 text-gray-950">
              <small className="text-10 xl:text-28">계약 만료 후 간단히</small>
              <p className="font-semibold">
                <span className="relative inline-block">
                  반납 or 인수
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 xl:h-1.5 w-full bg-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 0.5, delay: 0.45 }}
                  />
                </span>
                <span> 선택 가능</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-30 px-4 py-[6.25rem] xl:py-60">
        <TwoRowText
          firstLine="운전만 하세요"
          secondLine="그 외는 저희가 처리합니다."
          firstLineClassName="text-gray-950"
        />
      </div>
    </section>
  );
};

export default ServiceIntroductionSection;
