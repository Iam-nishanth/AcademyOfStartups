import styled from "styled-components";

export const FaqContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 20px 10px;
`;
export const FaqWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  min-height: 800px;
  gap: 30px;
  padding: 0 30px;
  @media (min-width: 1600px){
    max-width: 1600px; 
  }
  @media (max-width: 800px) {
    flex-direction: column;
  }
  @media (max-width: 400px) {
    padding: 10px;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  flex: 1.5;
  gap: 20px;
  @media (max-width: 800px) {
    align-items: center;
  }
`;

export const QuestionsWrapper = styled.div`
  width: 100%;
  /* max-width: 500px; */
  .ant-collapse > * {
    background-color: #fff;
    /* border: none; */
  }
  .ant-collapse-header {
    height: 75px;
  }
  .ant-collapse > .ant-collapse-item > .ant-collapse-header {
    align-items: center;
  }
  .ant-collapse > .ant-collapse-item {
  }

  .ant-collapse {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  .ant-collapse-content {
    height: 130px;
  }
  .ant-collapse-content-box > div {
    font-size: 16px;
    font-weight: 500;
  }
  .ant-collapse-header-text {
    font-size: 16px;
    font-weight: 500;
  }
  svg {
    color: #316aff;
    font-size: 15px;
  }
  @media (max-width: 600px) {
    .ant-collapse-content {
      height: 180px;
    }
  }
`;
export const ImageWrapper = styled.div`
  flex: 1.5;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  position: relative;
  img {
    width: 80%;
    min-height: 400px;
    object-fit: cover;
    object-position: center;
    border-radius: 20px;
  }
  @media (max-width: 800px) {
    flex: 1;
    justify-content: center;
    img {
      width: 80%;
      min-height: 200px;
    }
  }
  @media (max-width: 400px) {
    img {
      width: 100%;
    }
  }
`;
export const Tile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 200px;
  height: 200px;
  background: #316aff;
  border-radius: 10px;
  position: absolute;
  bottom: 5%;
  left: 10%;
  text-align: center;
  padding: 10px;
  gap: 5px;
  svg {
    font-size: 45px;
    color: #fff;
  }
  @media (max-width: 800px) {
    width: 150px;
    height: 150px;
    bottom: 5%;
    left: 5%;
    svg {
      font-size: 35px;
    }
  }
  @media (max-width: 400px) {
    left: 0;
    bottom: 0;
  }
`;

export const Number = styled.h3`
  color: #fff;
  font-size: 30px;
`;
