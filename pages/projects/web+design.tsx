import React, { useEffect, useState } from "react";
import CategoryInfo from "../../components/CategoryInfo";
import FooterCont from "../../components/FooterCont";
import Header from "../../components/Header";
import ProjectCont from "../../components/ProjectCont";
import ProjectsDirectory from "../../components/ProjectsDirectory";
import BackToTop from "../../components/BackToTop";
import Layout from "../../components/Layout";

type Props = {};

const webDesign = (props: Props) => {
  const projects = [
    {
      img: "image-express.jpg",
      title: "EXPRESS",
      description: "A multi-carrier shipping website for ecommerce businesses",
    },
    {
      img: "image-transfer.jpg",
      title: "TRANSFER",
      description:
        "Site for low-cost money transfers and sending money within seconds",
    },
    {
      img: "image-photon.jpg",
      title: "PHOTON",
      description:
        "A state-of-the-art music player with high-resolution audio and DSP effects",
    },
    {
      img: "image-builder.jpg",
      title: "BUILDER",
      description:
        "Connects users with local contractors based on their location",
    },
    {
      img: "image-blogr.jpg",
      title: "BLOGR",
      description:
        "Blogr is a platform for creating an online blog or publication",
    },
    {
      img: "image-camp.jpg",
      title: "CAMP",
      description:
        "Get expert training in coding, data, design, and digital marketing",
    },
  ];

  const [yPosition, setYPosition] = useState(0);
  const [width, setWidth] = useState(0);
  const [toggle, setToggle] = useState<boolean>(false);

  useEffect(() => {
    setWidth(window.innerWidth);

    const handleWidth = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);

    return () => window.removeEventListener("resize", handleWidth);
  }, []);

  useEffect(() => {
    setYPosition(window.scrollY);
    const handleY = () => setYPosition(window.scrollY);
    window.addEventListener("scroll", handleY);
  }, [yPosition]);

  return (
    <Layout>
      <div>
        <Header toggle={toggle} setToggle={setToggle} />
        <CategoryInfo
          page="web design"
          pageInfo="We build websites that serve as powerful marketing tools and bring memorable brand experiences."
        />
        <ProjectCont page="web-design" projects={projects} />
        <ProjectsDirectory width={width} page="web design" />
        <FooterCont />
        <BackToTop yPosition={yPosition} toggle={toggle} />
      </div>
    </Layout>
  );
};

export default webDesign;
