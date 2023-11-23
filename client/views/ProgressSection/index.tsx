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
import { RevealY } from "@/utils/animation/RevealY";
import { Progress, ConfigProvider } from "antd";

const theme = {
  token: {
    colorText: "#3f3f3f | #fff",
    motionDurationSlow: "0.6s",
  },
};
interface ProgressBarProps {
  percent: number;
  trail: string;
  label: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = (props) => {
  return (
    <ConfigProvider theme={theme}>
      <Progress
        percent={props.percent}
        status="active"
        trailColor={props.trail}
        aria-label={props.label}
      />
    </ConfigProvider>
  );
};

const ProgressSection = () => {
  return (
    <ProgressSectionContainer>
      <ProgressSectionWrapper>
        <PercentageWrapper>
          <RevealY>

            <Headings>
              <SubHeading>Who We Are</SubHeading>
              <MainHeading>
                Over 1,200+ Members Trust <br />
                <span>Academy of Startups</span>
                <br /> To Transform their Businesses
              </MainHeading>
            </Headings>
          </RevealY>
          <Percentages>
            <p>Startups</p>
            <ProgressBar percent={90} trail="#fff" label="Startups Progress" />
            <p>Manufacturing</p>
            <ProgressBar percent={94} trail="#fff" label="Manufacturing Progress" />
            <p>Import & Export</p>
            <ProgressBar percent={93} trail="#fff" label="Import & Export Progress" />
            <p>High Network Individuals</p>
            <ProgressBar percent={85} trail="#fff" label="High Network Individuals Progress" />
          </Percentages>
        </PercentageWrapper>
        <JoinUs>
          <JoinHeadings>
            <RevealY>
              <MainHeading color="#333333">
                Get the Best answers for your <br /> Worst Challenges
              </MainHeading>
            </RevealY>
            <RevealY>
              <JoinUsPara>
                Challenges are situations in business. Many will consider it as
                problemsand leave the industry. We will help businesses & startups
                at any level to grow by analyzing structure, implementing growth
                methods and execute in result oriented milestones.
              </JoinUsPara>
            </RevealY>
          </JoinHeadings>
          <Buttons>
            <CommonButton width="160px" height="50px" name="Join Us" />
            <AnchorButton href="/services" name="Learn More →" />
          </Buttons>
        </JoinUs>

      </ProgressSectionWrapper>
    </ProgressSectionContainer>
  );
}

export default ProgressSection