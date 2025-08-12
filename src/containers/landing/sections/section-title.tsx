import { cn } from '@/styles/utils';

type Props = {
  title: string;
  subTitle: string;
  mobileSubTitle?: string;
  wrapperClassName?: string;
  titleClassName?: string;
  subTitleClassName?: string;
};

const SectionTitle = ({
  title,
  subTitle,
  mobileSubTitle = subTitle,
  wrapperClassName,
  titleClassName,
  subTitleClassName,
}: Props) => {
  return (
    <div
      className={cn(
        'title flex flex-col items-center justify-center gap-y-2 md:gap-y-3 xl:gap-y-4 text-center leading-[-2%] whitespace-pre-line',
        wrapperClassName,
      )}
    >
      <h1 className={cn('text-blue-500', titleClassName)}>{title}</h1>
      <h2 className={cn('text-gray-950 hidden xl:block', subTitleClassName)}>{subTitle}</h2>
      <h2 className={cn('text-gray-950 block xl:hidden', subTitleClassName)}>{mobileSubTitle}</h2>
    </div>
  );
};

export default SectionTitle;
