import { Heading, SubHeading } from "@/styles/Globalstyles";
import {
  EventCard,
  EventsContainer,
  EventsWrapper,
} from "@/styles/views/EventsStyles";

const EventsSection = () => {
  return (
    <EventsContainer>
      <EventsWrapper>
        <SubHeading>Coming Soon</SubHeading>
        <Heading>Upcoming Events</Heading>
        <div>
          <EventCard>
            <h2>Digital Mahila</h2>
            <p>Webinar</p>
          </EventCard>
        </div>
      </EventsWrapper>
    </EventsContainer>
  );
};

export default EventsSection;
