import styled from "styled-components";

interface GlobalButtonProps {
  width?: string;
  height?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

export const GlobalButton = styled.button<GlobalButtonProps>`
  font-size: 14px;
  color: #fff;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  outline: none;
  background-color: #316aff;
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.height || "45px"};
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #001439;
    transform: translateY(-5px);
  }
  @media (max-width: 800px) {
    width: 120px;
    height: 50px;
    font-size: 14px;
    font-weight: 600;
  }
`;
export const GlobalButton2 = styled.button<GlobalButtonProps>`
  font-size: 16px;
  color: #fff;
  font-family: inherit;
  font-weight: 800;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  outline: none;
  background-color: #316aff;
  width: ${(props) => props.width || "150px"};
  height: ${(props) => props.height || "45px"};
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #fff;
    color: #316aff;
    transform: translateY(-5px);
  }
  @media (max-width: 800px) {
    width: 120px;
    height: 50px;
    font-size: 14px;
    font-weight: 600;
  }
`;
export const Anchor = styled.a`
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  color: #001439;
  transition: all 0.3s ease;
  &:hover {
    color: #316aff;
    transform: translateY(-5px);
  }
`;
export const Anchor2 = styled.p`
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease;
  &:hover {
    color: #316aff;
  }
  @media (max-width: 500px) {
    font-size: 0.8rem;
  }
`;
