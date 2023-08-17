import { styled } from "styled-components";

export const ContactContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  min-height: 600px;
  padding: 30px 10px;
  @media (min-width: 1600px){
    max-width: 14k00px; 
  }
  @media (max-width: 700px) {
    flex-direction: column;
    gap: 30px;
  }
`;
export const FormWrapper = styled.div`
  flex: 1;
  height: 100%;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 10px;
  overflow: hidden;
  @media (max-width: 700px) {
    width: 100%;
    flex: unset;
  }
`;
export const AddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  gap: 20px;
  padding: 10px;
  align-self: flex-start;
  @media (max-width: 700px) {
    width: 100%;
    flex: unset;
  }
`;
export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  /* min-width: 70px; */
  min-width: 70px;
  min-height: 70px;
  border-radius: 20px;
  background-color: #316aff;
  svg {
    font-size: 1.5rem;
    color: #fff;
  }
  @media (max-width: 600px) {
    min-height: 50px;
    min-width: 50px;
    border-radius: 15px;
    svg {
      font-size: 1.1rem;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  h3 {
    font-size: 1.2rem;
  }
  p {
    font-size: 1rem;
  }
  a {
    color: #000;
    font-size: 1rem;
    font-weight: 400;
    text-decoration: none;
    &:hover {
      color: #316aff;
      cursor: pointer;
    }
  }
  @media (max-width: 600px) {
    gap: 5px;
    h3 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
    a {
      font-size: 0.8rem;
    }
  }
`;
export const DIV = styled.div`
  display: flex;
  justify-content: start;
  gap: 20px;
  align-items: center;
  @media (max-width: 600px) {
    gap: 10px;
  }
`;
