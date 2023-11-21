import { FaTimes } from "react-icons/fa";
import styled from "styled-components";

export type SidebarContainerProps = {
  isOpen: boolean;
  toggle: () => void;
  // Add children prop here if it's not already present
  children: React.ReactNode;
};

export const SidebarContainer: React.FC<SidebarContainerProps> = styled.section`
  position: fixed;
  width: 100%;
  background-color: #000;
  height: 100%;
  padding-top: 50px;
  z-index: 10;
  transition: 0.5s ease-in-out;
  inset: 0;
  opacity: ${({ isOpen }: SidebarContainerProps) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }: SidebarContainerProps) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
  font-size: 25px;
`;
export const Close = styled.div`
  position: absolute;
  top: 18px;
  right: 20px;
  background: transparent;
  font-size: 35px;
  cursor: pointer;
  outline: none;
`;
export const NavLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  /* justify-content: center; */
  list-style: none;
  text-align: center;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 50px 0 0 0;

  .active{
    color: #316aff;
  }
`;
export const NavItem = styled.li`
  font-family: inherit;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: 0.08em;
  transition: all 0.3s ease;
  cursor: pointer;

  color: #fff;
  &:hover {
    color: #316aff;
  }
`;
