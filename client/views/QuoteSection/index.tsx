import { CommonButton2 } from "@/components/Common/Button";
import { MainHeading, Paragraph } from "@/styles/Globalstyles";
import { Container, MainContainer } from "@/styles/views/QuoteSectionStyles";
import React from "react";

export default function QuoteSection() {
  return (
    <MainContainer>
      <Container>
        <MainHeading color="#fff">
          Get the Best answers for your Worst Challenges​
        </MainHeading>
        <Paragraph>
          Challenges are situations in business. Many will consider it as
          problems and leave the industry. We will help businesses &startups at
          any level to grow by analyzing structure, implementing growth methods
          and execute in result oriented milestones.
        </Paragraph>
        <CommonButton2 name="Join Us" width="160px" height="50px" />
      </Container>
    </MainContainer>
  );
}
