type Props = {
  title: string;
  subTitle: string;
};

const SectionTitle = ({ title, subTitle }: Props) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-2 typography">
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
    </div>
  );
};

export default SectionTitle;
