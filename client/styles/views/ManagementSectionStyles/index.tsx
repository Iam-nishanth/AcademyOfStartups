import { styled } from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const SectionWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  min-height: 600px;
  align-items: center;
  gap: 30px;
  padding: 30px 10px;
  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 30px;
  }
`;
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;
export const ImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  img {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
  @media (max-width: 1000px) {
    max-width: 400px;
  }
  @media (max-width: 600px) {
    max-width: 300px;
  }
`;
export const ButtonSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 50px;
  p {
    text-align: center;
  }
  .name {
    font-weight: 500;
    font-size: 18px;
  }
  .position {
    font-size: 14px;
    font-weight: 400;
    color: #8e92a4;
    margin-top: 5px;
  }
  @media (max-width: 500px) {
    .name {
      font-size: 16px;
    }
    .position {
      font-size: 12px;
    }
  }
`;
