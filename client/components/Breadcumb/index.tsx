import { LINK, SmallHeading, WhiteHeading } from "@/styles/Globalstyles";
import {
  Active,
  BreadcrumbContainer,
  BreadcrumbWrapper,
  Crumbs,
} from "@/styles/components/Breadcrumbstyles";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";

interface BreadcumbProps {
  name: string;
  link: string;
}

export default function Breadcumb(props: BreadcumbProps): JSX.Element {
  return (
    <BreadcrumbContainer>
      <BreadcrumbWrapper>
        <WhiteHeading>{props.name}</WhiteHeading>
        <Crumbs>
          <SmallHeading>
            <LINK href={"/"}>Home</LINK>
          </SmallHeading>
          <span>
            <IoIosArrowForward />
          </span>
          <SmallHeading>
            <Active>
              <LINK href={`/${props.link}`}>{props.name}</LINK>
            </Active>
          </SmallHeading>
        </Crumbs>
      </BreadcrumbWrapper>
    </BreadcrumbContainer>
  );
}
