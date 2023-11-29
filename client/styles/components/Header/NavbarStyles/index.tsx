import styled from "styled-components";

export interface NavbarProps {
  NavBackground: boolean;
}

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  transition: 300ms ease;
`;
export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  z-index: 10;
  min-height: 90px;

  max-width: 1200px;
  @media (min-width: 1600px) {
    max-width: 1400px;
  }
  @media (min-width: 1800px) {
    max-width: 1600px;
  }
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
  @media (max-width: 380px) {
    width: 180px;
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
  .active {
    color: #316aff;
  }
`;
export const NavItem = styled.li`
  font-weight: 700;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.05em;
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
  strong {
    color: #316aff;
  }

  @media (max-width: 1000px) {
    display: flex;
    align-items: center;
    gap: 15px;
    max-width: 200px;
    padding-right: 10px;
    strong {
      display: none;
    }
    svg {
      cursor: pointer;
      position: relative;
      /* right: 20px; */
      font-size: 25px;
    }

    @media (max-width: 450px) {
      button {
        display: none;
      }
      strong {
        display: block;
      }
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

export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  max-width: 200px;
  padding-right: 10px;

  @media (max-width: 600px) {
    max-width: 150px;
    justify-content: flex-end;

    .ant-dropdown-menu-title-content {
      a {
        font-size: 14px;
        padding: 5px !important;
      }
    }
  }
  @media (max-width: 350px) {
    font-size: 14px;
    gap: 5px;
  }
`;
