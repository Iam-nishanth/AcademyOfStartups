import { styled } from "styled-components";

export const EventsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const EventsWrapper = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  padding: 20px 0;
  gap: 20px;

  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  gap: 30px;
  justify-content: start;
  @media (max-width: 1000px) {
  }
`;
export const EventCard = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: space-around;
  width: 100%;
  max-width: 350px;
  margin-bottom: 20px;
  flex-direction: column;
  padding: 20px;
  min-height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px;
  border-radius: 20px;
  p {
    font-size: 16px;
    font-weight: 500;
  }
`;
export const Span = styled.span`
  color: red;
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
`;
