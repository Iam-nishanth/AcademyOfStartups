import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Timings } from "@/views/EventsSection";
import {
  EventDetailsContainer,
  EventDetailsWrapper,
  Span,
} from "@/styles/views/EventsStyles";
import { Heading, SubHeading } from "@/styles/Globalstyles";
import Image from "next/image";
import { CommonButton } from "@/components/Common/Button";
const Navbar = dynamic(() => import("@/components/Header/Navbar"));
const Sidebar = dynamic(() => import("@/components/Header/Sidebar"));
const Breadcumb = dynamic(() => import("@/components/Breadcumb"));

export default function EventPage() {
  const router = useRouter();
  const { id } = router.query;
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };

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
    <main>
      <Navbar toggle={toggle} />
      <Sidebar toggle={toggle} isOpen={isOpen} />
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
    </main>
  );
}
