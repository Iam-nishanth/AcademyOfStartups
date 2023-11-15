
import React from "react";
import Layout from "@/components/Layout/Full";
import Breadcumb from "@/components/Breadcumb";
import EventsSection from "@/views/EventsSection";


const EventsPage = () => {

  return (
    <Layout>
      <Breadcumb name="Events" link="events" />
      <EventsSection />
    </Layout>
  );
}

export default EventsPage;