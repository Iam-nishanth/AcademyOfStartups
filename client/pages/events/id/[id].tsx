import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/NavOnly";
import { CommonButton } from "@/components/Common/Button";
import { Heading, SubHeading } from "@/styles/Globalstyles";
import { EventDetailsContainer, EventDetailsWrapper, Span } from "@/styles/views/EventsStyles";
import axios from '@/lib/axios'
import { Skeleton } from "antd";


const EventPage = () => {
  const router = useRouter();
  const [item, setItem] = React.useState<any>();
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
      item && <EventDetailsWrapper key={item.id} >
        <Heading>{item.name}</Heading>
        <SubHeading>{item.description}</SubHeading>
        <p>
          <Span>Date: </Span>
          {item.dates}
        </p>
        <p>
          <Span>Time: </Span>
          {item.time}
        </p>
        <p>₹ {item.entryFee}/- only</p>
        <CommonButton name="Pay now" width="150px" height="40px" />
      </EventDetailsWrapper>)

  }

  // const ItemDetails = .map((item) => {
  //   if (item && item.id === String(id)) {
  //     return (
  //       <EventDetailsWrapper key={item.id}>
  //         <Heading>{item.name}</Heading>
  //         <SubHeading>{item.description}</SubHeading>
  //         <p>
  //           <Span>Date: </Span>
  //           {item.dates}
  //         </p>
  //         <p>
  //           <Span>Time: </Span>
  //           {item.time}
  //         </p>
  //         <p>₹ {item.entryFee}/- only</p>
  //         <CommonButton name="Pay now" width="150px" height="40px" />
  //       </EventDetailsWrapper>
  //     );
  //   }
  // });

  return (
    <Layout title="Event Details" description="Academy of Startups , where we empower businesses to achieve 10X growth through expert consulting. Ignite success and unlock exponential potential with us. ">
      {
        item ? (
          <EventDetailsContainer>
            <ItemDetails />
            <div style={{ width: '500px', height: '300px' }}>
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
      {/* <EventDetailsContainer>
        <ItemDetails />
        <Image
          src={"/images/Digital Mahila.jpg"}
          alt="Digital Mahila Webinar"
          width={300}
          height={200}
        />
      </EventDetailsContainer> */}
    </Layout>
  );
}

export default EventPage