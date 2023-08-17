import Link from "next/link";
import { styled } from "styled-components";

export const SubHeading = styled.h4`
  font-size: 18px;
  font-weight: 500;
  color: #316aff;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const MainHeading = styled.h3`
  font-size: 40px;
  font-weight: 600;
  color: ${(props) => props.color || "#fff"};
  @media (max-width: 600px) {
    font-size: 32px;
  }
  span {
    color: #ff0000;
  }
`;
export const Paragraph = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #8e92a4;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const Heading = styled.h2`
  font-size: 35px;
  font-weight: 700;
  color: #000;
  @media (max-width: 600px) {
    font-size: 25px;
  }
`;
export const WhiteHeading = styled.h2`
  font-size: 35px;
  font-weight: 700;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 25px;
  }
  @media (max-width: 400px) {
    font-size: 23px;
  }
`;
export const SmallHeading = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 16px;
  }
  @media (max-width: 400px) {
    font-size: 14px;
  }
`;
export const LINK = styled(Link)`
  text-decoration: none;
  font: inherit;
  color: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
