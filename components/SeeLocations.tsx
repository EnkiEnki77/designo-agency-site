import React from "react";
import Button from "./Button";

type Props = {
  img: string;
  country: string;
  path: string;
};

const SeeLocations = (props: Props) => {
  return (
    <div className="flex flex-col items-center gap-8 ">
      <div className="w-[202px] h-auto relative">
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
            require(`../public/assets/shared/desktop/${props.img}`).default.src
          }
          alt=""
        />
      </div>
      <h3 className="text-black font-bold">{props.country}</h3>
      <Button
        notLink={false}
        path={
          props.country === "australia"
            ? "/locations/#australia"
            : props.country === "canada"
            ? "/locations/#canada"
            : "locations/#united-kingdom"
        }
        btn="buttonDark"
      >
        see location
      </Button>
    </div>
  );
};

export default SeeLocations;
