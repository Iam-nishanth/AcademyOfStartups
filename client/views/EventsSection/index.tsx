import React from "react";
import { CommonButton } from "@/components/Common/Button";
import { Heading, SubHeading } from "@/styles/Globalstyles";
import {
  CardWrapper,
  EventCard,
  EventsContainer,
  EventsWrapper,
  Span,
} from "@/styles/views/EventsStyles";
import Link from "next/link";
import axios from '@/lib/axios';
import { Skeleton } from "antd";

interface Event {
  id: string;
  name: string;
  subtitle: string | undefined;
  dates: string;
  time: string;
  location: string;
  description: string | undefined;
  entryFee: number | undefined;
  coverImage?: string;
}

export const getStaticProps = async () => {
  try {
    const response = await axios.get("/api/get/events");
    return {
      props: {
        events: response.data,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        events: [],
      },
    };
  }
};


const EventsSection = (props: any) => {
  const [events, setEvents] = React.useState<Event[]>(props.events);

  console.log("events", events);



  // React.useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       const response = await axios.get("/api/get/events");
  //       if (response.status === 200) {
  //         setEvents(response.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchEvents();
  // }, []);

  return (
    <EventsContainer>
      <EventsWrapper>
        <SubHeading>Coming Soon</SubHeading>
        <Heading>Upcoming Events</Heading>

        <CardWrapper>
        </CardWrapper>

      </EventsWrapper>
    </EventsContainer>
  );
};

export default EventsSection;
