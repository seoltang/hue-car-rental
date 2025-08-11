import { useCallback, useState } from 'react';
import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaCarouselType } from 'embla-carousel';
import { cn } from '@/styles/utils';
import SectionTitle from '../section-title';
import ReviewCard from './review-card';
import ReviewGrid from './review-grid';
import TwoRowText from '../two-row-text';

const REVIEWS = [
  {
    review:
      '차량 구매 고민이 많았는데, 선납금 없이 시작할 수 있다는 얘기에 상담을 받게 됐어요.\n보험료, 세금 다 포함인데도 월 렌트료가 생각보다 낮아서 바로 계약했어요.\n상담도 친절하게 비교해주셔서 고민 없이 결정할 수 있었어요.',
    name: '김OO (34세, 서울 동작구)',
  },
  {
    review:
      '처음에는 할부랑 뭐가 다르지? 싶었는데 비교 상담 받고 바로 이해됐어요.\n중고차 팔 일도 없고, 계약 끝나면 반납만 하면 되니까 너무 간편해요.\n월 납입금도 할부보다 확실히 부담 없고요.',
    name: '박OO (39세, 경기 성남시)',
  },
  {
    review:
      '제가 신용점수랑 대출한도가 민감한 상황인데, 렌트는 제 명의로 나가지 않는다고 해서 선택했어요.\n이런 점까지 설명해주시고 조건도 꼼꼼히 비교해줘서 신뢰가 갔습니다.',
    name: '최OO (36세, 대구 수성구)',
  },
  {
    review:
      '사업하면서 차량 여러 대 쓰는데, 부가세 환급이랑 연간 1,500만 원까지 비용처리 된다는 설명에 끌렸어요.\n세금, 보험료, 정비 전부 포함된 게 이렇게 편할 줄 몰랐네요. 완전 추천합니다.',
    name: '정ㅇㅇ (46세, 광주 북구)',
  },
  {
    review:
      '결정하기 전까지 계속 물어봤는데도 끝까지 친절하게 응대해주셔서 계약했어요.\n보험료 따로 내는 것도 없고, 사고 나도 면책금만 내면 되니까 관리가 훨씬 수월해요.',
    name: '윤OO (31세, 인천 연수구)',
  },
  {
    review:
      '신차를 사고 싶은 마음은 있었는데 초기 비용이 부담돼서 망설이고 있었거든요.\n그런데 선납금 없이 0원으로 시작할 수 있다는 얘기에 상담 받아봤고, 진짜 조건이 좋아서 바로 계약했습니다.',
    name: '조OO (44세, 서울 마포구)',
  },
];

const ReviewSection = () => {
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
    <>
      <section className="relative z-[1] px-4 xl:px-48 py-20 xl:py-40 bg-blue-30 flex flex-col justify-center items-center gap-[60px] xl:gap-[120px]">
        <SectionTitle title="고객 리뷰" subTitle="실제 고객이 남긴 신뢰의 후기" />

        {/* 모바일: 캐러셀 */}
        <div className="relative w-full -mt-6 xl:hidden">
          <div className="overflow-hidden w-full" ref={emblaRef}>
            <div className="flex -ml-4 my-6 items-stretch">
              {REVIEWS.map((review, index) => (
                <div key={index} className="pl-4 flex-[0_0_100%] flex flex-col items-center">
                  <ReviewCard index={index} {...review} />
                </div>
              ))}
            </div>
          </div>

          {/* 인디케이터 */}
          <div className="flex items-center justify-center gap-1">
            {REVIEWS.map((_, i) => (
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

        {/* 데스크탑 */}
        <ReviewGrid />
      </section>

      <div className="relative z-[1] px-4 py-[100px] bg-white">
        <TwoRowText
          firstLine="현명한 소비, 합리적인 선택"
          secondLine="지금 바로 시작하세요."
          firstLineClassName="text-black"
        />
      </div>
    </>
  );
};

export default ReviewSection;
