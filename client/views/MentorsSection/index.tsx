import { LINK, MainHeading, SubHeading } from "@/styles/Globalstyles";
import {
  Card,
  CardsWrapper,
  Icons,
  MentorsContainer,
  MentorsWrapper,
  Name,
  Overlay,
} from "@/styles/views/MentorsStyles";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { styled } from "styled-components";

export default function MentorsSection() {
  return (
    <MentorsContainer>
      <MentorsWrapper>
        <SubHeading>Our Mentors</SubHeading>
        <MainHeading color="#000000">Meet our Expert Mentors</MainHeading>
        <CardsWrapper>
          <Card image="/images/SudheerSir.jpg">
            <Overlay>
              <Icons>
                <LINK href="https://www.facebook.com/">
                  <FaFacebook />
                </LINK>
              </Icons>
              <Icons>
                <LINK href="https://www.instagram.com/">
                  <FaInstagram />
                </LINK>
              </Icons>
              <Icons>
                <LINK href={"https://www.linkedin.com/"}>
                  <FaLinkedin />
                </LINK>
              </Icons>
            </Overlay>
            <Name>
              <h3>Sudheer Varma Tirumalaraju</h3>
              <p>Founder & CEO</p>
            </Name>
          </Card>
          <Card image="/images/Usman Sir.jpg">
            <Overlay>
              <Icons>
                <LINK href="https://www.facebook.com/">
                  <FaFacebook />
                </LINK>
              </Icons>
              <Icons>
                <LINK href="https://www.instagram.com/">
                  <FaInstagram />
                </LINK>
              </Icons>
              <Icons>
                <LINK href="https://www.linkedin.com/">
                  <FaLinkedin />
                </LINK>
              </Icons>
            </Overlay>
            <Name>
              <h3>MD Usman Bin Ali</h3>
              <p>CO - Founder</p>
            </Name>
          </Card>
        </CardsWrapper>
      </MentorsWrapper>
    </MentorsContainer>
  );
}
const Contaier = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
const ImageBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  transition: all 0.5s ease-in-out;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  /* img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
    resize: both;
  } */
`;
const Content = styled.div`
  color: black;
  p {
    position: absolute;
    bottom: 0;
  }
`;
const Box = styled.div`
  position: relative;
  width: 20rem;
  height: 20rem;
  /* margin: 3rem; */
`;
