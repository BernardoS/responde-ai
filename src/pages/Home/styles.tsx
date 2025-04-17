import { Link } from "react-router-dom";
import styled from "styled-components";

export const HomeContainer = styled.div`
    background-color: #FFF6E2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 100dvh;
    padding-bottom:32px;
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
    border: 2px solid #000000;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
`;

export const HomeSubtitle = styled.h2`
    font-size: 24px;
    font-weight: 800;
    color: #000000;
    text-align: center;
    margin:unset;
`

export const BoxWhite = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    background-color: #FFF6E2;
    border-radius: 8px;
    padding: 16px;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
    h2{
        margin: unset;
        font-size: 24px;
    }
`;

export const SelectionSection = styled.section`
    display: flex;
    flex-direction: column;
    gap:32px;
    width: 60%;
`
export const SelectActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const SelectButton = styled(Link)`
    width: 35%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #FFF6E2;
    border-radius: 8px;
    border: 2px solid #000000;
    box-sizing: border-box;
    box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
    text-decoration: none;
    hr{
        width: 100%;
        border: 1px solid #000000;
        margin:unset;
    }
    span{
        font-size: 16px;
        font-weight: 800;
        color: #000000;
        text-align: center;
        margin: 16px;
    }
    &:hover{
        animation: shake-vertical 0.5s ease-in-out forwards;
    }
`

export const MascotContainer = styled.div`
    display: flex;
    align-items: center;
    img{
        margin:16px;
        height: 170px;
    }
`
