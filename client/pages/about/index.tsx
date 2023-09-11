import dynamic from "next/dynamic";
import Head from "next/head";
import { useState } from "react";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
const Footer = dynamic(() => import("@/components/Footer"));
const Breadcumb = dynamic(() => import("@/components/Breadcumb"));
const MentorsSection = dynamic(() => import("@/views/MentorsSection"));
const RoadmapSection = dynamic(() => import("@/views/RoadmapSection"));
const QuoteSection = dynamic(() => import("@/views/QuoteSection"));
const MissionSection = dynamic(() => import("@/views/MissionSection"));
const ManagementSection = dynamic(() => import("@/views/ManagementSection"));
export default function AboutPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <main>
        {/* <Head>
          <title>About</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" />
        </Head> */}
        <Navbar toggle={toggle} />
        <Sidebar toggle={toggle} isOpen={isOpen} />
        <Breadcumb name="About us" link="about" />
        <ManagementSection />
        <MissionSection />
        <RoadmapSection />
        <QuoteSection />
        <MentorsSection />
        <Footer />
      </main>
    </>
  );
}
