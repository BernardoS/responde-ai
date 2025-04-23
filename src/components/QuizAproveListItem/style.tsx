import styled from "styled-components";

export const Card = styled.div`
  background-color: #fff5dc;
  border-radius: 16px;
  padding: 16px;
  font-family: 'Poppins', sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 8px 8px 0 #000;
  border: 3px solid #000;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const Materia = styled.span`
  color: #ffa800;
  font-weight: 700;
  font-size: 14px;
`;

export const XP = styled.span`
  color: #36b37e;
  font-weight: 700;
  margin-left: 8px;
  font-size: 14px;
`;

export const Titulo = styled.h2`
  font-size: 20px;
  margin: 8px 0;
  font-weight: 700;
`;

export const SubInfo = styled.p`
  margin: 0;
  font-size: 14px;
  color: #333;
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const ActionButton = styled.button<{ cor: string; hover: string }>`
  flex: 1;
  margin: 0 4px;
  background-color: ${(props) => props.cor};
  border: none;
  border-radius: 12px;
  padding: 16px;
  color: #000;
  font-weight: 600;
  font-size: 16px;
  box-shadow: 8px 8px 0 #000;
  border: 3px solid #000;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    background-color: ${(props) => props.hover};
  }
`;
