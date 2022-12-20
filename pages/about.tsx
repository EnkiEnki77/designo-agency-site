import React, { useEffect, useState } from "react";
import Figure from "../components/Figure";
import Footer from "../components/Footer";
import FooterCont from "../components/FooterCont";
import Header from "../components/Header";
import SeeLocationsCont from "../components/SeeLocationsCont";
import Layout from "../components/Layout";
import BackToTop from "../components/BackToTop";

type Props = {};

const about = (props: Props) => {
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
        <div className="w-full lg:px-[160px] ">
          <Figure
            figure={false}
            img="image-about-hero.jpg"
            title={null}
            p1={null}
            p2={null}
          />
          <Figure
            figure={true}
            even={true}
            title="World-class talent"
            img="image-world-class-talent.jpg"
            p1="We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms."
            p2="Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission."
          />
          <SeeLocationsCont />

          <Figure
            figure={true}
            title="The real deal"
            img="image-real-deal.jpg"
            p1="As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success."
            p2="We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results."
          />
        </div>
        <FooterCont />
        <BackToTop yPosition={yPosition} />
      </div>
    </Layout>
  );
};

export default about;
