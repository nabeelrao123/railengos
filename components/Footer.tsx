import React from 'react';
import Image from 'next/image';
import group7 from '../assets/Group 7.png'
import group10 from '../assets/Group 10.png'
import group9 from '../assets/Group 9.png'
import logo from '../assets/logo (2).png'
import vector from '../assets/Vector.png'
import vector3 from '../assets/Vector (3).png'
import vector4 from '../assets/Vector (4).png'

const Footer = () => {
  return (

    <>
      {/* <footer className="w-[100%] mt-10">
      <div className="bg-[#240354] h-[280px]">
        <div className="max-w-[90%] mx-auto pt-[20px]">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
            <div className="mt-5">
              <Image 
                src={logo} 
                alt="Logo"
                width={180}
                height={0}
                className="object-fit"
              />
              <div className="flex gap-5 mt-5">
                <Image 
                  src={group7} 
                  alt="Social Icon"
                  width={20}
                  height={20}
                  className="object-fit"
                />
                <Image 
                  src={group7} 
                  alt="Social Icon"
                  width={20}
                  height={20}
                  className="object-fit"
                />
                <Image 
                  src={group9} 
                  alt="Social Icon"
                  width={20}
                  height={20}
                  className="object-fit"
                />
                <Image 
                  src={group10} 
                  alt="Social Icon"
                  width={20}
                  height={20}
                  className="object-fit"
                />
              </div>
            </div>

            <div>
              <p className="text-md font-bold text-white">QUICK LINKS</p>
              <div className="mt-5">
                <ul className="list-disc pl-5">
                  <li className="mb-2 text-white">Home</li>
                  <li className="mb-2 text-white">About Us</li>
                  <li className="mb-2 text-white">Services</li>
                  <li className="mb-2 text-white">Contact US</li>
                </ul>
              </div>
            </div>

            <div>
              <p className="text-md font-bold text-white">GET IN TOUCH</p>
              <div className="mt-5">
                <div className="flex gap-4">
                  <div>
                    <Image 
                      src={vector3} 
                      alt="Phone Icon"
                      width={20}
                      height={20}
                      className="object-fit"
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">(612) 433-6580</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-5">
                  <div>
                    <Image 
                      src={vector} 
                      alt="Email Icon"
                      width={20}
                      height={20}
                      className="object-fit"
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">Info@rialingo.com</p>
                  </div>
                </div>
                <div className="flex gap-4 mt-5">
                  <div>
                    <Image 
                      src={vector4} 
                      alt="Location Icon"
                      width={20}
                      height={20}
                      className="object-fit"
                    />
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">
                      8900 Penn Ave S Suite#309,<br />Bloomington, MN 55431
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white">
        <div>
          <p className="text-sm font-medium text-center text-[#5E5E5E]">
            © Copyright 2024 IconicTek. All rights reserved
          </p>
        </div>
      </div>
    </footer> */}



      <footer className="w-full mt-10">
        <div className="bg-[#240354] py-10">
          <div className="max-w-[90%] mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-6 ">

              {/* <!-- Logo & Social Icons --> */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <Image
                  src={logo}
                  alt="Logo"
                  width={180}
                  height={0}
                  className="object-fit"
                />
                <div className="flex gap-4 justify-center md:justify-start">

                  <Image
                    src={group7}
                    alt="Social Icon"
                    width={20}
                    height={20}
                    className="object-fit"
                  />
                  <Image
                    src={group7}
                    alt="Social Icon"
                    width={20}
                    height={20}
                    className="object-fit"
                  />
                  <Image
                    src={group9}
                    alt="Social Icon"
                    width={20}
                    height={20}
                    className="object-fit"
                  />
                  <Image
                    src={group10}
                    alt="Social Icon"
                    width={20}
                    height={20}
                    className="object-fit"
                  />
                </div>
              </div>

              {/* <!-- Quick Links --> */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <p className="text-md font-bold text-white">QUICK LINKS</p>
                <ul className="space-y-2 list-disc pl-5 text-white text-sm">
                  <li>Homeg</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                </ul>
              </div>

              {/* <!-- Contact Info --> */}
              <div className="flex flex-col items-center md:items-start space-y-4">
                <p className="text-md font-bold text-white">GET IN TOUCH</p>
                <div className="space-y-4 text-white text-sm">
                  <div className="flex gap-3 items-start justify-center md:justify-start">
                    <Image
                      src={vector3}
                      alt="Phone Icon"
                      width={20}
                      height={20}
                      className="object-fit"
                    />
                    <p>(612) 433-6580</p>
                  </div>
                  <div className="flex gap-3 items-start justify-center md:justify-start">
                    <Image
                      src={vector}
                      alt="Email Icon"
                      width={20}
                      height={20}
                      className="object-fit"
                    />
                    <p>Info@rialingo.com</p>
                  </div>
                  <div className="flex gap-3 items-start justify-center md:justify-start">
                    <Image
                      src={vector4}
                      alt="Location Icon"
                      width={20}
                      height={20}
                      className="object-fit"
                    />
                    <p className="leading-snug">
                      8900 Penn Ave S Suite#309,<br />
                      Bloomington, MN 55431
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="bg-white py-4">
          <p className="text-sm font-medium text-center text-[#5E5E5E]">
            © Copyright 2024 IconicTek. All rights reserved.
          </p>
        </div>
      </footer>
    </>










  );
};

export default Footer;