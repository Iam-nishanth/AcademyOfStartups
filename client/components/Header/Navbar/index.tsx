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
import { useAuthContext } from "@/hooks/useAuthContext";

type NavbarProps = {
  toggle: () => void;
};

export default function Navbar({ toggle }: NavbarProps): JSX.Element {
  const { user } = useAuthContext();

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
            <NavItem>
              <Link href="/users">Join</Link>
            </NavItem>
          </NavLinks>
          {
            user ? (
              <h2>Hello {user.email.split('@')[0]}</h2>
            ) : <ButtonWrapper>
              <Link href="/login"><Button>Get Started</Button></Link>
            </ButtonWrapper>
          }

          <SidebarIcon onClick={toggle}>
            <FaBars />
          </SidebarIcon>
        </NavWrapper>
      </NavbarContainer>
    </>
  );
}
