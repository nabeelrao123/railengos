interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ title, subtitle }: SectionHeaderProps) => {
  return (
    <div className="mt-10">
      {subtitle && (

        <p className="font-poppins font-bold text-neutral-600 text-[15px] tracking-[0.14px] text-center ">
          {subtitle}
        </p>
      )}
      <p className="font-poppins font-semibold text-neutral-500  text-[30px] tracking-[0.14px] text-center ">
        {title}
      </p>
    </div>
  );
};

export default SectionHeader;