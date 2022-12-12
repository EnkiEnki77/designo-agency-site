import React from "react";

type Props = {
  img: string;
  title: string;
  description: string;
  page: string;
};

const Project = (props: Props) => {
  return (
    <figure className="h-[478px] md:h-[310px] rounded-[15px] overflow-hidden md:flex lg:w-full lg:h-full lg:flex-col">
      <img
        className=" md:w-1/2 lg:w-full w-full h-full min-h-[310px] max-h-[320px] md:h-full lg:h-4/5"
        src={
          require(`../public/assets/${props.page}/desktop/${props.img}`).default
            .src
        }
        alt=""
      />
      <figcaption className=" md:rounded-none min-h-[158px] md:h-[310px] md:w-1/2 lg:w-full lg:h-1/5 bg-lightPeach/20 flex flex-col items-center justify-center gap-4 px-7 rounded-[15px]">
        <h3 className="uppercase text-peach text-center">{props.title}</h3>
        <p className="text-black text-center">{props.description}</p>
      </figcaption>
    </figure>
  );
};

export default Project;
