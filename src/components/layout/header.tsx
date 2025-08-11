'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import logo from '@/assets/logo.svg';

const Header = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setVisible(window.scrollY > 120);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        'fixed top-0 inset-x-0 z-50 w-full h-header-height px-12 py-3.5 inline-flex flex-col justify-center items-center bg-white shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.08)] transition-all duration-300 ' +
        (visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full')
      }
    >
      <Image src={logo} alt="logo" width={49} height={28} />
    </header>
  );
};

export default Header;
