/* eslint-disable react/no-unescaped-entities */
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
import { data } from "./questions";

const FAQSection: React.FC = () => {

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
              300+
            </Number>
            <SmallHeading>Business Startegies</SmallHeading>
          </Tile>
        </ImageWrapper>
      </FaqWrapper>
    </FaqContainer>
  );
}

export default FAQSection