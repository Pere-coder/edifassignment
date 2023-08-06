// import React,{ useState} from 'react'
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
// import useWindowDimensions from "./WinDemensins";

const members = [
  {
    id: 1,
    img: "/images/team_members/team_1.jpg",
    h1: "Shiva",
    small_p: "Fitness Coach",
    main_p:
      "Shiva has an impressive background, participating in the 46th National Cross Country Championship in 2012. With eight years of experience as a Fitness Coach, he plays a crucial role in the players' physical training.",
  },
  {
    id: 2,
    img: "/images/team_members/team_2.jpg",
    h1: "B. Sai Rohit B.",
    small_p: "Badminton Head Coach",
    main_p:
      "Sai Rohit, who represented India in the Asia Junior Championship, achieved an impressive 3rd place in the 43rd Yonex-Sunrise Dr. Akhilesh Das Gupta Memorial Junior (U-19) National Badminton Championship in 2018. With three years of coaching experience, he now leads as the Badminton Head Coach.",
  },
  {
    id: 3,
    img: "/images/team_members/team_3.jpg",
    h1: "Sona",
    small_p: "Gym Trainer",
    main_p:
      "Sona made history as the first Coimbatore fitness woman to secure two gold medals in the India Cup in 2019. With four years of experience as a Gym Trainer, she brings her expertise to help people achieve their fitness goals.",
  },
  {
    id: 4,
    img: "/images/team_members/team_4.jpg",
    h1: "Mridul",
    small_p: "Gym Trainer",
    main_p:
      "Mridul holds a Diploma in Personal Training and is a certified Heartfulness Yoga teacher. With two years of experience in Fitness First India and four years in the fitness industry, he serves as an Exercise Professional to support people in their fitness journey.",
  },
  {
    id: 5,
    img: "/images/team_members/team_5.jpg",
    h1: "Rema",
    small_p: "Badminton Assistant Coach",
    main_p:
      "Rema, ranked 7th in Badminton men's singles and 5th in Badminton men's doubles in Mizoram, boasts four years of coaching experience. As a Badminton Assistant Coach, Rema offers his skills and knowledge to the players.",
  },
  {
    id: 6,
    img: "/images/team_members/team_6.jpg",
    h1: "Raja Yadav",
    small_p: "Raja Yadav - squash coach",
    main_p:
      "Raja Yadav has 3 years of coaching experience and has represented his country in squash at the national level. He understands both coaching and playing, making him a great mentor for aspiring athletes.",
  },
  {
    id: 7,
    img: "/images/team_members/team_7.jpg",
    h1: "Puia",
    small_p: "Badminton Assistant Coach",
    main_p:
      "With seven years of coaching experience, Puia stands as a Gold Medalist in the Mizoram state Games. As a dedicated Badminton Assistant Coach, Puia brings valuable expertise to the team.",
  },
];

function Carousel_Team() {

  const responsive = {
    0: { items: 1 },
    1024: { items: 2 },
    //   1024: { items: 3 },
  };

  const item = members.map((item) => {
    return (
      <div
        className="  item md:h-[50%] w-auto md:w-full flex flex-col md:flex-row justify-center items-center "
        key={item.id}
        data-value={item.id}
      >
        <div className=" w-[15rem] md:min-w-[20rem] h-full bg-slate-300 rounded-xl overflow-hidden flex items-center justify-center">
          <Image
            src={item.img}
            width={350}
            height={400}
            alt="team"
            className="rounded-xl w-full"
          />
        </div>
        <div className=" p-4 lg:p-6 xl:p-8 h-full text-center md:text-left">
          <h1 className=" mt-2 md:mt-0 text-black text-3xl md:text-2xl xl:text-3xl">
            {item.h1}
          </h1>
          <p className=" text-base md:text-sm xl:text-base font-semibold text-[#0479CE]">
            {item.small_p}
          </p>
          <p className=" mt-4 text-sm md:text-lg xl:text-xl md:max-w-[20ch] w-[35ch]">
            {item.main_p}
          </p>
        </div>
      </div>
    );
  });

  return (
    <div className=" min-h-screen md:min-h-fit w-full mt-8 md:mt-0 text-black flex flex-col items-center justify-center gap-4">
      <div>
        <h1 className=" md:mt-20 sm:text-[40px] md:text-[47px] text-[30px] font-bold scale-y-150 font-bison">
          OUR TEAM
        </h1>
      </div>
      <div className=" mb-2  md:my-10 w-[35ch] md:w-[70vw]">
        <p className=" text-14 lg:text-xl text-center">
          Our trainers are highly skilled, experienced, and committed to your
          success. With their expertise, you'll receive personalised guidance
          and motivation, ensuring you achieve your fitness and sports goals
          effectively.
        </p>
      </div>
      <div className=" w-[90vw] cursor-grab">
        <AliceCarousel
          mouseTracking
          keyboardNavigation
          items={item}
          responsive={responsive}
          infinite
          autoPlay
          autoPlayStrategy="none"
          autoPlayInterval={2000}
          animationDuration={1000}
        //   animationType="fadeout"
          disableDotsControls
          disableButtonsControls
        />
      </div>
    </div>
  );
}

export default Carousel_Team;
