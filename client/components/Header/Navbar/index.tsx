import Image from "next/image";
import { FaBars } from "react-icons/fa";
import Link from "next/link";

import {
  Button,
  ButtonWrapper,
  Logo,
  NavItem,
  NavLinks,
  NavWrapper,
  NavbarContainer,
  SidebarIcon,
} from "@/styles/components/Header/NavbarStyles";
import { LINK } from "@/styles/Globalstyles";

type NavbarProps = {
  toggle: () => void;
};

export default function Navbar({ toggle }: NavbarProps): JSX.Element {
  return (
    <>
      <NavbarContainer>
        <NavWrapper>
          <Link href="/">
            <Logo>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={200}
                height={90}
                priority={true}
              />
            </Logo>
          </Link>
          <NavLinks>
            <NavItem>
              <Link href="/about">About us</Link>
            </NavItem>
            <NavItem>
              <Link href="/team">Team</Link>
            </NavItem>
            <NavItem>
              <Link href="/startups">Startups</Link>
            </NavItem>
            <NavItem>
              <Link href="/investors">Investors</Link>
            </NavItem>
            <NavItem>
              <Link href="/events">Events</Link>
            </NavItem>
            <NavItem>
              <Link href="/contact">Contact us</Link>
            </NavItem>
          </NavLinks>
          <ButtonWrapper>
            <Button><Link href="/login">Get Started </Link></Button>
          </ButtonWrapper>
          <SidebarIcon onClick={toggle}>
            <FaBars />
          </SidebarIcon>
        </NavWrapper>
      </NavbarContainer>
    </>
  );
}
