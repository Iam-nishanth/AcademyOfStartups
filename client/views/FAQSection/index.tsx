/* eslint-disable react/no-unescaped-entities */
import { CountUp } from "use-count-up";
import FAQ from "@/components/FAQ";
import { Heading, SmallHeading, SubHeading } from "@/styles/Globalstyles";
import {
  ContentWrapper,
  FaqContainer,
  FaqWrapper,
  ImageWrapper,
  Number,
  QuestionsWrapper,
  Tile,
} from "@/styles/views/FAQstyles";
import Image from "next/image";
import { TbTargetArrow } from "react-icons/tb";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { data } from "./questions";

export default function FAQSection() {

  const clientsArr = data.map((client) => {
    return {
      label: client.question,
      children: client.answer,
      key: client.key,
    };
  });

  return (
    <FaqContainer>
      <FaqWrapper>
        <ContentWrapper>
          <Heading>Frequently Asked Questions (FAQ's)</Heading>
          <SubHeading>
            Frequently asked questions by our Clients and Members.
          </SubHeading>

          <br />
          <QuestionsWrapper>
            {/* <Accordion /> */}
            <FAQ items={clientsArr} />
          </QuestionsWrapper>
        </ContentWrapper>
        <ImageWrapper>
          <Image src={"/images/Faq.png"} alt="faq" width={300} height={300} />
          <Tile>
            <TbTargetArrow />
            <Number>
              <CountUp isCounting end={300} duration={3.2} />+
            </Number>
            <SmallHeading>Business Startegies</SmallHeading>
          </Tile>
        </ImageWrapper>
      </FaqWrapper>
    </FaqContainer>
  );
}
