import React from 'react'
import Layout from "@/components/Layout/Full";
import CountCards from "@/components/CountCards";
import ServicesSection from '@/views/ServicesSection'
import MissionSection from "@/views/MissionSection";
import PricingSection from "@/views/PricingSection";

const StartupsPage = () => {
  return (
    <Layout>
      <CountCards />
      <ServicesSection />
      <MissionSection />
      <PricingSection />
    </Layout>
  );
}

export default StartupsPage
