'use client'
import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Carousel_Team from '@/components/Carousel_Team'
import { useSignUp } from "@/components/ContextAPI/SignUpContext";


function Vision() {

  const { toggleSignUp } = useSignUp();


  return (
    <div>
      <div className="bg-no-repeat bg-center bg-cover lg:w-full lg:h-[835px] md:h-[800px] w-full h-[398px] blur-  bg-[url('../public/background2.jpeg')]">
        <div className="ml-10 mr-10 sm:ml-10 sm:mr-10 md:ml-20 md:mr-20 ">
          <Navbar />
        </div>
        <div className=" mt-[5rem] flex flex-col items-center justify-center w-full lg:mb-[80px]">
          <div className="mt-[4rem] flex flex-col items-center justify-center w-[315px]  lg:bg-transparent md:bg-transparent bg-blue-50 rounded-[40px]">
            <p className="text-[14px] text-[#0479CE]   rounded-3xl  text-center font-jost lg:w-[444px] md:w-full w-[262px] uppercase mt-7 font-bold">
              Welcome to Heartfulness International Sports Center <br />
              <span className="md:hidden">(HISC)</span>
            </p>
            <h1 className="hidden  md:text-[35px] md:mt-[2rem] font-bison  sm:leading-[40px] md:block lg:text-[40px] text-[30px] text-center lg:w-[718px] md:w-[600px] font-700 leading-[40px] uppercase w-[262px]  text-sblack scale-y-150">
              Empowering Youth through
              <br />
              Sports Excellence
            </h1>
            <h1 className="mt-10 font-700 leading-[25px] font-bison md:text-[35px]  sm:leading-[40px]:hidden md:hidden lg:text-[40px]  text-[25px] text-center lg:w-[718px]   leading-[30px] uppercase w-[262px] scale-y-150 text-sblack">
              <span className="whitespace-nowrap ">Empowering Youth</span>
              <span> through Sports</span> Excellence
            </h1>

            <p className="p-2 pb-8 mt-7 font-roboto lg:text-lg md:text-[18px] text-[14px] lg:w-[960px] md:w-[600px] w-[283px] lg:mt-20 md:mt-3  text-center text-black">
              At the Heartfulness Institute, we are committed to fostering
              holistic well-being and empowering individuals to tap into the
              infinite potential of their hearts. Through the Heartfulness
              International Sports Center (HISC), we impact thousands of
              children and youth, helping them connect with their hearts'
              potential through sports.
            </p>
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-center lg:mt-[-130px] md:mt-[-70px] mt-7  gap-4 ">
          <div className=" lg:w-[502px] lg:h-[249px]  relative  w-[315px] h-[264px] md:mt-16 lg:rounded-none rounded-[40px] overflow-hidden">
            <div className=" absolute h-full w-full bg-black md:hidden"></div>
            <Image
              className=" object-cover  lg:w-[502px] lg:h-[249px] md:w-[315px] md:rounded-md md:h-[265px] w-[315px] h-[264px]  rounded-[40px] lg:blur-none md:blur-none blur-lg"
              src="/images/vision.png"
              width={315}
              height={264}
              alt="Our Vision"
            />
            <h1 className=" text-center md:p-0 p-2  md:relative md:bottom-[140px]  md:text-center relative bottom-[260px]  text-[30px]  font-bold font-bison lg:text-[40px] text-white  scale-y-150 pt-5 md:text-[#FB491D]">
              OUR VISION
            </h1>
            <p className="mt-6  lg:hidden md:hidden absolute inset-0 bg-blur left-5 top-14 w-[269px] h-[160px] text-white text-center  text-14 lg:text-18">
              At HISC, we believe in the power of sports to instill lifelong
              learning, foster self-confidence, and cultivate leadership skills
              among our youth. We aim to nurture future champions and promote
              sporting excellence, while fostering personal growth and holistic
              well-being.
            </p>
          </div>

          <div className="lg:w-[502px] lg:h-[249px] relative w-[316px] h-[265px] md:mt-16 lg:rounded-none rounded-[40px] overflow-hidden mt-5">
            <div className=" absolute h-full w-full bg-black md:hidden"></div>
            <Image
              className="object-cover lg:w-[502px] lg:h-[249px] md:w-[315px] md:h-[265px]  md:rounded-md rounded-[40px] w-[315px] h-[264px] lg:blur-none md:blur-none blur-lg"
              src="/images/origin.png"
              width={315}
              height={264}
              alt="Our Origin"
            />
            <h1 className=" text-center md:p-0 p-2 md:relative md:bottom-[140px] lg:text-center relative bottom-[260px]  text-[30px]  font-bold font-bison lg:text-[40px] text-white p-5 scale-y-150 md:text-[#FB491D]">
              OUR ORIGINS
            </h1>
            <p className="mt-6 lg:hidden md:hidden absolute inset-0 bg-blur left-5 top-14 w-[269px] h-[160px] text-white text-center text-[14px]  lg:text-18">
              HISC was established in 2020 with guidance from renowned sports
              icons like Pullela Gopichand and P. V. Sindhu. We have partnered
              with esteemed organizations including the Ministry of Sports
              (Government of India), Khelo India, FIT India, and the Pullela
              Gopichand Badminton Academy.
            </p>
          </div>
        </div>

        <div className="w-full lg:h-[488px]  mt-[-120px] md:h-[588px]  h-[650px]  flex flex-col items-center justify-center bg-[#0479CE]">
          <h1 className="sm:text-[40px]  sm:leading-[40px] text-center leading-[30px] font-bison md:w-full w-[350px] lg:mb-0 md:mt-[150px] mt-[150px] text-[30px] font-700 uppercase text-white scale-y-150  md:text-[35px] lg:text-[47px]">
            Inauguration and Location
          </h1>
          <p className="text-center  w-[315px] md:w-[70%] md:p-8 font-poppins  text-white mt-10 md:mt-5 text-14 lg:text-lg">
            HISC was inaugurated on 26th February 2023 at Kanha Shanti Vanam, a
            serene location known for holistic well-being and home to the
            world's largest meditation center. The inauguration ceremony was
            graced by the presence of Shri Shri Anurag Thakur - Union Minister
            for Information & Broadcasting and Youth Affairs & Sports,
            Government of India; Shri Srinivas Goud - Hon'ble Minister of
            Prohibition & Excise, Sports & Youth Services, Tourism & Culture and
            Archaeology of Telangana; Shri Pullela Gopichand - ace Indian
            Badminton Coach, and Shri Kamlesh Patel ‘Daaji’ – Guide of
            Heartfulness Meditation Worldwide and President of Shri Ram Chandra
            Mission.
          </p>
        </div>
        <div>
          <Carousel_Team />
        </div>
        <div className="P-3 w-full md:h-[430px] sm:h-[490px] md:mt-[100px] mt-10 flex flex-col items-center justify-center bg-[#0479CE] ">
          <h1 className="scale-y-150 md:w-[525px]  md:h-[72px] w-[262px] text-center font-bison  text-[30px] md:mb-2 mb-4 mt-8  text-white font-700 leading-[30px] sm:text-[40px] md:text-[47px]  sm:leading-[40px]">
            JOIN US AT HISC
          </h1>
          <p className="xl:w-[1234px] lg:w-[1000px] md:w-full md:h-[78px] w-[315px] md:p-5 text-white text-center font-poppins text-14 lg:text-18 ">
            Be a part of the Heartfulness International Sports Center community,
            where sports and holistic well-being merge. Explore our facilities,
            experience the joy of sports, and unlock your potential. Let's
            nurture future champions and empower youth through the
            transformative power of sports. Contact us today or visit our
            facility. We look forward to welcoming you to HISC!
          </p>
          <button className="w-[175px] h-50 text-black bg-white mt-6 rounded-3xl p-2 font-jost font-500 text-[13.85px] md:mt-16 mb-7"
          onClick={() => toggleSignUp(true)}
          >
            SIGN UP NOW
          </button>
        </div>
        <Gallery />
        <Footer />
      </div>
    </div>
  );
}

export default Vision;