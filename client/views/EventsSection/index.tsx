import React from "react";
import { SubHeading } from "@/styles/Globalstyles";
import {
  CardWrapper,
  EventCard,
  EventsContainer,
  EventsWrapper,
  Span,
} from "@/styles/views/EventsStyles";
import axios from '@/lib/axios';
import { Skeleton } from "antd";

interface Event {
  id: string;
  name: string;
  subtitle: string | undefined;
  dates: string;
  time: string;
}



const EventsSection = () => {
  const [events, setEvents] = React.useState<Event[]>();
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("/api/get/events");
        if (response.status === 200) {
          setIsLoading(false);
          setEvents(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchEvents();
  }, []);

  if (isLoading) return (
    <EventsContainer>
      <EventsWrapper>
        <Skeleton active paragraph={{ rows: 15, width: '100%' }} />
      </EventsWrapper>
    </EventsContainer>
  )
  else return (
    <EventsContainer>
      <EventsWrapper>
        <CardWrapper>
          {
            events?.map((item) =>
              <EventCard href={`/events/id/${item.id}`} key={item.id}>
                <strong style={{ fontSize: "25px" }}>{item.name}</strong>
                <SubHeading>{item.subtitle}</SubHeading>
                <p>
                  Date :
                  <Span> {item.dates}</Span>
                </p>
                <p>Time : <Span>{item.time}</Span>
                </p>
              </EventCard>
            )
          }
        </CardWrapper>
      </EventsWrapper>
    </EventsContainer>
  )

};

export default EventsSection;
