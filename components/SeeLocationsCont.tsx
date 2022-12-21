import React from "react";
import SeeLocations from "./SeeLocations";
import { motion } from "framer-motion";

type Props = {
  width: number;
};

const SeeLocationsCont = (props: Props) => {
  const locations = [
    {
      even: false,
      img: "illustration-canada.svg",
      country: "canada",
      path: "whore",
      id: 1,
    },
    {
      even: true,
      img: "illustration-australia.svg",
      country: "australia",
      path: "whore",
      id: 2,
    },
    {
      even: false,
      img: "illustration-united-kingdom.svg",
      country: "united kingdom",
      path: "whore",
      id: 3,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.4,
      },
    },
  };
  return (
    <>
      {props.width !== 0 && (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col lg:px-[50px] lg:flex-row lg:justify-between gap-12 mb-[120px] lg:mb-[160px]"
        >
          {locations.map((location) => (
            <SeeLocations
              width={props.width}
              key={location.id}
              even={location.even}
              img={location.img}
              country={location.country}
              path={location.path}
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default SeeLocationsCont;
