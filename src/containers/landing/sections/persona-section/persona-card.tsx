import { type ReactNode } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { motion } from 'motion/react';
import { cn } from '@/styles/utils';

type Props = {
  img: StaticImageData;
  typeLabel: string;
  nameLine1: string;
  nameLine2?: string;
  solutionTitle: string;
  description: ReactNode;
};

const PersonaCard = ({
  img,
  typeLabel,
  nameLine1,
  nameLine2,
  solutionTitle,
  description,
}: Props) => {
  return (
    <div className="flex-grow mt-32 xl:mt-64 w-full max-w-60 xl:max-w-none flex flex-col items-center">
      <article
        className={cn(
          'flex-grow relative mb-6 mx-auto flex flex-col gap-y-2.5 rounded-[10px] bg-white shadow-[0px_1.2px_6px_0px_rgba(0,0,0,0.10)] p-5 whitespace-pre-line tracking-[-2%]',
          'w-full xl:p-10 xl:rounded-[20px] xl:shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.10)] xl:gap-y-5',
        )}
      >
        <Image
          src={img}
          alt={typeLabel}
          className="absolute -z-[1] left-1/2 -translate-x-1/2 -top-32 size-40 xl:-top-64 xl:size-80 object-cover rounded-full"
        />
        <div
          className={cn(
            'absolute left-3 -top-5 inline-flex justify-center items-center gap-x-[5px] xl:gap-x-2.5 rounded-full bg-gray-800 text-xs font-bold text-white',
            'xl:left-5 xl:-top-10 px-3 py-[3px] xl:px-6 xl:py-1.5 shadow-[0px_1.2px_6px_0px_rgba(0,0,0,0.10)] xl:shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.10)]',
          )}
        >
          <span className="text-xs xl:text-2xl font-medium">TYPE</span>
          <span className="text-base xl:text-32 font-semibold">{typeLabel}</span>
        </div>

        <motion.div
          className="flex-grow flex flex-col gap-y-2.5"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <p className="text-xs xl:text-lg font-bold text-primary">NEEDS</p>
          <h3 className="text-base xl:text-28 text-gray-950">
            <span className="font-semibold">{nameLine1}</span>
            <br />
            {nameLine2}
          </h3>

          <p className="text-xs xl:text-lg font-bold text-secondary">SOLUTION</p>
          <p className="text-base xl:text-28 font-semibold text-gray-950">{solutionTitle}</p>

          <div className="flex flex-col gap-y-0.5 description">{description}</div>
        </motion.div>
      </article>
    </div>
  );
};

export default PersonaCard;
