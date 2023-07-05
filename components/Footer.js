import Image from 'next/image'


const Footer = () => {
    return ( 
    
    <div className='flex flex-col justify-center items-center'>
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
        <div className='hidden md:flex justify-center items-center text-center mx-auto gap-20 md:w-[1200px] md:h-[320px] md:bg-[#0479CE] md:mt-20 md:rounded-2xl text-white '>
            <div className='flex flex-col gap-2 mt-16 items-center'><Image src="/message1.png"  width={32} height={32}/>
            <h1 className='font-roboto font-700  leading-[32px] text-[18px]'>Email us</h1>
            <p className='w-[328px] h-[54px] text-[16px] font-400 font-sans'>Email us for general queries, including marketing and partnership opportunities.</p>
            <div className='bg-transparent w-[207px] h-[40px] border-2 border-white rounded-xl mt-5 flex justify-center items-center font-sans'>HISC@heartfulness.org</div>
            </div>

            <div className='flex flex-col gap-2 mt-16 items-center'><Image src="/call1.png"  width={32} height={32}/>
            <h1 className='font-roboto font-700  leading-[32px] text-[18px]'>Call us</h1>
            <p className='w-[328px] h-[54px] text-[16px] font-400 font-sans'>Call us to speak to a member of our team.<br/> We are always happy to help.</p>
            <div className='bg-transparent w-[207px] h-[40px] border-2 border-white rounded-xl mt-5 flex justify-center items-center font-sans'>+91 9876543210</div>
            </div>

            <div className='flex flex-col gap-2 mt-16 items-center'><Image src="/location1.png"  width={32} height={32}/>
            <h1 className='font-roboto font-700  leading-[32px] text-[18px] '>Location</h1>
            <p className='w-[328px] h-[54px] text-[16px] font-400 font-sans'>13-110, Kanha Village, Nandigama Mandal,<br/> Ranga Reddy District, Telangana, India Pin – 509325</p>
            <div className='bg-transparent w-[207px] h-[40px] border-2 border-white rounded-xl mt-5 flex justify-center items-center font-sans'>Go to Maps <Image src='/arrow.png' width={13} height={16} className="ml-7"/></div>
            </div>
        </div>


        <div className='hidden md:flex justify-center items-center gap-[500px]  mt-[100px] '>
            <div>
                <ul className='flex gap-10 font-roboto font-500 text-16 leading-[18.75px] text-[#252525]'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Facility</li>
                    <li>FAQS</li>
                </ul>
            </div>
            <div>
                <ul className='flex gap-10'>
                    <li><Image src='/facebook.png' width={24.67} height={24}/></li>
                    <li><Image src='/twitter.png' width={24.67} height={20}/></li>
                    <li><Image src='/youtube.png' width={24.67} height={17}/></li>
                </ul>
            </div>

          

        </div>

        <div className='hidden md:bg-[#0A142F] w-[1102.97px] h-[1px] mt-5'></div>

        

        <div className='hidden md:flex justify-center items-center text-center mt-10 gap-[150px]'>
            <div className='font-400 text-[14px] leading-[16.7px] text-[#0A142F] font-helvetica'>© 2023 Heartfulness. All rights reserved .</div>
            <div><Image src='/heart.jpg' width={132} height={45}/></div>
            <div className='font-400 text-[14px] leading-[16.7px] flex gap-10 font-helvetica text-[#0A142F]'><p>Terms of Service </p><p>Privacy Policy</p> </div>


        </div>
        
        <div className='bg-vector w-[375px] h-[168px] mt-0 md:hidden'>
            <div className='font-roboto font-700 text-18 leading-24 text-center text-contact mt-[32px]'>CONTACT US</div>
            <div className='flex justify-center items-center gap-[52px] mt-[20px]'>
                <div className='bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center'> <Image src="/message.png"  width={32} height={32}/></div>
                <div className='bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center'><Image src="/call.png"  width={34} height={34}/></div>
                <div className='bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center'><Image src="/location.png"  width={36} height={36}/></div>
            </div>
            

        </div>
       
    </div> 
     <div className='flex justify-center items-center font-400 font-helvetica  p-2 md:hidden'>© 2023 Heartfulness. All rights reserved .</div>
     </div>
    );
}
 
export default Footer;