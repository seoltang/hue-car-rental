import { motion } from 'framer-motion';

const ReviewGrid = () => {
  return (
    <div className="hidden xl:flex flex-col justify-start items-center gap-[60px]">
      <div className="inline-flex justify-start items-start gap-[60px]">
        <motion.div
          className="flex justify-start items-end"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="w-5 pb-10 inline-flex flex-col justify-start items-start gap-2.5 relative">
            <div className="absolute w-0 h-0 border-y-[10px] border-y-transparent border-r-[24px] border-r-gray-900/10 translate-x-[-1px] translate-y-[1px]" />
            <div className="relative w-0 h-0 border-y-[10px] border-y-transparent border-r-[24px] border-r-white z-10" />
          </div>
          <div className="p-10 bg-white rounded-xl shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-start gap-5">
            <div className="justify-start text-gray-800 text-xl font-medium">
              차량 구매 고민이 많았는데, 선납금 없이 시작할 수 있다는 얘기에 상담을 받게 됐어요.
              <br />
              보험료, 세금 다 포함인데도 월 렌트료가 생각보다 낮아서 바로 계약했어요.
              <br />
              상담도 친절하게 비교해주셔서 고민 없이 결정할 수 있었어요.
            </div>
            <div className="justify-start text-gray-800 text-base font-normal">
              김OO (34세, 서울 동작구)
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-start items-end"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="p-10 bg-white rounded-xl shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-start gap-5">
            <div className="justify-start text-gray-800 text-xl font-medium">
              처음에는 할부랑 뭐가 다르지? 싶었는데 비교 상담 받고 바로 이해됐어요.
              <br />
              중고차 팔 일도 없고, 계약 끝나면 반납만 하면 되니까 너무 간편해요.
              <br />월 납입금도 할부보다 확실히 부담 없고요.
            </div>
            <div className="justify-start text-gray-800 text-base font-normal">
              박OO (39세, 경기 성남시)
            </div>
          </div>
          <div className="w-5 pb-10 inline-flex flex-col justify-start items-start gap-2.5 relative">
            <div className="absolute w-0 h-0 border-y-[10px] border-y-transparent border-l-[24px] border-l-gray-900/10 translate-y-[1px]" />
            <div className="relative w-0 h-0 border-y-[10px] border-y-transparent border-l-[24px] border-l-white z-10" />
          </div>
        </motion.div>
      </div>

      <div className="inline-flex justify-start items-start gap-[60px]">
        <motion.div
          className="flex justify-start items-end"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="w-5 pb-10 inline-flex flex-col justify-start items-start gap-2.5 relative">
            <div className="absolute w-0 h-0 border-y-[10px] border-y-transparent border-r-[24px] border-r-gray-900/10 translate-y-[1px]" />
            <div className="relative w-0 h-0 border-y-[10px] border-y-transparent border-r-[24px] border-r-white z-10" />
          </div>
          <div className="p-10 bg-white rounded-xl shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-start gap-5">
            <div className="justify-start text-gray-800 text-xl font-medium">
              제가 신용점수랑 대출한도가 민감한 상황인데,
              <br />
              렌트는 제 명의로 나가지 않는다고 해서 선택했어요.
              <br />
              이런 점까지 설명해주시고 조건도 꼼꼼히 비교해줘서 신뢰가 갔습니다.
            </div>
            <div className="justify-start text-gray-800 text-base font-normal">
              최OO (36세, 대구 수성구)
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-start items-end"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <div className="p-10 bg-white rounded-xl shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-start gap-5">
            <div className="justify-start text-gray-800 text-xl font-medium">
              사업하면서 차량 여러 대 쓰는데, 부가세 환급이랑
              <br />
              연간 1,500만 원까지 비용처리 된다는 설명에 끌렸어요.
              <br />
              세금, 보험료, 정비 전부 포함된 게 이렇게 편할 줄 몰랐네요. 완전 추천합니다.
            </div>
            <div className="justify-start text-gray-800 text-base font-normal">
              정ㅇㅇ (46세, 광주 북구)
            </div>
          </div>
          <div className="w-5 pb-10 inline-flex flex-col justify-start items-start gap-2.5 relative">
            <div className="absolute w-0 h-0 border-y-[10px] border-y-transparent border-l-[24px] border-l-gray-900/10 translate-y-[1px]" />
            <div className="relative w-0 h-0 border-y-[10px] border-y-transparent border-l-[24px] border-l-white z-10" />
          </div>
        </motion.div>
      </div>

      <div className="inline-flex justify-start items-start gap-[60px]">
        <motion.div
          className="flex justify-start items-end"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          <div className="w-5 pb-10 inline-flex flex-col justify-start items-start gap-2.5 relative">
            <div className="absolute w-0 h-0 border-y-[10px] border-y-transparent border-r-[24px] border-r-gray-900/10 translate-y-[1px]" />
            <div className="relative w-0 h-0 border-y-[10px] border-y-transparent border-r-[24px] border-r-white z-10" />
          </div>
          <div className="p-10 bg-white rounded-xl shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-start gap-5">
            <div className="justify-start text-gray-800 text-xl font-medium">
              결정하기 전까지 계속 물어봤는데도 끝까지 친절하게 응대해주셔서 계약했어요.
              <br />
              보험료 따로 내는 것도 없고, 사고 나도 면책금만 내면 되니까 관리가 훨씬 수월해요.
            </div>
            <div className="justify-start text-gray-800 text-base font-normal">
              윤OO (31세, 인천 연수구)
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-start items-end"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="p-10 bg-white rounded-xl shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.10)] inline-flex flex-col justify-start items-start gap-5">
            <div className="justify-start text-gray-800 text-xl font-medium">
              신차를 사고 싶은 마음은 있었는데 초기 비용이 부담돼서 망설이고 있었거든요.
              <br />
              그런데 선납금 없이 0원으로 시작할 수 있다는 얘기에 상담 받아봤고,
              <br />
              진짜 조건이 좋아서 바로 계약했습니다.
            </div>
            <div className="justify-start text-gray-800 text-base font-normal">
              조OO (44세, 서울 마포구)
            </div>
          </div>
          <div className="w-5 pb-10 inline-flex flex-col justify-start items-start gap-2.5 relative">
            <div className="absolute w-0 h-0 border-y-[10px] border-y-transparent border-l-[24px] border-l-gray-900/10 translate-y-[1px]" />
            <div className="relative w-0 h-0 border-y-[10px] border-y-transparent border-l-[24px] border-l-white z-10" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ReviewGrid;
