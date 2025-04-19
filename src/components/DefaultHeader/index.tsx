import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const DefaultHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff2d9;
    padding: 16px;
    font-weight: bold;
    font-size: 18px;
    border-bottom: 2px solid #000000;
    min-height: 64px;
    span{
        font-size: 24px;
        font-weight: bold;
    }
`;

export const DefaultHeaderLink = styled(Link)`
    text-decoration: none;
    color:#000000;
    font-size: 24px;
    font-weight: bold;
`