import styled from "styled-components";
import React from "react";

const Footer = () => {
    return (
        <Wrapper>
            <Title>Footer</Title>
        </Wrapper>

    )
};

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding-top: 0;
 background-color:#00008b;
   height:600px;   
`;

const Title = styled.h1`
color: #b2b2b2;
`;
export default Footer;