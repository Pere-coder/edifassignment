import Image from 'next/image'


const Footer = () => {
    return ( 
    
    
    <div className="ml-10 mr-10 flex flex-col justify-center items-center gap-0 mt-10">

               
        <div style={{ backgroundImage: 'url("/sports.jpg")', width: '375px', height: '470px' }} className="bg-no-repeat flex flex-col items-center justify-center text-center">
            <div className='w-[316px] mb-52 font-bison font-500 leading-[40px] text-[35px] text-white transform scale-y-150'>EXPERIENCE<br/> A DIFFERENT WAY <br/> TO WORK OUT</div>
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