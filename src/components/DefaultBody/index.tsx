import styled from 'styled-components';
import { device } from '../../utils/layoutBreakpoints';

export const DefaultBody = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 16px 64px;
    box-sizing: border-box;

    @media ${device.desktop} {
      padding: 16px;
      flex-direction: column;
    }
`