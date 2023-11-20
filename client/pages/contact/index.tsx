import React from "react";
import Layout from "@/components/Layout/Full";
import Breadcumb from "@/components/Breadcumb";
import Map from "@/components/Map";
import ContactSection from '@/views/ContactSection'

const ContactPage = (): JSX.Element => {
  return (
    <Layout title="Contact | Academy of Startups" description="Academy of Startups , where we empower businesses to achieve 10X growth through expert consulting. Ignite success and unlock exponential potential with us." >
      <Breadcumb name="Contact us" link="contact" />
      <Map />
      <ContactSection />
    </Layout>
  );
}

export default ContactPage

