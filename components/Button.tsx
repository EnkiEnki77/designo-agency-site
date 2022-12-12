import Link from "next/link";
import React from "react";

type Props = {
  btn: string;
  children: string;
  path: string | null;
  notLink: boolean;
};

const Button = (props: Props) => {
  return (
    <>
      {props.notLink ? (
        <button
          type="submit"
          className={`${props.btn} font-bold mx-auto lg:mx-0`}
        >
          {props.children}
        </button>
      ) : (
        <Link href={`${props.path}`}>
          <button className={`${props.btn} font-bold mx-auto lg:mx-0`}>
            {props.children}
          </button>
        </Link>
      )}
    </>
  );
};

export default Button;
