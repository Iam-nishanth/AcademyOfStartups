import React from "react";
import Layout from "@/components/Layout/Full";
import Breadcumb from "@/components/Breadcumb";
import Map from "@/components/Map";
import ContactSection from '@/views/ContactSection'

const ContactPage = (): JSX.Element => {
  return (
    <Layout>
      <Breadcumb name="Contact us" link="contact" />
      <Map />
      <ContactSection />
    </Layout>
  );
}

export default ContactPage
