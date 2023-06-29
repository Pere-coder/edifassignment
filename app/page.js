import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    
    <div class="min-h-screen bg-no-repeat bg-cover   bg-[url('../public/back.jpg')]  ">
      <div class="absolute inset-0 bg-gradient-to-l from-transparent to-white ">
        <div className="ml-20 mr-20 " >

           <Navbar/>

          <div className="mt-48 flex flex-col  items-center bg-gray-200 p-9  md:items-start md:p-0 md:bg-transparent ">
            
              <p className="bg-orange-500  text-center text-xs rounded-3xl w-full p-2 text-white md:w-64 ">START YOUR HEALTHY LIFESTYLE</p>
                <h1 className="text-3xl font-semibold font-mono text-center mt-5 md:text-left md:text-7xl">BEGIN YOUR <br/>TRANSFORMATION <br/>TODAY</h1>
                  <p className="mt-5 text-black w-full text-lg text-center md:text-left md:text-xs md:w-96">Heartfulness International Sports Center
                      (HISC) empowers children and youth to unlock
                      their heart's potential through sports, fostering holistic well
                      being and personal growth.
                  </p>
                  <button className=" mt-5 text-xs rounded-3xl border-2 border-current w-40 p-2 text-center ">Show More</button>
        </div>
      </div>
    </div>
  </div>
  )
}
