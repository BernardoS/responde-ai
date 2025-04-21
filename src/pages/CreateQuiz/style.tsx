import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";

export const FormContainer = styled.div`
    display: flex;
    width: 100%;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
`;

export const Select = styled.select`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  border: 3px solid black;
  box-shadow: 8px 8px 0 #000;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  box-sizing: border-box;
  border: 3px solid black;
  box-shadow: 8px 8px 0 #000;
`;

export const TextArea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  font-size: 1rem;
  resize: none;
  height: 100px;
  margin-bottom: 1.5rem;
  border: 3px solid black;
  box-shadow: 8px 8px 0 #000;
`;

export const Button = styled.button`
    background-color: #ffc436;
    color: black;
    font-weight: bold;
    padding: 1rem;
    font-size: 1.3rem;
    border: none;
    border-radius: 1rem;
    border: 3px solid black;
    box-shadow: 8px 8px 0 #000;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
    min-width: 300px;

    img{
        width: 24px;
        height: 24px;
        margin-left: 16px;
    }
    &:hover, &:focus, &:active {
        animation: shake-vertical 0.5s ease-in-out forwards;
    }
    @media ${device.tablet} {
        width: 100%;
    }
`;

export const SmallInputGroup = styled.div`
    display: grid;    
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 32px;
    @media ${device.tablet} {
        gap: 8px;
    }
`  
export const LargeInputGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`  

