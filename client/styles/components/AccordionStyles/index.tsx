import { styled } from "styled-components";

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100%;
  max-width: 500px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  gap: 30px;
  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const Wrap = styled.div`
  background: #fff;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: 300ms all ease-in-out;

  h1 {
    padding: 1rem;
    font-size: 1rem;
  }
  span {
    margin-right: 1rem;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 0.8rem;
    }
    span {
      font-size: 0.8rem;
    }
  }
`;

export const Dropdown = styled.div`
  background: #fff;
  color: #000;
  width: 100%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 300ms all ease-in-out;
  padding: 10px;

  p {
    font-size: 1rem;
  }
  @media (max-width: 600px) {
    p {
      font-size: 0.8rem;
    }
  }
`;
export const Question = styled.div`
  box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);
  min-height: 75px;
  width: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  transition: 300ms all ease-in-out;
  @media (max-width: 600px) {
    min-height: 50px;
  }
`;
