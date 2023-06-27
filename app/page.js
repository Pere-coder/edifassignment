import Image from 'next/image'

export default function Home() {
  return (
    
    <div class=" bg-no-repeat bg-cover  bg-[url('../public/back.jpg')]">
    <div className='ml-20 mr-20 mt-10 ' >
        {/* <Image src='/back.jpg' fill/> */}
        <nav className='flex justify-between  '>
            <div className='text-orange-500 font-extrabold text-5xl font-sans'>HISC</div>
            <div className='flex gap-10'>
                <div>
                    Home
                </div>
                <div>
                    About us
                </div>
                <div>
                    Facility
                </div>
                <div className='bg-orange-500  
                text-white text-center rounded-2xl w-28 mb-5'>
                    Sign up
                </div>
            </div>
        </nav>

    
    <div className='mt-48'>
        <div className='bg-orange-500  text-center text-xs rounded-3xl w-64 p-2 text-white'>START YOUR HEALTHY LIFESTYLE</div>
        <div className='text-7xl font-semibold font-mono mt-5 '><h1>BEGIN YOUR <br></br>TRANSFORMATION <br></br>TODAY</h1></div>
        <p className='text-black w-96 text-xs'>Heartfulness International Sports Center
            (HISC) empowers children and youth to unlock
            their heart's potential through sports, fostering holistic well
            being and personal growth.
        </p>
        <div className='mt-5'><button className='rounded-3xl border-2 border-current w-40 p-1 text-center '>Show More shape</button></div>
    
    
    </div>

    <div>
        
    </div>
    </div>
</div>
  )
}
