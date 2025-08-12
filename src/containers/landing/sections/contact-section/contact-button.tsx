'use client';

import Image, { type StaticImageData } from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import arrowRightIcon from '@/assets/icons/arrow-right.svg';
import { cn } from '@/styles/utils';

type Props = {
  href: string;
  label: string;
  image: StaticImageData;
};

const ContactButton = ({ href, label, image }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <Link
        href={href}
        className={cn(
          'group relative block w-full aspect-[343/132] xl:w-[690px] xl:h-[264px] overflow-hidden rounded-md md:rounded-lg xl:rounded-xl border-1 xl:border-2 border-gray-800 active:border-primary',
        )}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={image}
          alt={label}
          fill
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#141414]/50 to-[#141414]/80" />
        <div className="absolute left-5 xl:left-10 bottom-5 xl:bottom-10 text-gray-50 text-base md:text-2xl xl:text-32 font-semibold flex items-center gap-x-2 xl:gap-x-4">
          <span>{label}</span>
          <span aria-hidden>
            <Image src={arrowRightIcon} alt="arrow-right" className="w-3 xl:w-6" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default ContactButton;
