import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";

export const QuizListContainer = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 4fr 4fr 4fr 4fr;
    gap: 16px;

    @media ${device.desktop} {
        padding: 16px;
        grid-template-columns: 1fr;
        box-sizing: border-box;
    }
`