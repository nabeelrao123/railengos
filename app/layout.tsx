import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "The composer",
  description:
    "Explore the captivating world of Lord Charles, an innovative artist blending electronic, steampunk, and EDM genres. Discover his latest albums, singles, and music videos, and delve into a musical journey that challenges boundaries and inspires creativity.",
  keywords:
    "Lord Charles, artist, electronic music, steampunk, EDM, albums, singles, music videos.",
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en" className="h-full">
      <head>
        <title>The Composer</title>
      </head>
      {/* <Navbar /> */}
      <body className="h-full flex flex-col">
      <Navbar />
        <Toaster position="bottom-center" />
        {children}
        <Footer />
      </body>
      
    </html>
  );
};

export default RootLayout;
