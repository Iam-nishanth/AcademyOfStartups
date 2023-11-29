import { styled } from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
export const LoginFORM = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 30px;
  gap: 30px;
  

  @media (max-width: 800px) {
    gap: 10px;
    padding: 30px 15px;
  }
  button {
    align-self: center;
  }
  @media (max-width: 600px) {
    input,
    textarea,
    label {
      font-size: 0.9rem;
    }
  }
`;
export const AdminRegister = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #fff;
  width: 100%;
  padding: 30px;
  gap: 10px;
  @media (max-width: 800px) {
    gap: 10px;
    padding: 30px 15px;
  }
  button {
    align-self: center;
  }
  @media (max-width: 600px) {
    input,
    textarea,
    label {
      font-size: 0.9rem;
    }
  }
`;
export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  min-height: 50px;
  font-size: 1rem;
  &:focus {
    border: 2px solid #316aff;
    outline: none;
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
  font-size: 15px;
  font-weight: 500;
  color: #000;
  margin-left: 10px;
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

export const Password = styled.div`
  position: relative;
  width: 100%;

  button {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    padding: 10px 10px;
    background: transparent;
    border: none;
    outline: none;
    svg{
      color: #000;
      font-size: 1.2rem;
    }
  }
`;
export const PasswordInput = styled.input`
  width: 100%;
  padding: 10px 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
  min-height: 50px;
  font-size: 1rem;
  &:focus {
    border: 2px solid #316aff;
    outline: none;
  }
`;
