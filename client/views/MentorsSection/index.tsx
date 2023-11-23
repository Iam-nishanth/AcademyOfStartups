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
import { RevealX } from "@/utils/animation/RevealX";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";

const MentorsSection = () => {
  return (
    <MentorsContainer>
      <MentorsWrapper>
        <RevealX>
          <SubHeading>Our Mentors</SubHeading>
        </RevealX>
        <RevealX>
          <MainHeading color="#000000">Meet our Expert Mentors</MainHeading>
        </RevealX>
        <RevealX width="100%">
          <CardsWrapper>
            <Card image="/images/SudheerSir.jpg">
              <Overlay>
                <Icons>
                  <LINK target="_blank" href="https://www.facebook.com/Startup.SudheerVarma?mibextid=ZbWKwL" aria-label="Facebook">
                    <FaFacebook />
                  </LINK>
                </Icons>
                <Icons>
                  <LINK target="_blank" href="https://www.instagram.com/startup.sudheervarma/" aria-label="Instagram">
                    <FaInstagram />
                  </LINK>
                </Icons>
                <Icons>
                  <LINK target="_blank" href="https://www.linkedin.com/in/sudheer-varma-tirumalaraju-012b5550/" aria-label="LinkedIn">
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
                  <LINK target="_blank" href="https://www.facebook.com/" aria-label="Facebook">
                    <FaFacebook />
                  </LINK>
                </Icons>
                <Icons>
                  <LINK target="_blank" href="https://www.instagram.com/" aria-label="Instagram">
                    <FaInstagram />
                  </LINK>
                </Icons>
                <Icons>
                  <LINK target="_blank" href="https://www.linkedin.com/" aria-label="LinkedIn">
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
        </RevealX>

      </MentorsWrapper>
    </MentorsContainer>
  );
}

export default MentorsSection