import React from "react";
import { motion } from "framer-motion";

type Props = {
  img: string;
  title: string;
  description: string;
  even: boolean;
  width: number;
};

const Offering = (props: Props) => {
  const path = `../public/assets/home/desktop/${props.img}`;
  console.log(path);
  // x: props.even ? -300 : 300,

  // initial={{ opacity: 0, y: 100 }}
  // whileInView={{
  //   x: 0,
  //   y: 0,
  //   opacity: 1,
  //   transition: { duration: 1, delay: 0.3 },
  // }}
  // viewport={{ once: true }}

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <motion.div
      viewport={{ once: true }}
      variants={item}
      initial={props.width < 1024 ? "hidden" : undefined}
      whileInView={props.width < 1024 ? "show" : undefined}
      className="flex flex-col md:flex-row lg:flex-col  items-center gap-8 "
    >
      <div className="min-w-[202px] min-h-[202px] h-auto relative">
        <img
          className="absolute -z-10"
          src={
            require(`../public/assets/home/desktop/bg-pattern-hero-home.svg`)
              .default.src
          }
        />
        <img
          className="mb-4"
          src={
            require(`../public/assets/home/desktop/${props.img}`).default.src
          }
          alt=""
        />
      </div>
      <div className="flex flex-col  gap-8 md:gap-4 md:justify-center ">
        <h3 className="text-black text-center md:text-left lg:text-center">
          {props.title}
        </h3>
        <p className="text-black text-center px-2 md:text-left md:px-0 lg:text-center">
          {props.description}
        </p>
      </div>
    </motion.div>
  );
};

export default Offering;
