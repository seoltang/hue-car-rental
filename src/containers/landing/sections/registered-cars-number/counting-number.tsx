'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';
import { cn } from '@/styles/utils';

type Props = {
  target: number;
  duration?: number;
  className?: string;
};

const CountingNumber = ({ target, duration = 1, className }: Props) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const steps = 60; // 60프레임
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, (duration * 1000) / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className={cn(className)}>
      {count}
    </span>
  );
};

export default CountingNumber;
