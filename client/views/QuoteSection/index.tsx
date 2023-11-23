import { CommonButton2 } from "@/components/Common/Button";
import { MainHeading, Paragraph } from "@/styles/Globalstyles";
import { Container, MainContainer } from "@/styles/views/QuoteSectionStyles";
import { RevealY } from "@/utils/animation/RevealY";
import Link from "next/link";
import React from "react";

const QuoteSection = () => {
  return (
    <MainContainer>
      <Container>
        <RevealY>
          <MainHeading color="#fff">
            Get the Best answers for your Worst Challenges
          </MainHeading>
        </RevealY>
        <RevealY>
          <Paragraph style={{ color: "#999" }}>
            Challenges are situations in business. Many will consider it as
            problems and leave the industry. We will help businesses &startups at
            any level to grow by analyzing structure, implementing growth methods
            and execute in result oriented milestones.
          </Paragraph>
        </RevealY>
        <RevealY>
          <Link href="/services">
            <CommonButton2 name="Join Us" width="160px" height="50px" />
          </Link>
        </RevealY>
      </Container>
    </MainContainer>
  );
}

export default QuoteSection