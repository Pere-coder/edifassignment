"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

function Mob({ data, setMobile, mobile }) {
  // console.log(mobile)
  mobile ? window.scrollTo({ top: 0, left: 0 }) : null;
  mobile ? disableBodyScroll(document) : enableBodyScroll(document);

  const imageVarient = {
    initial: {
      opacity: 0,
      y: 10,
      // transition: {
      //   duration: 0.5,
      // },
    },
    animate: {
      opacity: 1,
      y: 0,
      // transition: {
      //   duration: 0.5,
      // },
    },
    exit: {
      opacity: 0,
      y: 10,
      // transition: {
      //   duration: 0.5,
      // },
    },
    transition: {
      ease: "linear",
    },
  };

  const cardVarient = {
    initial: { y: 600 },
    animate: { y: 0 },
    exit: { y: 600, transition: { duration: 0.8 } },
    transition: { duration: 0.5 },
  };

  return (
    <AnimatePresence>
      {mobile && (
        <div className={" w-full relative "}>
          <AnimatePresence key={data.h2}>
            <motion.div
              className=" w-full min-h-[35vh]"
              variants={imageVarient}
              initial="initial"
              animate="animate"
              exit="exit"
              transition="transition"
            >
              <motion.div className="grid grid-rows-2 grid-flow-col">
                <Image
                  src={data.img[1]}
                  width={250}
                  height={0}
                  alt="img"
                  // placeholder="blur"
                  className="col-span-1 self-end"
                />
                <Image
                  src={data.img[3]}
                  width={250}
                  height={0}
                  alt="img"
                  // placeholder="blur"
                  className="col-span-1 self-start"
                />
                <Image
                  src={data.img[2]}
                  width={250}
                  height={0}
                  alt="img"
                  // placeholder="blur"
                  className="row-span-2"
                />
              </motion.div>
            </motion.div>
          </AnimatePresence>
          <div className=" w-full absolute top-0 h-[900px] bg-gradient-to-b from-white via-transparent to-transparent "></div>
          <motion.div
            className=" bg-white shadow rounded-t-[3rem] w-full min-h-[65vh] p-10 flex flex-col gap-4 absolute bottom-0 pb-[6rem]"
            variants={cardVarient}
            initial="initial"
            animate="animate"
            exit="exit"
            transition="transition"
          >
            <Image
              src={"/close.svg"}
              width={20}
              height={0}
              alt="close"
              className=" z-10 right-10 top-10 absolute cursor-pointer"
              onClick={() => setMobile(false)}
            />
            <div className=" flex items-end gap-4 mb-2 relative">
              <div className=" w-[4rem] h-[4rem] rounded-full bg-[#F1F8FF] relative">
                <AnimatePresence key={data.h1}>
                  <motion.div
                    initial={{ x: 50, width: 0 }}
                    animate={{ x: 0, width: "100%" }}
                  >
                    <Image
                      src={data.svg[1].img}
                      width={data.svg[1].widthMob}
                      height={0}
                      className={data.svg[1].positionMob}
                      alt={"badminton"}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
              <AnimatePresence key={data.h2}>
                <motion.div
                  className=" ml-4 text-lg font-dosis font-bold scale-y-150 absolute bottom-[-1rem] left-[4.2rem]"
                  style={{
                    color: data.color,
                  }}
                  initial={{ opacity: 0, y: 10, scaleY: 1.5 }}
                  animate={{ opacity: 1, y: 0, scaleY: 1.5 }}
                >
                  {data.h2}
                </motion.div>
              </AnimatePresence>
            </div>
            <AnimatePresence key={data.h1}>
              <motion.div
                className=" text-base font-bold font-dosis text-black scale-y-150 my-2 mt-4"
                initial={{ opacity: 0, y: 10, scaleY: 1.5 }}
                animate={{ opacity: 1, y: 0, scaleY: 1.5 }}
              >
                {data.h1}
              </motion.div>
              <motion.div
                className=" text-justify text-xs text-black"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {data.p}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default Mob;
