import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'

function Vision() {
  return (
    <div>
      <div className="bg-no-repeat bg-center bg-cover lg:w-full lg:h-[835px] md:h-[800px] w-full h-[398px] blur-  bg-[url('../public/background2.jpeg')]">
     
      <div className="ml-10 mr-10 sm:ml-10 sm:mr-10 md:ml-20 md:mr-20 " >
      <Navbar/>
    </div>
      <div className='flex flex-col items-center justify-center w-full lg:mb-[80px]'>
        <p className='text-[14px] lg:text-[#0479CE] md:text-[#0479CE] text-white bg-[#FB491D] md:bg-transparent lg:p-0 md:p-0 p-3 rounded-3xl lg:bg-transparent text-center font-jost lg:w-[444px] md:w-[400px] w-[262px] uppercase lg:mb-0 md:mb-0 mb-2 mt-40'>Welcome to Heartfulness International Sports Center</p>
        <div className='flex flex-col items-center justify-center w-[315px] h-[374px] lg:bg-transparent md:bg-transparent bg-blue-50 rounded-[40px]'>
          <h1 className='hidden lg:block md:block lg:text-[40px] text-[30px] text-center lg:w-[718px] md:w-[600px] font-bold leading-[40px] uppercase w-[262px] lg:mt-[-90px] md:mt-[-90px] text-black scale-y-150'>Empowering Youth through<br></br>
            Sports Excellence</h1>
          <h1 className='lg:hidden md:hidden lg:text-[40px] md:text-[30px] text-[25px] text-center lg:w-[718px]  font-bold leading-[30px] uppercase w-[262px] scale-y-150'><span className='whitespace-nowrap'>Empowering Youth</span>
            <span> through Sports</span> Excellence</h1>

          <p className='mt-8 font-roboto lg:text-[18px] md:text-[18px] text-[14px] lg:w-[960px] md:w-[600px] w-[283px] lg:mt-20 md:mt-3  text-center text-black'>At the Heartfulness Institute, we are committed to fostering holistic well-being and empowering individuals to tap into the infinite potential of their hearts. Through the Heartfulness International Sports Center (HISC), we impact thousands of children and youth, helping them connect with their hearts' potential through sports.</p>
        </div>
      </div>
      <div className='flex lg:flex-row md:flex-row flex-col items-center justify-center lg:mt-[-130px] md:mt-[-70px] mt-7  gap-4 lg:mb-16 md:mb-14'>
        <div className='lg:w-[502px] lg:h-[249px]  relative  w-[315px] h-[264px] border-2 lg:rounded-none rounded-[40px]'>
          <Image className='object-cover  lg:w-[502px] lg:h-[249px] md:w-[315px] md:h-[265px] w-[315px] h-[264px] lg:rounded-none md:rounded-none rounded-[40px] lg:blur-none md:blur-none blur-sm' src="/images/football2.jpg" width={315} height={264} />
          <h1 className=' text-center lg:p-0 p-2  lg:relative lg:bottom-[140px]  lg:text-center relative bottom-[260px]  text-[30px]  font-bold font-bison lg:text-[40px] text-[#FB491D]'>OUR VISION</h1>
          <p className='lg:hidden md:hidden absolute inset-0 bg-blur left-5 top-14 w-[269px] h-[160px] text-white text-center text-[14px]'>HISC was established in 2020 with guidance from renowned sports icons like Pullela Gopichand and P. V. Sindhu.
            We have partnered with esteemed organizations including the Ministry of Sports (Government of India),
            Khelo India, FIT India, and the Pullela Gopichand Badminton Academy.</p>
        </div>

        <div className='lg:w-[502px] lg:h-[249px] relative w-[316px] h-[265px] border-2 lg:rounded-none rounded-[40px] lg:mt-0 md:mt-0 mt-5'>
          <Image className='object-cover lg:w-[502px] lg:h-[249px] md:w-[315px] md:h-[265px] lg:rounded-none md:rounded-none rounded-[40px] w-[315px] h-[264px] lg:blur-none md:blur-none blur-sm' src="/images/football3.jpg" width={315} height={264} />
          <h1 className=' text-center lg:p-0 p-2 lg:relative lg:bottom-[140px] lg:text-center relative bottom-[260px]  text-[30px]  font-bold font-bison lg:text-[40px] text-[#FB491D]'>OUR ORIGINS</h1>
          <p className='lg:hidden md:hidden absolute inset-0 bg-blur left-5 top-14 w-[269px] h-[160px] text-white text-center text-[14px]'>HISC was established in 2020 with guidance from renowned sports icons like Pullela Gopichand and P. V. Sindhu.
            We have partnered with esteemed organizations including the Ministry of Sports (Government of India),
            Khelo India, FIT India, and the Pullela Gopichand Badminton Academy.</p>
        </div>

      </div>

      <div className='lg:w-full lg:h-[488px] lg:mt-[-150px] md:mt-[-140px] mt-[-120px] md:h-[588px] w-full h-[790px] border-2 flex flex-col items-center justify-center lg:bg-[#0479CE] bg-[#FB491D]'>
        <h1 className='text-center font-bison md:w-full w-[300px] lg:mb-0 md:mt-[10px] mt-[150px] lg:text-[40px] text-[30px] font-500 uppercase text-white scale-y-150'>Inauguration and Location</h1>
        <p className='text-center lg:w-[834px]  w-[315px] md:w-[500px] font-poppins text-[16px]lg:p-0  text-white mt-3'>HISC was inaugurated on 26th February 2023 at Kanha Shanti Vanam,
           a serene location known for holistic well-being and home to the world's largest meditation center.
            The inauguration ceremony was graced by the presence of Shri Shri Anurag Thakur -
             Union Minister for Information & Broadcasting and Youth Affairs & Sports, Government of India;
              Shri Srinivas Goud - Hon'ble Minister of Prohibition & Excise, Sports & Youth Services,
               Tourism & Culture and Archaeology of Telangana; Shri Pullela Gopichand - ace Indian Badminton Coach, 
               and Shri Kamlesh Patel ‘Daaji’ – Guide of Heartfulness Meditation Worldwide and President of Shri Ram Chandra Mission.</p>

      </div>
      </div>


    </div>
  )
}

export default Vision