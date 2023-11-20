import React from "react";
import Layout from '@/components/Layout/Full'
import HeroSection from '@/views/HeroSection'
import FeatureCards from '@/views/FeatureCards'
import VideoSection from '@/views/VideoSection'
import RoadmapSection from "@/views/RoadmapSection";
import ProgressSection from "@/views/ProgressSection";
import TestimonialSection from "@/components/Testimonials"
import FAQSection from "@/views/FAQSection"


const Home = (): JSX.Element => {

  return (
    <Layout title="Academy of Startups" description="Academy of Startups , where we empower businesses to achieve 10X growth through expert consulting. Ignite success and unlock exponential potential with us.">
      <HeroSection />
      <FeatureCards />
      <VideoSection />
      <RoadmapSection />
      <ProgressSection />
      <TestimonialSection />
      <FAQSection />
    </Layout>
  );
}


export default Home