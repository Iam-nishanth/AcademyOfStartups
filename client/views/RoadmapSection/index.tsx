import { Heading, SubHeading } from "@/styles/Globalstyles";
import {
  ImageDiv,
  ImageWrapper,
  RoadMap,
  RoadMapContentBox,
  RoadMapIcon,
  RoadMapItem,
  RoadMapList,
  RoadmapContainer,
  RoadmapContent,
  RoadmapWrapper,
} from "@/styles/views/RoadmapStyles";
import Image from "next/image";
import { IoIosBookmarks } from "react-icons/io";
import { TbChartInfographic } from "react-icons/tb";
import { MdRocketLaunch } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import { FaRepeat } from "react-icons/fa6";
import { RevealX } from "@/utils/animation/RevealX";
import { ZoomIn } from "@/utils/animation/ZoomIn";

const RoadmapSection = () => {
  const RoadMapData = [
    {
      Title: "Understanding",
      Description:
        "Understanding the business Objectives and Economic Environment to measure & monitor what matters the most.",
      Icon: <IoIosBookmarks />,
    },
    {
      Title: "Development",
      Description:
        "Develop your Business according to your Long-term goals, potential customers and Funding.",
      Icon: <TbChartInfographic />,
    },
    {
      Title: "Deployment",
      Description:
        "Deploy the Developed or Created business into the Industry with all approvals and with complete Operational Excellence.",
      Icon: <MdRocketLaunch />,
    },
    {
      Title: "Results",
      Description:
        "See the visible changes in the Business and the best results you got using the Development Strategies.",
      Icon: <HiBadgeCheck />,
    },
    {
      Title: "Repeat",
      Description:
        "Notice the Results, research and analyze the entire Process then Repeat the whole process for consistent Growth.",
      Icon: <FaRepeat />,
    },
  ];

  return (
    <RoadmapContainer>
      <RoadmapWrapper>
        <ImageWrapper>
          <ImageDiv>
            <ZoomIn>

              <Image
                quality={100}
                width={700}
                height={700}
                src={"/images/Improvement.svg"}
                alt="Roadmap-Image"
                priority={false}
              />
            </ZoomIn>
          </ImageDiv>
        </ImageWrapper>
        <RoadmapContent>
          <RevealX>
            <SubHeading>Our Process</SubHeading>
          </RevealX>
          <RevealX>
            <Heading>Easy Steps To Improve Your Business and Startups</Heading>
          </RevealX>
          <RoadMap>
            <RevealX>
              <RoadMapList>
                {RoadMapData.map((item, index) => (
                  <RoadMapItem key={index}>
                    <RoadMapIcon>
                      {item.Icon}
                    </RoadMapIcon>
                    <RoadMapContentBox>
                      <h3>{item.Title}</h3>
                      <p>{item.Description}</p>
                    </RoadMapContentBox>
                  </RoadMapItem>
                ))}
              </RoadMapList>
            </RevealX>
          </RoadMap>
        </RoadmapContent>
      </RoadmapWrapper>
    </RoadmapContainer>
  );
}

export default RoadmapSection