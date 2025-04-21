import Image from 'next/image';

interface CoreValuesCardProps {
  index:any
  imageSrc: any;
  title: string;
  description?: string;
className?:string
}

const CoreValuesCard = ({ index,className, imageSrc, title, description }: CoreValuesCardProps) => {
  return (
    <>
        <div  className={`w-full ${index === 1 ? 'md:w-[40%]' : 'md:w-[30%]'} bg-[#333333] rounded-xl h-[220px] p-4`}>
          <div className="flex justify-center items-center">
            <div className=" w-12 h-12 bg-[#FFFFFF] rounded-full"></div>
          </div>
          <p className="font-poppins 
                text-[18px] text-center leading-[50px] tracking-normal text-white">
            {title}
          </p>
          <p className="font-inter font-normal text-[14px] text-white leading-[208%] tracking-normal text-center">
            {description}
          </p>
        </div>


    </>
  );
};

export default CoreValuesCard;