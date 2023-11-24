import { styled } from "styled-components";
import Link from "next/link";

export const EventsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const EventsWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  min-height: 400px;
  flex-direction: column;
  padding: 20px 0;
  gap: 20px;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;
export const CardWrapper = styled.div`
  padding-top: 30px;
  display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 15px;
    width: 100%;

    @media (max-width: 800px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;
export const EventCard = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  min-height: 230px;
  border-radius: 10px;
  background: white;
  padding: 20px;
  box-shadow: 0px 0px 17px 0px rgba(0,0,0,0.2),0px 10px 15px -3px rgba(0,0,0,0.1);
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;
export const Span = styled.span`
  color: red;
  font-size: 17px;
`;

export const EventDetailsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    flex: 1;
  }
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    gap: 20px;
  }
  @media (max-width: 500px) {
    padding: 10px;
  }
`;

export const EventDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 10px;
  flex: 1;
  padding-right: 30px;
  @media (min-width: 1600px) {
    max-width: 1400px;
  }
  @media (max-width: 500px) {
    padding-left: 20px;
  }
  p {
    font-size: 16px;
    font-weight: 500;
  }
  .Description{
    p{
      font-size: 18px;
    }
    hr{
      height: 3px;
      background-color: #316aff;
      border: none;
      margin: 15px 0;
    }
  }
`;
