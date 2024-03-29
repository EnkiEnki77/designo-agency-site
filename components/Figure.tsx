import React from "react";
import { motion } from "framer-motion";

type Props = {
  img: string;
  figure: true | false;
  title: string | null;
  p1: string | null;
  p2: string | null;
  even?: boolean;
};

const Figure = (props: Props) => {
  return (
    <motion.figure
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className={`lg:flex lg:rounded-2xl  group lg:[&:nth-of-type(odd)]:flex-row-reverse  lg:overflow-hidden ${
        !props.figure
          ? "pt-[96px]  md:pt-[155px] md:mb-[120px] lg:mb-[160px] md:px-10 lg:px-0"
          : "mb-[120px] lg:mb-[160px] md:px-10 lg:px-0"
      }`}
    >
      <picture className="lg:basis-2/5">
        <source
          srcSet={
            require(`../public/assets/about/desktop/${props.img}`).default.src
          }
          media="(min-width:1024px)"
        />
        <source
          srcSet={
            require(`../public/assets/about/tablet/${props.img}`).default.src
          }
          media="(min-width:768x)"
        />
        <img
          className={`min-h-[320px]  md:max-h-[320px] h-full lg:max-h-[480px] w-full md:rounded-t-2xl lg:rounded-tl-none lg:rounded-r-2xl md:overflow-hidden ${
            props.figure && "lg:h-full lg:min-h-[640px] lg:max-h-full"
          } ${props.even && "lg:rounded-br-none lg:rounded-tr-none"}`}
          src={
            require(`../public/assets/about/mobile/${props.img}`).default.src
          }
          alt=""
        />
      </picture>
      <figcaption
        className={`lg:basis-3/5 lg:px-[95px] lg:justify-center lg:items-start md:rounded-tl-none lg:rounded-l-2xl px-6 lg:rounded-br-none  py-20 md:py-16 flex flex-col items-center gap-6 md:rounded-b-2xl md:overflow-hidden  ${
          props.figure
            ? "h-[520px] md:h-[416px] lg:h-full lg:min-h-[640px] lg:max-h-full bg-bgPattern2 bg-lightPeach/20"
            : " md:max-h-[320px] lg:max-h-[480px] bg-bgPattern3 bg-peach bg-[top_-9rem_left_-13rem]"
        } ${props.even && "lg:rounded-bl-none lg:rounded-tl-none"}`}
      >
        {props.figure
          ? [
              <h1 className="text-center text-peach lg:text-left">
                {props.title}
              </h1>,
              <p className="text-center lg:px-0 lg:text-left text-black md:px-[30px]">
                {props.p1}
              </p>,
              <p className="text-center lg:px-0 lg:text-left text-black md:px-[30px]">
                {props.p2}
              </p>,
            ]
          : [
              <h1 className="text-center lg:text-left">About Us</h1>,
              <p className="text-center lg:px-0 lg:text-left text-white/90 md:px-16">
                Founded in 2010, we are a creative agency that produces lasting
                results for our clients. We’ve partnered with many startups,
                corporations, and nonprofits alike to craft designs that make
                real impact. We’re always looking forward to creating brands,
                products, and digital experiences that connect with our clients’
                audiences.
              </p>,
            ]}
      </figcaption>
    </motion.figure>
  );
};

export default Figure;
