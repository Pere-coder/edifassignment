import React from 'react'
import Image from 'next/image'
function Facilities() {
  return (
    <div className=' justify-center items-center m-5 flex flex-col  md:mt-20 mt-[80px]'>
        <div className='items-center justify-center'>
            <h1 className=' md:mb-5 mb-3 text-center font-bison font-bold leading-[42px] md:text-[42px] text-[42px]'>FACILITIES AND OFFERINGS</h1>
            <p className=' md:w-[1200px]  text-center font-roboto font-400 text-[18px] mt-5 md:mt-7'>Spanning over 54,680 square feet, the Heartfulness International Sports Center offers state-of-the-art infrastructure to cater to various sports enthusiasts.
                 Our facilities include: 14 badminton courts, 3 squash courts, 25-meter swimming pool & Gym and Fitness center</p>
        </div>
        <div className=' flex space-x-3 flex-row md:m-16 md:ml-42 ml-[10px] mt-5 flex-wrap md:flex-nowrap md:w-[1350px] w-[350px]  md:justify-evenly '>
       {/* <div className='md:w-[245px]  w-[153px] h-[263px]  md:h-[400px] bg-green-500 rounded-[16px]   '>

       </div> */}
           <Image className="md:w-[245px]  w-[153px] h-[263px]  md:h-[400px]  rounded-[16px] justify-center border-2 ml-3" src="/images/badminton.jpg"  alt="gym photo" width={153} height={300} >

          </Image>  

       {/* <div className='md:w-[245px] w-[153px] h-[263px] md:ml-16  md:mt-48 md:h-[400px] bg-black rounded-[16px] justify-center'>

       </div> */}
        <Image className="md:w-[245px] w-[153px] h-[263px] md:ml-16  md:mt-48 md:h-[400px]  rounded-[16px] justify-center border-2" src="/images/gymimg1.jpg" alt="gym photo" width={153} height={300}>
       
       </Image>


       {/* <div className='md:w-[245px] w-[153px] h-[263px] md:ml-16 md:h-[400px] mt-5 bg-blue-500 rounded-[16px] justify-center'>

        </div> */}
         <Image className="md:w-[245px] w-[153px] h-[263px] md:ml-16 md:h-[400px] mt-5  rounded-[16px] justify-center border-2" src="/images/swimmingimg.jpg" alt="swimming photo" width={153} height={300}>

          </Image>

        {/* <div className='md:w-[245px] w-[153px] h-[263px]  md:ml-16 md:mt-48 mt-5 md:h-[400px] bg-orange-600 rounded-[16px] justify-center'>

        </div> */}
        <Image className="md:w-[245px] w-[153px] h-[263px]  md:ml-16 md:mt-48 mt-5 md:h-[400px]  rounded-[16px]  border-2" src="/images/squashimg.jpg" alt="squash photo" width={153} height={300}>

        </Image>


       
       </div>
    
        

        <div className='md:w-[1970px] md:h-[430px] w-[350px] h-[490px] md:mt-0 mt-10 flex flex-col items-center justify-center md:bg-blue-500 bg-orange-500  '>

<h1 className='md:w-[525px] md:h-[72px] w-[262px] text-center font-bison md:text-[60px] text-[30px] md:mb-8 mb-4 font-semibold text-white'>JOIN US AT HISC</h1>
<p className='md:w-[1234px] md:h-[78px] w-[315px] text-white text-center font-poppins'>Be a part of the Heartfulness International Sports Center community, where sports and holistic well-being merge. Explore our facilities, experience the joy of sports, and unlock your potential. Let's nurture future champions and empower youth through the transformative power of sports. Contact us today or visit our facility. We look forward to welcoming you to HISC!</p>
<button className='w-[175px] h-[52px] text-black bg-white mt-6 rounded-3xl font-roboto font-500 text-[13.85px]'>SIGN UP NOW</button>

</div>
    
    </div>
  )
}

export default Facilities