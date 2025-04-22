import React from 'react';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import { ActionButton, ButtonRow, Card, Header, Titulo } from './style';

interface QuizCardProps {
  materia: string;
  titulo: string;
  opcoes: string[];
  onAprovar: () => void;
  onReprovar: () => void;
}

export const QuizAproveListItem: React.FC<QuizCardProps> = ({
  titulo,
  opcoes,
  onAprovar,
  onReprovar
}) => {
  return (
    <Card>
      <Header>
        <div>
          <Titulo>{titulo}</Titulo>
        </div>
      </Header>
      <ul>
        {( opcoes!= null && opcoes.length > 0 )&&(
          opcoes.map((opcao)=>(<li>{opcao}</li>))
        )}
      </ul>
      

      <ButtonRow>
        <ActionButton cor="#80F692" hover="#5cc000" onClick={onAprovar}>
          <FaThumbsUp />
          Aprovar
        </ActionButton>

        <ActionButton cor="#FF8181" hover="#e85d5d" onClick={onReprovar}>
          <FaThumbsDown />
          Reprovar
        </ActionButton>
      </ButtonRow>
    </Card>
  );
};
