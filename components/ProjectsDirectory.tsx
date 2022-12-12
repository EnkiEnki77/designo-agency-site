import React from "react";
import ProjectCategory from "./ProjectCategory";

type Props = {
  page: string | null;
};

const ProjectsDirectory = (props: Props) => {
  const categories = [
    {
      img: {
        mobile: "../public/assets/home/mobile/image-web-design.jpg",
        tablet: "../public/assets/home/tablet/image-web-design.jpg",
        desktop: "../public/assets/home/desktop/image-web-design-large.jpg",
      },
      title: "web design",
      path: "/projects/web+design/#",
    },

    {
      img: {
        mobile: "../public/assets/home/mobile/image-graphic-design.jpg",
        tablet: "../public/assets/home/tablet/image-graphic-design.jpg",
        desktop: "../public/assets/home/desktop/image-graphic-design.jpg",
      },
      title: "graphic design",
      path: "/projects/graphic+design/#",
    },

    {
      img: {
        mobile: "../public/assets/home/mobile/image-app-design.jpg",
        tablet: "../public/assets/home/tablet/image-app-design.jpg",
        desktop: "../public/assets/home/desktop/image-app-design.jpg",
      },
      title: "app design",
      path: "/projects/app+design/#",
    },
  ];

  const categoriesFiltered = categories.filter(
    (category) => category.title !== props.page
  );

  console.log(categoriesFiltered);

  return (
    <div
      className={`flex lg:mb-[160px] flex-col px-6 md:px-10 gap-6 mb-24 lg:grid lg:gap-6 lg:px-[165px] lg:grid-cols-2 ${
        props.page === null
          ? "lg:grid-rows-[308px_308px]"
          : "lg:grid-rows-[308px] lg:mb-[160px]"
      }`}
    >
      {props.page === null
        ? categories.map((item, i) => (
            <ProjectCategory
              key={i}
              img={item.img}
              title={item.title}
              path={item.path}
              className={
                "lg:h-full first:col-start-1 first:col-span-1 first:row-start-1 first:row-span-full col-start-2 col-span-1 row-start-2 row-span-1 last:col-start-2 last:col-span-1 last:row-start-1 last:row-span-1"
              }
            />
          ))
        : categoriesFiltered.map((item, i) => (
            <ProjectCategory
              className={"lg:h-full"}
              key={i}
              img={item.img}
              title={item.title}
              path={item.path}
            />
          ))}
    </div>
  );
};

export default ProjectsDirectory;
