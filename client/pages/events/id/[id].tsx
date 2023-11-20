import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/NavOnly";
import Breadcumb from "@/components/Breadcumb";
import { Timings } from "@/views/EventsSection";
import { CommonButton } from "@/components/Common/Button";
import { Heading, SubHeading } from "@/styles/Globalstyles";
import { EventDetailsContainer, EventDetailsWrapper, Span } from "@/styles/views/EventsStyles";


const EventPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const ItemDetails = Timings.map((item) => {
    if (item && item.id === Number(id)) {
      return (
        <EventDetailsWrapper key={item.id}>
          <Heading>{item.title}</Heading>
          <SubHeading>{item.desc}</SubHeading>
          <p>
            <Span>Date: </Span>
            {item.date}
          </p>
          <p>
            <Span>Time: </Span>
            {item.time}
          </p>
          <p>₹ {item.price}/- only</p>
          <CommonButton name="Pay now" width="150px" height="40px" />
        </EventDetailsWrapper>
      );
    }
  });
  return (
    <Layout title="Event Details" description="Academy of Startups , where we empower businesses to achieve 10X growth through expert consulting. Ignite success and unlock exponential potential with us. ">
      <Breadcumb name="Events" link="events" />
      <EventDetailsContainer>
        {ItemDetails}
        <Image
          src={"/images/Digital Mahila.jpg"}
          alt="Digital Mahila Webinar"
          width={700}
          height={500}
        />
      </EventDetailsContainer>
    </Layout>
  );
}

export default EventPage