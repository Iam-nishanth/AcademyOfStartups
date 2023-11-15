import React from "react";
import Layout from "@/components/Layout/Full";
import Breadcumb from "@/components/Breadcumb";
import ManagementSection from "@/views/ManagementSection";
import MissionSection from "@/views/MissionSection";
import RoadmapSection from "@/views/RoadmapSection";
import QuoteSection from "@/views/QuoteSection";
import MentorsSection from "@/views/MentorsSection";
const AboutPage = (): JSX.Element => {

  return (
    <Layout>
      <Breadcumb name="About us" link="about" />
      <ManagementSection />
      <MissionSection />
      <RoadmapSection />
      <QuoteSection />
      <MentorsSection />
    </Layout>

  );
}

export default AboutPage