import Link from "next/link";
import React, { useEffect, useState } from "react";
import arrow from "../public/assets/shared/desktop/icon-right-arrow.svg";
import { motion } from "framer-motion";

const img2 = require("../public/assets/home/desktop/image-graphic-design.jpg");
const img3 = require("../public/assets/home/desktop/image-app-design.jpg");

type Props = {
  img: { mobile: string; tablet: string; desktop: string };
  title: string;
  path: string;
  className?: string;
  width: number;
};

const ProjectCategory = (props: Props) => {
  console.log(props.className);

  console.log(props.width);

  const item = {
    hidden: {
      opacity: 0,
      x:
        props.width >= 1024 && props.title !== "web design"
          ? 100
          : props.width < 1024
          ? -100
          : 0,
      y: props.width >= 1024 && props.title === "web design" ? 100 : 0,
    },

    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5 },
    },
  };
  return (
    <>
      {props.width !== 0 ? (
        <motion.div
          variants={item}
          initial={props.width < 1024 ? "hidden" : undefined}
          whileInView={props.width < 1024 ? "show" : undefined}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.98 }}
          viewport={{ once: true }}
          className={`relative rounded-2xl cursor-pointer group  overflow-hidden w-full h-[250px] md:h-[200px]   ${props.className}`}
        >
          <Link className="w-full h-full" href={props.path}>
            <div className="w-full h-full">
              <picture className="">
                <source
                  srcSet={
                    require(`../public/assets/home/desktop/${props.img.desktop.slice(
                      30
                    )}`).default.src
                  }
                  media="(min-width: 1024px)"
                />
                <source
                  srcSet={
                    require(`../public/assets/home/tablet/${props.img.tablet.slice(
                      29
                    )}`).default.src
                  }
                  media="(min-width: 768px)"
                />
                <img
                  className="absolute w-full h-full cursor-pointer -z-20 rounded-lg "
                  src={
                    require(`../public/assets/home/mobile/${props.img.mobile.slice(
                      29
                    )}`).default.src
                  }
                  alt=""
                />
              </picture>

              <div className="h-full flex flex-col justify-center gap-2 z-20">
                <h2 className="text-center z-20">{props.title}</h2>

                <div className="flex justify-center items-center gap-3 z-20">
                  <h3 className="text-[15px] ">view project</h3>
                  <img className="w-3 h-3" src={arrow.src} alt="" />
                </div>
              </div>
              <div className="w-full h-full bg-black/50 group-hover:bg-peach/80 absolute z-10 top-0"></div>
            </div>
          </Link>
        </motion.div>
      ) : null}
    </>
  );
};

export default ProjectCategory;
