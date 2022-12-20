import React from "react";
import FooterCont from "../components/FooterCont";
import Header from "../components/Header";
import LocationCont from "../components/LocationCont";
import Layout from "../components/Layout";

type Props = {};

const locations = (props: Props) => {
  return (
    <Layout>
      <div>
        <Header />
        <LocationCont />
        <FooterCont />
      </div>
    </Layout>
  );
};

export default locations;
