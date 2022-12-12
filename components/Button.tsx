import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  btn: string;
  children: string;
  path: string | null;
  notLink: boolean;
  initial?: { [key: string]: number };
  animate?: { [key: string]: number };
  transition?: { [key: string]: number };
};

const Button = (props: Props) => {
  return (
    <>
      {props.notLink ? (
        <motion.button
          initial={props.initial}
          animate={props.animate}
          transition={props.transition}
          type="submit"
          className={`${props.btn} font-bold mx-auto lg:mx-0`}
        >
          {props.children}
        </motion.button>
      ) : (
        <Link href={`${props.path}`}>
          <motion.button
            initial={props.initial}
            animate={props.animate}
            transition={props.transition}
            className={`${props.btn} font-bold mx-auto lg:mx-0`}
          >
            {props.children}
          </motion.button>
        </Link>
      )}
    </>
  );
};

export default Button;
