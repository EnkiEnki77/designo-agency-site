import React, { useEffect, useState } from "react";
import Offering from "./Offering";
import { motion } from "framer-motion";

type Props = {};

const OfferingsCont = (props: Props) => {
  const offeringData = [
    {
      even: false,
      img: "illustration-passionate.svg",
      title: "passionate",
      description:
        "Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.",
    },
    {
      even: true,
      img: "illustration-resourceful.svg",
      title: "resourceful",
      description:
        "Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.",
    },
    {
      even: false,
      img: "illustration-friendly.svg",
      title: "friendly",
      description:
        " We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.",
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

  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {width !== 0 && (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="gap-20 lg:mb-[160px] lg:px-[165px] md:gap-8 flex flex-col px-6 md:px-10 mb-[120px] md:mb-[80px] lg:flex-row"
        >
          {offeringData.map((item, i) => (
            <Offering
              width={width}
              key={i}
              even={item.even}
              img={item.img}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.div>
      )}
    </>
  );
};

export default OfferingsCont;
