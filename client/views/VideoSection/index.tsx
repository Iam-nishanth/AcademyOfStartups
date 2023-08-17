import VideoModal from "@/components/Common/VideoModal";
import { MainHeading, Paragraph, SubHeading } from "@/styles/Globalstyles";
import { Card, Content } from "@/styles/views/FetaureCardStyles";
import {
  ContentWrapper,
  H3,
  List,
  ListItem,
  ListWrapper,
  TextWrapper,
  VideoSectionContainer,
  VideoSectionWrapper,
} from "@/styles/views/VideoSectionStyles";
import React from "react";
import { TiTick } from "react-icons/ti";
import { TfiBarChart } from "react-icons/tfi";

export default function VideoSection() {
  const image = "/images/Videobg.svg";
  const videoId = "lAJYFmAcKrA";
  return (
    <VideoSectionContainer>
      <VideoSectionWrapper>
        <ContentWrapper>
          <TextWrapper>
            <SubHeading>Why choose us</SubHeading>
            <MainHeading>WE GROW YOUR BUSINESS</MainHeading>
            <Paragraph>
              We give value to customer relation than transactions & our success
              ratio is 100%
            </Paragraph>
          </TextWrapper>
          <ListWrapper>
            <List>
              <ListItem>
                <span>
                  <TiTick />
                </span>
                <span>Constant Mentoring</span>
              </ListItem>
              <ListItem>
                <span>
                  <TiTick />
                </span>
                <span>Commitment to customers</span>
              </ListItem>
              <ListItem>
                <span>
                  <TiTick />
                </span>
                <span>25+ years of Domain Experience</span>
              </ListItem>
              <ListItem>
                <span>
                  <TiTick />
                </span>
                <span>Country Wide Access</span>
              </ListItem>
              <ListItem>
                <span>
                  <TiTick />
                </span>
                <span>Wide Range of Domains</span>
              </ListItem>
              <ListItem>
                <span>
                  <TiTick />
                </span>
                <span>Always Updating</span>
              </ListItem>
            </List>
            <Card
              maxWidth="500px"
              flexDirection="column"
              color="#fff"
              backgroundColor="#316aff"
            >
              <TfiBarChart />
              <Content>
                <H3>A Different Approach to Improvement</H3>
              </Content>
            </Card>
          </ListWrapper>
        </ContentWrapper>

        <VideoModal image={image} videoId={videoId} />
      </VideoSectionWrapper>
    </VideoSectionContainer>
  );
}
