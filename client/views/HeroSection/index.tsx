import React from "react";
import Image from "next/image";
import {
  CardText,
  CardWrapper,
  HeroContainer,
  HeroWrapper,
  ImageWrapper,
  TextWrapper,
} from "@/styles/views/HeroSectionStyles";
import { CommonButton, CommonButton2 } from "@/components/Common/Button";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <TextWrapper>
          <h1>Improve your businesses and startups with</h1>
          <h2>Academy of Startups</h2>
          <h3>We help businesses succeed by providing them with</h3>
          <h3>Innovative and Effective solutions</h3>
          <CommonButton2 name="Get Started" width="180px" height="60px" />
        </TextWrapper>
        <CardWrapper>
          <ImageWrapper>
            <Image
              quality={100}
              width={250}
              height={200}
              src="https://academyofstartups.com/wp-content/uploads/elementor/thumbs/digital-marketers-working-o-a-plan-q7icsu5yo9f9k3j5u9l0ueck4vch28q0pd9aiznfrk.jpg"
              alt="course-image"
            />
          </ImageWrapper>
          <CardText>
            <h3>Kick-Start your Business in 30 Days</h3>
            <p>
              Only course you’re going to need to see visible changes in your
              business
            </p>
            <CommonButton name="Buy Now" width="150px" height="40px" />
          </CardText>
        </CardWrapper>
      </HeroWrapper>
    </HeroContainer>
  );
}

export default HeroSection
