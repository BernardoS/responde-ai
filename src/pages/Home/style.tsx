import { Link } from "react-router-dom";
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
    box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);

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
    box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
    -webkit-box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
    -moz-box-shadow: 8px 8px 0px -2px rgba(26,26,26,1);
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
export const SelectActions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    @media ${device.tablet} {
        h3{
            display: none;
        }
    }
`

export const SelectButton = styled(Link)`
    width: 35%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #FFF6E2;
    border-radius: 8px;
    border: 3px solid #000000;
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
    &:hover, &:focus{
        animation: shake-vertical 0.5s ease-in-out forwards;
    }

    @media ${device.laptop} {
        width: 40%;
    }
    @media ${device.tablet} {
        width: 45%;
    }
    @media ${device.mobile} {
        width: 48%;
    }
`

export const MascotContainer = styled.div`
    display: flex;
    align-items: center;
    img{
        margin:16px;
        height: 170px;
    }
    @media ${device.mobile} {
        img{
            height: 120px;
        }
    }
`
