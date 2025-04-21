import styled from "styled-components";

export const ClassCard = styled.div`
  background-color: #fff2d9;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  border: 3px solid black;
  box-shadow: 8px 8px 0 #000;
  text-decoration: none;
  color: black;
`;

export const ClassCardTitle = styled.h2`
  font-size: 32px;
  margin-bottom: 8px;
  margin-top: 0px;
  color: #ffc107;
  -webkit-text-stroke: 1px black;  
`
export const ClassCardFooter = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 8px;
    margin-top: 8px;


    button{
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        margin: unset;
        background-color: #FDC342;
        color: black;
        font-weight: bold;
        font-size: 16px;
        font-weight: 600;
        width: 100%;
        padding: 12px;
        border: none;
        border-radius: 10px;
        box-shadow: 8px 8px 0px #000;
        cursor: pointer;
        border: 3px solid #000000;
        height: 64px;

        img{
            margin-right: 8px;
        }
        
        &:hover, &:focus {
            background-color: #ffd966;
            animation: shake-vertical 0.5s ease-in-out forwards;        
        }
    }

`