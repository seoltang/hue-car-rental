'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.svg';
import { cn } from '@/styles/utils';

const Header = () => {
  const [visible, setVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > window.innerHeight * 0.5);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 w-full h-header-height px-12 py-3.5 xl:py-[1.125rem] inline-flex justify-center items-center bg-white transition-all duration-300 cursor-pointer',
        visible
          ? 'bg-white shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.08)]'
          : 'bg-transparent shadow-none',
      )}
      onClick={handleScrollToTop}
    >
      <Image src={logo} alt="logo" width={64} height={36} className="w-auto h-full" />
    </header>
  );
};

export default Header;
