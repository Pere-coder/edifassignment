
import React from 'react'
import Image from 'next/image'
function Facilities() {
  return (
  <div className='mt-[1630px] md:mt-[700px] lg:mt-[500px]'>
<div className='w-full text-center lg:mt-0 md:mt-0 mt-20'>
  <div className='scale-y-150  text-[30px] font-bison  p-3 text-sblack font-700 leading-[30px] sm:text-[40px] sm:leading-[40px]  md:text-[35px] lg:text-[47px]'>FACILITIES AND OFFERINGS</div>
   <p className='mt-5 md:mt-5 font-roboto  text-sblack text-14 lg:text-18 flex justify-center items-center text-center md:w-[600px] lg:w-[1000px] mx-auto '>Spanning over 54,680 square feet, the Heartfulness International Sports Center offers state-of-the-art infrastructure to cater to various sports enthusiasts. 
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



</div>
  )
}



export default Facilities