import React, { useEffect, useState } from "react";
import CategoryInfo from "../../components/CategoryInfo";
import FooterCont from "../../components/FooterCont";
import Header from "../../components/Header";
import ProjectCont from "../../components/ProjectCont";
import ProjectsDirectory from "../../components/ProjectsDirectory";
import BackToTop from "../../components/BackToTop";
import Layout from "../../components/Layout";

type Props = {};

const graphicDesign = (props: Props) => {
  const projects = [
    {
      img: "image-change.jpg",
      title: "TIM BROWN",
      description:
        "A book cover designed for Tim Brown’s new release, ‘Change’",
    },
    {
      img: "image-boxed-water.jpg",
      title: "BOXED WATER",
      description: "A simple packaging concept made for Boxed Water",
    },
    {
      img: "image-science.jpg",
      title: "SCIENCE!",
      description:
        "A poster made in collaboration with the Federal Art Project",
    },
  ];

  const [yPosition, setYPosition] = useState(0);
  const [width, setWidth] = useState(0);

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
        <Header />
        <CategoryInfo
          page="graphic design"
          pageInfo="We deliver eye-catching branding materials that are tailored to meet your business objectives."
        />
        <ProjectCont page="graphic-design" projects={projects} />
        <ProjectsDirectory width={width} page="graphic design" />
        <FooterCont />
        <BackToTop yPosition={yPosition} />
      </div>
    </Layout>
  );
};

export default graphicDesign;
