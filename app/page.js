import Image from 'next/image'

export default function Home() {
  return (
    
    <div class="min-h-screen bg-no-repeat bg-cover   bg-[url('../public/back.jpg')]  ">
      <div class="absolute inset-0 bg-gradient-to-l from-transparent to-white ">
        <div className="ml-20 mr-20 " >
            <nav className="flex justify-between ">
              <div className="text-orange-500 font-extrabold text-5xl font-sans mt-5 ">HISC</div>
              <div className="hidden md:flex gap-10 mt-10  text-xs ">
                    <div className="p-2">
                        Home
                    </div>
                    <div className="p-2">
                        About us
                    </div>
                    <div className="p-2">
                        Facility
                    </div>
                    <div >
                      <button className="bg-orange-500  
                    text-white text-center rounded-2xl w-28 p-2">Sign up</button>
                        
                    </div>
              </div>
            </nav>

        
          <div className="mt-48">
              <div className="bg-orange-500  text-center text-xs rounded-3xl w-64 p-2 text-white  ">START YOUR HEALTHY LIFESTYLE</div>
                <div className="text-4xl md:text-7xl font-semibold font-mono mt-5  "><h1>BEGIN YOUR <br></br>TRANSFORMATION <br></br>TODAY</h1></div>
                  <p className="text-black w-96 text-xs">Heartfulness International Sports Center
                      (HISC) empowers children and youth to unlock
                      their heart's potential through sports, fostering holistic well
                      being and personal growth.
                  </p>
                  <div className="mt-5 text-xs"><button className="rounded-3xl border-2 border-current w-40 p-2 text-center ">Show More</button></div>
        </div>
      </div>
    </div>
  </div>
  )
}
