import Image from "next/image"

function Team() {
  return (
    <>
    <div className="md:flex mt-16 md:mt-18  md:m-[100px]   items-center ">
        <div className="md:w-[526px] md:h-[528px] w-[312px] h-[380px]  bg- mx-auto mb-2 rounded-[40px] md:rounded-none md:mr-10 ">
         <Image className="rounded-[40px] md:rounded-none object-cover md:h-[528px] md:w-[526px] w-[312px] h-[380px]" src="/images/team5.jpg" alt="team photo" width={312} height={380}>

         </Image>
        </div>

        <div className="md:ml-0 md:mb-56 md:w-[447px] md:h-[168px] w-[300px]  mx-auto">
            <div className="scale-y-150 text-30  mt-10 font-700 leading-[30px] md:mb-6 font-bison md:text-[42px]  w-[300px] h-[84px] md:text-start md:font-bold  md:leading-[45px] tracking-tighter text-center text-sblack">BE A PART OF<br/><span className="whitespace-nowrap"> WELLNESS COMMUNITY</span></div>
            <p className="font-roboto md:mt-10 font-400  md:text-start w-[300px] h-[160px] md:w-[447px] md:h-[168px] text-center text-[14px] md:text-[18px] text-sblack">The Heartfulness International Sports Center (HISC) was conceived in 2020 as an integrated multi-sport facility to promote excellence in sports, with the guidance of leading sports icons such as <span  className="font-bold">Pullela Gopichand, P. V. Sindhu,</span> and with a close association of sporting inspirations like that of <span className="font-bold">Havier Zanett, Rohit Sharma, R. Ashwin, and Ravi Shashtri.</span></p>
            <div className="flex justify-center items-center text-center text-[13.98px] h-50 sm:text-[18px]  md:text-[13.98px]  md:mt-12 mt-12  ml-16 md:ml-0 rounded-3xl p-2 font-jost font-500 leading-20.23  text-white bg-custom md:bg-[#0479CE]  w-[175px]">SIGN UP NOW</div>
        </div>

       
    </div>
    
    
    
    </>
  )
}

export default Team