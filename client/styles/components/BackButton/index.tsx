import styled from "styled-components";

interface BackContainerProps {
  color?: string;
  backgroundColor?: string;
}

export const BackContainer = styled.nav<BackContainerProps>`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  transition: 300ms ease;
  color: ${(props) => props.color || "#000"};
  background-color: ${(props) => props.backgroundColor || "#fff"};

  
`;
export const BackWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  min-height: 70px;
  padding:0 20px;

  @media (min-width: 1600px) {
        max-width: 1400px;
    }
    @media (min-width: 1800px) {
        max-width: 1600px;
    }
    a {
    text-decoration: none;
    font: inherit;
    color: inherit;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
    
`;

export const BackDiv = styled.div<BackContainerProps>`
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    span{
        font-size: 14px;
        font-weight: 600;
    }
    svg{
        font-size: 25px;
        color: ${(props) => props.color || "#000"};
    }
`

export const LogoutButton = styled.button`
  font-size: 14px;
  color: #fff;
  font-family: inherit;
  font-weight: 700;
  cursor: pointer;
  padding:  0;
  border: none;
  outline: none;
  background-color: #316aff;
  width: 150px;
  height: 45px;
  border-radius: 5px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #001439;
    transform: translateY(-5px);
  }
  @media (max-width: 800px) {
    width: 120px;
    height: 35px;
    font-size: 14px;
    font-weight: 600;
    padding: unset;
  }
`

