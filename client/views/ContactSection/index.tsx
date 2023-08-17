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

export default function ContactSection() {
  return (
    <ContactContainer>
      <ContactWrapper>
        <AddressWrapper>
          <SubHeading>Contact Us</SubHeading>
          <Heading>Get in Touch with us</Heading>
          <Address>
            <DIV>
              <Icon>
                <FaBuilding />
              </Icon>
              <Content>
                <h3>Building</h3>
                <p>5th floor, LR TOWERS, GR Corporate Office</p>
              </Content>
            </DIV>
            <DIV>
              <Icon>
                <FaLocationDot />
              </Icon>
              <Content>
                <h3>Address</h3>
                <p>Ayyppa Society, Madhapur, Hyderabad, Telangana 500081</p>
              </Content>
            </DIV>
            <DIV>
              <Icon>
                <FaPhoneVolume />
              </Icon>
              <Content>
                <h3>Call us</h3>
                <a href="tel:+919948899366">+91 99488 99366</a>
              </Content>
            </DIV>
            <DIV>
              <Icon>
                <BsFillEnvelopeAtFill />
              </Icon>
              <Content>
                <h3>Email Info</h3>
                <a href="mailto:hello@academyofstartups.com">
                  hello@academyofstartups.com
                </a>
              </Content>
            </DIV>
          </Address>
        </AddressWrapper>
        <FormWrapper>
          <Form />
        </FormWrapper>
      </ContactWrapper>
    </ContactContainer>
  );
}
