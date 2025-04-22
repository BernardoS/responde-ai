import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";

export const QuizAproveContainer = styled.div`
    display: grid;
    width: 100%;
    gap:16px;
    grid-template-columns: 1fr 1fr;

    @media ${device.desktop}{
        grid-template-columns: 1fr;
    }
`

export const ApproveButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: unset;
    background-color: #FDC342;
    color: black;
    font-weight: bold;
    font-size: 24px;
    font-weight: 600;
    padding: 12px;
    border-radius: 10px;
    box-shadow: 8px 8px 0px #000;
    cursor: pointer;
    border: 3px solid #000000;
    height: 64px;
    margin-bottom: 32px;
    min-width: 300px;

    img{
        margin-right: 8px;
    }
        
    &:hover, &:focus, &:active {
        background-color: #ffd966;
        animation: shake-vertical 0.5s ease-in-out forwards;        
    }
    @media ${device.mobile} {
        width: 100%;
        min-width: unset;
    }
`