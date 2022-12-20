import React, { useEffect, useState } from "react";
import CategoryInfo from "../../components/CategoryInfo";
import FooterCont from "../../components/FooterCont";
import Header from "../../components/Header";
import ProjectCont from "../../components/ProjectCont";
import ProjectsDirectory from "../../components/ProjectsDirectory";
import BackToTop from "../../components/BackToTop";
import Layout from "../../components/Layout";

type Props = {};

const appDesign = (props: Props) => {
  const projects = [
    {
      img: "image-airfilter.jpg",
      title: "AIRFILTER",
      description:
        "Solving the problem of poor indoor air quality by filtering the air",
    },
    {
      img: "image-eyecam.jpg",
      title: "EYECAM",
      description:
        "Product that lets you edit your favorite photos and videos at any time",
    },
    {
      img: "image-faceit.jpg",
      title: "FACEIT",
      description:
        "Get to meet your favorite internet superstar with the faceit app",
    },
    {
      img: "image-todo.jpg",
      title: "TODO",
      description:
        "A todo app that features cloud sync with light and dark mode",
    },
    {
      img: "image-loopstudios.jpg",
      title: "LOOPSTUDIOS",
      description: "A VR experience app made for Loopstudios",
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
          page="app design"
          pageInfo="Our mobile designs bring intuitive digital solutions to your customers right at their fingertips."
        />
        <ProjectCont page="app-design" projects={projects} />
        <ProjectsDirectory width={width} page="app design" />
        <FooterCont />
        <BackToTop yPosition={yPosition} toggle={toggle} />
      </div>
    </Layout>
  );
};

export default appDesign;
