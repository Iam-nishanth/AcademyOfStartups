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

const MentorsSection = () => {
  return (
    <MentorsContainer>
      <MentorsWrapper>
        <SubHeading>Our Mentors</SubHeading>
        <MainHeading color="#000000">Meet our Expert Mentors</MainHeading>
        <CardsWrapper>
          <Card image="/images/SudheerSir.jpg">
            <Overlay>
              <Icons>
                <LINK target="_blank" href="https://www.facebook.com/">
                  <FaFacebook />
                </LINK>
              </Icons>
              <Icons>
                <LINK target="_blank" href="https://www.instagram.com/">
                  <FaInstagram />
                </LINK>
              </Icons>
              <Icons>
                <LINK target="_blank" href={"https://www.linkedin.com/"}>
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
                <LINK target="_blank" href="https://www.facebook.com/">
                  <FaFacebook />
                </LINK>
              </Icons>
              <Icons>
                <LINK target="_blank" href="https://www.instagram.com/">
                  <FaInstagram />
                </LINK>
              </Icons>
              <Icons>
                <LINK target="_blank" href="https://www.linkedin.com/">
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

export default MentorsSection