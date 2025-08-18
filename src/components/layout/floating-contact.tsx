'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { cn } from '@/styles/utils';
import { PHONE_NUMBER, KAKAO_URL } from '@/constants';
import { isMobile } from '@/utils';

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2362_2472)">
      <path
        d="M17.5 13.6833V16.63C17.5001 16.841 17.4202 17.0441 17.2763 17.1985C17.1325 17.3528 16.9355 17.4469 16.725 17.4617C16.3608 17.4867 16.0633 17.5 15.8333 17.5C8.46917 17.5 2.5 11.5308 2.5 4.16667C2.5 3.93667 2.5125 3.63917 2.53833 3.275C2.5531 3.06454 2.64715 2.86751 2.8015 2.72367C2.95585 2.57984 3.15902 2.4999 3.37 2.5H6.31667C6.42003 2.4999 6.51975 2.53822 6.59644 2.60752C6.67313 2.67682 6.72133 2.77215 6.73167 2.875C6.75083 3.06667 6.76833 3.21917 6.785 3.335C6.95061 4.49077 7.29 5.61486 7.79167 6.66917C7.87083 6.83583 7.81917 7.035 7.66917 7.14167L5.87083 8.42667C6.97038 10.9887 9.01212 13.0305 11.5742 14.13L12.8575 12.335C12.91 12.2617 12.9865 12.2091 13.0737 12.1864C13.161 12.1637 13.2535 12.1723 13.335 12.2108C14.3892 12.7116 15.513 13.0501 16.6683 13.215C16.7842 13.2317 16.9367 13.25 17.1267 13.2683C17.2294 13.2789 17.3245 13.3271 17.3936 13.4038C17.4628 13.4805 17.501 13.5801 17.5008 13.6833H17.5Z"
        fill="#0B0E13"
      />
    </g>
    <defs>
      <clipPath id="clip0_2362_2472">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const KakaoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2362_2473)">
      <path d="M7.88209 7.70735L8.45663 9.35454H7.30755L7.88209 7.70735Z" fill="#0B0E13" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8.6368C0 4.25439 4.47615 0.703125 9.99624 0.703125C15.5163 0.703125 20 4.25817 20 8.64058C20 13.023 15.5238 16.5743 10.0038 16.5743C9.39917 16.5743 8.8021 16.5327 8.22756 16.4496C8.18328 16.4806 8.1231 16.5229 8.04957 16.5746C7.15667 17.2024 4.29444 19.2147 4.003 19.2566C4.003 19.2566 3.87157 19.3057 3.76267 19.2415C3.65377 19.1773 3.67255 19.0073 3.67255 19.0073L4.68644 15.3615C1.87007 13.9524 0 11.4703 0 8.6368ZM4.46675 11.4022C4.46739 11.4022 4.46802 11.4022 4.46865 11.4022H4.4649C4.46552 11.4022 4.46613 11.4022 4.46675 11.4022ZM3.89036 10.8468C3.89036 11.1522 4.14844 11.4012 4.46675 11.4022C4.78136 11.4012 5.04319 11.1485 5.04319 10.8468V7.39756H5.94443C6.25235 7.39756 6.5077 7.14444 6.5077 6.83087C6.5077 6.5173 6.25611 6.26418 5.94443 6.26418H2.98912C2.68119 6.26418 2.42584 6.5173 2.42584 6.83087C2.42584 7.14444 2.67744 7.39756 2.98912 7.39756H3.89036V10.8468ZM9.04619 11.1377C9.10252 11.2964 9.28652 11.3946 9.52686 11.3946C9.65453 11.3946 9.78221 11.372 9.89486 11.3191C10.0526 11.2511 10.2065 11.0433 10.03 10.4955L8.6519 6.8422C8.55802 6.56264 8.25761 6.2604 7.88209 6.26796C7.50658 6.27551 7.20992 6.56264 7.11229 6.8422L5.73414 10.4955C5.55765 11.0433 5.71161 11.2435 5.86933 11.3191C5.98574 11.3682 6.10966 11.3946 6.23733 11.3946C6.47766 11.3946 6.66167 11.2964 6.71799 11.1377L7.00339 10.3821H8.7608L9.04619 11.1377ZM10.4056 10.7902C10.4056 11.0811 10.6572 11.3191 10.9576 11.3191L12.8089 11.3077C13.113 11.3077 13.3609 11.0697 13.3609 10.7788C13.3609 10.4879 13.1093 10.2499 12.8089 10.2499H11.5847V6.8422C11.5847 6.52486 11.3218 6.2604 10.9951 6.2604C10.6684 6.2604 10.4056 6.52108 10.4056 6.8422V10.7902ZM13.5824 6.84598V10.8128C13.5824 11.5844 14.739 11.5553 14.739 10.8015V9.53588L14.938 9.33565L16.2899 11.1377C16.4714 11.377 16.8438 11.44 17.0973 11.2511C17.3544 11.0708 17.4007 10.6882 17.2099 10.4426L15.7905 8.55361L17.1123 7.23133C17.3118 7.02706 17.2621 6.70203 17.071 6.50975C16.8675 6.30504 16.5315 6.28937 16.3537 6.46819L14.739 8.0927V6.84598C14.739 6.52864 14.4762 6.26418 14.1607 6.26418C13.8453 6.26418 13.5824 6.52486 13.5824 6.84598Z"
        fill="#0B0E13"
      />
    </g>
    <defs>
      <clipPath id="clip0_2362_2473">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const ArrowUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_2362_2474)">
      <path
        d="M10.8336 6.52331V16.6666H9.16689V6.52331L4.69689 10.9933L3.51855 9.81498L10.0002 3.33331L16.4819 9.81498L15.3036 10.9933L10.8336 6.52331Z"
        fill="#0B0E13"
      />
    </g>
    <defs>
      <clipPath id="clip0_2362_2474">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const FloatingContact = () => {
  const [showTop, setShowTop] = useState(false);

  const handleClickCall = () => {
    if (typeof window === 'undefined') return;

    if (isMobile()) {
      window.open(`tel:${PHONE_NUMBER}`, '_blank');
      return;
    }

    navigator.clipboard
      .writeText(PHONE_NUMBER)
      .then(() => {
        toast('전화번호가 복사되었습니다.', { type: 'success' });
      })
      .catch(() => {
        alert(PHONE_NUMBER);
      });
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setShowTop(window.scrollY > 500);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className="fixed right-4 bottom-6 z-50 flex flex-col items-center justify-between rounded-full bg-white/80 ring-1 ring-black/10 shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.10)] backdrop-blur-[2px] p-2.5"
      aria-label="빠른 상담 및 상단으로 이동"
    >
      <button type="button" onClick={handleClickCall} aria-label="전화 상담">
        <PhoneIcon className="size-5 mb-5" />
      </button>

      <Link href={KAKAO_URL} aria-label="카카오톡 상담" target="_blank">
        <KakaoIcon
          className={cn('size-5 transition-all duration-300', showTop ? 'mb-5' : 'mb-0')}
        />
      </Link>

      <button
        type="button"
        onClick={handleScrollTop}
        aria-label="상단으로 이동"
        className={cn(
          'transition-all duration-300',
          showTop
            ? 'opacity-100 h-5 translate-y-0 pointer-events-auto'
            : 'opacity-0 h-0 translate-y-2 pointer-events-none',
        )}
      >
        <ArrowUpIcon className="size-5" />
      </button>
    </div>
  );
};

export default FloatingContact;
