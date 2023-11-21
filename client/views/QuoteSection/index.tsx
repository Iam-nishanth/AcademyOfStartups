import { CommonButton2 } from "@/components/Common/Button";
import { MainHeading, Paragraph } from "@/styles/Globalstyles";
import { Container, MainContainer } from "@/styles/views/QuoteSectionStyles";
import Link from "next/link";
import React from "react";

const QuoteSection = () => {
  return (
    <MainContainer>
      <Container>
        <MainHeading color="#fff">
          Get the Best answers for your Worst Challenges
        </MainHeading>
        <Paragraph style={{ color: "#999" }}>
          Challenges are situations in business. Many will consider it as
          problems and leave the industry. We will help businesses &startups at
          any level to grow by analyzing structure, implementing growth methods
          and execute in result oriented milestones.
        </Paragraph>
        <Link href="/services">
          <CommonButton2 name="Join Us" width="160px" height="50px" />
        </Link>
      </Container>
    </MainContainer>
  );
}

export default QuoteSection