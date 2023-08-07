import Image from 'next/image'
import { IconName } from "react-icons/fa6";
import { AiFillFacebook, AiFillYoutube } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";




const Footer = () => {
    return ( 
    <>
    <div className='text-[#0A142F] flex justify-center text-center   items-center font-400 font-helvetica p-2 md:hidden'>© 2023 Heartfulness. All rights reserved .</div>
     <div className='hidden md:block md:mt-10 '>
    <div className="flex flex-col justify-center items-center text-center mt-0 md:mt-20">
        

        <div className='hidden md:mt-12 md:flex xl:w-[1102.97px] items-center justify-center md:gap-[125px] lg:gap-[250px] xl:gap-[500px] '>
            <div>
                <ul className='flex md:gap-10 lg:gap-12 xl:gap-14 font-roboto font-500  text-[16px] leading-[18.75px] text-[#252525]'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Facility</li>
                    <li>FAQS</li>
                </ul>
                </div>
            <div>
                <ul className='flex md:gap-5 lg:gap-10 '>
                    <li><AiFillFacebook size={24.67} className='text-[#252525] cursor-pointer'/></li>
                    <li><BiLogoTwitter size={24.67} className='text-[#252525] cursor-pointer'/></li>
                    <li><AiFillYoutube size={24.67} className='text-[#252525] cursor-pointer'/></li>
                </ul>
            </div>
        </div>

        <hr className='hidden md:flex  mt-20 justify-center items-center   border-b-[#2B3D51] md:w-[600px] lg:w-[800px] xl:w-[1100px]'/> 
           
          

       

    

        <div className='hidden md:flex justify-center items-center text-center md:mt-10 md:gap-[60px] lg:gap-[150px] xl:gap-[280px] p-2'>
            <div className='font-400 text-[14px] leading-[16.7px] text-[#0A142F] font-helvetica'>© 2023 Heartfulness. All rights reserved .</div>
            <div><Image src='/heart.jpg' width={100} height={100}/></div>
            <div className='font-400 text-[14px] leading-[16.7px] flex md:gap-5 lg:gap-10 font-helvetica text-[#0A142F]'><p>Terms of Service </p><p>Privacy Policy</p> </div>


        </div>
        
       
       
    </div> 
    
     </div>
    </>
   
    );
}
 
export default Footer;