import { styled } from "styled-components";

export const HeroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: url("	https://academyofstartups.com/wp-content/uploads/2023/06/digital-marketing-media.jpg"),
    #001336;
  color: #fff;
  background-blend-mode: overlay;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  @media (max-width: 1100px) {
    padding: 0 20px;
  }
`;
export const HeroWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  min-height: 600px;
  @media (min-width: 1600px){
    max-width: 1600px; 
  }
  @media (max-width: 700px) {
    justify-content: center;
  }
`;
export const TextWrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  max-width: 450px;
  gap: 5px;
  padding: 10px;
  @media (min-width: 1600px){
    max-width: 600px; 
  }
  h1 {
    color: #e91a29;
    font-size: 50px;
    font-weight: 700;
  }
  h2 {
    font-size: 35px;
  }
  h3 {
    font-size: 25px;
    width: 300px;
    padding-top: 5px;
    color: #bdbccb;
  }
  button {
    margin-top: 20px;
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 30px;
    }
    h3 {
      font-size: 18px;
    }
    button {
      font-size: 14px;
    }
  }
  @media (max-width: 700px) {
    align-items: center;
    text-align: center;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 280px;
  flex-direction: column;
  background-color: #fff;
  min-height: 350px;
  border-radius: 20px;
  color: black;
  padding: 20px 20px;
  gap: 10px;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const ImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 280px;
  img {
    border-radius: 10px;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
export const CardText = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  flex-direction: column;
  gap: 10px;
  button {
    margin-top: 10px;
  }
`;
