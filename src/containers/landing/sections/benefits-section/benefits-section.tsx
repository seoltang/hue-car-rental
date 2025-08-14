import Image from 'next/image';
import benefitImg1 from '@/assets/images/landing/benefit-1.png';
import benefitImg2 from '@/assets/images/landing/benefit-2.png';
import benefitImg3 from '@/assets/images/landing/benefit-3.png';
import benefitImg4 from '@/assets/images/landing/benefit-4.png';
import SectionTitle from '../section-title';
import BenefitCard from './benefit-card';

const BENEFITS = [
  {
    title: '중간 수수료 없이\n더 합리적인 가격',
    description: '고객을 연결해주는 에이전시가 아닌\n렌터카 회사로 중간 수수료 없는 가격',
    img: (
      <Image
        src={benefitImg1}
        alt="중간 수수료 없이 더 합리적인 가격"
        className="absolute top-0 right-0 w-auto h-full"
      />
    ),
  },
  {
    title: '최다 조건 비교 후\n최적의 조건 제공',
    description: '딜러사별 프로모션 & 금융사별 금리\n비교 후 최적의 조건 제공',
    img: (
      <Image
        src={benefitImg2}
        alt="최다 조건 비교 후 최적의 조건 제공"
        className="absolute top-0 right-0 w-auto h-full"
      />
    ),
  },
  {
    title: '강요 없는\n1:1 고객 맞춤 상담',
    description: '원하는 조건만 말씀 주세요.\n선택은 고객에게 맡기겠습니다.',
    img: (
      <Image
        src={benefitImg3}
        alt="강요 없는 1:1 고객 맞춤 상담"
        className="absolute top-0 right-0 w-auto h-full"
      />
    ),
  },
  {
    title: '신뢰할 수 있는\n거래 환경 제공',
    description: '휴렌터카는 계약에 대한\n약속을 책임집니다.',
    img: (
      <Image
        src={benefitImg4}
        alt="신뢰할 수 있는 거래 환경 제공"
        className="absolute top-0 right-0 w-auto h-full"
      />
    ),
  },
];

const BenefitsSection = () => {
  return (
    <section className="relative z-[1] px-4 py-20 xl:py-40 bg-white flex flex-col justify-center items-center gap-[50px] xl:gap-[100px]">
      <SectionTitle title="휴렌터카 혜택" subTitle="왜 휴렌터카를 선택해야 할까요?" />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] xl:gap-[60px]">
        {BENEFITS.map((benefit, index) => (
          <BenefitCard key={index} index={index + 1} {...benefit} />
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
