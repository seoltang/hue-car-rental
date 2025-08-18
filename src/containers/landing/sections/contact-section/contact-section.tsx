'use client';

import { toast } from 'react-toastify';
import SectionTitle from '../section-title';
import ContactButton from './contact-button';
import callImg from '@/assets/images/landing/contact-call.png';
import kakaoImg from '@/assets/images/landing/contact-kakaotalk.png';
import { isMobile } from '@/utils';
import { PHONE_NUMBER, KAKAO_URL } from '@/constants';

const ContactSection = () => {
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

  const handleClickKakao = () => {
    if (typeof window === 'undefined') return;

    window.open(KAKAO_URL, '_blank');
  };

  return (
    <section className="relative z-[1] px-4 md:px-30 py-[120px] xl:p-60 flex flex-col items-center gap-[60px] xl:gap-[120px] bg-gray-900">
      <SectionTitle
        title="문의하기"
        subTitle={'1:1 상담으로 내 상황에 딱 맞는 견적 받기'}
        mobileSubTitle={'1:1 상담으로\n내 상황에 딱 맞는 견적 받기'}
        subTitleClassName="text-white"
      />

      <div className="w-full flex flex-col items-center justify-center xl:flex-row gap-[60px]">
        <ContactButton label="전화 상담" image={callImg} onClick={handleClickCall} />
        <ContactButton label="카카오톡 상담" image={kakaoImg} onClick={handleClickKakao} />
      </div>
    </section>
  );
};

export default ContactSection;
