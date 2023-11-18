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
    <Layout title="Academy of Startups | Home" description="Webpage for Academy of Startups">
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