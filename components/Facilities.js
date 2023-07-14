
import React from 'react'
import Image from 'next/image'
function Facilities() {
  return (
  <div className='mt-[1670px] md:mt-[700px] lg:mt-[500px]'>
<div className='w-full text-center lg:mt-0 md:mt-0 mt-20'>
  <h1 className='scale-y-150 font-bold lg:text-[42px] text-[30px] font-bison leading-8 p-3 text-sblack'>FACILITIES AND OFFERINGS</h1>
   <p className='lg:pl-20 lg:pr-20 pl-10 pr-10 lg:mt-2 md:mt-2 font-roboto text-[16px] lg:text-[18px] text-sblack'>Spanning over 54,680 square feet, the Heartfulness International Sports Center offers state-of-the-art infrastructure to cater to various sports enthusiasts. 
    Our facilities include: 14 badminton courts, 3 squash courts, 25-meter swimming pool & Gym and Fitness center</p>
</div>

<div class=" grid grid-cols-2 gap-x-2 gap-y-2 md:grid-cols-4   justify-items-center m-7 ">
<div class="lg:row-span-4">
<h1 className='scale-y-150 md:hidden lg:hidden text-[18px] font-700 text-sblack'>BADMINTON</h1>
<Image className='lg:w-[245px] lg:h-[421px] w-[153px] h-[263px] rounded-2xl ' src= "/images/badminton.jpg"  width={153} height={263}></Image>
<h1 className='hidden md:block lg:block text-[20px] font-700 md:mt-1 scale-y-150 text-sblack'>BADMINTON</h1>
</div>
<div class="lg:row-span-4">
<h1 className='scale-y-150 md:hidden lg:hidden relative ml-[100px] text-[18px] font-700 text-sblack'>GYM</h1>
<h1 className='hidden md:block lg:block lg:relative md:relative  lg:top-[160px] md:top-[140px] text-[20px] font-700 scale-y-150 text-sblack'>GYM</h1>
<Image className='lg:w-[245px] lg:h-[421px] w-[153px] h-[263px] rounded-2xl lg:mt-40 md:mt-36 ' src= "/images/gymimg1.jpg"  width={153} height={263}></Image>
</div>
<div class="lg:row-span-4">
<Image className='lg:w-[245px] lg:h-[421px] w-[153px] h-[263px] rounded-2xl ' src= "/images/swimmingimg.jpg"  width={153} height={263}></Image>
<h1 className='scale-y-150 hidden md:block lg:block text-[20px] font-700 md:mt-1 text-sblack'>SWIMMING</h1>
<h1 className='md:hidden lg:hidden text-[18px] font-700 scale-y-150 text-sblack'>SWIMMING</h1>
</div>
<div class="lg:row-span-4">
<h1 className='hidden md:block lg:block lg:relative md:relative  lg:top-[160px] md:top-[140px] text-[20px] font-700 scale-y-150 text-sblack'>SQUASH</h1>
<Image className='lg:w-[245px] lg:h-[421px] w-[153px] h-[263px] rounded-2xl lg:mt-40 md:mt-36 ' src= "/images/squashimg3.jpg"  width={153} height={263}></Image>
<h1 className='scale-y-150 md:hidden lg:hidden relative  text-[18px] ml-[70px] font-700 text-sblack'>SQUASH</h1>
</div>
</div>

<div className='w-full md:h-[430px] sm:h-[490px] md:mt-[100px] mt-10 flex flex-col items-center justify-center md:bg-[#0479CE] bg-custom  '>

<h1 className='scale-y-150 md:w-[525px]  md:h-[72px] w-[262px] text-center font-bison md:text-[40px] text-[30px] md:mb-2 mb-4 mt-4 font-semibold text-white'>JOIN US AT HISC</h1>
<p className='xl:w-[1234px] lg:w-[1000px] md:w-full md:h-[78px] w-[315px] md:p-5 text-white text-center font-poppins '>Be a part of the Heartfulness International Sports Center community, where sports and holistic well-being merge. Explore our facilities, experience the joy of sports, and unlock your potential. Let's nurture future champions and empower youth through the transformative power of sports. Contact us today or visit our facility. We look forward to welcoming you to HISC!</p>
<button className='w-[175px] h-[52px] text-black bg-white mt-6 rounded-3xl font-roboto font-500 text-[13.85px] md:mt-16 mb-7'>SIGN UP NOW</button>

</div>

</div>
  )
}



export default Facilities