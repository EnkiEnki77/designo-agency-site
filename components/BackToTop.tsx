import React, { useEffect, useState } from "react";
import { ArrowSmallUpIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

type Props = {
  yPosition: number;
  toggle: boolean;
};

const BackToTop = ({ yPosition, toggle }: Props) => {
  const [scroll, setScroll] = useState(false);

  const handleScrollToTop = () => {
    setScroll((prev) => !prev);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [scroll]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 0 }}
      animate={{
        opacity: yPosition > 400 && !toggle ? 1 : 0,
        y: [3, -4],
      }}
      transition={{ y: { yoyo: Infinity }, duration: 0.5 }}
      onClick={handleScrollToTop}
      className={` ${
        yPosition < 400
          ? "pointer-events-none"
          : yPosition > 400 && toggle && "pointer-events-none"
      } w-10 h-10 rounded-full bg-peach hover:bg-lightPeach fixed top-[575px] md:top-[650px] md:right-[60px] right-[20px] z-50 flex flex-col 
      items-center justify-center cursor-pointer  shadow-[0_4px_10px_1px]  shadow-black `}
    >
      <ArrowSmallUpIcon className=" w-6 h-6" />
    </motion.div>
  );
};

export default BackToTop;
