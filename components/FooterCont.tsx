import React from "react";
import Footer from "./Footer";
import { motion } from "framer-motion";
import GetInTouchCont from "./GetInTouchCont";

type Props = {
  locations?: true;
};

const FooterCont = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      className={` relative md:min-h-[337px] lg:min-h-[613px] lg:flex lg:flex-col lg:items-center ${
        props.locations && "lg:min-h-[320px]"
      }`}
    >
      {!props.locations && <GetInTouchCont />}
      <Footer locations={props.locations} />
    </motion.div>
  );
};

export default FooterCont;
