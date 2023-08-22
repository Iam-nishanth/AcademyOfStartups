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

export const Timings = [
  {
    id: 1,
    date: "2nd Sep 2023",
    time: "11 AM - 1PM",
    title: "Digital Mahila",
    desc: "Webinar",
    price: "99",
  },
  {
    id: 2,
    date: "7th Oct 2023",
    time: "11 AM - 1PM",
    title: "Digital Mahila",
    desc: "Webinar",
    price: "99",
  },
  {
    id: 3,
    date: "4th Nov 2023",
    time: "11AM - 1PM",
    title: "Digital Mahila",
    desc: "Webinar",
    price: "99",
  },
  {
    id: 4,
    date: "2nd Dec 2023",
    time: "11 AM - 1PM",
    title: "Digital Mahila",
    desc: "Webinar",
    price: "99",
  },
];

const EventsSection = () => {
  const CardPreview = Timings.map((item) => (
    <EventCard key={item.id}>
      <div>
        <h2>Digital Mahila</h2>
        <p>Webinar</p>
      </div>
      <div>
        <p>
          <Span>Date: </Span>
          {item.date}
        </p>
        <p>
          <Span>Time: </Span>
          {item.time}
        </p>
      </div>
      <Link href={`/events/id/${item.id}`}>
        <CommonButton name="Register" width="150px" height="40px" />
      </Link>
    </EventCard>
  ));
  return (
    <EventsContainer>
      <EventsWrapper>
        <SubHeading>Coming Soon</SubHeading>
        <Heading>Upcoming Events</Heading>
        <CardWrapper>{CardPreview}</CardWrapper>
      </EventsWrapper>
    </EventsContainer>
  );
};

export default EventsSection;
