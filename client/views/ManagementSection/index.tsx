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

export default function ManagementSection() {
  return (
    <SectionContainer>
      <SectionWrapper>
        <ContentWrapper>
          <SubHeading>About us</SubHeading>
          <Heading>
            20+ Years of Experience in Business Management Trainings
          </Heading>
          <Paragraph>
            Our service includes a comprehensive consult to help identify gaps
            and opportunities, a comprehensive report that includes a project
            plan with timelines and milestones, a cost analysis, and a schedule.
            We also offer a suite of quality business products that will help
            you get there quickly and smoothly. That’s how we ensure your
            success.
          </Paragraph>
          <div>
            <p>Business Strategy Plannings</p>
            <ProgressBar percent={90} trail="#ccc" />
            <p>Expert Mentoring</p>
            <ProgressBar percent={90} trail="#ccc" />
          </div>
          <ButtonSection>
            <CommonButton name="Get Started" width="150px" height="50px" />
            <div>
              <p className="name">Sudheer Varma T</p>
              <p className="position">Founder of Company</p>
            </div>
          </ButtonSection>
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
