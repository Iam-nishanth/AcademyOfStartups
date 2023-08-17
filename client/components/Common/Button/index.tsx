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
}) => {
  /**
   * Button component
   * @param {string} name - The name of the button
   * @param {string} width - The width of the button (optional)
   * @param {string} height - The height of the button (optional)
   * @returns {JSX.Element} - The button component
   */
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
  /**
   * Button component
   * @param {string} name - The name of the button
   * @param {string} width - The width of the button (optional)
   * @param {string} height - The height of the button (optional)
   * @returns {JSX.Element} - The button component
   */
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
