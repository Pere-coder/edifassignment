import Image from 'next/image'


const Footer = () => {
    return ( 
    
    <div className=''>
    <div className=" flex flex-col justify-center items-center text-center mt-0 md:mt-20">

    {/* bg-[url('../public/desktop.jpg')] */}
        <div className="bg-no-repeat bg-center w-[375px] bg-[url('../public/sports.jpg')] h-[470px]  md:bg-[url('../public/desktop.jpg')]  md:w-full">
            <div className="w-[375px] h-[470px]   bg-gradient-to-b from-[#000000]  to-transparent  md:w-full  md:bg-gradient-to-b md:from-[#000000] md:t0-transparent">
                <div className='flex  flex-col justify-center  items-center text-center mt-2  md:items-end md:mr-[40px] md:mt-20 lg:mr-[200px]'>
                    <div className='md:mt-5  font-bison font-500 leading-[40px] text-[35px] text-white transform mt-10   md: md:leading-[50px] md:text-[30px] lg:text-[50px] md:text-[#F1F8FF] md:transform  md:text-start '>
                        <h1 className='scale-y-125 md:scale-y-100 '>EXPERIENCE<br className='md:hidden'/> A <br className='md:'/> DIFFERENT WAY <br/> TO WORK OUT</h1>
                        <div className='font-roboto font-700 text-18 leading-24 text-[#F1F8FF] mt-5 md:text-start '>Unleashing Sporting Potential</div>
                        <div className="flex justify-center text-center items-center mx-auto text-[13.98px] w-[250px] mt-[200px] rounded-3xl  h-[38px] p-2 font-jost font-500 leading-20.23 bg-custom text-white md:mt-5  md:bg-[#0479CE] md:mx-0">START YOUR HEALTHY LIFESTYLE!</div> 
                    </div>
                    
                </div>
            </div>
        </div>

        <div className='bg-vector w-[375px] h-[168px] mt-0 md:hidden'>
            <div className='font-roboto font-700 text-18 leading-24 text-center text-contact mt-[32px]'>CONTACT US</div>
            <div className='flex justify-center items-center gap-[52px] mt-[20px]'>
                <div className='bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center'> <Image src="/message.png"  width={32} height={32}/></div>
                <div className='bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center'><Image src="/call.png"  width={34} height={34}/></div>
                <div className='bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center'><Image src="/location.png"  width={36} height={36}/></div>
            </div>
        </div>
        <div className='flex justify-center items-center font-400 font-helvetica  p-2 md:hidden'>© 2023 Heartfulness. All rights reserved .</div>

        <div className='hidden md:flex justify-center items-center text-center mx-auto md:gap-5 md:w-[600px] h-[320px] bg-[#0479CE] mt-20 rounded-2xl text-white lg:gap-[70px] lg:w-[1000px] xl:w-[1200px] xl:gap-[100px]'>
            <div className='flex flex-col gap-2 mt-16 items-center'><Image src="/message1.png"  width={32} height={32}/>
            <h1 className='font-roboto font-700  leading-[32px] text-[18px]'>Email us</h1>
            <p className='h-[54px] md:w-[100px] md:text-[5px] lg:w-[200px]  lg:text-[10px] font-400 font-sans'>Email us for general queries, including marketing and partnership opportunities.</p>
            <div className='bg-transparent md:w-[150px] md:text-[10px] md:h-[20px] lg:w-[200px] lg:h-[40px] border-2 border-white md:mt-2 lg:mt-5 flex justify-center items-center font-sans rounded-[5px]'>HISC@heartfulness.org</div>
            </div>

            <div className='flex flex-col gap-2 mt-16 items-center'><Image src="/call1.png"  width={32} height={32}/>
            <h1 className='font-roboto font-700  leading-[32px] text-[18px]'>Call us</h1>
            <p className='h-[54px] md:w-[100px] md:text-[5px] lg:w-[200px]  lg:text-[10px] font-400 font-sans'>Call us to speak to a member of our team.<br/> We are always happy to help.</p>
            <div className='bg-transparent md:w-[150px] md:text-[10px] md:h-[20px] lg:w-[200px] lg:h-[40px] border-2 border-white  md:mt-2 lg:mt-5 flex justify-center items-center font-sans rounded-[5px]'>+91 9876543210</div>
            </div>

            <div className='flex flex-col gap-2 mt-16 items-center'><Image src="/location1.png"  width={32} height={32}/>
            <h1 className='font-roboto font-700  leading-[32px] text-[18px] '>Location</h1>
            <p className='h-[54px] md:w-[100px] md:text-[5px] lg:w-[200px]  lg:text-[10px] font-400 font-sans'>13-110, Kanha Village, Nandigama Mandal,<br/> Ranga Reddy District, Telangana, India Pin – 509325</p>
            <div className='bg-transparent md:w-[150px] md:text-[10px] md:h-[20px] lg:w-[200px] lg:h-[40px] border-2 border-white  md:mt-2 lg:mt-5 flex justify-center items-center font-sans rounded-[5px]'>Go to Maps <Image src='/arrow.png' width={13} height={16} className="ml-7"/></div>
            </div>
        </div>


        <div className='hidden md:flex  justify-center items-center md:gap-[100px] lg:gap-[400px] h-[200px] border-b border-b-[#2B3D51] md:w-[500px] lg:w-[900px] xl:w-[1000px]'>
            <div>
                <ul className='flex md:gap-10 lg:gap-12 xl:gap-14 font-roboto font-500  text-[10px] leading-[18.75px] text-[#252525]'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Facility</li>
                    <li>FAQS</li>
                </ul>
            </div>
            <div>
                <ul className='flex md:gap-5 lg:gap-10'>
                    <li><Image src='/facebook.png' width={24.67} height={24}/></li>
                    <li><Image src='/twitter.png' width={24.67} height={20}/></li>
                    <li><Image src='/youtube.png' width={24.67} height={17}/></li>
                </ul>
            </div>

          

        </div>

        {/* <div className='bg-[#0A142F] w-[1102.97px] h-[1px] mt-5'></div> */}

        

        <div className='hidden md:flex justify-center items-center text-center mt-10 md:gap-[50px] lg:gap-[200px]'>
            <div className='font-400 text-[10px] leading-[16.7px] text-[#0A142F] font-helvetica'>© 2023 Heartfulness. All rights reserved .</div>
            <div><Image src='/heart.jpg' width={100} height={100}/></div>
            <div className='font-400 text-[10px] leading-[16.7px] flex md:gap-5 lg:gap-10 font-helvetica text-[#0A142F]'><p>Terms of Service </p><p>Privacy Policy</p> </div>


        </div>
        
       
       
    </div> 
    
     </div>
    );
}
 
export default Footer;