import { LINK } from "@/styles/Globalstyles";
import {
  Close,
  CloseIcon,
  NavItem,
  NavLinks,
  SidebarContainer,
} from "@/styles/components/Header/SidebarStyles";
import React, { ReactElement } from "react";

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

export default function Sidebar({
  isOpen,
  toggle,
}: SidebarProps): ReactElement {
  return (
    <SidebarContainer isOpen={isOpen} toggle={toggle}>
      <Close onClick={toggle}>
        <CloseIcon />
      </Close>
      <NavLinks>
        <NavItem onClick={toggle}>
          <LINK href="/about">About us</LINK>
        </NavItem>
        <NavItem onClick={toggle}>
          <LINK href="/team">Team</LINK>
        </NavItem>
        <NavItem onClick={toggle}>
          <LINK href="/startups">Startups</LINK>
        </NavItem>
        <NavItem onClick={toggle}>
          <LINK href="/investors">Investors</LINK>
        </NavItem>
        <NavItem onClick={toggle}>
          <LINK href="/events">Events</LINK>
        </NavItem>
        <NavItem onClick={toggle}>
          <LINK href="/contact">Contact us</LINK>
        </NavItem>
      </NavLinks>
    </SidebarContainer>
  );
}
