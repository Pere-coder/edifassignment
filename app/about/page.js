"use client";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
// import Navbar from '@/components/Navbar'
import Vision from "@/components/Vision";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import { FacilityProvider } from "@/components/ContextAPI/FacilityContext";
import Sports from "@/components/Sports/Page";
import Carousel_Team from "@/components/Carousel_Team";
import { SignUpProvider } from "@/components/ContextAPI/SignUpContext";
import SignUp from "@/components/DialogBox/SignUp";
import ScrolltoTop from "@/components/Utitlity/ScrolltoTop";
import DisableScroll from '@/components/Utitlity/DisableScroll'

const about = () => {
  return (
    <>
      <FacilityProvider>
        <SignUpProvider>
          <DisableScroll/>
          <SignUp />
          <ScrolltoTop />
          <div>
            <Vision />
          </div>
          {/* <Facilities /> */}
          <div className=" max-sm:block hidden">
            <Sports />
          </div>
          {/* <Gallery /> */}
          {/* <Footer /> */}
        </SignUpProvider>
      </FacilityProvider>
    </>
  );
};

export default about;
