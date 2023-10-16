import { styled } from "styled-components";

export const FORM = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100%;
  padding: 20px;
  gap: 20px;
  @media (max-width: 800px) {
    gap: 10px;
    padding: 30px 15px;
  }
  button {
    align-self: center;
  }
  @media (max-width: 600px) {
    
    textarea,
    label {
      font-size: 0.9rem;
    }
  }
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  width: 100%;
  gap: 5px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  min-height: 50px;
  font-size: 16px;
  font-weight: 500px;
  &:focus {
    border: 2px solid #316aff;
    outline: none;
  }
`;

export const Label = styled.label`
  font-size: 15px;
  font-weight: 500;
  color: #000;
  margin-left: 10px;
`;

export const TextArea = styled.input`
  width: 100%;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  display: flex;
  align-self: self-start;
  min-height: 70px;
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
