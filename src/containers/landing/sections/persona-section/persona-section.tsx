'use client';

import { type ReactNode, useCallback, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'motion/react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import { cn } from '@/styles/utils';
import persona1 from '@/assets/images/landing/persona-1.png';
import persona2 from '@/assets/images/landing/persona-2.png';
import persona3 from '@/assets/images/landing/persona-3.png';
import lineMobile from '@/assets/images/landing/line-sm.png';
import lineDesktop from '@/assets/images/landing/line-lg.png';
import SectionTitle from '../section-title';
import PersonaCard from './persona-card';

type Persona = {
  img: StaticImageData;
  typeLabel: string;
  nameLine1: string;
  nameLine2?: string;
  solutionTitle: string;
  description: ReactNode;
};

const SLIDES: Persona[] = [
  {
    img: persona1,
    typeLabel: 'A',
    nameLine1: '비용 부담을 줄이고 싶은',
    nameLine2: '박재현님',
    solutionTitle: '지금 현금은 지키고,\n부담 없이 새 차 타세요!',
    description: (
      <>
        <p>
          {`선납금 0원부터 가능\n
        보험·세금·정비까지 포함인데,
        신차 할부 구매보다 저렴한 월 납입금\n
        렌트사 명의로 출고,
        고객 신용등급·대출한도 영향 없음\n
        건강보험료 할증 없음`}
        </p>
        <small>(건강보험 지역 가입자 한정)</small>
      </>
    ),
  },
  {
    img: persona2,
    typeLabel: 'B',
    nameLine1: '일이 바쁜 사업자',
    nameLine2: '김정수님',
    solutionTitle: '관리는 ZERO\n비용 혜택은 MAX',
    description: (
      <>
        <p>
          {`보험·세금·정비 전부 렌트사가 관리\n
        사고 시 보험료 할증 없이
        면책금 납부로 간단한 처리\n
        연간 1,500만원까지 비용처리 가능`}
        </p>
        <small>(경차, 화물차, 승합차는 한도 없이 비용처리 가능)</small>
        <p>{`\n렌트료 부가세 환급까지 가능`}</p>
        <small>(경차, 화물차, 승합차 해당)</small>
      </>
    ),
  },
  {
    img: persona3,
    typeLabel: 'C',
    nameLine1: '새 차를 경험하고 싶은',
    nameLine2: '김미숙님',
    solutionTitle: '새 차로 교체·인수를\n내 마음대로',
    description: (
      <p>
        {`중고차 처분 걱정 NO\n
        1년 단위로 새 차 교체 가능\n
        계약 만료 후 인수 가능`}
      </p>
    ),
  },
];

const PersonaSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback((api: EmblaCarouselType | undefined) => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', () => onSelect(emblaApi));
    onSelect(emblaApi);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <section className="relative z-[1] flex flex-col items-center -mt-[100px] xl:-mt-[400px] px-4 xl:px-60 py-20 xl:py-40 bg-gray-50 rounded-t-[100px] xl:rounded-t-[400px]">
      <SectionTitle
        title="차량 구매 전에 꼭 확인하세요"
        subTitle={`신차 장기렌트, 이런 분들께 유리합니다`}
        mobileSubTitle={`신차 장기렌트,\n이런 분들께 유리합니다`}
      />

      {/* 모바일: 캐러셀 */}
      <div className="relative mt-[50px] xl:mt-25 w-full xl:hidden">
        <Image
          src={lineMobile}
          alt="line"
          className="absolute -z-[2] left-1/2 -translate-x-1/2 w-72 top-14 xl:hidden"
        />
        <div className="overflow-hidden w-full" ref={emblaRef}>
          <div className="flex -ml-4 items-stretch">
            {SLIDES.map((persona, idx) => (
              <div key={idx} className="pl-4 flex-[0_0_100%] flex flex-col items-center">
                <PersonaCard {...persona} />
              </div>
            ))}
          </div>
        </div>

        {/* 인디케이터 */}
        <div className="mt-2 flex items-center justify-center gap-1">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              aria-label={`슬라이드 ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={cn(
                'h-2 rounded-full transition-all',
                selectedIndex === i ? 'w-4 h-1.5 bg-gray-950' : 'size-1.5 bg-gray-200',
              )}
            />
          ))}
        </div>
      </div>

      {/* 데스크탑: flex row 배치 */}
      <div className="relative hidden xl:flex w-full justify-center gap-[60px] mt-20">
        <Image
          src={lineDesktop}
          alt="line"
          className="absolute -z-[2] left-1/2 -translate-x-1/2 w-full max-w-5xl -top-6 hidden xl:block"
        />
        {SLIDES.map((persona, idx) => (
          <motion.div
            key={idx}
            className="flex-shrink-0 basis-[385px] flex items-stretch"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <PersonaCard {...persona} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PersonaSection;
