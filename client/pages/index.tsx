import { useState } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
const HeroSection = dynamic(() => import("@/views/HeroSection"));
const FeatureCards = dynamic(() => import("@/views/FeatureCards"));
const VideoSection = dynamic(() => import("@/views/VideoSection"));
const RoadmapSection = dynamic(() => import("@/views/RoadmapSection"));
const ProgressSection = dynamic(() => import("@/views/ProgressSection"));
const TestimonialSection = dynamic(() => import("@/components/Testimonials"));
const FAQSection = dynamic(() => import("@/views/FAQSection"));
const Footer = dynamic(() => import("@/components/Footer"));
export default function Home(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <main>
      {/* <Head>
        <title>About</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta http-equiv="X-UA-Compatible" content="IE=EmulateIE8" />
      </Head> */}
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
      <HeroSection />
      <FeatureCards />
      <VideoSection />
      <RoadmapSection />
      <ProgressSection />
      <TestimonialSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
