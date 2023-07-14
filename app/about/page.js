import Facilities from "@/components/Facilities";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'
import Image from 'next/image'

const about = () => {
    return ( <>
     <div className="ml-10 mr-10 sm:ml-10 sm:mr-10 md:ml-20 md:mr-20 " >
        <Navbar/>
    </div>
    <div>
      <div className='mt-[200px] flex flex-col items-center justify-center w-full lg:mb-[80px]'>
        <p className='text-[14px] lg:text-[#0479CE] md:text-[#0479CE] text-white bg-custom md:bg-transparent lg:p-0 md:p-0 p-3 rounded-3xl lg:bg-transparent text-center font-jost lg:w-[444px] md:w-[400px] w-[262px] uppercase lg:mb-0 md:mb-0 mb-2'>Welcome to Heartfulness International Sports Center</p>
        <div className='flex flex-col items-center justify-center w-[315px] h-[374px] lg:bg-transparent md:bg-transparent bg-blue-50 rounded-[40px]'>
          <h1 className='hidden lg:block md:block lg:text-[40px] text-[30px] text-center lg:w-[718px] md:w-[600px] font-bold leading-[40px] uppercase w-[262px] lg:mt-[-90px] md:mt-[-90px] scale-y-150'>Empowering Youth through<br></br>
            Sports Excellence</h1>
          <h1 className='lg:hidden md:hidden lg:text-[40px] md:text-[30px] text-[25px] text-center lg:w-[718px]  font-bold leading-[30px] md:leading-[40px] uppercase w-[262px] text-sblack scale-y-150'><span className='whitespace-nowrap'>Empowering Youth</span>
            <span> through Sports</span> Excellence</h1>

          <p className='font-roboto mt-8 lg:text-[18px] md:text-[18px] text-[14px] lg:w-[960px] md:w-[600px] w-[283px] lg:mt-20 md:mt-3  text-center text-sblack'>At the Heartfulness Institute, we are committed to fostering holistic well-being and empowering individuals to tap into the infinite potential of their hearts. Through the Heartfulness International Sports Center (HISC), we impact thousands of children and youth, helping them connect with their hearts' potential through sports.</p>
        </div>
      </div>
      <div className='flex lg:flex-row md:flex-row flex-col items-center justify-center lg:mt-[-130px] md:mt-[-70px] mt-7  gap-4 lg:mb-16 md:mb-14'>
        <div className='lg:w-[502px] lg:h-[249px]  relative  w-[315px] h-[264px] border-2 lg:rounded-none rounded-[40px]'>
          <Image className='object-cover  lg:w-[502px] lg:h-[249px] md:w-[315px] md:h-[265px] w-[315px] h-[264px] lg:rounded-none md:rounded-none rounded-[40px] lg:blur-none md:blur-none blur-sm' src="/football2.jpg" width={315} height={264} />
          <h1 className=' text-center lg:p-0 p-2  lg:relative lg:bottom-[140px]  lg:text-center relative bottom-[260px]  text-[30px]  font-bold font-bison lg:text-[40px] text-[#FB491D] scale-y-150'>OUR VISION</h1>
          <p className='lg:hidden md:hidden absolute inset-0 bg-blur left-5 top-14 w-[269px] h-[160px] text-white text-center text-[14px]'>HISC was established in 2020 with guidance from renowned sports icons like Pullela Gopichand and P. V. Sindhu.
            We have partnered with esteemed organizations including the Ministry of Sports (Government of India),
            Khelo India, FIT India, and the Pullela Gopichand Badminton Academy.</p>
        </div>

        <div className='lg:w-[502px] lg:h-[249px] relative w-[316px] h-[265px] border-2 lg:rounded-none rounded-[40px] lg:mt-0 md:mt-0 mt-5'>
          <Image className='object-cover lg:w-[502px] lg:h-[249px] md:w-[315px] md:h-[265px] lg:rounded-none md:rounded-none rounded-[40px] w-[315px] h-[264px] lg:blur-none md:blur-none blur-sm' src="/football3.jpg" width={315} height={264} />
          <h1 className=' text-center lg:p-0 p-2 lg:relative lg:bottom-[140px] lg:text-center relative bottom-[260px]  text-[30px]  font-bold font-bison lg:text-[40px] text-custom scale-y-150'>OUR ORIGINS</h1>
          <p className='lg:hidden md:hidden absolute inset-0 bg-blur left-5 top-14 w-[269px] h-[160px] text-white text-center text-[14px]'>HISC was established in 2020 with guidance from renowned sports icons like Pullela Gopichand and P. V. Sindhu.
            We have partnered with esteemed organizations including the Ministry of Sports (Government of India),
            Khelo India, FIT India, and the Pullela Gopichand Badminton Academy.</p>
        </div>

      </div>


    </div>

        <Facilities/>
        <Footer/>
    
    
    </> );
}
 
export default about;