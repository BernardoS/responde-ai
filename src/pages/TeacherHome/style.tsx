import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";

export const TeacherInfoBox = styled.div`
  background-color: #FFF6E2;
  padding: 4px 12px;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 8px auto;
  font-weight: bold;
  display: inline-block;
  border: 2px solid #000000;
  width: 80%;
  text-align: center;
  display: flex;
  span{
    font-weight: 800;
    color: #000000;
    font-size: 16px;
    line-height: none;
  }
  b{
    font-size: 24px;
    color:#24B59F;
    -webkit-text-stroke: 2px black;
    margin-right: 8px;
  }
    
  @media ${device.mobile} { 
        width: 95%;
        span{
            font-weight: 800;
            color: #000000;
            font-size: 14px;
            line-height: none;
        }
        b{
            font-size: 20px;
            color:#24B59F;
            -webkit-text-stroke: 2px black;
            margin-right: 8px;
        }
    }
`;