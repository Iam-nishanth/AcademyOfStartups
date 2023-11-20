import React from 'react'
import Layout from "@/components/Layout/Full";
import CountCards from "@/components/CountCards";
import ServicesSection from '@/views/ServicesSection'
import MissionSection from "@/views/MissionSection";
import PricingSection from "@/views/PricingSection";

const StartupsPage = () => {
  return (
    <Layout title="Services | Academy of Startups" description="Academy of Startups , where we empower businesses to achieve 10X growth through expert consulting. Ignite success and unlock exponential potential with us. ">
      <CountCards />
      <ServicesSection />
      <MissionSection />
      <PricingSection />
    </Layout>
  );
}

export default StartupsPage
