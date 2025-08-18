'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'motion/react';

const CountingNumber = ({ target, className }: { target: number; className: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const duration = 1000; // 1초
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
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref} className={className}>
      {count}
    </span>
  );
};

export default CountingNumber;
