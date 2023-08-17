import styled from "styled-components";
import { usePathname } from "next/navigation";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  min-height: 90px;
  a {
    text-decoration: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    object-fit: cover;
    transition: all 0.3s ease-out;
    &:hover {
      cursor: pointer;
    }
  }
`;
export const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
  list-style: none;
  width: 100%;
  justify-content: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const NavItem = styled.li`
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  transition: all 0.3s ease;
  &:hover {
    color: #316aff;
    transform: translateY(-2px);
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const SidebarIcon = styled.div`
  display: none;
  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    svg {
      cursor: pointer;
      position: relative;
      right: 20px;
      font-size: 25px;
    }
  }
`;
export const Button = styled.button`
  font-size: 14px;
  color: #fff;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  padding: 10px 20px;
  border: none;
  outline: none;
  background-color: #316aff;
  width: 150px;
  height: 45px;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #001439;
    transform: translateY(-5px);
  }
`;