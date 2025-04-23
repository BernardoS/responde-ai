import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultTitle } from "../../components/DefaultTitle";
import { MascotContainer, ProfileContainer, ProfileData, ProfileDataContainer, ProfileInfoContainer } from "../../components/ProfileComponents";
import TeacherMascot from "../../assets/teacher-mascot.png";
import { useUser } from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import { getClasses, getTeacherQuizzes } from "../../services/api";


type QuizItem = {
    quizId: string;
    _id: string;
    materia: string;
    tema: string;
    quantidadePerguntas: number;
    dataFinal: Date;
};


function TeacherProfile() {

    const { usuario } = useUser();
    const [qtdQuizzes, setQtdQuizzes] = useState(0);
    const [qtdTurmas, setQtdTurmas] = useState(0);

    const getQtdQuizzes = async () => {
        if (usuario?._id) {
            getTeacherQuizzes(usuario?._id)
                .then((data: QuizItem[]) => {
                    console.log(data);
                    const countQtdQuizzes = data.length;
                    setQtdQuizzes(countQtdQuizzes);
                }).catch((error) => {
                    console.error(error);
                })
        }
    }
    const getQtdTurmas = async () => {
        getClasses()
            .then((data) => {
                setQtdTurmas(data.length);
            });
    }

    useEffect(() => {
        getQtdTurmas();
        getQtdQuizzes();
    }, [])


    return (
        <DefaultContainer>
            <DefaultHeader>
                <span>Olá, Professor!</span>
                <DefaultHeaderLink to="/professor/home">✖</DefaultHeaderLink>
            </DefaultHeader>
            <DefaultBody>
                <DefaultTitle>
                    <h2>Seu Perfil</h2>
                </DefaultTitle>
                <ProfileContainer>
                    <MascotContainer>
                        <img src={TeacherMascot} alt="Imagem do mascote" />
                        <h2>Prof. {usuario?.nome}</h2>
                    </MascotContainer>
                    <ProfileInfoContainer>
                        <h2>Informações do Professor</h2>
                        <span><b>Disciplina:</b> {usuario?.materia}</span>
                        <span><b>Email:</b> {usuario?.email}</span>
                    </ProfileInfoContainer>
                    <ProfileDataContainer>
                        <h2>Dados do profeessor</h2>
                        <ProfileData>
                            <span>Quizzes Criados<b>{qtdQuizzes}</b></span>
                            <span>Total de Turmas<b>{qtdTurmas}</b></span>
                        </ProfileData>
                    </ProfileDataContainer>
                </ProfileContainer>
            </DefaultBody>
        </DefaultContainer>
    )
};

export default TeacherProfile;