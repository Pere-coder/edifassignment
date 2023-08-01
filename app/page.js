import Facilities from "@/components/Facilities";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";
import Begin from "@/components/Begin";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Sports from "../components/Sports/Page";

import { FacilityProvider } from "@/components/ContextAPI/FacilityContext";

export default function Home() {
  return (
    <FacilityProvider>
      <div className="">
        <div className="bg-no-repeat bg-contain md:mt-0 h-[860px] sm:h-[1080px]  bg-[url('../public/background.jpg')] md:bg-none">
          <div className="md:bg-no-repeat sm:h-[1080px]   md:bg-right-top  md:min-h-screen  md:bg-[url('../public/background.jpg')]">
            <div className="h-[450px] md:h-[1040px] bg-gradient-to-b from-white via-transparent to-transparent  md:bg-gradient-to-r md:from-white md:to-transparent md:via-[#E6F2F4] ">
              <div className="ml-8 mr-8 sm:ml-10 sm:mr-10 md:ml-20 md:mr-20 ">
                <Navbar />

                <div className=" mt-36  md:mt-[130px] flex flex-col  items-center justify-center align-center   md:items-start  ">
                  <div className="shadow-custom text-center bg-gray-100 rounded-[40px] p-7 mt-5 w-[330px] sm:w-[600px] md:w-315 h-416 md:bg-transparent md:text-left md:mt-10 md:p-0 md:rounded-none md:shadow-none">
                    <div className="text-center text-14   sm:text-[16px] font-jost font-700 leading-20.23 text-[#0479CE]    md:text-[16px]  md:w-full md:text-start md:items-center ">
                      START YOUR HEALTHY LIFESTYLE!
                    </div>
                    <h1 className="scale-y-150 text-30  font-700 leading-[30px] font-bison text-sblack   w-226 mx-auto mt-10 flex justify-center items-center align-center sm:text-[40px] sm:leading-[40px] md:text-[47px]  md:w-430  md:leading-[48px] md:items-start md:mt-10 ">
                      BEGIN YOUR TRANSFORMATION TODAY
                    </h1>
                    <p className="mt-8 text-sblack  text-14 font-roboto leading-20 font-400 sm:mt-10 md:mt-10   md:w-96 md:text-14 md:leading-24 lg:text-18">
                      Heartfulness International Sports Center (HISC) empowers
                      children and youth to unlock their heart's potential
                      through sports, fostering holistic well being and personal
                      growth.
                    </p>
                    <div className="flex items-center justify-center align-center mx-auto cursor-pointer rounded-3xl border-2 border-current gap-3  w-175 h-50 mt-5 text-gray md:w-175 md:h-50 md:mx-0 ">
                      <div className="font-500 text-13.85 leading-16.23  font-roboto ">
                        Show More{" "}
                      </div>
                      <div>
                        <Image
                          src="/triangle.png"
                          width={23.47}
                          height={17.0}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="hidden md:flex justify-end mr-7 mt-[100px] text-vector cursor-pointer">
                <Image src="/vector.png" width={61} height={61} />
              </div> */}
            </div>
          </div>
        </div>
        <Begin />
        <Sports />
        <Team />

        <div className="flex flex-col justify-center items-center text-center mt-8 md:mt-20">
          <div className="bg-no-repeat h-[500px] sm:h-[700px] bg-[url('../public/sports.jpg')] w-full bg-center bg-cover md:bg-[url('../public/desktop.jpg')] md:h-[500px] lg:h-[600px] xl:h-[700px]">
            <div className="w-full h-[470px] sm:h-[700px] md:h-[500px] lg:h-[600px] xl:h-[700px]   bg-gradient-to-b from-[#000000]  to-transparent  md:w-full  md:bg-gradient-to-t md:from-[#000000] md:t0-transparent">
              <div className="flex  flex-col justify-center  items-center text-center   md:items-end md:mr-[20px]  lg:mr-[100px] xl:mr-[150px]">
                <div className="w-full h-[180px] leading-10 text-4xl sm:mt-[80px]  sm:leading-[60px] md:w-[500px] md:h-[310px]   text-white transform mt-10    md:leading-[60px] md:text-[50px] lg:text-[60px] md:text-[#F1F8FF] md:transform  md:text-start md:mt-[100px] lg:mt-[150px] xl:mt-[200px]">
                  <h1 className="font-bison font-bold mt-4 md:m-0 scale-y-150 ">
                    EXPERIENCE <br className="md:hidden" /> A{" "}
                    <br className="hidden md:block" /> DIFFERENT WAY{" "}
                    <br className="md:hidden" />
                    TO WORK OUT
                  </h1>
                  <div className="font-roboto text-lg leading-24 text-[#F1F8FF] sm:text-[35px] md:text-[18px] mt-8 sm:mt-16 md:text-start md:mt-10">
                    Unleashing Sporting Potential
                  </div>
                  <div className="flex justify-center text-center items-center mx-auto text-[13.98px] w-[250px] sm:w-[400px] sm:text-[18px] sm:h-[48px] md:text-[13.98px] md:h-[38px] md:w-[250px] mt-[200px] sm:mt-[270px] rounded-3xl  h-auto p-3 font-jost font-500 leading-20.23 text-white md:mt-5  bg-[#0479CE] md:mx-0">
                    START YOUR HEALTHY LIFESTYLE!
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-vector w-full  h-[168px] sm:h-[200px] mt-0 md:hidden">
            <div className="font-roboto font-700 text-18 sm:text-[30px] leading-24 text-center text-contact mt-[32px]">
              CONTACT US
            </div>
            <div className="flex justify-center items-center gap-[52px] sm:gap-[130px] mt-[20px] sm:mt-[40px]">
              <div className="bg-white w-[64px] h-[64px] rounded-full items-center  flex justify-center">
                {/* {" "} */}
                <Image src="/message2.png" width={32} height={32} />
              </div>
              <div className="bg-white w-[64px] h-[64px] rounded-full items-center flex justify-center">
                <Image src="/call2.png" width={34} height={34} />
              </div>
              <div className="bg-white w-[64px] h-[64px] rounded-full items-center flex justify-center">
                <Image src="/location2.png" width={36} height={36} />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:flex justify-center md:gap-5 lg:gap-10  xl:gap-10 items-center text-center mx-auto  md:w-[708px] h-[320px] bg-[#0479CE] mt-20 rounded-2xl text-white lg:w-[940px] xl:w-[1200px]">
          <div className="flex flex-col   items-center">
            <Image src="/message1.png" width={50} height={50} />
            <h1 className="font-roboto font-700 text-[24px] leading-[32px] mt-5">
              Email us
            </h1>
            <p className="font-sans font-400 text-[16px] leading-28 mt-5 md:w-[200px] lg:w-[250px] xl:w-[328px] md:h-[60px] lg:[58px] xl:h-[57px]">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <div className="rounded-xl border-2 border-white w-[207px] h-[40px] flex justify-center items-center md:mt-14 lg:mt-10 xl:mt-5">
              HISC@heartfulness.org
            </div>
          </div>

          <div className="flex flex-col  items-center">
            <Image src="/call1.png" width={50} height={50} />
            <h1 className="font-roboto font-700  leading-[32px] text-[24px] mt-5">
              Call us
            </h1>
            <p className="font-sans font-400 text-[16px] leading-28 mt-5 md:w-[200px] lg:w-[250px] xl:w-[328px] md:h-[60px] lg:[58px] xl:h-[57px]">
              Call us to speak to a member of our team.
              <br /> We are always happy to help.
            </p>
            <div className="rounded-xl border-2 border-white w-[179px] h-[40px] flex justify-center items-center md:mt-14 lg:mt-10 xl:mt-5">
              +91 9876543210
            </div>
          </div>

          <div className="flex flex-col   items-center">
            <Image src="/location1.png" width={80} height={50} />
            <h1 className="font-roboto font-700  leading-[32px] text-[24px] mt-2">
              Location
            </h1>
            <p className="font-sans font-400 text-[16px] leading-28 mt-2 md:w-[200px] lg:w-[250px] xl:w-[372px] md:h-[60px] lg:[58px] xl:h-[57px]">
              13-110, Kanha Village, Nandigama Mandal,Ranga Reddy District,
              Telangana, India Pin – 509325
            </p>
            <div className="rounded-xl gap-5 border-2 border-white w-[179px] h-[40px] flex justify-center items-center md:mt-14 lg:mt-10 xl:mt-5">
              Go to Maps{" "}
              <Image
                src="/arrow.png"
                width={13}
                height={16}
                className="leading-[16.1px] font-[900px] text-[14px]"
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </FacilityProvider>
  );
}
