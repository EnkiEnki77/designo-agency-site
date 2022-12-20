import React from "react";
import SeeLocations from "./SeeLocations";

type Props = {};

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
  return (
    <div className="flex flex-col lg:px-[50px] lg:flex-row lg:justify-between gap-12 mb-[120px] lg:mb-[160px]">
      {locations.map((location) => (
        <SeeLocations
          key={location.id}
          even={location.even}
          img={location.img}
          country={location.country}
          path={location.path}
        />
      ))}
    </div>
  );
};

export default SeeLocationsCont;
