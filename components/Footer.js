import Image from 'next/image'


const Footer = () => {
    return ( 
    
    
    <div className="ml-10 mr-10 flex flex-col justify-center items-center text-center  gap-0 mt-10">

               
        <div style={{ backgroundImage: 'url("/sports.jpg")', width: '375px', height: '470px' }} className=" bg-no-repeat flex flex-col items-center justify-center text-center mx-0">
            <div className='flex flex-col gap-48  w-[375px] h-[470px] items-center justify-center mx-0  bg-gradient-to-b from-[#000000]  to-transparent'>
                <div>
                    <div className='w-[316px] mt-5 font-bison font-500 leading-[40px] text-[35px] text-white transform scale-y-150'>EXPERIENCE<br/> A DIFFERENT WAY <br/> TO WORK OUT</div>
                    <div className='font-roboto font-700 text-18 leading-24 text-[#F1F8FF] mt-8  '>Unleashing Sporting Potential</div>
                </div>
            
                <div className="mx-auto text-center text-[13.98px] rounded-3xl w-[242px] h-[38px] p-2 font-jost font-500 leading-20.23 bg-custom text-white   ">START YOUR HEALTHY LIFESTYLE!</div>
            </div>
            
        </div>
        <div className='bg-vector w-[375px] h-[168px] mt-0'>
            <div className='font-roboto font-700 text-18 leading-24 text-center text-contact mt-[32px] '>CONTACT US</div>
            <div className='flex justify-center items-center gap-[52px] mt-[20px]'>
                <div className='bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center'> <Image src="/message.png"  width={32} height={32}/></div>
                <div className='bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center'><Image src="/call.png"  width={34} height={34}/></div>
                <div className='bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center'><Image src="/location.png"  width={36} height={36}/></div>
            </div>
            

        </div>
        <div className='p-5 font-400 font-helvetica'>© 2023 Heartfulness. All rights reserved.</div>

    </div> );
}
 
export default Footer;