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
  return (
    <motion.nav
      initial={{ y: -300 }}
      animate={{ y: 0 }}
      exit={{ y: -300 }}
      transition={{ duration: 0.5 }}
      className="bg-black pt-[143px]  flex flex-col px-6 gap-8 pb-12  w-full  z-30"
    >
      {navigation.map((item) => (
        <Link key={item.id} href={item.path}>
          <p className="text-[24px] tracking-[2px] leading-6 uppercase text-white/100 cursor-pointer hover:text-peach">
            {item.text}
          </p>
        </Link>
      ))}
    </motion.nav>
  );
};

export default NavModal;
