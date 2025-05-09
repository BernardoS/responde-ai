import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { Button, ButtonsContainer, MascotContainer, MascotImage, StatusContainer, UserExtraInfo, UserInfo, UserProfileCard, UserStatus } from "../../components/UserComponents";
import TeacherMascot from "../../assets/teacher-mascot.png";
import { StatusText } from "../StudentHome/style";
import { useUser } from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import { getClasses, getTeacherQuizzes } from "../../services/api";

type QuizItem = {
    quizId: string;
    _id:string;
    materia: string;
    tema: string;
    quantidadePerguntas: number;
    dataFinal: Date;
};


function TeacherHome() {

    const { usuario, limparDadosUsuario } = useUser();
    const [qtdTurmas, setQtdTurmas] = useState(0);
    const [qtdQuizzes, setQtdQuizzes] = useState(0);

    useEffect(() => {
        const getQtdTurmas = async () => {
            getClasses()
                .then((data) => {
                    setQtdTurmas(data.length);
                });
        }

        const getQtdQuizzes = async () => {
            if (usuario?._id) {
                getTeacherQuizzes(usuario?._id)
                .then((data:QuizItem[]) => {
                    console.log(data);
                    const countQtdQuizzes = data.length;
                    setQtdQuizzes(countQtdQuizzes);
                }).catch((error)=>{
                    console.error(error);
                })
            }
        }

        getQtdTurmas();
        getQtdQuizzes();
    }, [])

    return (
        <DefaultContainer>
            <DefaultHeader>
                <span>Olá, Professor!</span>
                <DefaultHeaderLink onClick={() => limparDadosUsuario()} to="/">✖</DefaultHeaderLink>
            </DefaultHeader>
            <DefaultBody>
                <UserInfo>
                    <h2>{usuario?.nome.split(" ")[0]}</h2>
                    <p>Matéria:<br /> <strong>{usuario?.materia}</strong></p>
                </UserInfo>
                <UserProfileCard>
                    <UserStatus>
                        <MascotContainer>
                            <MascotImage src={TeacherMascot} alt="Mascote do professor" />
                        </MascotContainer>
                        <StatusContainer>
                            <StatusText>Quizzes Criados
                                <br />
                                <b className="missing" >
                                    {qtdQuizzes}
                                </b>
                            </StatusText>
                        </StatusContainer>
                        <UserExtraInfo>
                            <span>{qtdTurmas} Turmas</span>
                        </UserExtraInfo>
                    </UserStatus>
                </UserProfileCard>
                <ButtonsContainer>
                    <Button to="/professor/criar-quiz">Criar Quiz</Button>
                    <Button to="/professor/turmas">Turmas e Alunos</Button>
                    <Button to="/professor/perfil">Perfil</Button>
                </ButtonsContainer>

            </DefaultBody>

        </DefaultContainer>
    );
}

export default TeacherHome;