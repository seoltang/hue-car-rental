'use client';

import SectionTitle from '../section-title';
import ContactButton from './contact-button';
import callImg from '@/assets/images/landing/contact-call.png';
import kakaoImg from '@/assets/images/landing/contact-kakaotalk.png';

const ContactSection = () => {
  return (
    <section className="relative z-[1] px-4 md:px-30 py-[120px] xl:p-60 flex flex-col items-center gap-[60px] xl:gap-[120px] bg-gray-900">
      <SectionTitle
        title="문의하기"
        subTitle={'1:1 상담으로 내 상황에 딱 맞는 견적 받기'}
        mobileSubTitle={'1:1 상담으로\n내 상황에 딱 맞는 견적 받기'}
        subTitleClassName="text-white"
      />

      <div className="w-full flex flex-col items-center justify-center xl:flex-row gap-[60px]">
        <ContactButton href="tel:01092742223" label="전화 상담" image={callImg} />
        <ContactButton
          href="https://pf.kakao.com/_vxhKxjn/chat"
          label="카카오톡 상담"
          image={kakaoImg}
        />
      </div>
    </section>
  );
};

export default ContactSection;
