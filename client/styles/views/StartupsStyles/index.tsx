import { styled } from "styled-components";

export const StartupsContainer = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  width: 100%;
  background: #001336;
  height: 100vh;
`;
export const StartupsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  min-height: 400px;
  gap: 30px;
  padding: 30px 10px;
`;
export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px 0;
  overflow-y: hidden;
`;
export const FormWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  &::-webkit-scrollbar {
    width: 5px;
    &-thumb {
      background-color: #cccccc25;
      border-radius: 10px;
    }
  }
`;
export const ContentWrapper = styled.div`
  flex: 1;
  position: static;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  /* max-width: 85%; */
  box-shadow: rgba(152, 152, 152, 0.5) 0px 0px 10px;
  border-radius: 20px;
  padding: 30px;
  background-color: #fff;
  .ant-select {
    width: 100%;
  }

  .ant-select-selection-item {
    font-size: 1rem;
    margin: auto 0;
  }
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;
  width: 100%;
`;
export const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: #000;
  padding-left: 10px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  min-height: 40px;
  font-size: 1rem;
  &:focus {
    border: 2px solid #316aff;
    outline: none;
  }
`;
export const Required = styled.span`
  color: red;
  font-size: 1rem;
`;
export const Error = styled.p`
  color: red;
  font-size: 0.8rem;
  margin-left: 20px;
`;
export const Span = styled.span`
  color: red;
`;
export const Heading = styled.h2`
  font-size: 35px;
  font-weight: 700;
  color: #fff;
  text-align: center;
  @media (max-width: 600px) {
    font-size: 25px;
  }
`;
