import Link from "next/link";
import React from "react";

type Props = {
  header?: boolean;
  className?: string;
};

const Nav = (props: Props) => {
  return (
    <div
      className={`flex flex-col gap-7 ${
        props.header && "md:flex-row md:gap-[42px]"
      } ${props.className}`}
    >
      <Link href="/about/#">
        <p
          className={`text-center uppercase tracking-widest hover:cursor-pointer hover:text-peach ${
            props.header && "text-black"
          }`}
        >
          our company
        </p>
      </Link>
      <Link href="/locations/#">
        <p
          className={`text-center uppercase tracking-widest hover:cursor-pointer hover:text-peach ${
            props.header && "text-black"
          }`}
        >
          locations
        </p>
      </Link>
      <Link href="/contact/#">
        <p
          className={`text-center uppercase tracking-widest hover:cursor-pointer hover:text-peach ${
            props.header && "text-black"
          }`}
        >
          contact
        </p>
      </Link>
    </div>
  );
};

export default Nav;
