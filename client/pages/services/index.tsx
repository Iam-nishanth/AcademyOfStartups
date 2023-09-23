import StartupsView from "@/views/StartupsView";
import dynamic from "next/dynamic";
import React, { useState } from "react";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
const Footer = dynamic(() => import("@/components/Footer"));
import ServicesSection from '@/views/ServicesSection'
import MissionSection from "@/views/MissionSection";
import PricingSection from "@/views/PricingSection";

export default function StartupsPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <ServicesSection />
      <MissionSection />
      <PricingSection />
      <Footer />
    </main>
  );
}
