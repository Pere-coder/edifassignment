import Facilities from "@/components/Facilities";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Vision from "@/components/Vision";
import Image from 'next/image'
import Gallery from "@/components/Gallery";

const about = () => {
    return ( <>
     
    <div>
      <Vision/>
    </div>

        <Facilities/>
        <Gallery/>
        <Footer/>
    
    
    </> );
}
 
export default about;