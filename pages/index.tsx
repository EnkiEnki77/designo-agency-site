import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Button from "../components/Button";
import FooterCont from "../components/FooterCont";
import FormElement from "../components/FormElement";
import GetInTouchCont from "../components/GetInTouchCont";
import Header from "../components/Header";
import Hero from "../components/Hero";
import NavModal from "../components/NavModal";
import OfferingsCont from "../components/OfferingsCont";
import ProjectsDirectory from "../components/ProjectsDirectory";
import BackToTop from "../components/BackToTop";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [yPosition, setYPosition] = useState(0);

  useEffect(() => {
    setYPosition(window.scrollY);
    const handleY = () => setYPosition(window.scrollY);
    window.addEventListener("scroll", handleY);
  }, [yPosition]);

  return (
    <div className="relative">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Header />
      <Hero />
      <ProjectsDirectory page={null} />
      <OfferingsCont />
      <FooterCont />
      <BackToTop yPosition={yPosition} />
    </div>
  );
};

export default Home;
