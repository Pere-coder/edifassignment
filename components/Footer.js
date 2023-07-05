import Image from 'next/image'


const Footer = () => {
    return ( 
    
    <>
    <div className="ml-10 mr-10 flex flex-col justify-center items-center text-center  gap-0 mt-10">

               
        <div className="w-[375px] h-[470px] bg-[url('../public/sports.jpg')] bg-no-repeat bg-center  flex flex-col items-center justify-center text-center mx-0 md:bg-[url('../public/desktop.jpg')] md:w-[1440px] md:h-[470px] ">
            <div className='flex flex-col gap-48  w-[375px] h-[470px] items-center justify-center mx-0  bg-gradient-to-b from-[#000000]  to-transparent  md:w-[1440px] md:h-[470px] md:bg-gradient-to-b md:from-[#000000] md:t0-transparent md:gap-5 md:items-end md:text-start '>
                <div className='md:mr-[150px]'>
                    <div className='w-[316px] mt-5 font-bison font-500 leading-[40px] text-[35px] text-white transform scale-y-125 md:w-[365px] md: md:leading-[50px] md:text-[50px] md:text-[#F1F8FF] md:transform md:scale-y-100 '>EXPERIENCE<br/> A DIFFERENT WAY <br/> TO WORK OUT</div>
                    <div className='font-roboto font-700 text-18 leading-24 text-[#F1F8FF] mt-8 md:mt-2 '>Unleashing Sporting Potential</div>
                </div>
           
            <div className="text-[13.98px] rounded-3xl w-[242px] h-[38px] p-2 font-jost font-500 leading-20.23 bg-custom text-white md:mr-[275px] md:text-center md:bg-[#0479CE]">START YOUR HEALTHY LIFESTYLE!</div>
           
               
            </div>
            
        </div>
        <div className='md:w-[1200px] md:h-[320px] bg-[#0479CE]'>

        </div>
        <div className='bg-vector w-[375px] h-[168px] mt-0 md:hidden'>
            <div className='font-roboto font-700 text-18 leading-24 text-center text-contact mt-[32px] '>CONTACT US</div>
            <div className='flex justify-center items-center gap-[52px] mt-[20px]'>
                <div className='bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center'> <Image src="/message.png"  width={32} height={32}/></div>
                <div className='bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center'><Image src="/call.png"  width={34} height={34}/></div>
                <div className='bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center'><Image src="/location.png"  width={36} height={36}/></div>
            </div>
            

        </div>
       
    </div> 
     <div className='flex justify-center items-center gap-10 text-center p-5  md:items-start md:text-left'><div className='font-400 font-helvetica'>© 2023 Heartfulness. All rights reserved.</div><div>hiii</div></div>
     </>
    );
}
 
export default Footer;