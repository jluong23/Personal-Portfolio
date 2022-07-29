import React from "react";
import styled from "styled-components";
import Article from "./Article";
import articleImage from "../assets/ktane.jpg";

const Wrapper = styled.div`
  padding: .5em;
`

const University = (props) => {
  return (
    <Wrapper>
      <h1>University.</h1>
      <Article 
        color="coral" 
        title="COM3610 Dissertation Project - VR API Driven Interface" 
        description = "Project for final year dissertation, creating a VR application to view a user's Google Photos images." 
        imgSrc={articleImage}
        onClickUrl="https://www.youtube.com/watch?v=kjZV_de_YFg"

        />
    </Wrapper>
  );
};

export default University;