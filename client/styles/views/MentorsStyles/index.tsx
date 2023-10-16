import { CSSProperties } from "react";
import { styled } from "styled-components";

export const MentorsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const MentorsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  min-height: 500px;
  gap: 30px;
  padding: 30px 10px;
  text-align: center;

  @media (max-width: 600px){
    gap: 10px;
  }
`;
export const CardsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-around;

  flex-wrap: wrap;
  gap: 30px;
`;
export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #0000009d;
  opacity: 0;
  transition: ease 500ms all;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  @media (max-width: 800px) {
    background-color: #00000063;
    opacity: 1;
    align-items: end;
    padding: 3px;
  }
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eeeeee;
  transition: ease 300ms all;
  &:hover {
    background-color: #316aff;
    opacity: 0.8;
    svg {
      color: #eee;
    }
  }
  svg {
    font-size: 1.5rem;
    color: #316aff;
    transition: ease 300ms all;
  }
  @media (max-width: 800px) {
    width: 40px;
    height: 40px;
    svg {
      font-size: 1rem;
    }
  }
`;

export const Card = styled.div<{
  image: CSSProperties["backgroundImage"];
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  min-height: 400px;
  border-radius: 10px;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
  background-image: ${(props) => `url('${props.image}')`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  &:hover {
    ${Overlay} {
      opacity: 1;
    }
  }
  @media (max-width: 800px) {
    min-height: 300px;
    max-width: 280px;
  }
`;

export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 75px;
  gap: 5px;
  padding: 10px;
  position: absolute;
  bottom: 15%;
  background-color: #fff;
  text-align: center;
  @media (max-width: 800px) {
    bottom: 18%;
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;
