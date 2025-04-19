import styled from "styled-components";
import { device } from "../../utils/layoutBreakpoints";


export const QuizContainer = styled.div`
    display: flex;
    width: 60%;
    margin:auto;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 32px;

    @media ${device.tablet}{
        width: 100%;
    }
`

export const QuizQuestionCard = styled.div`
    background-color: #fff2d9;
    border-radius: 10px;
    flex-direction: column;
    border: 3px solid black;
    box-shadow: 8px 8px 0 #000;
    padding: 16px;
    width: 100%;
    display: flex;
    gap: 16px;
    box-sizing: border-box;

    .subject{
        font-weight: 800;
        color: #ffc107;
        font-size: 20px;
        -webkit-text-stroke: 1px black;
        display: block;
    }
    .question{
        text-align: center;
        font-size:32px;
        font-weight: 800;
    }

    @media ${device.tablet} {
        .question{
            text-align: center;
            font-size:28px;
            font-weight: 800;
        }
    }
    @media ${device.mobile}{
        .question{
            font-size:24px;
        }
    }
`

export const QuizOptionsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    width: 100%;
    box-sizing: border-box;
`
export const QuizOptionButton = styled.button`
    text-align: left;
    background-color: #FDC342;
    border-radius: 10px;
    flex-direction: column;
    border: 3px solid black;
    box-shadow: 8px 8px 0 #000;
    width: 100%;
    padding: 16px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    &:hover{
        animation: shake-vertical 0.5s ease-in-out forwards;
    }
`

export const QuizProgressContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const QuizProgressBar = styled.div`
  background-color: #e0e0e0;
  height: 10px;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid #000000;
  width: 100%;
  @media ${device.mobile} { 
    align-self: center;
    width: 100%;
  }
`;

export const QuizProgres = styled.div`
  background-color: #FDC342;
  height: 100%;
  border-right: 2px solid #000000;
`;

export const QuizProgressInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  width: 100%;
  margin-top: 8px;
  
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`