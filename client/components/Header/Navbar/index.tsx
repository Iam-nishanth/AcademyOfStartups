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
  UserWrapper,
} from "@/styles/components/Header/NavbarStyles";
import { useAuthContext } from "@/hooks/useAuthContext";
import { AnchorButton, CommonButton } from "@/components/Common/Button";
import UserDropdown from "@/components/Common/UserDropdown";
import { Anchor } from "antd";

type NavbarProps = {
  toggle: () => void;
};

export default function Navbar({ toggle }: NavbarProps): JSX.Element {
  const { user, business } = useAuthContext();
  const capitalizeFirstWord = (email: string) => {
    const firstWord = email.split("@")[0];
    const capitalizedFirstWord = firstWord.charAt(0).toUpperCase() + firstWord.slice(1);
    return `${capitalizedFirstWord} `
  };

  const DisplayName = business?.name || user && capitalizeFirstWord(user.userEmail);


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
          <UserWrapper>

            {
              user ? (
                <UserDropdown user={DisplayName} />
              ) : <ButtonWrapper>
                <Link href="/login"><Button>Sign In</Button></Link>
              </ButtonWrapper>
            }

            {user ? (
              <SidebarIcon>

                <FaBars onClick={toggle} />
              </SidebarIcon>
            ) : (
              <SidebarIcon>
                <Link href="/login">
                  <CommonButton name="Sign In" width="100px" />
                  <strong>Sign In</strong>
                </Link>
                <FaBars onClick={toggle} />
              </SidebarIcon>

            )}
          </UserWrapper>

        </NavWrapper>
      </NavbarContainer>
    </>
  );
}
