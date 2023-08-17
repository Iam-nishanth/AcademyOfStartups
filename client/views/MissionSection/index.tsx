import {
  Card,
  Content,
  Plus,
  SectionContainer,
  SectionWrapper,
  Stats,
  StatsBox,
} from "@/styles/views/MissionSectionStyles";
import React from "react";
import { FaBookOpen, FaPeopleGroup } from "react-icons/fa6";
import { TbTargetArrow } from "react-icons/tb";
import { GiTrophyCup } from "react-icons/gi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { Paragraph, WhiteHeading } from "@/styles/Globalstyles";
import { CountUp } from "use-count-up";

export default function MissionSection() {
  return (
    <SectionContainer>
      <SectionWrapper>
        <Card>
          <TbTargetArrow />
          <Content>
            <h2>Our Vision & Mission</h2>
            <p>
              We are a group of engineers, consultants, management experts,
              analysts and strategists that thrive on sharing our experience and
              knowledge to help you make a success of your business. Our track
              record proves that clear communication and expert collaboration
              will boost your bottom line.
            </p>
          </Content>
        </Card>
        <Stats>
          <StatsBox>
            <FaPeopleGroup />
            <WhiteHeading className="heading">
              <CountUp isCounting end={1500} duration={3.2} /> <Plus>+</Plus>
            </WhiteHeading>
            <Paragraph className="paragraph">Happy Clients</Paragraph>
          </StatsBox>
          <StatsBox>
            <FaBookOpen />
            <WhiteHeading className="heading">
              <CountUp isCounting end={200} duration={3.2} /> <Plus>+</Plus>
            </WhiteHeading>
            <Paragraph className="paragraph">Trainings</Paragraph>
          </StatsBox>
          <StatsBox>
            <GiTrophyCup />
            <WhiteHeading className="heading">
              <CountUp isCounting end={20} duration={3.2} /> <Plus>+</Plus>
            </WhiteHeading>
            <Paragraph className="paragraph">Years of Experience</Paragraph>
          </StatsBox>
          <StatsBox>
            <FaChalkboardTeacher />
            <WhiteHeading className="heading">
              <CountUp isCounting end={10} duration={3.2} /> <Plus>+</Plus>
            </WhiteHeading>
            <Paragraph className="paragraph">Expert Mentors</Paragraph>
          </StatsBox>
        </Stats>
      </SectionWrapper>
    </SectionContainer>
  );
}
