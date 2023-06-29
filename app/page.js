import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    
    <div class="min-h-screen bg-no-repeat bg-cover   bg-[url('../public/back.jpg')]  ">
      <div class="absolute inset-0 bg-gradient-to-l from-transparent to-white ">
        <div className="ml-20 mr-20 " >

           <Navbar/>

          <div className="mt-48 flex flex-col  items-center  md:items-start  ">
            
              <p className="bg-orange-500  text-center text-xs rounded-3xl w-64 p-2 text-white  ">START YOUR HEALTHY LIFESTYLE</p>
               <div className='text-center bg-gray-200 rounded-3xl p-7 mt-5 md:bg-transparent md:text-left md:mt-0 md:p-0 md:rounded-none'>
                  <h1 className="text-3xl font-semibold font-mono  mt-5  md:text-7xl">BEGIN YOUR <br/>TRANSFORMATION <br/>TODAY</h1>
                    <p className="mt-5 text-black w-full text-lg   md:text-xs md:w-96">Heartfulness International Sports Center
                        (HISC) empowers children and youth to unlock
                        their heart's potential through sports, fostering holistic well
                        being and personal growth.
                    </p>
                    <button className=" mt-5 text-xs rounded-3xl border-2 border-current w-40 p-2 text-center ">Show More</button>
                  </div>
        </div>
      </div>
    </div>
  </div>
  )
}
