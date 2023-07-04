import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { FaPlay } from 'react-icons/fa';


export default function Home() {
  return (
    <>
    <div class="min-h-screen bg-no-repeat   bg-contain md:bg-cover md:bg-center  bg-[url('../public/background.jpg')]  ">
      <div class="absolute inset-0 bg-gradient-to-t from-transparent to-white  md:inset-0 md:bg-gradient-to-l md:from-transparent md:to-white ">
        <div className="ml-10 mr-10 md:ml-20 md:mr-20 " >

           <Navbar/>

          <div className="mt-48 flex flex-col  items-center justify-center   md:items-start  ">
            
              <p className="bg-custom  text-center text-14 rounded-3xl w-64 p-2 text-white font-jost font-700 leading-20.23 ">START YOUR HEALTHY LIFESTYLE!</p>
               <div className='text-center bg-blue-100 rounded-3xl p-7 mt-5 md:bg-transparent md:text-left md:mt-0 md:p-0 md:rounded-none'>
                  <h1 className="text-42 font-300 leading-42 font-bison text-sblack mt-5  md:text-80 md:font-300  md:leading-72">BEGIN YOUR <br/>TRANSFORMATION <br/>TODAY</h1>
                    <p className="mt-5 text-sblack w-full text-14 font-roboto leading-20 font-400  md:text-xs md:w-96 md:text-18 md:leading-24">Heartfulness International Sports Center
                        (HISC) empowers children and youth to unlock
                        their heart's potential through sports, fostering holistic well
                        being and personal growth.
                    </p>
                    <div className="cursor-pointer  rounded-3xl border-2 border-current p-2  flex items-center justify-center align-center  gap-3  w-175 h-50 mt-5 text-gray md:w-64 "><div className="font-500 text-13.85 leading-16.23  font-roboto ">Show More </div><div><Image src="/triangle.png" width={23.47} height={17.06} /></div></div>
                  </div>
        </div>
      </div>
    </div>
  </div>



  </>
  )
}
