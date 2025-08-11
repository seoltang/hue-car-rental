'use client';

import { cn } from '@/styles/utils';
import { motion, type MotionStyle } from 'motion/react';

type Props = {
  firstLine: string;
  secondLine: string;
  firstLineStyle?: MotionStyle;
  secondLineStyle?: MotionStyle;
  firstLineClassName?: string;
  secondLineClassName?: string;
  wrapperClassName?: string;
};

const TwoRowText = ({
  firstLine,
  secondLine,
  firstLineStyle,
  secondLineStyle,
  firstLineClassName,
  secondLineClassName,
  wrapperClassName,
}: Props) => {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center gap-y-1 text-white text-center',
        wrapperClassName,
      )}
    >
      <motion.p
        style={firstLineStyle}
        initial={!firstLineStyle ? { opacity: 0, y: 30 } : undefined}
        whileInView={!firstLineStyle ? { opacity: 1, y: 0 } : undefined}
        transition={!firstLineStyle ? { duration: 0.5, delay: 0 } : undefined}
        className={cn('text-xl xl:text-40 font-medium', firstLineClassName)}
      >
        {firstLine}
      </motion.p>
      <motion.p
        style={secondLineStyle}
        initial={!secondLineStyle ? { opacity: 0, y: 30 } : undefined}
        whileInView={!secondLineStyle ? { opacity: 1, y: 0 } : undefined}
        transition={!secondLineStyle ? { duration: 0.5, delay: 0.25 } : undefined}
        className={cn(
          'text-2xl xl:text-5xl font-bold px-4 py-1 bg-primary-linear',
          secondLineClassName,
        )}
      >
        {secondLine}
      </motion.p>
    </div>
  );
};

export default TwoRowText;
