import { motion } from 'framer-motion';
import { cn } from '@/styles/utils';
import { type ReactNode } from 'react';

type Props = {
  index: number;
  title: string;
  description: string;
  img: ReactNode;
};

const BenefitCard = ({ index, title, description, img }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative w-[300px] xl:w-[600px] p-5 xl:p-10 bg-white rounded-[10px] xl:rounded-[20px] shadow-[0px_1.2px_6px_0px_rgba(0,0,0,0.10)] xl:shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.10)] border border-gray-100 flex items-end justify-between whitespace-pre-line"
    >
      <div
        className={cn(
          'absolute left-[10.50px] top-[-12.15px] xl:left-[21px] xl:top-[-24.3px] size-6 xl:size-12 bg-gray-800 rounded-full shadow-[0px_1.2px_6px_0px_rgba(0,0,0,0.10)] xl:shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.10)] flex justify-center items-center',
          'text-white text-xs xl:text-2xl font-semibold',
        )}
      >
        {index}
      </div>
      <div className="self-start flex flex-col justify-start items-start gap-2.5">
        <div className="justify-start text-gray-900 text-sm xl:text-28 font-semibold">{title}</div>
        <div className="justify-start text-gray-900 text-9 xl:text-lg">{description}</div>
      </div>
      {img}
    </motion.div>
  );
};

export default BenefitCard;
