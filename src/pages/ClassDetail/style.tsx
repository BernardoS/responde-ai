import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";


export const StudentCardContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    box-sizing: border-box;
    
    @media ${device.desktop} {
        grid-template-columns: 1fr;
        box-sizing: border-box;
    }
`