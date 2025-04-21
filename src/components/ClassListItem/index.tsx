import { ClassCard, ClassCardFooter, ClassCardTitle } from "./style";
import SeeUsers from "../../assets/see-users.svg";
import { useNavigate } from "react-router-dom";

interface ClassListItemProps {
    turma:string;
    quantidadeAlunos:number;
}

function ClassListItem({turma,quantidadeAlunos}:ClassListItemProps) {

  const navigate = useNavigate();

  function goToClassDetail(turma:string){
    navigate(`/professor/turmas/${turma}`);
  }

  return (
    <ClassCard>
        <ClassCardTitle>{turma}</ClassCardTitle>
        <span><b>Alunos:</b> {quantidadeAlunos}</span>
        <ClassCardFooter>
            <button onClick={() => goToClassDetail(turma)}><img src={SeeUsers} alt="ícone de ver detalhes da turma" /> Ver Turma</button>
        </ClassCardFooter>
    </ClassCard>
  );
}

export default ClassListItem;