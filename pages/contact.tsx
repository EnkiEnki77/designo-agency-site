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

  useEffect(() => {
    setYPosition(window.scrollY);
    const handleY = () => setYPosition(window.scrollY);
    window.addEventListener("scroll", handleY);
  }, [yPosition]);
  return (
    <Layout>
      <div>
        <Header />
        <div className="md:px-10 md:pt-[155px] lg:px-[160px]">
          <ContactForm />
          <SeeLocationsCont />
        </div>
        <FooterCont locations={true} />
        <BackToTop yPosition={yPosition} />
      </div>
    </Layout>
  );
};

export default contact;
