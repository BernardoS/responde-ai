import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";

export const ProfileContainer = styled.div`
    display: grid;
    background-color:#FDC342;
    width: 100%;
    border-radius: 12px;
    box-shadow: 8px 8px 0px #000;
    border: 3px solid #000000;
    box-sizing: border-box;
    grid-template-columns: 1fr 1fr 1fr;

    @media ${device.tablet} {
        grid-template-columns: 1fr;
    }
`

export const MascotContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding:64px;
    box-sizing: border-box;
    border-right: 3px solid #000000;
    h2{
        font-size: 32px;
        text-align: center;
    }

    @media ${device.tablet} {
        border-right: 0px solid #000000;
        border-bottom: 3px solid #000000;
        padding:16px;
        h2{
            font-size: 24px;
        }
    }
`

export const ProfileInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 32px;
    border-right: 3px solid #000000;

    h2{
        font-size: 32px;
        margin-bottom: 32px;
    }
    span{
        font-size: 16px;
        margin-bottom: 10px;
        font-weight: 700;
    }
    @media ${device.tablet} {
        border-right: 0px solid #000000;
        border-bottom: 3px solid #000000;
        padding-bottom: 16px;
        h2{
            text-align: center;
            font-size: 24px;
        }
    }
`

export const ProfileDataContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 0px 32px;
    
    h2{
        font-size: 32px;
        margin-bottom: 32px;
    }
    span{
        font-size: 16px;
        margin-bottom: 10px;
    }
    @media ${device.tablet} {
        h2{
            font-size: 24px;
            text-align: center;
        }
    }
` 

export const ProfileData = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 1fr 1fr;
    span{
        text-align: center;
        font-weight: 800;
    }
    b{
        display: block;
        font-size: 32px;
        color:#91C8FF;
        -webkit-text-stroke: 2px black;
        &.green{
            color:#24B59F;
        }
    }
`;