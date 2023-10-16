import { styled } from "styled-components";

interface CardProps {
    backgroundColor: string;
    color: string;
    flexDirection: string;
    maxWidth: string;
}

export const FeatureCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;
export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  min-height: 180px;
  gap: 50px;
  @media (min-width: 1600px){
    max-width: 1600px; 
  }
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
  @media (max-width: 800px) {
    flex-wrap: nowrap;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Card = styled.div<CardProps>`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  min-height: 120px;
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  flex-direction: ${(props) => props.flexDirection};
  padding: 20px;
  transition: 300ms all ease;
  &:hover {
    transform: translateY(-15px);
  }
  svg {
    font-size: 45px;
    flex: 0.8;
    display: flex;
    align-self: self-start;
    margin-top: 10px;
  }
`;
export const Content = styled.div`
  flex: 2.2;
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`;
