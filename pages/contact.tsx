import React, { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import FooterCont from "../components/FooterCont";
import Header from "../components/Header";
import SeeLocationsCont from "../components/SeeLocationsCont";
import Layout from "../components/Layout";
import BackToTop from "../components/BackToTop";

type Props = {};

const contact = (props: Props) => {
  const [yPosition, setYPosition] = useState(0);
  const [toggle, setToggle] = useState<boolean>(false);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    setYPosition(window.scrollY);
    const handleY = () => setYPosition(window.scrollY);
    window.addEventListener("scroll", handleY);
  }, [yPosition]);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => window.removeEventListener("resize", handleWidth);
  }, []);
  return (
    <Layout>
      <div className="overflow-hidden">
        <Header toggle={toggle} setToggle={setToggle} />
        <div className="md:px-10 md:pt-[155px] lg:px-[160px]">
          <ContactForm />
          <SeeLocationsCont width={width} />
        </div>
        <FooterCont locations={true} />
        <BackToTop yPosition={yPosition} toggle={toggle} />
      </div>
    </Layout>
  );
};

export default contact;
