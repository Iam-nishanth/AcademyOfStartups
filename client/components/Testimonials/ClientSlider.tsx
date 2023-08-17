import React from "react";
import styled from "styled-components";
import { IoIosQuote } from "react-icons/io";
import Image from "next/image";

interface ClientSliderProps {
  item: {
    name: string;
    position: string;
    img_url: string;
    stars: number;
    disc: string;
  };
}

const ClientSlider: React.FC<ClientSliderProps> = (props) => {
  const { name, position, img_url, disc } = props.item;
  return (
    <Container>
      <Header>
        <span className="quote">
          <IoIosQuote />
        </span>
        <div></div>
      </Header>
      <Body>{disc}</Body>
      <Footer>
        <img src={img_url} alt={name} />
        <div className="details">
          <h1>{name}</h1>
          <p>{position}</p>
        </div>
      </Footer>
    </Container>
  );
};

export default ClientSlider;

const Container = styled.div`
  background: #f8f8f8;
  padding: 1.5rem 1rem;
  margin: 0 1rem;
  min-height: 320px;
  border-radius: 15px;
  @media (max-width: 700px) {
    min-height: 400px;
  }
  @media (max-width: 530px) {
    min-height: 280px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .quote {
    font-size: 3rem;
    color: #001336;
    opacity: 0.7;
  }
`;

const Body = styled.p`
  font-size: 0.8rem;
  margin-bottom: 1.5rem;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  img {
    width: 4rem;
    height: 4rem;
    border-radius: 50px;
    object-fit: cover;
  }

  h1 {
    font-size: 1.2rem;
    font-weight: 700;
    @media (max-width: 580px) {
      font-size: 1rem;
    }
    @media (max-width: 538px) {
      font-size: 0.9rem;
    }
  }

  p {
    font-size: 0.8rem;
    color: #001336;
    @media (max-width: 538px) {
      font-size: 0.6rem;
    }
  }
`;
