import styled from "styled-components";

export const Container = styled.div`
  background-color: #91C8FF;
  min-height: 100dvh;
`;

export const ProfileHeader = styled.div`
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

export const ProfileBody = styled.div`
    display: flex;
    padding: 16px;
    flex-direction: column;
`

export const StudentInfo = styled.div`
  display: flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  h2{
    font-size: 32px;
    font-weight: bold;
    margin:unset;
  }
  p{
    text-align: center;
    margin: unset;
  }
`

export const Card = styled.div`
  background-color: #FDC342;
  border-radius: 12px;
  margin: 16px 0;
  box-shadow: 4px 4px 0px #000;
  border: 2px solid #000000;
`;

export const StudentStatus = styled.div`
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
`;

export const StatusContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 30%;
`;

export const MascotImage = styled.img`
    width: 75px;
    transform: scaleX(-1);
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

export const Button = styled.button`
  background-color: #FDC342;
  color: black;
  font-weight: bold;
  font-size: 20px;
  font-weight: 800;
  width: 100%;
  padding: 12px;
  margin-bottom: 12px;
  border: none;
  border-radius: 10px;
  box-shadow: 4px 4px 0px #000;
  cursor: pointer;
  border: 2px solid #000000;
  height: 64px;
  &:hover {
    background-color: #ffd966;
  }
`;

export const RankingContainer = styled.div`
    display: flex;
    background-color: #FFF6E2;
    align-self: flex-start;
    padding: 8px 16px;
    box-sizing: border-box;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
    border-left: 2px solid #000000;
    border-bottom: 2px solid #000000;
    width: 30%;
    overflow: hidden;
    text-align: center;
    font-weight: bold;
    margin-left: 16px;
`