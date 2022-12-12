import Link from "next/link";
import React, { useState, useEffect } from "react";
import useBodyScrollLock from "../hooks/useBodyScrollLock";
import Logo from "../public/assets/shared/desktop/logo-dark.png";
import Hamburger from "../public/assets/shared/mobile/icon-hamburger.svg";
import Nav from "./Nav";
import NavModal from "./NavModal";

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
    <div className="fixed top-0 z-30 w-full">
      <div className="bg-white lg:px-[165px] w-full py-[34px] md:py-16 flex items-center  justify-between px-6 md:px-10 fixed z-40">
        <Link href="/#">
          <img
            className="h-[27px] w-[202px] hover:cursor-pointer"
            src={Logo.src}
            alt=""
          />
        </Link>
        {width < 768 && (
          <img
            onClick={handleToggle}
            className="hover:cursor-pointer"
            src={Hamburger.src}
            alt=""
          />
        )}
        {width >= 768 && <Nav header={true} />}
      </div>
      {toggle && [
        <NavModal key={"nav modal"} />,
        <div
          key="overlay fixed"
          className="absolute h-screen w-full bg-black/50 z-20"
        ></div>,
      ]}
    </div>
  );
};

export default Header;
