import { styled } from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px 0;
`;
export const TeamWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  padding: 30px 15px;
  flex-direction: column;
  gap: 20px;
  @media (min-width: 1600px){
    max-width: 1600px; 
  }
`;
export const Headings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
  flex-direction: column;
  gap: 10px;
  p {
    padding: 0 100px;
  }
  @media (max-width: 680px) {
    p {
      padding: 0;
    }
  }
`;
export const TeamCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 500px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 15px;
  @media (max-width: 680px) {
    flex-direction: column;
    align-items: start;
  }
`;
export const ImageDiv = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
  img {
    border-radius: 20px;
    object-fit: cover;
    width: 100% !important;
    position: relative !important;
    height: auto !important;
    max-width: 300px;
    min-height: 350px;
  }
  @media (max-width: 1000px) {
    /* max-width: 400px; */
  }
  @media (max-width: 600px) {
    /* max-width: 300px; */
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  .name {
    font-size: 1.2rem;
    font-weight: 600;
  }
  .position {
    font-size: 1rem;
    font-weight: 500;
    color: #8e92a4;
  }
`;
export const IconsDiv = styled.div`
  display: flex;
  gap: 20px;
`;
export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #316aff;
  transition: all 300ms ease;

  svg {
    font-size: 1.2rem;
    color: #fff;
    transition: all 300ms ease;
  }
  &:hover {
    background: #ccc;
    scale: 0.8;
    svg {
      color: #316aff;
      scale: 1.3;
    }
  }
`;
export const ImageSide = styled.div`
  flex: 1;
  padding: 10px;
`;
export const ContentSide = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 15px;
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  li {
    display: flex;
    align-items: center;
    gap: 10px;
    span {
      display: flex;
      align-items: center;
      font-size: 1rem;
      svg {
        font-size: 1.2rem;
        color: #316aff;
      }
    }
  }
  @media (max-width: 600px) {
    ul {
      gap: 5px;
    }
    li {
      gap: 5px;
    }
    li span {
      font-size: 0.8rem;
    }
  }
`;
