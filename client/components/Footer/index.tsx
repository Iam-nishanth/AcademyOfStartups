import Image from "next/image";
import {
  AddressWrapper,
  CopyrightWrapper,
  FooterContainer,
  FooterHR,
  FooterHeading,
  FooterList,
  FooterPara,
  FooterWrapper,
  QuickLinks,
  UsefulLinks,
  WorkingHours,
} from "../../styles/components/FooterStyles";
import { FooterAnchor } from "../Common/Button";
import { HiClock, HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";
import Link from "next/link";

export default function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <AddressWrapper>
          <Image
            src={
              "https://academyofstartups.com/wp-content/uploads/2023/06/logo-1-e1686036092879-2048x819.png"
            }
            width={200}
            height={80}
            alt="footer-logo"
          />
          <FooterList>
            <li>
              <span>
                <HiLocationMarker />
              </span>
              <span>
                <FooterAnchor name="5th floor, 3-535, LR Towers, Ayyappa Society, Madhapur, Telangana 500081" />
              </span>
            </li>
            <li>
              <span>
                <HiMail />
              </span>
              <span>
                <FooterAnchor name="hello@academyofstartups.com" />
              </span>
            </li>
            <li>
              <span>
                <HiPhone />
              </span>
              <span>
                <FooterAnchor name="99488 99366" />
              </span>
            </li>
          </FooterList>
        </AddressWrapper>
        <QuickLinks>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterHR />
          <FooterList>
            <li>
              <Link href="/about">
                <FooterAnchor name="About us" />
              </Link>
            </li>
            <li>
              <Link href='/team'>
                <FooterAnchor name="Team" />
              </Link>
            </li>
            <li>
              <Link href='/investors'>
                <FooterAnchor name="Investors" />
              </Link>
            </li>
            <li>
              <Link href='/events'>
                <FooterAnchor name="Events" />
              </Link>
            </li>
            <li>
              <Link href='/contact'>
                <FooterAnchor name="Contact us" />
              </Link>
            </li>
          </FooterList>
        </QuickLinks>
        <UsefulLinks>
          <FooterHeading>Quick Links</FooterHeading>
          <FooterHR />
          <FooterList>
            <li>
              <FooterAnchor name="Privacy Policy" />
            </li>
            <li>
              <FooterAnchor name="Terms & Conditions" />
            </li>
            <li>
              <FooterAnchor name="Disclaimer" />
            </li>
            <li>
              <FooterAnchor name="Support" />
            </li>
          </FooterList>
        </UsefulLinks>
        <WorkingHours>
          <FooterHeading>Working Hours</FooterHeading>
          <FooterHR />
          <FooterPara>
            <span>
              <HiClock />
            </span>
            <span>10AM - 6PM, Monday - Saturday</span>
          </FooterPara>
        </WorkingHours>
      </FooterWrapper>
      <CopyrightWrapper>
        <p>Copyright © 2023. All rights reserved.</p>
      </CopyrightWrapper>
    </FooterContainer>
  );
}
