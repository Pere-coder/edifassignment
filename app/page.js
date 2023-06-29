import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    
    <div class="min-h-screen bg-no-repeat bg-cover   bg-[url('../public/back.jpg')]  ">
      <div class="absolute inset-0 bg-gradient-to-l from-transparent to-white ">
        <div className="ml-20 mr-20 " >

           <Navbar/>

          <div className="mt-48 flex flex-col  items-center  md:items-start   ">
              <p className="bg-orange-500  text-center text-xs rounded-3xl w-64 p-2 text-white  ">START YOUR HEALTHY LIFESTYLE</p>
                <h1 className="text-7xl font-semibold font-mono text-center mt-5 md:text-left">BEGIN YOUR <br></br>TRANSFORMATION <br></br>TODAY</h1>
                  <p className="text-black w-96 text-xs text-center md:text-left">Heartfulness International Sports Center
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
