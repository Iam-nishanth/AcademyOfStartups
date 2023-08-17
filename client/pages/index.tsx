import { useState } from "react";
import dynamic from "next/dynamic";
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
