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
}

interface AnchorProps {
  name: string;
}

export const CommonButton: React.FC<ButtonProps> = ({
  name,
  width,
  height,
  onClick,
}) => {

  return (
    <GlobalButton width={width} height={height}>
      {name}
    </GlobalButton>
  );
};

export const CommonButton2: React.FC<ButtonProps> = ({
  name,
  width,
  height,
}) => {

  return (
    <GlobalButton2 width={width} height={height}>
      {name}
    </GlobalButton2>
  );
};
export const AnchorButton: React.FC<AnchorProps> = ({ name }) => {
  return <Anchor>{name}</Anchor>;
};
export const FooterAnchor: React.FC<AnchorProps> = ({ name }) => {
  return <Anchor2>{name}</Anchor2>;
};
