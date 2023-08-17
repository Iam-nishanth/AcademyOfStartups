import { styled } from "styled-components";

export const MapContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  iframe {
    width: 100%;
    min-height: 400px;
    border: none;
  }
  @media (max-width: 600px) {
    iframe {
      min-height: 250px;
    }
  }
`;
