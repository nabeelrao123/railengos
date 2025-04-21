'use client'; // Required if using interactivity (like mobile menu toggle)

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import vector from '../assets/Vector (3).png'
import vectoremail from '../assets/Vector.png'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-[100%]">
      {/* Top Contact Bar */}
      <div className="bg-[#333333]">
        <div className="max-w-[95%] mx-auto flex justify-between items-center h-10">
          <div className="flex gap-2 items-center">
            <Image 
              src={vector} 
              alt="Phone icon"
              width={10}
              height={10}
              className="object-fit w-[10px]"
            />
            <p className="text-white text-sm font-medium">(612) 433-6580</p>
          </div>

          <div className="flex gap-2 items-center">
            <Image 
              src={vectoremail} 
              alt="Email icon"
              width={10}
              height={10}
              className="object-fit w-[10px]"
            />
            <p className="text-white text-sm font-medium">Info@rialingo.com</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-[95%] mx-auto">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image 
                src={logo} 
                alt="Ria Lingo logo"
                width={100}
                height={40}
                className="object-fit w-[100px]"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link 
              href="/" 
              className="hover:text-[#FFC20A] text-[#000000] px-3 py-2 text-sm font-medium"
            >
              Home
            </Link>
            <Link 
              href="/aboutus" 
              className="hover:text-[#FFC20A] text-[#000000] px-3 py-2 text-sm font-medium"
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="hover:text-[#FFC20A] text-[#000000] px-3 py-2 text-sm font-medium"
            >
              Our Services
            </Link>
            <Link 
              href="/interpreter" 
              className="hover:text-[#FFC20A] text-[#000000] px-3 py-2 text-sm font-medium"
            >
              Interpreter
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-[#FFC20A] text-[#000000] px-3 py-2 text-sm font-medium"
            >
              Contact Us
            </Link>
            <button className="px-4 py-2 bg-[#3F1662] text-[#FFFFFF] rounded-[6px] font-semibold transition">
              Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              id="mobile-menu-button" 
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Hidden by default) */}
      <div 
        id="mobile-menu"
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-gradient-to-b from-[#586D86] to-[#292F36] rounded-[18px] w-[95%] mx-auto`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
          <Link 
            href="/" 
            className="hover:text-[#FFC20A] text-white px-3 py-2 text-sm font-medium"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="hover:text-[#FFC20A] text-white px-3 py-2 text-sm font-medium"
            onClick={toggleMobileMenu}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className="hover:text-[#FFC20A] text-white px-3 py-2 text-sm font-medium"
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link 
            href="/contact" 
            className="hover:text-[#FFC20A] text-white px-3 py-2 text-sm font-medium"
            onClick={toggleMobileMenu}
          >
            Contact
          </Link>
          <button className="px-3 py-2 bg-[#E0F2E9] text-[#1FAF38] rounded-[6px] font-semibold  transition">
            Whatsapp US
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;