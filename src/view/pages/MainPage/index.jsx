import React from "react";

import Header from "../../layout/Header";
import Content from "../../layout/Content";
import Banner from "../../components/Banner";
import GalleryList from "../../components/GalleryList";

const MainPage = () => {
  return (
    <>
      <Header />

      <Content>
        <Banner />
        <GalleryList />
      </Content>
    </>
  );
};

export default MainPage;
