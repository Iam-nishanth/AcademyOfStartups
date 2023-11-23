import { Heading, Paragraph, SubHeading } from "@/styles/Globalstyles";
import {
  SectionContainer,
  SectionWrapper,
  ContentWrapper,
  ImageWrapper,
  ButtonSection,
} from "@/styles/views/ManagementSectionStyles";
import React from "react";
import { ProgressBar } from "../ProgressSection";
import { CommonButton } from "@/components/Common/Button";
import Image from "next/image";
import { RevealY } from "@/utils/animation/RevealY";

const ManagementSection = () => {
  return (
    <SectionContainer>
      <SectionWrapper>
        <ContentWrapper>
          <RevealY>
            <SubHeading>About us</SubHeading>
          </RevealY>
          <RevealY>
            <Heading>
              20+ Years of Experience in Business Management Trainings
            </Heading>
          </RevealY>
          <RevealY>
            <Paragraph>
              Our service includes a comprehensive consult to help identify gaps
              and opportunities, a comprehensive report that includes a project
              plan with timelines and milestones, a cost analysis, and a schedule.
              We also offer a suite of quality business products that will help
              you get there quickly and smoothly. That’s how we ensure your
              success.
            </Paragraph>
          </RevealY>
          <RevealY width="100%">
            <div>
              <p>Business Strategy Plannings</p>
              <ProgressBar label="Business Strategy Plannings" percent={90} trail="#ccc" />
              <p>Expert Mentoring</p>
              <ProgressBar label="Expert Mentoring" percent={90} trail="#ccc" />
            </div>
          </RevealY>
          <RevealY width="100%">
            <ButtonSection>
              <CommonButton name="Get Started" width="150px" height="50px" />
              <div>
                <p className="name">Sudheer Varma T</p>
                <p className="position">Founder of Company</p>
              </div>
            </ButtonSection>
          </RevealY>
        </ContentWrapper>
        <ImageWrapper>
          <Image
            src="/images/Management.svg"
            alt="management-image"
            fill
            sizes="(max-width: 640px) 100vw, 640px"
          />
        </ImageWrapper>
      </SectionWrapper>
    </SectionContainer>
  );
}

export default ManagementSection