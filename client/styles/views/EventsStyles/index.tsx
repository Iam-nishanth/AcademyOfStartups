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
`;

export const EventCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 350px;
  flex-direction: column;
  padding: 20px;
  min-height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 5px 10px;
  border-radius: 20px;
`;
