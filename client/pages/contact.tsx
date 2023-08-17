import { useState } from "react";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
const Breadcumb = dynamic(() => import("@/components/Breadcumb"));
const Map = dynamic(() => import("@/components/Map"));
const ContactSection = dynamic(() => import("@/views/ContactSection"));
const Footer = dynamic(() => import("@/components/Footer"));
export default function ContactPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Breadcumb name="Contact us" link="contact" />
      <Map />
      <ContactSection />
      <Footer />
    </main>
  );
}
