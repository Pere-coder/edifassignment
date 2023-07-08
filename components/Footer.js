import Image from 'next/image'


const Footer = () => {
    return ( 
    
    <div className=''>
    <div className="flex flex-col justify-center items-center text-center mt-0 md:mt-20">
        <div className="bg-no-repeat bg-cover bg-center w-[375px] bg-[url('../public/sports.jpg')] h-[470px]  md:h-[530px] md:bg-[url('../public/desktop.jpg')]  md:w-full">
            <div className="w-[375px] h-[470px]   bg-gradient-to-b from-[#000000]  to-transparent  md:w-full  md:bg-gradient-to-b md:from-[#000000] md:t0-transparent">
                <div className='flex  flex-col justify-center  items-center text-center   md:items-end md:mr-[20px]  lg:mr-[200px]'>
                    <div className='w-[316px] h-[180px] md:w-[365px] md:h-[310px] leading-[40px] text-[35px] text-white transform mt-10   md:leading-[60px] md:text-[50px] lg:text-[60px] md:text-[#F1F8FF] md:transform  md:text-start md:mt-[100px]'>
                        <h1 className='font-bison font-500  scale-y-150 md:scale-y-125 '>EXPERIENCE <br/>A   DIFFERENT WAY TO WORK OUT</h1>
                        <div className='font-roboto font-700 text-18 leading-24 text-[#F1F8FF] mt-8 md:text-start md:mt-10'>Unleashing Sporting Potential</div>
                        <div className="flex justify-center text-center items-center mx-auto text-[13.98px] w-[250px] mt-[190px] rounded-3xl  h-[38px] p-2 font-jost font-500 leading-20.23 bg-custom text-white md:mt-5  md:bg-[#0479CE] md:mx-0">START YOUR HEALTHY LIFESTYLE!</div> 
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

        <div className='hidden md:flex justify-center md:gap-5 lg:gap-10  xl:gap-10 items-center text-center mx-auto  md:w-[708px] h-[320px] bg-[#0479CE] mt-20 rounded-2xl text-white lg:w-[940px] xl:w-[1200px]'>
            <div className='flex flex-col   items-center'><Image src="/message1.png"  width={50} height={50}/>
            <h1 className='font-roboto font-700 text-[24px] leading-[32px] mt-5'>Email us</h1>
            <p className='font-sans font-400 text-[16px] leading-28 mt-5 md:w-[200px] lg:w-[250px] xl:w-[328px] md:h-[60px] lg:[58px] xl:h-[57px]'>Email us for general queries, including marketing and partnership opportunities.</p>
            <div className='rounded-xl border-2 border-white w-[207px] h-[40px] flex justify-center items-center md:mt-14 lg:mt-10 xl:mt-5'>HISC@heartfulness.org</div>
            </div>

            <div className='flex flex-col  items-center'><Image src="/call1.png"  width={50} height={50}/>
            <h1 className='font-roboto font-700  leading-[32px] text-[24px] mt-5'>Call us</h1>
            <p className='font-sans font-400 text-[16px] leading-28 mt-5 md:w-[200px] lg:w-[250px] xl:w-[328px] md:h-[60px] lg:[58px] xl:h-[57px]'>Call us to speak to a member of our team.<br/> We are always happy to help.</p>
            <div className='rounded-xl border-2 border-white w-[179px] h-[40px] flex justify-center items-center md:mt-14 lg:mt-10 xl:mt-5'>+91 9876543210</div>
            </div>

            <div className='flex flex-col   items-center'><Image src="/location1.png"  width={80} height={50}/>
            <h1 className='font-roboto font-700  leading-[32px] text-[24px] mt-2'>Location</h1>
            <p className='font-sans font-400 text-[16px] leading-28 mt-2 md:w-[200px] lg:w-[250px] xl:w-[372px] md:h-[60px] lg:[58px] xl:h-[57px]'>13-110, Kanha Village, Nandigama Mandal,Ranga Reddy District, Telangana, India Pin – 509325</p>
            <div className='rounded-xl gap-5 border-2 border-white w-[179px] h-[40px] flex justify-center items-center md:mt-14 lg:mt-10 xl:mt-5'>Go to Maps <Image src='/arrow.png' width={13} height={16} className="leading-[16.1px] font-[900px] text-[14px]"/></div>
            </div>
        </div>

        <div className='hidden md:mt-12 md:flex xl:w-[1102.97px] items-center justify-center md:gap-[125px] lg:gap-[250px] xl:gap-[500px] '>
            <div>
                <ul className='flex md:gap-10 lg:gap-12 xl:gap-14 font-roboto font-500  text-[16px] leading-[18.75px] text-[#252525]'>
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

        <div className='hidden md:flex  mt-16 justify-center items-center md:gap-[100px] lg:gap-[200px] h-[10px] border-b border-b-[#2B3D51] md:w-[600px] lg:w-[800px] xl:w-[1100px]'> </div>
           
          

       

    

        <div className='hidden md:flex justify-center items-center text-center mt-10 md:gap-[60px] lg:gap-[150px] xl:gap-[280px] p-8'>
            <div className='font-400 text-[14px] leading-[16.7px] text-[#0A142F] font-helvetica'>© 2023 Heartfulness. All rights reserved .</div>
            <div><Image src='/heart.jpg' width={100} height={100}/></div>
            <div className='font-400 text-[14px] leading-[16.7px] flex md:gap-5 lg:gap-10 font-helvetica text-[#0A142F]'><p>Terms of Service </p><p>Privacy Policy</p> </div>


        </div>
        
       
       
    </div> 
    
     </div>
    );
}
 
export default Footer;