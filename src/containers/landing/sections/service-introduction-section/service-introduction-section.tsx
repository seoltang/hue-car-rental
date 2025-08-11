'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'motion/react';
import SectionTitle from '../section-title';
import questionMarkImg from '@/assets/images/3d/question-mark.png';
import exclamationMarkImg from '@/assets/images/3d/exclamation-mark.png';
import TwoRowText from '../two-row-text';

const ServiceIntroductionSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 60%', 'end 30%'],
  });

  const zeroWon = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  const included = useTransform(scrollYProgress, [0.25, 0.35], [0, 1]);
  const returnOrAcquire = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

  const firstLineOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);
  const secondLineOpacity = useTransform(scrollYProgress, [0.55, 0.65], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="-mt-[100px] z-[1] flex flex-col items-stretch justify-center bg-white rounded-t-[100px] overflow-hidden"
    >
      <div className="flex flex-col items-stretch px-4 py-20">
        <SectionTitle title="서비스 소개" subTitle="신차 장기렌트란?" />
        <p className="mt-10 mb-3 text-sm text-gray-950 leading-[-2%] text-center">
          소유 대신 이용,
          <br />
          <strong className="font-semibold">비용은 줄이고 편의는 늘린</strong> 자동차 소비
          방식입니다.
        </p>

        <div className="flex gap-x-3.5 text-center leading-[-2%] break-keep">
          <div className="flex flex-col items-stretch">
            <Image src={questionMarkImg} alt="물음표" />
            <h4 className="px-3 py-2 bg-gray-400 rounded-t-lg shadow-[0px_2px_10px_0px_rgba(20,20,20,0.25)] flex items-center justify-center text-center text-white text-sm font-semibold">
              신차를 할부로 구매하면?
            </h4>
            <div className="h-[6.25rem] px-3 py-2 border-b border-gray-100 flex flex-col justify-center items-center gap-y-1 text-gray-700 font-semibold">
              차량가의 10% 이상 선납
            </div>
            <div className="h-[6.25rem] px-3 py-2 border-b border-gray-100 flex flex-col justify-center items-center gap-y-1 text-gray-700">
              <small className="text-10">보험료, 등록비, 자동차세, 정비</small>
              <p className="font-semibold">구매자가 직접 관리</p>
            </div>
            <div className="h-[6.25rem] px-3 py-2 border-b border-gray-100 flex flex-col justify-center items-center gap-y-1 text-gray-700">
              <small className="text-10">폐차? 중고차 판매? 시세 검색?</small>
              <p className="font-semibold">처리는 고객의 몫</p>
            </div>
          </div>

          <div className="flex flex-col items-stretch">
            <Image src={exclamationMarkImg} alt="느낌표" />
            <h4 className="px-3 py-2 bg-primary rounded-t-lg shadow-[0px_2px_10px_0px_rgba(20,20,20,0.25)] flex items-center justify-center text-center text-white text-sm font-semibold">
              신차를 장기렌트 한다면?
            </h4>
            <div className="h-[6.25rem] px-3 py-2 border-b border-gray-100 flex flex-col justify-center items-center text-gray-950 font-semibold">
              <span>
                <span className="relative inline-block">
                  &apos;0원&apos;
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-primary"
                    style={{ scaleX: zeroWon, transformOrigin: 'left' }}
                  />
                </span>
                <span>으로</span>
              </span>
              <span>시작 가능</span>
            </div>
            <div className="h-[6.25rem] px-3 py-2 border-b border-gray-100 flex flex-col justify-center items-center gap-y-1 text-gray-950">
              <small className="text-10">보험료, 등록비, 자동차세, 정비</small>
              <p className="font-semibold">
                <span className="relative inline-block">
                  렌트료에 포함
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-primary"
                    style={{ scaleX: included, transformOrigin: 'left' }}
                  />
                </span>
              </p>
            </div>
            <div className="h-[6.25rem] px-3 py-2 border-b border-gray-100 flex flex-col justify-center items-center gap-y-1 text-gray-950">
              <small className="text-10">계약 만료 후 간단히</small>
              <p className="font-semibold">
                <span className="relative inline-block">
                  반납 or 인수
                  <motion.span
                    className="absolute left-0 bottom-0 h-0.5 w-full bg-primary"
                    style={{ scaleX: returnOrAcquire, transformOrigin: 'left' }}
                  />
                </span>
                <span> 선택 가능</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-blue-30 px-4 py-[6.25rem]">
        <TwoRowText
          firstLine="운전만 하세요"
          secondLine="그 외는 저희가 처리합니다."
          firstLineClassName="text-gray-950"
          firstLineStyle={{
            opacity: firstLineOpacity,
          }}
          secondLineStyle={{
            opacity: secondLineOpacity,
          }}
        />
      </div>
    </section>
  );
};

export default ServiceIntroductionSection;
