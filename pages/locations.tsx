import React, { useEffect, useState } from "react";
import FooterCont from "../components/FooterCont";
import Header from "../components/Header";
import LocationCont from "../components/LocationCont";
import Layout from "../components/Layout";
import BackToTop from "../components/BackToTop";

type Props = {};

const locations = (props: Props) => {
  const [yPosition, setYPosition] = useState(0);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    setYPosition(window.scrollY);
    const handleY = () => setYPosition(window.scrollY);
    window.addEventListener("scroll", handleY);
  }, [yPosition]);
  return (
    <Layout>
      <div>
        <Header toggle={toggle} setToggle={setToggle} />
        <LocationCont />
        <FooterCont />
        <BackToTop yPosition={yPosition} toggle={toggle} />
      </div>
    </Layout>
  );
};

export default locations;
