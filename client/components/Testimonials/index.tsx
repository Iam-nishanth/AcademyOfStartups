import React, { useRef } from "react";
import Slider from "react-slick";
import ClientSlider from "./ClientSlider";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  Buttons,
  Container,
  Headings,
  MainContainer,
  Testimonials,
} from "@/styles/components/Testimonials";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SubHeading, WhiteHeading } from "@/styles/Globalstyles";
import { clients } from "./Data";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  autoplay: true,
  responsive: [
    {
      breakpoint: 990,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
interface clients {
  name: string;
  position: string;
  img_url: string;
  disc: string;
  id: number;
  stars: number;
}

const TestimonialSection: React.FC = () => {
  const arrowRef = useRef<Slider>(null);
  const clientDisc: JSX.Element[] = clients.map((item: clients, i: number) => (
    <ClientSlider item={item} key={i} />
  ));

  return (
    <MainContainer>
      <Container>
        <Headings>
          <SubHeading>Testimonials</SubHeading>
          <WhiteHeading>Reviews From Our Clients</WhiteHeading>
        </Headings>
        <Testimonials>
          <Slider ref={arrowRef} {...settings}>
            {clientDisc}
          </Slider>
          <Buttons>
            <button onClick={() => arrowRef.current?.slickPrev()} aria-label="prev">
              <IoIosArrowBack />
            </button>
            <button onClick={() => arrowRef.current?.slickNext()} aria-label="next">
              <IoIosArrowForward />
            </button>
          </Buttons>
        </Testimonials>
      </Container>
    </MainContainer>
  );
};

export default TestimonialSection;
