import React, { useEffect, useRef, useState } from "react";
import { useInView, motion } from "framer-motion";
import Image from "next/image";

function Carditems({ children, handleCards, setSelect, data }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });
  const isUpView = useInView(ref, { margin: "-30% 0px -30% 0px" });
  const isDownView = useInView(ref, { margin: "-70% 0px -70% 0px" });
  let id = data.h2.toLowerCase();
  useEffect(() => {
    if (isInView) {
      setSelect((prev) =>{
        return id;
      });;
    }
  }, [isInView]);
  // console.log(data.id)

  return (
    <>
      <motion.div
        ref={ref}
        key={id}
        id={id}
        className={
          "sticky top-[7rem] bottom-[7rem] lg:bottom-[4rem] lg:top-[4rem] transition-opacity " +
          (isInView ? " z-10 shadow-lg " : "z-0 ") 
        }
        animate={{
          scale: isInView ? 1 : 0.8,
          filter: isInView ? "blur(0px)" : "blur(15px)",
        }}
        transition={{ duration: 0.2 }}
      >
        <motion.div className=" relative md:w-[200px] md:h-[290px] xl:w-[240px] xl:h-[260px] bg-white rounded-[8px] flex flex-col items-center justify-center">
          <div className=" left-[-2rem] top-[-2.5rem] relative bg-[#F1F8FF] rounded-full md:w-[80px] md:h-[80px] lg:w-[80.59px] lg:h-[80.59px] ">
            <Image
              src={data.svg[1].img}
              width={data.svg[1].width}
              height={0}
              className={" absolute " + data.svg[1].position}
              alt={id}
            />
          </div>
          <div className=" absolute text-[#1F1F1F] font-bison scale-y-150 font-bold md:text-base lg:text-lg bottom-[25%] left-[15%]">
            {data.h2}
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}

export default Carditems;
