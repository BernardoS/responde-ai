import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultTitle } from "../../components/DefaultTitle";
import { useEffect, useState } from 'react';
import { getClasses } from "../../services/api";
import ClassListItem from "../../components/ClassListItem";
import { AddStudentButton, ClassCardContainer } from "./style";
import AddStudent from "../../assets/add-student.svg";

interface StudentClass {
    turma: string;
    quantidadeAlunos: number;
}

function TeacherClasses() {

    const [classes, setClasses] = useState<StudentClass[]>();

    useEffect(() => {
        const fetchData = async () => {
            const registeredClasses = await getClasses();
            setClasses(registeredClasses);
        };

        fetchData();
    }, []);

    return (
        <DefaultContainer>
            <DefaultHeader>
                <span>Essas são suas turmas!</span>
                <DefaultHeaderLink to="/professor/home">✖</DefaultHeaderLink>
            </DefaultHeader>
            <DefaultBody>
                <DefaultTitle>
                    <h2>Turmas e Alunos</h2>
                    <AddStudentButton>
                        <img src={AddStudent} alt="Adicionar Aluno" />
                        Adicionar Aluno
                    </AddStudentButton>
                </DefaultTitle>


                <ClassCardContainer>
                    {classes && classes.map((classItem: StudentClass) => (
                        <ClassListItem key={classItem.turma} quantidadeAlunos={classItem.quantidadeAlunos} turma={classItem.turma} />
                    ))}
                </ClassCardContainer>

            </DefaultBody>
        </DefaultContainer>
    );
}

export default TeacherClasses;