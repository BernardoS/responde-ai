import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudentByClass } from '../../services/api';
import { DefaultContainer } from '../../components/DefaultContainer';
import { DefaultHeader, DefaultHeaderLink } from '../../components/DefaultHeader';
import { DefaultBody } from '../../components/DefaultBody';
import { DefaultTitle } from '../../components/DefaultTitle';
import StudentListItem from '../../components/StudentListItem';
import { StudentCardContainer } from './style';


interface Student {
    _id: string;
    nome: string;
    email: string;
    xp: number;
    nivel: number;
}

function ClassDetail() {
    const { turma } = useParams<{ turma: string }>();

    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            if (!turma) return;
            const registeredStudents = await getStudentByClass(turma);
            setStudents(registeredStudents);
        };


        fetchData();
    }, [])

    return (
        <DefaultContainer>
            <DefaultHeader>
                <span>Gerencie aqui sua turma</span>
                <DefaultHeaderLink to="/professor/turmas">✖</DefaultHeaderLink>
            </DefaultHeader>
            <DefaultBody>
                <DefaultTitle>
                    <h2>{turma}</h2>
                </DefaultTitle>
                <StudentCardContainer>
                    {students.length > 0 && students.map((student: Student) => (
                        <StudentListItem
                            key={student._id}
                            email={student.email}
                            nivel={student.nivel}
                            nome={student.nome}
                            xp={student.xp}
                        />
                    ))}
                </StudentCardContainer>

            </DefaultBody>


        </DefaultContainer>
    );
}

export default ClassDetail;