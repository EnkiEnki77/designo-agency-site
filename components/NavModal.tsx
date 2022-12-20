import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import { motion } from "framer-motion";

type Props = {};

const NavModal = (props: Props) => {
  const navigation = [
    { path: "/about/#", text: "our company", id: 1 },
    { path: "/locations/#", text: "locations", id: 2 },
    { path: "/contact/#", text: "contact", id: 3 },
  ];

  const container = {
    hidden: {
      y: -300,
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
      },
    },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const items = {
    hidden: { x: -100, opacity: 0 },
    show: { x: 0, opacity: 1 },
  };
  return (
    <motion.nav
      variants={container}
      initial="hidden"
      animate="show"
      exit="hidden"
      className="bg-black pt-[143px]  flex flex-col px-6 gap-8 pb-12  w-full  z-30"
    >
      {navigation.map((item) => (
        <Link key={item.id} href={item.path}>
          <motion.p
            variants={items}
            whileTap={{ scale: 0.98 }}
            className="text-[24px] tracking-[2px] leading-6 uppercase text-white/100 cursor-pointer hover:text-peach"
          >
            {item.text}
          </motion.p>
        </Link>
      ))}
    </motion.nav>
  );
};

export default NavModal;
