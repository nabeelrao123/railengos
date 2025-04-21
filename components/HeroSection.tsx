import Image from 'next/image';


interface HeroSectionProps {
    imageSrc: any;
    title?: string;
}

const HeroSection = ({ imageSrc, title }: HeroSectionProps) => {
    return (

        <div className="w-[100%]  mt-[30px] bg-gradient-to-l to-[#401674] via-[#A32CCA] from-[rgba(64,22,116,0)] ">
            <div className="grid grid-cols-1  md:grid-cols-2 gap-x-10 ">
                <div className="flex items-center ml-[65px] " >
                    <p className="font-poppins
                    text-[48px] leading-[50px] tracking-normal text-white">
                        {title}
                    </p>
                </div>
                <div>
                    <Image
                        src={imageSrc}
                        alt="About us"
                        width={600}
                        height={300}
                        className="w-full h-[300px] object-cover"
                    />
                </div>
            </div>
        </div>

    );
};

export default HeroSection;