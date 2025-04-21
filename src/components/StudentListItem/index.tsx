import { StudentCard, StudentCardEmail, StudentCardStats, StudentCardTitle } from "./style";

interface StudentListItemProps {
    nome: string;
    email: string;
    xp: number;
    nivel: number;
}

function StudentListItem({ nome, email, xp, nivel }: StudentListItemProps) {

    return (
        <StudentCard>
            <StudentCardTitle>{nome}</StudentCardTitle>
            <StudentCardEmail>{email}</StudentCardEmail>
            <StudentCardStats>
                <span>Nível {nivel}</span>
                <span className="xp" >{xp} xp</span>
            </StudentCardStats>
        </StudentCard>
    );
}

export default StudentListItem;