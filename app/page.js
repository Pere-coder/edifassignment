import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa';


export default function Home() {
  return (
    <div>
        <div class="bg-no-repeat bg-contain   h-[1080px]   bg-[url('../public/background.jpg')] md:bg-none">
        <div class="md:bg-no-repeat  md:bg-right-top  md:h-[1100px]  md:bg-[url('../public/background.jpg')]">
          <div class="h-[1080px] md:h-[1040px] bg-gradient-to-b from-white via-transparent to-transparent  md:bg-gradient-to-r md:from-white md:to-transparent md:via-[#E6F2F4] "> 
            <div className="ml-10 mr-10 sm:ml-10 sm:mr-10 md:ml-20 md:mr-20 " >

              <Navbar/>

              <div className="mt-48 flex flex-col  items-center justify-center align-center   md:items-start  ">
                
                  
                  <div className='shadow-custom text-center bg-blue-100 rounded-[40px] p-7 mt-5 w-[330px] sm:w-[600px] md:w-315 h-416 md:bg-transparent md:text-left md:mt-10 md:p-0 md:rounded-none md:shadow-none'>
                     <div className="text-center text-14   sm:text-[16px] text-custom font-jost font-700 leading-20.23 md:text-[#0479CE]    md:text-[16px]  md:w-full md:text-start md:items-center ">START YOUR HEALTHY LIFESTYLE!</div>
                      <h1 className="scale-y-150 text-30  font-700 leading-[30px] font-bison text-sblack   w-226 mx-auto mt-10 flex justify-center items-center align-center sm:text-[40px] sm:leading-[40px] md:text-[47px]  md:w-430  md:leading-[48px] md:items-start md:mt-10 ">
                        BEGIN YOUR TRANSFORMATION TODAY</h1>
                        <p className="mt-8 text-sblack  text-14 font-roboto leading-20 font-400 sm:mt-10 md:mt-10   md:w-96 md:text-14 md:leading-24 lg:text-18">Heartfulness International Sports Center
                            (HISC) empowers children and youth to unlock
                            their heart's potential through sports, fostering holistic well
                            being and personal growth.
                        </p>
                        <div className="flex items-center justify-center align-center mx-auto cursor-pointer rounded-3xl border-2 border-current gap-3  w-175 h-50 mt-5 text-gray md:w-175 md:h-50 md:mx-0 ">
                          <div className="font-500 text-13.85 leading-16.23  font-roboto ">Show More </div>
                          <div><Image src="/triangle.png" width={23.47} height={17.06} /></div>
                        </div>
                    </div>
              </div>
            
          </div>
          <div className='hidden md:flex justify-end mr-7 mt-[100px] text-vector cursor-pointer'><Image src="/vector.png" width={61} height={61} /></div>
        </div> 
       
        
      </div> 
      </div>
    
      <Footer/>

    </div>
  )
}
