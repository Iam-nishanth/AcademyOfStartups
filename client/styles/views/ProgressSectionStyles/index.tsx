import styled from "styled-components";

export const ProgressSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #001336;
  color: #fff;
  margin-bottom: 200px;
`;
export const ProgressSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  min-height: 400px;
  position: relative;
  bottom: -100px;
  @media (min-width: 1600px){
    max-width: 1600px; 
  }
`;
export const PercentageWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;
export const Headings = styled.div`
  flex: 2;
  padding: 20px;
`;

export const Percentages = styled.div`
  flex: 1;
  p {
    font: 500 16px/14px "Inter", sans-serif;
  }
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: center;
  padding: 0 20px;
`;

export const JoinUs = styled.div`
  display: flex;
  background-color: #fff;
  min-height: 300px;
  align-items: center;
  gap: 30px;
  justify-content: space-around;
  width: 100%;
  padding: 30px;
  border-radius: 30px;
  position: relative;
  bottom: -50px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  @media (max-width: 650px) {
    flex-direction: column;
    padding: 30px 15px;
  }
`;

export const JoinHeadings = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  text-align: left;
  gap: 20px;
  padding: 0 30px;

  @media (max-width: 650px) {
    text-align: center;
    padding: 0 10px;
    h3 {
      font-size: 30px;
    }
  }
`;
export const Buttons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
export const JoinUsPara = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: #999;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
