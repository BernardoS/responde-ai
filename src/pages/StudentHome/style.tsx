import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";


export const ProfileBody = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 16px 64px;

    @media ${device.desktop} {
      padding: 16px;
      flex-direction: column;
    }
`;

export const Level = styled.div`
  background-color: #FFF6E2;
  padding: 4px 12px;
  border-radius: 10px;
  margin-top: 8px;
  font-weight: bold;
  display: inline-block;
  border: 2px solid #000000;
  width: 80%;
  text-align: center;
  @media ${device.mobile} { 
    width: 60%;
  }
`;

export const StatusText = styled.p`
  font-size: 16px;  
  font-weight: bold;
  text-align: center;
  margin: unset;

  .awnsered{
    font-size: 24px;
    color: #91C8FF;
    -webkit-text-stroke: 2px black;
    margin: unset;
  }
  .missing{
    font-size: 48px;
    color:#24B59F;
    -webkit-text-stroke: 2px black;
    margin: unset;
  }

`

export const XPBar = styled.div`
  background-color: #e0e0e0;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid #000000;
  margin: 10px 16px;
  width: 95%;
  @media ${device.mobile} { 
    align-self: center;
    width: 85%;
    margin: 8px;
  }
`;

export const XPProgress = styled.div`
  background-color: #00d084;
  width: 40%;
  height: 100%;
  border-right: 2px solid #000000;
`;

export const XPText = styled.div`
  font-size: 12px;
  margin: 4px 16px;
`
export const XPContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
`;
