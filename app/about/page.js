'use client'
import Facilities from "@/components/Facilities";
import Footer from '@/components/Footer';
// import Navbar from '@/components/Navbar'
import Vision from "@/components/Vision";
import Image from 'next/image'
import Gallery from "@/components/Gallery";
import { FacilityProvider } from "@/components/ContextAPI/FacilityContext";
import Sports from '@/components/Sports/Page'


const about = () => {
    return (
      <>
        <FacilityProvider>
          <Sports />

          <div>
            <Vision />
          </div>

          <Facilities />
          <Gallery />
          <Footer />
        </FacilityProvider>
      </>
    );
}
 
export default about;