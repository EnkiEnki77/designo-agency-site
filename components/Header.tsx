import Link from "next/link";
import React, { useState, useEffect } from "react";
import useBodyScrollLock from "../hooks/useBodyScrollLock";
import Logo from "../public/assets/shared/desktop/logo-dark.png";
import Hamburger from "../public/assets/shared/mobile/icon-hamburger.svg";
import Nav from "./Nav";
import NavModal from "./NavModal";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {};

const Header = (props: Props) => {
  const [width, setWidth] = useState(0);
  const [toggle, setToggle] = useState<boolean>(false);
  const { isLocked, toggleLock } = useBodyScrollLock();

  const handleToggle = () => {
    setToggle((prev) => !prev);
    toggleLock();
  };

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  console.log(isLocked);

  return (
    <motion.div
      initial={{ y: -500 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-30 w-full"
    >
      <header className="bg-white lg:px-[165px] w-full py-[34px] md:py-16 flex items-center  justify-between px-6 md:px-10 fixed z-40">
        <Link href="/#">
          <img
            className="h-[27px] w-[202px] hover:cursor-pointer"
            src={Logo.src}
            alt=""
          />
        </Link>
        {width < 768 && !toggle ? (
          <AnimatePresence>
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              onClick={handleToggle}
              className="hover:cursor-pointer"
              src={Hamburger.src}
              alt=""
            />
          </AnimatePresence>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <XMarkIcon
                onClick={handleToggle}
                className="w-6 h-6 cursor-pointer"
              />
            </motion.div>
          </AnimatePresence>
        )}
        {width >= 768 && <Nav header={true} />}
      </header>
      <AnimatePresence>
        {toggle && [
          <NavModal key="nav modal" />,
          <motion.div
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -300 }}
            transition={{ duration: 0.5 }}
            key="overlay"
            className="absolute h-screen w-full bg-black/50 z-20"
          ></motion.div>,
        ]}
      </AnimatePresence>
      ,
    </motion.div>
  );
};

export default Header;
