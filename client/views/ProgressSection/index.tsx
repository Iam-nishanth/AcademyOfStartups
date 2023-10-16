import { AnchorButton, CommonButton } from "@/components/Common/Button";
import { MainHeading, Paragraph, SubHeading } from "@/styles/Globalstyles";
import {
  Buttons,
  Headings,
  JoinHeadings,
  JoinUs,
  JoinUsPara,
  PercentageWrapper,
  Percentages,
  ProgressSectionContainer,
  ProgressSectionWrapper,
} from "@/styles/views/ProgressSectionStyles";
import { Progress, ConfigProvider } from "antd";

const theme = {
  token: {
    colorText: "#8e92a4",
    motionDurationSlow: "0.6s",
  },
};
interface ProgressBarProps {
  percent: number;
  trail: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  return (
    <ConfigProvider theme={theme}>
      <Progress
        percent={props.percent}
        status="active"
        trailColor={props.trail}
      />
    </ConfigProvider>
  );
};

export default function ProgressSection() {
  return (
    <ProgressSectionContainer>
      <ProgressSectionWrapper>
        <PercentageWrapper>
          <Headings>
            <SubHeading>Who We Are</SubHeading>
            <MainHeading>
              Over 1,200+ Members Trust <br />
              <span>Academy of Startups</span>
              <br /> To Transform their Businesses
            </MainHeading>
          </Headings>
          <Percentages>
            <p>Startups</p>
            <ProgressBar percent={90} trail="#fff" />
            <p>Manufacturing</p>
            <ProgressBar percent={94} trail="#fff" />
            <p>Import & Export</p>
            <ProgressBar percent={93} trail="#fff" />
            <p>High Network Individuals</p>
            <ProgressBar percent={85} trail="#fff" />
          </Percentages>
        </PercentageWrapper>
        <JoinUs>
          <JoinHeadings>
            <MainHeading color="#000000">
              Get the Best answers for your <br /> Worst Challenges
            </MainHeading>
            <JoinUsPara>
              Challenges are situations in business. Many will consider it as
              problemsand leave the industry. We will help businesses & startups
              at any level to grow by analyzing structure, implementing growth
              methods and execute in result oriented milestones.
            </JoinUsPara>
          </JoinHeadings>
          <Buttons>
            <CommonButton width="160px" height="50px" name="Join Us" />
            <AnchorButton name="Learn More →" />
          </Buttons>
        </JoinUs>
      </ProgressSectionWrapper>
    </ProgressSectionContainer>
  );
}
