import TwoRowText from '../two-row-text';

const ConsumerCentricSection = () => {
  return (
    <section className="sticky top-0 z-0 flex flex-col items-center justify-center gap-y-10 py-20 px-4 h-[600px] xl:h-[1148px] pt-25 pb-50 xl:mb-[400px] bg-gray-900">
      <TwoRowText
        firstLine="소비자 중심의 차량 사용 방식,"
        secondLine="이제 선택이 아닌 기본입니다."
      />
    </section>
  );
};

export default ConsumerCentricSection;
