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
import { CommonButton } from "@/components/Common/Button";
import UserDropdown from "@/components/Common/UserDropdown";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

type NavbarProps = {
  toggle: () => void;
  NavBackground?: boolean;
};

const Navbar = ({ toggle, NavBackground }: NavbarProps): JSX.Element => {
  const { user, business } = useAuthContext();

  const router = useRouter();

  const capitalizeFirstLetter = (word: string): string => {
    return word[0].toUpperCase() + word.slice(1);
  }

  const DisplayName = user && `${capitalizeFirstLetter(user?.name)}`;


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
                quality={100}
              />
            </Logo>
          </Link>
          <NavLinks>
            <NavItem className={router.pathname.match('/about') ? 'active' : ''}>
              <Link href="/about">About us</Link>
            </NavItem>
            <NavItem className={router.pathname.match('/team') ? 'active' : ''}>
              <Link href="/team">Team</Link>
            </NavItem>
            <NavItem className={router.pathname.match('/services') ? 'active' : ''}>
              <Link href="/services">Services</Link>
            </NavItem>
            <NavItem className={router.pathname.match('/investors') ? 'active' : ''}>
              <Link href="/investors">Investors</Link>
            </NavItem>
            <NavItem className={router.pathname.match('/events') ? 'active' : ''}>
              <Link href="/events">Events</Link>
            </NavItem>
            <NavItem className={router.pathname.match('/contact') ? 'active' : ''}>
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

        </NavWrapper >
      </NavbarContainer >
    </>
  );
}

export default Navbar