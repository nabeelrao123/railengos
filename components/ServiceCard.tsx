
import Image from 'next/image';

interface ServiceCardProps {
  imageSrc: any;
  iconSrc: any;
  title: string;
  description?: string;
  showButton?: boolean;
}

const ServiceCard = ({ imageSrc, iconSrc, title, description, showButton = false }: ServiceCardProps) => {

return (
    <div className="border-[2px] bg-white rounded-lg p-4 shadow-[0px_4px_15px_0px_#0000001A]">
      <div className="relative bg-blue-300 h-[150px] w-full">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill
          className="object-cover rounded-lg"
        />
        <div className="absolute left-1/2 flex justify-center items-center bottom-[-13px] transform rounded-full -translate-x-1/2 bg-[#401674] h-[31%] w-[13%]">
          <Image 
            src={iconSrc} 
            alt="Service icon" 
            width={25} 
            height={25} 
            className="object-cover"
          />
        </div>
      </div>
      <div className="mt-5">
        <p className="font-poppins text-[#353535] leading-[32.8px] text-center tracking-normal text-lg font-semibold">
          {title}
        </p>
        {description && (
          <p className="font-poppins text-[#353535] text-center font-normal text-sm tracking-normal mt-2">
            {description}
          </p>
        )}
        {showButton && (
          <div className="pt-4">
            <button className="px-6 py-2 bg-[#FFC20A] text-black font-semibold rounded-lg hover:bg-[#e6ae09] transition">
              Learn More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;