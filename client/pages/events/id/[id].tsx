import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/NavOnly";
import { CommonButton } from "@/components/Common/Button";
import { Heading, SubHeading } from "@/styles/Globalstyles";
import { EventDetailsContainer, EventDetailsWrapper, Span } from "@/styles/views/EventsStyles";
import axios from '@/lib/axios'
import { Button, Skeleton } from "antd";
import Link from "next/link";

interface Event {
  id: string;
  name: string;
  subtitle: string | undefined;
  dates: string;
  time: string;
  location: string;
  description: string | TrustedHTML;
  entryFee: string | undefined;
  coverImage?: string;
  paymentLink?: string;
  isPaid?: boolean;
}

const EventPage = () => {
  const router = useRouter();
  const [item, setItem] = React.useState<Event>();
  const { id } = router.query;

  React.useEffect(() => {
    const getEvent = async () => {
      try {
        const response = await axios.get(`/api/get/events/${id}`);
        console.log(response.data);
        setItem(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getEvent();
  }, [id]);

  const ItemDetails = () => {
    return (
      item && <EventDetailsWrapper key={item.id} style={{ paddingRight: "30px" }}>
        <Heading>{item.name}</Heading>
        <SubHeading style={{ fontSize: '18px' }}>{item.subtitle}</SubHeading>
        <div className="Description" dangerouslySetInnerHTML={{ __html: item.description }}></div>
        <p><Span>Location :</Span> {item.location}</p>
        <p>
          <Span>Date: </Span>
          {item.dates}
        </p>
        <p>
          <Span>Time: </Span>
          {item.time}
        </p>
        <p>

          <Span>Entry Fee: </Span>
          {item.entryFee === 'Free' || item.entryFee === 'free' ? 'Free' : `₹ ${item.entryFee} /- only`}
        </p>
        {
          item.paymentLink ? (
            item.isPaid ? (
              <Link href={item.paymentLink} target="_blank" rel="noopener noreferrer">
                <Button type="primary" style={{ width: "250px", height: "40px", marginTop: "20px" }} disabled>Register</Button>
              </Link>
            ) : (
              <Link href={item.paymentLink} target="_blank" rel="noopener noreferrer">
                <Button type="primary" style={{ height: "40px", width: "250px", marginTop: "20px" }}>Register</Button>
              </Link>
            )
          ) : (
            <Button type="primary" disabled style={{ height: "40px", width: "250px", marginTop: "20px" }}>Register</Button>
          )
        }
      </EventDetailsWrapper>)

  }

  return (
    <Layout title="Event Details" description="Academy of Startups , where we empower businesses to achieve 10X growth through expert consulting. Ignite success and unlock exponential potential with us. ">
      {
        item ? (
          <EventDetailsContainer style={{ minHeight: '80vh' }}>
            <ItemDetails />
            <div style={{ width: '500px', height: '300px' }}>
              {item.isPaid ? <SubHeading>You are already registered</SubHeading> : null}
              {
                item.coverImage ? (
                  <Image
                    objectFit="contain"
                    src={item.coverImage}
                    alt={item.name}
                    width={300}
                    height={200}
                  />
                ) : (
                  <Image
                    src={"/images/Digital Mahila.jpg"}
                    alt="Digital Mahila Webinar"
                    width={300}
                    height={200}
                  />
                )
              }
            </div>

          </EventDetailsContainer>
        ) : (
          <EventDetailsContainer>
            <Skeleton style={{ marginTop: '20px' }} active paragraph={{ rows: 10, width: '100%' }} />
          </EventDetailsContainer>
        )
      }
    </Layout>
  );
}

export default EventPage