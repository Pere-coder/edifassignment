import Image from 'next/image'


const Footer = () => {
    return ( 
    
    
    <div className="ml-10 mr-10 flex flex-col justify-center items-center gap-0 mt-10">

               
        <div className="">
            <Image src="/sports.jpg" width={375} height={168}/>
        </div>
        <div className='bg-vector w-[375px] h-[168px]'>
            <div className='font-roboto font-700 text-18 leading-24 text-center text-white mt-[32px] '>CONTACT US</div>
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