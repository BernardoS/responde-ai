import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";

export const HomeContainer = styled.div`
    background-color: #FFF6E2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100dvh;
    padding-bottom:32px;

    @media ${device.mobile} {
        height: 100dvh;
    }
`
export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    padding: 32px;
    box-sizing: border-box;
    gap: 16px;
    
`

export const BoxBlue = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background-color: #91C8FF;
    border-radius: 8px;
    padding: 32px;
    border: 3px solid #000000;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 8px 8px 0px #000000;
    -webkit-box-shadow: 8px 8px 0px #000000;
    -moz-box-shadow: 8px 8px 0px #000000;

    @media ${device.mobile} {
        padding: 16px;
    }
`;

export const LogoImg = styled.img`
    width: 100%;
    max-width: 450px;
    height: auto;

    @media ${device.mobile} {
        margin: 16px 0;
    }
`

export const HomeSubtitle = styled.h2`
    font-size: 24px;
    font-weight: 800;
    color: #000000;
    text-align: center;
    margin:unset;
    @media ${device.mobile} {
        font-size: 20px;
    }
`

export const BoxWhite = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background-color: #FFF6E2;
    border-radius: 8px;
    padding: 16px;
    border: 3px solid #000000;
    box-sizing: border-box;
    box-shadow: 8px 8px 0px #000000;
    -webkit-box-shadow: 8px 8px 0px #000000;
    -moz-box-shadow: 8px 8px 0px #000000;
    h2{
        margin: unset;
        font-size: 24px;
    }
    @media ${device.mobile} {
        h2{
            font-size: 20px;
            text-align: center;
        }
    }
`;

export const SelectionSection = styled.section`
    display: flex;
    flex-direction: column;
    gap:32px;
    width: 60%;
    @media ${device.tablet} {
        width: 100%;
    }
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    gap:32px;
    width: 100%;
    @media ${device.tablet} {
        width: 100%;
    }
`

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

export const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
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