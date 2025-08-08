const CarPercentage = () => {
  return (
    <div className="w-[19rem] h-12 px-4 py-1 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 absolute bg-white/70 rounded-lg shadow-[0px_2px_10px_0px_rgba(0,0,0,0.20)] outline outline-offset-[-1px] outline-gray-200 backdrop-blur-[3px] inline-flex justify-center items-center gap-1 text-gray-800">
      <span className="text-xl font-semibold">자동차</span>
      <span className="text-base font-medium">누적 등록 대수</span>
      <span className="text-xl font-bold">7.9%</span>
      <span className="text-base font-medium">증가</span>
    </div>
  );
};

export default CarPercentage;
