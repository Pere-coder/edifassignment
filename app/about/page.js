"use client"
import Facilities from "@/components/Facilities";
import Vision from "@/components/Vision";
import { FacilityProvider } from "@/components/ContextAPI/FacilityContext";
import { SignUpProvider } from "@/components/ContextAPI/SignUpContext";
import SignUp from "@/components/DialogBox/SignUp";
import ScrolltoTop from "@/components/Utility/ScrolltoTop";
import DisableScroll from '@/components/Utility/DisableScroll'
import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer';
// import Gallery from '@/components/Gallery'



const about = () => {
    return ( <>

    <FacilityProvider>
        <SignUpProvider>
          <DisableScroll/>
          <SignUp />
          <ScrolltoTop />
        <Vision/>
        
        {/* <Gallery/>
        <Footer/> */}
        </SignUpProvider>
      </FacilityProvider>
        
    
    
    </> );
}
 
export default about;