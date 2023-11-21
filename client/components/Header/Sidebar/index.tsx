import { CommonButton, CommonButton2 } from "@/components/Common/Button";
import { useAuthContext } from "@/hooks/useAuthContext";
import { LINK } from "@/styles/Globalstyles";
import {
  Close,
  CloseIcon,
  NavItem,
  NavLinks,
  SidebarContainer,
} from "@/styles/components/Header/SidebarStyles";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ReactElement } from "react";

type SidebarProps = {
  isOpen: boolean;
  toggle: () => void;
};

const Sidebar = ({ isOpen, toggle }: SidebarProps): ReactElement => {

  const { user } = useAuthContext();
  const router = useRouter();

  return <SidebarContainer isOpen={isOpen} toggle={toggle}>
    <Close onClick={toggle}>
      <CloseIcon />
    </Close>
    <NavLinks>
      <NavItem className={router.pathname.match('/about') ? 'active' : ''} onClick={toggle}>
        <LINK href="/about">About us</LINK>
      </NavItem>
      <NavItem className={router.pathname.match('/team') ? 'active' : ''} onClick={toggle}>
        <LINK href="/team">Team</LINK>
      </NavItem>
      <NavItem className={router.pathname.match('/services') ? 'active' : ''} onClick={toggle}>
        <LINK href="/services">Services</LINK>
      </NavItem>
      <NavItem className={router.pathname.match('/investors') ? 'active' : ''} onClick={toggle}>
        <LINK href="/investors">Investors</LINK>
      </NavItem>
      <NavItem className={router.pathname.match('/events') ? 'active' : ''} onClick={toggle}>
        <LINK href="/events">Events</LINK>
      </NavItem>
      <NavItem className={router.pathname.match('/contact') ? 'active' : ''} onClick={toggle}>
        <LINK href="/contact">Contact us</LINK>
      </NavItem>
      {!user
        && (
          <NavItem className={router.pathname.match('/login') ? 'active' : ''} onClick={toggle}>
            <Link href="/login">
              <CommonButton name="Sign In" width="200px" />
            </Link>
          </NavItem>

        )}
    </NavLinks>
  </SidebarContainer>

}


export default Sidebar