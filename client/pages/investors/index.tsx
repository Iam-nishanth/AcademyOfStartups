import dynamic from "next/dynamic";
import React, { useState } from "react";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
const Breadcumb = dynamic(() => import("@/components/Breadcumb"));
import InvestorSection from "@/views/InvestorSection";



export default function StartupsPage() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Breadcumb name="Investors" link="investors" />
      <InvestorSection />
    </main>
  );
}
