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

const TeamSection = () => {
  const data = [
    {
      title: 'Former Lt. Commander (Indian Navy)',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Alumni of IIT Kharagpur',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Alumni of ISB Hyderabad',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Business Strategic Expert (Swathi Infra Pvt. Ltd.)',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Former Business Head (Aster Pvt. Ltd. Hyderabad)',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Former Business COO (BS Ltd. Hyderabad)',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Business Consultant',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Growth Expert',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'International Clientele',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: '20+ years of Experience',
      icon: <HiOutlineArrowLongRight />,
    },
  ];
  const data2 = [
    {
      title: 'Former Lt. Commander (Indian Navy)',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Alumni of IIT Kharagpur',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Alumni of ISB Hyderabad',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Business Strategic Expert (Swathi Infra Pvt. Ltd.)',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Former Business Head (Aster Pvt. Ltd. Hyderabad)',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Former Business COO (BS Ltd. Hyderabad)',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Business Consultant',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'Growth Expert',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: 'International Clientele',
      icon: <HiOutlineArrowLongRight />,
    },
    {
      title: '20+ years of Experience',
      icon: <HiOutlineArrowLongRight />,
    },
  ];

  const renderList2 = data2.map((item, index) => (
    <li key={index}>
      <span>{item.icon}</span>
      <span>{item.title}</span>
    </li>
  ));

  const renderList = data.map((item, index) => (
    <li key={index}>
      <span>{item.icon}</span>
      <span>{item.title}</span>
    </li>
  ));
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
            <ul>{renderList}</ul>
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
            <ul>{renderList2}</ul>
          </ContentSide>
        </TeamCard>
      </TeamWrapper>
    </TeamContainer>
  );
}

export default TeamSection