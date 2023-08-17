import { styled } from "styled-components";

export const BreadcrumbContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url("/images/breadcrumb.svg"), #001336c5;
  background-size: 50%;
  background-position: center 25%;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  @media (max-width: 800px) {
    background-size: 80%;
  }
  @media (max-width: 600px) {
    background-size: 100%;
  }
`;
export const BreadcrumbWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  min-height: 150px;
  padding: 0 20px;
`;
export const Crumbs = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  svg {
    color: #316aff;
    font-size: 1.3rem;
    display: flex;
    align-self: center;
  }
  @media (max-width: 400px) {
    gap: 5px;
    p {
      font-size: 0.7rem;
    }
    svg {
      font-size: 1rem;
    }
  }
`;
export const Active = styled.span`
  color: #316bffe0;
  font: interit;
`;
