
import React from "react";
import Layout from "@/components/Layout/Full";
import Breadcumb from "@/components/Breadcumb";
import EventsSection from "@/views/EventsSection";


const EventsPage = () => {

  return (
    <Layout title="Events | Academy of Startups" description="Academy of Startups , where we empower businesses to achieve 10X growth through expert consulting. Ignite success and unlock exponential potential with us.">
      <Breadcumb name="Events" link="events" />
      <EventsSection />
    </Layout>
  );
}

export default EventsPage;