'use client';

import { MotionValue, useTransform } from 'motion/react';
import TwoRowText from '../two-row-text';

type Props = {
  progress: MotionValue<number>;
};

const LandingTitle = ({ progress }: Props) => {
  const firstLineOpacity = useTransform(progress, [0.1, 0.3], [0, 1]);
  const secondLineOpacity = useTransform(progress, [0.25, 0.5], [0, 1]);

  return (
    <TwoRowText
      firstLine="차값, 이제는 ‘지출’이 아니라"
      secondLine="‘절약’으로 바꿔야 할 때입니다."
      firstLineStyle={{ opacity: firstLineOpacity }}
      secondLineStyle={{ opacity: secondLineOpacity }}
      wrapperClassName="z-[1]"
    />
  );
};

export default LandingTitle;
