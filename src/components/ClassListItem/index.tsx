import { ClassCard, ClassCardFooter, ClassCardTitle } from "./style";
import SeeUsers from "../../assets/see-users.svg";

interface ClassListItemProps {
    turma:string;
    quantidadeAlunos:number;
}

function ClassListItem({turma,quantidadeAlunos}:ClassListItemProps) {
  return (
    <ClassCard>
        <ClassCardTitle>{turma}</ClassCardTitle>
        <span><b>Alunos:</b> {quantidadeAlunos}</span>
        <ClassCardFooter>
            <button><img src={SeeUsers} alt="ícone de ver detalhes da turma" /> Ver Turma</button>
        </ClassCardFooter>
    </ClassCard>
  );
}

export default ClassListItem;