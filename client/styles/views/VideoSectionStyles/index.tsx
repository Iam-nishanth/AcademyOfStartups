import { styled } from "styled-components";

export const VideoSectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #001336;
  padding: 50px 0;
  @media (max-width: 1150px) {
    padding: 30px 15px;
  }
`;

export const VideoSectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1100px;
  min-height: 600px;
  flex-direction: column;
  gap: 30px;
  @media (min-width: 1600px) {
        max-width: 1400px;
    }
    @media (min-width: 1800px) {
        max-width: 1600px;
    }
`;
export const ContentWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  flex-direction: column;
  padding: 50px 0;
  width: 100%;
  gap: 40px;
`;
export const TextWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
`;
export const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1100px;
  @media (min-width: 1600px){
    max-width: 1500px; 
  }
  @media (max-width: 800px) {
    flex-direction: column;
    gap: 30px;
    align-items: start;
  }
`;
export const List = styled.ul`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  list-style: none;
`;
export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 16px;
  font-weight: 400;
  color: #bdbccb;
  svg {
    color: #316aff;
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
`;
export const H3 = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin-top: 15px;
  color: #fff;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
