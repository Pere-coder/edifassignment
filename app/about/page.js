"use client";
import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
// import Navbar from '@/components/Navbar'
import Vision from "@/components/Vision";
import Image from "next/image";
import Gallery from "@/components/Gallery";
import { FacilityProvider } from "@/components/ContextAPI/FacilityContext";
import Sports from "@/components/Sports/Page";
import Carousel_Team from '@/components/Carousel_Team'

const about = () => {
  return (
    <>
      <FacilityProvider>
        <div>
          <Vision />
        </div>

        <Carousel_Team/>
        <Facilities />
        <div className=" max-sm:block hidden">
          <Sports />
        </div>
        <Gallery />
        <Footer />
      </FacilityProvider>
    </>
  );
};

export default about;
