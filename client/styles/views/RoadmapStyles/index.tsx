import { styled } from "styled-components";

export const RoadmapContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const RoadmapWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  min-height: 800px;
  gap: 30px;
  padding: 0 30px;
  @media (max-width: 800px) {
    flex-direction: column-reverse;
    padding: 50px 15px;
  }
`;
export const ImageWrapper = styled.div`
  flex: 1.5;
`;
export const RoadmapContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  flex: 1.5;
`;
export const ImageDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    min-height: 600px;
    border-radius: 20px;
    /* object-position: 20%; */
    @media (max-width: 800px) {
      min-height: 400px;
    }
    @media (max-width: 600px) {
      min-height: 350px;
    }
  }
`;
export const RoadMap = styled.div``;
export const RoadMapList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 15px;
  padding: 20px 0;
`;
export const RoadMapItem = styled.li`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const RoadMapIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 70px;
  min-height: 70px;
  border-radius: 15px;
  background-color: #316aff;
  color: #fff;
  transition: all 300ms ease;
  svg {
    font-size: 30px;
  }
  &:hover {
    transform: translateY(-10px);
    color: #241f1f;
    cursor: pointer;
  }
  @media (max-width: 600px) {
    max-width: 60px;
    min-height: 60px;
    svg {
      font-size: 25px;
    }
  }
`;
export const RoadMapContentBox = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  h3 {
    font-size: 20px;
  }
  p {
    font-weight: 500;
    color: #8e92a4;
  }
  @media (max-width: 600px) {
    h3 {
      font-size: 18px;
    }
    p {
      font-size: 14px;
    }
  }
`;
