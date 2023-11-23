import Form from "@/components/Form";
import { Heading, SubHeading } from "@/styles/Globalstyles";
import {
  Address,
  AddressWrapper,
  ContactContainer,
  ContactWrapper,
  FormWrapper,
  Icon,
  Content,
  DIV,
} from "@/styles/views/ContactSectionStyles";
import React from "react";
import { FaBuilding, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { BsFillEnvelopeAtFill } from "react-icons/bs";
import { RevealX } from "@/utils/animation/RevealX";
import { RevealY } from "@/utils/animation/RevealY";

const ContactSection = () => {
  return (
    <ContactContainer>
      <ContactWrapper>
        <AddressWrapper>
          <RevealX><SubHeading>Contact Us</SubHeading></RevealX>
          <RevealX><Heading>Get in Touch with us</Heading></RevealX>
          <Address>
            <DIV>
              <Icon>
                <FaBuilding />
              </Icon>
              <RevealX>
                <Content>
                  <h3>Building</h3>
                  <p>5th floor, LR TOWERS, GR Corporate Office</p>
                </Content>
              </RevealX>

            </DIV>
            <DIV>
              <Icon>
                <FaLocationDot />
              </Icon>
              <RevealX>
                <Content>
                  <h3>Address</h3>
                  <p>Ayyppa Society, Madhapur, Hyderabad, Telangana 500081</p>
                </Content>
              </RevealX>
            </DIV>
            <DIV>
              <Icon>
                <FaPhoneVolume />
              </Icon>
              <RevealX>
                <Content>
                  <h3>Call us</h3>
                  <a href="tel:+919948899366">+91 99488 99366</a>
                </Content>
              </RevealX>
            </DIV>
            <DIV>
              <Icon>
                <BsFillEnvelopeAtFill />
              </Icon>
              <RevealX>
                <Content>
                  <h3>Email Info</h3>
                  <a href="mailto:hello@academyofstartups.com">
                    hello@academyofstartups.com
                  </a>
                </Content>
              </RevealX>
            </DIV>
          </Address>
        </AddressWrapper>
        <FormWrapper>
          <RevealY width="100%">
            <Form />
          </RevealY>
        </FormWrapper>

      </ContactWrapper>
    </ContactContainer>
  );
}

export default ContactSection