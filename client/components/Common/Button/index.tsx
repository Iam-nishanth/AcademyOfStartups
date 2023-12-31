import React from "react";
import {
  GlobalButton,
  GlobalButton2,
  Anchor,
  Anchor2,
} from "@/styles/components/Common/ButtonStyles/index";

interface ButtonProps {
  name: string;
  width?: string;
  height?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  children?: React.ReactNode;
}

interface AnchorProps {
  name: string;
  href?: string;
}

export const CommonButton: React.FC<ButtonProps> = ({
  name,
  width,
  height,
  onClick,
}) => {

  return (
    <GlobalButton width={width} height={height} onClick={onClick}>
      {name}
    </GlobalButton>
  );
};

export const CommonButton2: React.FC<ButtonProps> = ({
  name,
  width,
  height,
  children,
}) => {

  return (
    <GlobalButton2 width={width} height={height}>
      {name} {children}
    </GlobalButton2>
  );
};
export const AnchorButton: React.FC<AnchorProps> = ({ name, href }) => {
  return <Anchor href={href}>{name}</Anchor>;
};
export const FooterAnchor: React.FC<AnchorProps> = ({ name }) => {
  return <Anchor2>{name}</Anchor2>;
};
