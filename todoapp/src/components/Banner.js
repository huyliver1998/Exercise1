import React from "react";
import styled from "styled-components";

const Banner = (props) => {
  return (
    <BannerWrapper primary={props.primary}>{props.children}</BannerWrapper>
  );
};

const BannerWrapper = styled.div`
display: flex;
align-items: center;
justify-content:   center;
color: white;
margin-bottom: 1.2rem;
background: ${(props) => (props.primary ? "#fcb500" : "#FF6D6D")};
width: min(90%,350px);
height: 50px;
opacity: 0.7;
font-size: 1.5rem;
`;
export default Banner;
