import { styled } from "styled-components";
export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("	https://academyofstartups.com/wp-content/uploads/2023/06/view-of-young-attractive-people-taking-a-training-course.jpg"),
    #001336;
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 4rem 0;
  min-height: 400px;

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  p {
    padding: 0 250px;
  }
  @media (max-width: 1100px) {
    padding: 0 20px;
    p {
      padding: 0;
    }
  }
`;
