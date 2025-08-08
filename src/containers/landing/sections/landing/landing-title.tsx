'use client';

import { MotionValue, motion, useTransform } from 'motion/react';

type Props = {
  progress: MotionValue<number>;
};

const LandingTitle = ({ progress }: Props) => {
  const firstLineOpacity = useTransform(progress, [0.1, 0.3], [0, 1]);
  const secondLineOpacity = useTransform(progress, [0.25, 0.5], [0, 1]);

  return (
    <div className="flex flex-col items-center justify-center gap-y-4 text-white text-2xl lg:text-5xl text-center z-[1]">
      <motion.p style={{ opacity: firstLineOpacity }} className="font-medium">
        차값, 이제는 ‘지출’이 아니라
      </motion.p>
      <motion.p
        style={{ opacity: secondLineOpacity }}
        className="font-bold px-4 py-1 bg-primary-linear"
      >
        ‘절약’으로 바꿔야 할 때입니다
      </motion.p>
    </div>
  );
};

export default LandingTitle;
