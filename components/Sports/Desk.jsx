"use client";

import React, { useEffect, useState } from "react";
import Carditems from "./feature/carditems";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

function Desk({ data }) {
  const [select, setSelect] = useState("badminton");
  const [anchor, setAnchor] = useState(null);
  const keys = Object.keys(data);
  // console.log(select);

  const handleClick = (a) => {
    // console.log(a);
    setAnchor(() => a)
  };
  useEffect(() => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [anchor])

  const handleCards = (update) => {
    // console.log(data[update].id);
    setSelect((prev) => update);
  };

  return (
    <div
      id="facility"
      className=" min-h-screen transition-colors duration-500 max-sm:hidden "
      style={{ background: data[select].color }}
    >
      <div className=" flex h-full ">
        <div className=" w-fit sticky top-0 pl-8 h-screen flex items-center">
          <ul className="flex flex-col gap-0">
            <div
              href="/#badminton"
              className=" relative  w-[40px] h-[40px] rounded-full mb-4 cursor-pointer "
              style={{
                backgroundColor: select !== "badminton" ? "#c1e5e9" : "#FFFFFF",
              }}
              // onClick={() => handleClick("badminton")}
            >
              <Image
                src={"/badminton-icon.svg"}
                width={35.03}
                height={39.65}
                className=" absolute right-[-0.90rem] top-[-0.3rem] w-[28px]"
                alt="icon"
              />
            </div>
            <div
              className=" relative w-[40px] h-[40px] rounded-full mb-4 cursor-pointer "
              style={{
                backgroundColor: select !== "gym" ? "#c1e5e9" : "#FFFFFF",
              }}
              onClick={() => handleClick("gym")}
            >
              <Image
                src={"/gym-icon.svg"}
                width={30.87}
                height={39.5}
                className=" absolute top-[-0.2rem] right-[-0.90rem] w-[25px] "
                alt="icon"
              />
            </div>
            <Link
              href="/#swimming"
              className=" relative w-[40px] h-[40px] rounded-full mb-4 cursor-pointer "
              style={{
                backgroundColor: select !== "swimming" ? "#c1e5e9" : "#FFFFFF",
              }}
              // onClick={() => handleClick("swimming")}
            >
              <Image
                src={"/swiming-icon.svg"}
                width={50.54}
                height={19.2}
                className=" absolute -right-6 top-[0.75rem]"
                alt="icon"
              />
            </Link>
            <div
              className=" relative w-[40px] h-[40px] rounded-full mb-4 cursor-pointer "
              style={{
                backgroundColor: select !== "squash" ? "#c1e5e9" : "#FFFFFF",
              }}
              onClick={() => handleClick("squash")}
            >
              <Image
                src={"/tennis-icon.svg"}
                width={45.3}
                height={38.13}
                className=" absolute right-[-1rem] xl:right-[-1.2rem] top-[-0.2rem] w-[38px] "
                alt="icon"
              />
            </div>
          </ul>
        </div>
        <div className=" w-1/3 h-full">
          <div className="items-center flex flex-col gap-8 py-[110%]">
            {keys.map((item) => {
              return (
                <Carditems
                  data={data[item]}
                  handleCards={handleCards}
                  setSelect={setSelect}
                  key={data[item].h2}
                />
              );
            })}
          </div>
        </div>
        <AnimatePresence key={select}>
          <div className=" w-full h-[100vh] flex items-center sticky top-0">
            {/* Side heading & paragraph */}
            <div className=" ml-8 md:w-[25%] lg:w-[50%] gap-16 flex flex-col">
              <motion.h1
                className=" text-white font-bison md:text-2xl lg:text-3xl xl:text-4xl font-bold scale-y-150"
                initial={{ y: 20, scaleY:1.5 }}
                animate={{ y: 0, scaleY:1.5 }}
              >
                {data[select].h1}
              </motion.h1>
              <motion.p
                className=" text-white md:text-xs lg:text-sm xl:text-md leading-6 scale-y-150"
                initial={{ y: 20, scaleY:1.5 }}
                animate={{ y: 0, scaleY:1.5 }}
              >
                {data[select].p}
              </motion.p>
            </div>
            {/* End Side heading & paragraph */}

            {/* Two flooted SVGs */}
            <Image
              src={data[select].svg[2].img}
              width={69.0}
              height={69.0}
              className=" absolute md:top-[20%] lg:top-[20%] left-[0%] md:w-[60px] lg:w-auto lg:h-auto "
              alt="svg1"
            />
            <Image
              src={data[select].svg[2].img}
              width={69.0}
              height={69.0}
              className=" absolute md:bottom-[30%] md:right-[30%] lg:bottom-[28%] lg:right-[25.5%] md:w-[50px] lg:w-auto lg:h-auto -scale-x-100"
              alt="svg2"
            />
            {/* End SVGs */}

            {/* Sports Images */}
            <Image
              src={data[select].img[1]}
              width={343}
              height={248}
              className=" absolute md:top-[4rem] lg:top-0 right-[12%] md:w-[250px] "
              alt="img1"
            />
            <Image
              src={data[select].img[2]}
              width={359}
              height={753}
              className=" absolute right-0 z-10 md:w-[250px] "
              alt="img2"
            />
            <Image
              src={data[select].img[3]}
              width={270}
              height={250}
              className=" absolute md:bottom-[4rem] lg:bottom-0 right-[18%] z-20 md:w-[200px]"
              alt="img3"
            />
            {/* End Sports Images */}
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Desk;
