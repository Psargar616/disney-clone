import React from "react";
import styled from "styled-components";
import ImageSlider from "./ImageSlider";
import Viewers from "./Viewers";
import Recommends from "./Recommends";
import NewDisney from "./NewDisney";
import Originals from "./Originals";
import Trending from "./Trending";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = (props) => {
  
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trending />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  display: block;
  top: 72px;
  overflow-x: hidden;
  padding: 0 calc(3.5vw + 5px);

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: url("/images/home-background.png") center center / cover
      no-repeat fixed;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
