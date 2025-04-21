import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";
import { Link } from "react-router-dom";

export const UserProfileCard = styled.div`
  background-color: #FDC342;
  border-radius: 12px;
  box-shadow: 8px 8px 0px #000;
  border: 3px solid #000000;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 32px;

  @media ${device.desktop} {
    width: 100%;
    margin: 16px 0;
    padding-bottom: unset;
  }
`;

export const UserInfo = styled.div`
   display: flex;
   flex-direction:row;
   width: 100%;
   justify-content: space-between;

   h2{
    font-size: 48px;
    font-weight: bold;
    margin: unset;
   }


    @media ${device.desktop} {
      align-items: center;
      flex-wrap: wrap;
      margin:unset;
      h2{
        font-size: 32px;
        font-weight: bold;
        margin:unset;
      }
      p{
        text-align: center;
        margin: unset;
      }
    }
  
`

export const UserStatus = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MascotContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 16px;
  width: 40%;
  margin-top: 32px;
  @media ${device.desktop} {
    margin:unset;
  }
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30%;
`;

export const MascotImage = styled.img`
    width: 120px;
    transform: scaleX(-1);

    @media ${device.desktop} {
      margin:unset;
      width: 75px;
    }
`;

export const UserExtraInfo = styled.div`
    display: flex;
    background-color: #FFF6E2;
    align-self: flex-start;
    padding: 8px 16px;
    box-sizing: border-box;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-left: 3px solid #000000;
    border-bottom: 3px solid #000000;
    width: 30%;
    overflow: hidden;
    text-align: center;
    font-weight: bold;
    margin-left: 16px;
    justify-content: center;

    @media ${device.mobile} { 
        width: 30%;
        font-size: 14px;
    }

`


export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  text-decoration: none;
  margin: unset;
  background-color: #FDC342;
  color: black;
  font-weight: bold;
  font-size: 20px;
  font-weight: 800;
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 10px;
  box-shadow: 8px 8px 0px #000;
  cursor: pointer;
  border: 3px solid #000000;
  height: 64px;

  &:hover, &:focus {
    background-color: #ffd966;
    animation: shake-vertical 0.5s ease-in-out forwards;        
  }
  

  @media ${device.desktop} {
    width: 100%;
  }

`;

export const ButtonsContainer = styled.div`
    display: flex; 
    flex-direction: column;
    width: 45%;
    gap: 12px;
    @media ${device.desktop} {
        width: 100%;
    }
`
    