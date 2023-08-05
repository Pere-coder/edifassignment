"use client";

import React, { useState } from "react";
import Carditems from "./feature/carditems";
import Image from "next/image";

function Desk({ data }) {
  const [select, setSelect] = useState("badminton");
  const keys = Object.keys(data);
  console.log(select);

  const handleClick = (anchor) => () => {
    const element = document.getElementById(anchor);
    console.log(element);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleCards = (update) => {
    // console.log(data[update].id);
    setSelect((prev) => update);
  };

  return (
    <div
      className=" min-h-screen transition-colors max-sm:hidden"
      style={{ background: data[select].color }}
    >
      <div className=" flex h-full ">
        <div className=" w-fit sticky top-0 pl-8 h-screen flex items-center">
          <ul className="flex flex-col gap-4">
            <div
              className=" relative  w-[40px] h-[40px] xl:w-[50.63px] xl:h-[50.63px] rounded-full mb-4 cursor-pointer "
              style={{
                backgroundColor: select !== "badminton" ? "#c1e5e9" : "#FFFFFF",
              }}
              onClick={() => handleClick("badminton")}
            >
              <Image
                src={"/badminton-icon.svg"}
                width={35.03}
                height={39.65}
                className=" absolute right-[-0.90rem] top-[-0.3rem] w-[28px] xl:w-[35px]"
                alt="icon"
              />
            </div>
            <div
              className=" relative w-[40px] h-[40px] xl:w-[50.63px] xl:h-[50.63px] rounded-full mb-4 cursor-pointer "
              style={{
                backgroundColor: select !== "gym" ? "#c1e5e9" : "#FFFFFF",
              }}
              onClick={() => handleClick("gym")}
            >
              <Image
                src={"/gym-icon.svg"}
                width={30.87}
                height={39.5}
                className=" absolute top-[-0.2rem] right-[-0.90rem] w-[25px] xl:w-[30px]"
                alt="icon"
              />
            </div>
            <div
              className=" relative w-[40px] h-[40px] xl:w-[50.63px] xl:h-[50.63px] rounded-full mb-4 cursor-pointer "
              style={{
                backgroundColor: select !== "swimming" ? "#c1e5e9" : "#FFFFFF",
              }}
              onClick={() => handleClick("swimming")}
            >
              <Image
                src={"/swiming-icon.svg"}
                width={50.54}
                height={19.2}
                className=" absolute -right-6 top-[0.75rem]"
                alt="icon"
              />
            </div>
            <div
              className=" relative w-[40px] h-[40px] xl:w-[50.63px] xl:h-[50.63px] rounded-full mb-4 cursor-pointer "
              style={{
                backgroundColor: select !== "squash" ? "#c1e5e9" : "#FFFFFF",
              }}
              onClick={() => handleClick("squash")}
            >
              <Image
                src={"/tennis-icon.svg"}
                width={45.3}
                height={38.13}
                className=" absolute right-[-1rem] xl:right-[-1.2rem] top-[-0.2rem] w-[38px] xl:w-[45px]"
                alt="icon"
              />
            </div>
          </ul>
        </div>
        <div className=" w-1/3 h-full">
          <div className="items-center flex flex-col gap-8 py-[60vh]">
            {keys.map((item) => {
              return (
                <Carditems
                  data={data[item]}
                  handleCards={handleCards}
                  key={data[item].h2}
                />
              );
            })}
          </div>
        </div>
        <div className=" w-full h-screen sticky top-0">images</div>
      </div>
    </div>
  );
}

export default Desk;
