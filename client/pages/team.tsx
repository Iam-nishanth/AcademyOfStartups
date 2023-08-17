import dynamic from "next/dynamic";
import { useState } from "react";

const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
const Breadcumb = dynamic(() => import("@/components/Breadcumb"));
const TeamSection = dynamic(() => import("@/views/TeamSection"));
const ProgressSection = dynamic(() => import("@/views/ProgressSection"));
const ManagementSection = dynamic(() => import("@/views/ManagementSection"));
const Footer = dynamic(() => import("@/components/Footer"));

export default function TeamPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <Breadcumb name="Team" link="team" />
      <TeamSection />
      <ProgressSection />
      <ManagementSection />
      <Footer />
    </main>
  );
}
