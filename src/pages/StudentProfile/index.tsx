import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultTitle } from "../../components/DefaultTitle";
import { MascotContainer, ProfileContainer, ProfileData, ProfileDataContainer, ProfileInfoContainer } from "../../components/ProfileComponents";
import StudentMascot from "../../assets/student-mascot.png";
import { useUser } from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import { getAnsweredQuizzes, getAvailableQuizzes, getRankingPosition } from "../../services/api";


type QuizItem = {
    _id: string;
    materia: string;
    tema: string;
    quantidadePerguntas: number;
    dataFinal: Date;
};

function StudentProfile() {

    const { usuario } = useUser();
    const [qtdQuizRespondidos, setQtdQuizRespondidos] = useState(0);
    const [qtdQuizDisponiveis, setQtdQuizDisponiveis] = useState(0);
    const [rankingPositiion, setRankingPosition] = useState<number | undefined>(0);


    useEffect(() => {

        const getQuizData = async () => {

            if (usuario?._id) {
                getAnsweredQuizzes(usuario?._id)
                    .then((data) => {
                        if (data != null && data != undefined) {
                            const countAnsweredQuizzes = data.length;
                            setQtdQuizRespondidos(countAnsweredQuizzes);
                        }
                    }).catch((error) => {
                        console.log("Houve um erro ao recuperar os quizzes respondidos");
                        console.error(error);
                    });
            }

            if (usuario?.turma) {
                getAvailableQuizzes(usuario?.turma.toLowerCase())
                    .then((data) => {
                        filterAnsweredQuizzes(data);

                    }).catch((error) => {
                        console.log("Houve um erro ao recuperar os quizzes disponiveis");
                        console.error(error);
                    });;
            }

            if (usuario?._id) {
                getRankingPosition(usuario._id)
                    .then((data: number | undefined) => {
                        setRankingPosition(data);
                    }).catch((error) => {
                        console.log("Houve um erro ao recuperar a posição do ranking");
                        console.error(error);
                    });
            }
        }

        getQuizData()
    }, [usuario]);

    const filterAnsweredQuizzes = (availableQuizList: QuizItem[]) => {
        if (usuario?._id) {
            getAnsweredQuizzes(usuario?._id)
                .then((data: QuizItem[]) => {
                    const idsParaRemover = data.map(q => q._id);
                    const quizzesDisponiveis = availableQuizList.filter(q => !idsParaRemover.includes(q._id));
                    const countquizzesDisponiveis = quizzesDisponiveis.length;
                    setQtdQuizDisponiveis(countquizzesDisponiveis);
                }).catch((error) => {
                    console.log("Houve um erro ao recuperar os quizzes respondidos");
                    console.error(error);
                })
        }
    }

    return (
        <DefaultContainer>
            <DefaultHeader>
                <span>Olá, Aluno!</span>
                <DefaultHeaderLink to="/aluno/home">✖</DefaultHeaderLink>
            </DefaultHeader>
            <DefaultBody>
                <DefaultTitle>
                    <h2>Seu Perfil</h2>
                </DefaultTitle>
                <ProfileContainer>
                    <MascotContainer>
                        <img src={StudentMascot} alt="Imagem do mascote" />
                        <h2>{usuario?.nome}</h2>
                    </MascotContainer>
                    <ProfileInfoContainer>
                        <h2>Informações do Aluno</h2>
                        <span><b>Turma:</b> {usuario?.turma}</span>
                        <span><b>Email:</b> {usuario?.email}</span>
                    </ProfileInfoContainer>
                    <ProfileDataContainer>
                        <h2>Dados do Aluno</h2>
                        <ProfileData>
                            <span>Quizzes <br /> Respondidos<b>{qtdQuizRespondidos}</b></span>
                            <span>Quizzes <br /> Pendentes<b>{qtdQuizDisponiveis}</b></span>
                            <span>Nível<b className="green">{usuario?.nivel}</b></span>
                            {(rankingPositiion != undefined && rankingPositiion > 0) && (
                                <span>Posição no Ranking<b className="green">{rankingPositiion}º</b></span>
                            )}
                        </ProfileData>
                    </ProfileDataContainer>
                </ProfileContainer>
            </DefaultBody>
        </DefaultContainer>
    )
};

export default StudentProfile;