import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #001336;
  flex-direction: column;
`;
export const FooterWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  min-height: 300px;
  padding: 50px 10px;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 50px 10px 20px 50px;
    gap: 30px;
  }
  @media (max-width: 500px) {
    padding: 50px 20px;
  }
`;
export const AddressWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  ul > li {
    display: flex;
    align-items: center;
    gap: 15px;

    svg {
      color: #316aff;
      font-size: 1.3rem;

      display: flex;
      align-self: flex-start;
    }
  }
  img {
    border-radius: 15px;
  }
`;
export const QuickLinks = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`;
export const UsefulLinks = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`;
export const WorkingHours = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`;

export const FooterHeading = styled.h4`
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
`;
export const FooterPara = styled.p`
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    color: #316aff;
    font-size: 1.3rem;
    display: flex;
    align-self: center;
  }
  span {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;
  }
  @media (max-width: 500px) {
    span {
      font-size: 0.8rem;
    }
  }
`;
export const FooterHR = styled.hr`
  width: 100%;
  max-width: 70px;
  border-color: #316aff;
`;
export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  list-style: none;
  width: 100%;
  max-width: 300px;
  gap: 10px;
`;

export const CopyrightWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75px;
  width: 100%;
  max-width: 1100px;
  border-top: 1.5px solid #393b43;
  p {
    color: #8e92a4;
    font-size: 0.8rem;
  }
`;
