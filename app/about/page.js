import Facilities from "@/components/Facilities";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'

const about = () => {
    return ( <>
     <div className="ml-10 mr-10 sm:ml-10 sm:mr-10 md:ml-20 md:mr-20 " >
        <Navbar/>
    </div>
        <Facilities/>
        <Footer/>
    
    
    </> );
}
 
export default about;