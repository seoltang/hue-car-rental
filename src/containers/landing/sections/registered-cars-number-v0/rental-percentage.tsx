const RentalPercentage = () => {
  return (
    <div className="min-w-[19.25rem] xl:min-w-[38.5rem] h-12 xl:h-24 px-4 py-1 xl:py-2 bg-white/70 rounded-lg xl:rounded-2xl shadow-[0px_2px_10px_0px_rgba(0,0,0,0.20)] xl:shadow-[0px_4px_20px_0px_rgba(0,0,0,0.20)] outline-1 xl:outline-2 outline-offset-[-1px] xl:outline-offset-[-2px] outline-gray-200 backdrop-blur-[3px] xl:backdrop-blur-[6px] inline-flex justify-center items-center gap-1 xl:gap-2 text-gray-800">
      <span className="text-primary text-xl xl:text-40 font-semibold">렌터카</span>
      <span className="text-base xl:text-32 font-medium">누적 등록 대수</span>
      <span className="text-primary text-xl xl:text-40 font-bold">33.9%</span>
      <span className="text-base xl:text-32 font-medium">증가</span>
    </div>
  );
};

export default RentalPercentage;
