// import Image from "next/image";
// import Head from 'next/head';
// import ServiceCard from '@/components/ServiceCard';
// import SectionHeader from "@/components/SectionHeader";
// import Navbar from "@/components/Navbar";
// import rectangle50 from '../assets/Rectangle 50.png'
// import group1 from '../assets/Group (1).png'
// import rectangle52 from '../assets/Rectangle 52.png'
// import rectangle54 from '../assets/Rectangle 54.png'
// import rectangle60 from '../assets/Rectangle 60.png'
// import rectangle58 from '../assets/Rectangle 58.png'
// import rectangle56 from '../assets/Rectangle 56.png'
// import headerimage from '../assets/Rectangle 34624683.png'
import rectangle48 from '../../assets/Rectangle 48.png'
// import HeroSection from "@/components/HeroSection";
// import rectangle3 from '../assets/Rectangle 3.png'
// // "/assets/Rectangle 48.png"
// import Footer from "@/components/Footer";
import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import rectangle3 from '../../assets/Rectangle 3.png'
import image2 from '../../assets/image 2.png'
import youngbussiness from '../../assets/young-business-woman-student-teacher-tutor-wear-wireless-headset-video-conference-calling-laptop 1.png'
import Head from "next/head";

const HomePage: React.FC = () => {

    return (
        <>
            <Head>
                <title>Rainlingo</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <main>
                <HeroSection
                    title="Contact Us"
                    imageSrc={image2}
                />


                <div className="w-full mt-10">
                    <div className="max-w-[90%] mx-auto">
                        <p className="text-[#3F1662] font-bold text-[30px] leading-[50px] tracking-normal">
                            Contact Form
                        </p>

                        <div className=" block md:flex md:w-full md:gap-4">
                            <form
                                className="w-full md:w-[80%] border-2 border-[#EFEFEF] bg-[#EFEFEF] rounded-md p-4"
                            // onSubmit={(e) => e.preventDefault()}
                            >
                                <div className="block md:flex md:gap-4">
                                    {/* Left Side Inputs */}
                                    <div className="w-full md:w-[50%]">
                                        <div className="mb-5 w-full">
                                            <label
                                                htmlFor="firstName"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                First Name
                                            </label>
                                            <input
                                                id="firstName"
                                                type="text"
                                                required
                                                className="shadow-xs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                htmlFor="goal"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                I want to become
                                            </label>
                                            <input
                                                id="goal"
                                                type="text"
                                                required
                                                className="shadow-xs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>
                                    </div>

                                    {/* Right Side Inputs */}
                                    <div className="w-full md:w-[50%]">
                                        <div className="mb-5">
                                            <label
                                                htmlFor="experience1"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Interpreting Experience
                                            </label>
                                            <input
                                                id="experience1"
                                                type="text"
                                                required
                                                className="shadow-xs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>

                                        <div className="mb-5">
                                            <label
                                                htmlFor="experience2"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Interpreting Experience
                                            </label>
                                            <input
                                                id="experience2"
                                                type="text"
                                                required
                                                className="shadow-xs bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Note Section */}
                                <div className="mb-5">
                                    <label
                                        htmlFor="message"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Note
                                    </label>
                                    <textarea
                                        id="message"
                                        // rows="4"
                                        className="block p-2.5 w-full text-sm bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Submit Now
                                    </button>
                                </div>
                            </form>

                            {/* Contact Info Side Panel */}
                            <div className="w-full md:w-[20%] mt-6 md:mt-0">
                                <div className="flex-col gap-2">
                                    <p className="font-poppins text-[#401674] text-[20px] leading-[50px]">
                                        Get In Touch
                                    </p>
                                    <p className="font-poppins text-[14px] leading-[50px] text-[#4E4E4E]">
                                        You can contact us here
                                    </p>
                                    <p className="font-poppins text-[#4E4E4E] text-[14px] leading-[50px]">
                                        Phone: (612) 433-6580
                                        <br />
                                        Email: info@rialingo.com
                                        <br />
                                        Address Line:
                                        <br />
                                        8900 Penn Ave S Suite#309,
                                        <br />
                                        Bloomington, MN 55431
                                    </p>
                                    <p className="font-poppins text-[#401674] text-[24px] font-semibold leading-[50px]">
                                        24/7 Support
                                    </p>
                                    <p className="font-poppins text-[#4E4E4E] text-[14px] leading-[50px]">
                                        24/7 Ready Our Support Team For You.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

        </>
    );
};

export default HomePage;
