import { cn } from '@/styles/utils';

type Props = {
  index: number;
  review: string;
  name: string;
};

const ReviewCard = ({ index, review, name }: Props) => {
  const isOdd = index % 2 !== 0;

  return (
    <div className={cn('w-[343px] flex justify-start items-end', isOdd && 'flex-row-reverse')}>
      <div className="w-5 pb-10 inline-flex flex-col justify-start items-start gap-2.5 relative">
        {/* shadow triangle */}
        <div
          className={cn(
            'absolute w-0 h-0 border-y-[7px] border-y-transparent translate-y-[1px]',
            isOdd
              ? 'translate-x-[1px] border-l-[20px] border-l-gray-900/10'
              : 'translate-x-[-1px] border-r-[20px] border-r-gray-900/10',
          )}
        />
        {/* white triangle */}
        <div
          className={cn(
            'relative w-0 h-0 border-y-[7px] border-y-transparent z-10',
            isOdd ? 'border-l-[20px] border-l-white' : 'border-r-[20px] border-r-white',
          )}
        />
      </div>
      <div className="w-[323px] h-[200px] p-5 bg-white rounded-md shadow-[0px_2.4px_12px_0px_rgba(0,0,0,0.10)] inline-flex flex-col justify-between items-start whitespace-pre-line">
        <div className="self-stretch justify-start text-gray-800 text-sm font-normal">{review}</div>
        <div className="justify-start text-gray-800 text-xs font-normal">{name}</div>
      </div>
    </div>
  );
};

export default ReviewCard;
