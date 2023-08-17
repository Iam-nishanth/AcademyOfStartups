import { Heading, Paragraph, SubHeading, LINK } from "@/styles/Globalstyles";
import {
  Content,
  ContentSide,
  Headings,
  Icon,
  IconsDiv,
  ImageDiv,
  ImageSide,
  TeamCard,
  TeamContainer,
  TeamWrapper,
} from "@/styles/views/TeamStyles";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

export default function TeamSection() {
  return (
    <TeamContainer>
      <TeamWrapper>
        <Headings>
          <SubHeading>Our Team</SubHeading>
          <Heading>Meet Our Expert Team</Heading>
          <Paragraph>
            Harness the power of our exceptional team to accelerate your
            business growth and elevate your startup management. Our top-tier,
            end-to-end solution is backed by a dedicated team of experts, ready
            to assist you every step of the way.
          </Paragraph>
        </Headings>
        <TeamCard>
          <ImageSide>
            <ImageDiv>
              <Image
                src={"/images/SudheerSir.jpg"}
                alt="Sudheer Sir"
                fill
                sizes="(max-width: 640px) 100vw, 640px"
              />
              <Content>
                <p className="position">Founder</p>
                <p className="name">Sudheer Varma Tirumalaraju</p>
                <IconsDiv>
                  <LINK href={"https://www.facebook.com/"}>
                    <Icon>
                      <FaFacebookF />
                    </Icon>
                  </LINK>
                  <LINK href={"https://www.instagram.com/"}>
                    <Icon>
                      <FaInstagram />
                    </Icon>
                  </LINK>
                  <LINK href={"https://www.linkedin.com/"}>
                    <Icon>
                      <FaLinkedinIn />
                    </Icon>
                  </LINK>
                </IconsDiv>
              </Content>
            </ImageDiv>
          </ImageSide>
          <ContentSide>
            <h5>About</h5>
            <Paragraph>
              Mr. Sudheer Varma, founder of Academy of Startups, aiming the
              company sales to reach unicorn status in long run. He is super
              positive person with unlimited creative and artistic skills to
              design and solve complex issues in business organizations. He
              believes in work, consistency and smartness could bring ultimate
              results.
            </Paragraph>
            <h5>Skills</h5>
            <ul>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Former SAP Consultant</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Business Consultant</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Startup Mentor</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Trainer (BNI, JCI, NSE Academy)</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Author (108 Startups )</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Effective Public Speaker</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Content Creator ( Suman TV & E TV )</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Article Writer (Quora Digest)</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Sales & Branding Expert</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>8+ years of IT Business Experience</span>
              </li>
            </ul>
          </ContentSide>
        </TeamCard>
        <TeamCard>
          <ImageSide>
            <ImageDiv>
              <Image
                src={"/images/Usman Sir.jpg"}
                alt="Sudheer Sir"
                fill
                sizes="(max-width: 640px) 100vw, 640px"
              />
              <Content>
                <p className="position">Co Founder</p>
                <p className="name">MD. Usman Bin Ali</p>
                <IconsDiv>
                  <LINK href={"https://www.facebook.com/"}>
                    <Icon>
                      <FaFacebookF />
                    </Icon>
                  </LINK>
                  <LINK href={"https://www.instagram.com/"}>
                    <Icon>
                      <FaInstagram />
                    </Icon>
                  </LINK>
                  <LINK href={"https://www.linkedin.com/"}>
                    <Icon>
                      <FaLinkedinIn />
                    </Icon>
                  </LINK>
                </IconsDiv>
              </Content>
            </ImageDiv>
          </ImageSide>
          <ContentSide>
            <h5>About</h5>
            <Paragraph>
              Mr. Usman Bin Ali, Co founder and lead consultant in organization
              has international domain experience in business consulting with
              wide range of clientele. He is board of member for many mega
              companies and truly professional strategist with HNI and Corporate
              connections. Man with vision, experience and disciplined work is
              his formula.
            </Paragraph>
            <h5>Skills</h5>
            <ul>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Former Lt. Commander (Indian Navy)</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Alumni of IIT Kharagpur</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Alumni of ISB Hyderabad</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Business Strategic Expert (Swathi Infra Pvt. Ltd.)</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Former Business Head (Aster Pvt. Ltd. Hyderabad)</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Former Business COO (BS Ltd. Hyderabad)</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Business Consultant</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>Growth Expert</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>International Clientele</span>
              </li>
              <li>
                <span>
                  <HiOutlineArrowLongRight />
                </span>
                <span>20+ years of Experience</span>
              </li>
            </ul>
          </ContentSide>
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  );
}
