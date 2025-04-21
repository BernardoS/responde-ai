import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";

export const StudentCard = styled.div`
  background-color: #fff2d9;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  border: 3px solid black;
  box-shadow: 8px 8px 0 #000;
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  @media ${device.mobile} {
    padding: 20px 8px;
    margin:unset;
  }
`;

export const StudentCardTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 8px;
  margin-top: 0px;
  color: #ffc107;
  -webkit-text-stroke: 1px black;  
`

export const StudentCardEmail = styled.span`
  font-size: 16px;
  margin-bottom: 8px;
  color: #000;
  font-weight: bold;
`

export const StudentCardStats = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 16px;
    font-weight: 600;
    span.xp{
        font-size: 20px;
        color: #80F692;
        font-weight: 800;
        -webkit-text-stroke: 1px black;
    }
`
