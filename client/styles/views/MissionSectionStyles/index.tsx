import { WhiteHeading } from "@/styles/Globalstyles";
import { styled } from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #001336;
  margin-top: 100px;
  padding: 0 15px;
`;
export const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  min-height: 400px;
  @media (min-width: 1600px){
    max-width: 1600px; 
  }
`;
export const Card = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  max-width: 1100px;
  min-height: 200px;
  border-radius: 15px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  background-color: #316aff;
  color: #fff;
  padding: 20px;
  transition: 300ms all ease;
  gap: 20px;
  &:hover {
    transform: translateY(-15px);
  }
  svg {
    font-size: 50px;
    display: flex;
    margin-top: -50px;
  }
  @media (max-width: 600px) {
    svg {
      font-size: 50px;
    }
  }

  margin-top: -80px;
  @media (min-width: 1600px){
    max-width: 1400px; 
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  height: 100%;
  @media (max-width: 600px) {
    p {
      font-size: 14px;
    }
    h3 {
      font-size: 20px;
    }
  }
  @media (max-width: 400px) {
    gap: 5px;
    p {
      font-size: 12px;
    }
    h3 {
      font-size: 18px;
    }
  }
`;

export const Stats = styled.div`
  padding: 30px 10px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  gap: 20px;

  @media (max-width: 450px) {
    flex-wrap: wrap;
  }
`;
export const StatsBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100%;
  max-width: 200px;
  min-height: 200px;
  color: #fff;
  gap: 10px;
  text-align: center;
  svg {
    font-size: 50px;
    color: #316aff;
  }

  @media (max-width: 800px) {
    max-width: 150px;
    min-height: 150px;
    gap: 5px;
    svg {
      font-size: 40px;
    }
    .heading {
      font-size: 30px;
    }
    .paragraph {
      font-size: 14px;
      color: #999 !important;
    }
  }
  @media (max-width: 600px) {
    max-width: 100px;
    min-height: 100px;
    gap: 5px;
    svg {
      font-size: 30px;
    }
    .heading {
      font-size: 20px;
    }
    .paragraph {
      font-size: 14px;
    }
  }
  @media (max-width: 450px) {
    svg {
      font-size: 30px;
    }
    .heading {
      font-size: 17px;
    }
    .paragraph {
      font-size: 12px;
    }
  }
`;
export const Plus = styled.span`
  color: #316aff;
`;
