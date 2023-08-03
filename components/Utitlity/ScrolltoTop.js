"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

function ScrolltoTop() {
  const [scrollPos, setScrollPos] = useState(null);

  useEffect(() => {
    function scrollpostion() {
      const position = window.scrollY;
      setScrollPos(position);

    }
    window.addEventListener("scroll", scrollpostion);

    return () => window.removeEventListener("scroll", scrollpostion);
  }, []);

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <AnimatePresence>
      {scrollPos > 100 && (
      <motion.div
        className=" fixed z-40 md:flex right-7 bottom-7 text-vector cursor-pointer"
        onClick={scrollTop}
        initial={{ y: 200 }}
        animate={{ y: 0 }}
        exit={{ y: 200 }}
      >
        <Image src="/vector.png" className=" w-[3rem] h-[3rem] md:w-[4rem] md:h-[4rem]" width={61} height={61} />
      </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrolltoTop;
