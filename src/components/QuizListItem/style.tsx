import { Link } from "react-router-dom";
import styled from "styled-components";

export const QuizCard = styled(Link)`
  background-color: #fff2d9;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  border: 3px solid black;
  box-shadow: 8px 8px 0 #000;
  text-decoration: none;
  color: black;
`;

export const Subject = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  font-weight: 800;
  color: #ffc107;
  font-size: 20px;
  -webkit-text-stroke: 1px black;
`;

export const QuizTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 800;
  margin: 12px 0;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  flex-wrap: wrap;
  gap: 16px;
  div{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
`;

export const XP = styled.span`
  color: #80F692;
  font-weight: 800;
  -webkit-text-stroke: 1px black;
`;