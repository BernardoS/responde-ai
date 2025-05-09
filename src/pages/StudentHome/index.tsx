import {
    Level,
    ProfileBody,
    StatusText,
    XPBar,
    XPContainer,
    XPProgress,
    XPText
} from "./style";
import StudentMascot from "../../assets/student-mascot.png";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultContainer } from "../../components/DefaultContainer";
import { Button, ButtonsContainer, MascotContainer, MascotImage, StatusContainer, UserExtraInfo, UserInfo, UserProfileCard, UserStatus } from "../../components/UserComponents";
import { useUser } from "../../contexts/UserContext";
import { useEffect, useState } from "react";
import { getAnsweredQuizzes, getAvailableQuizzes, getRankingPosition } from "../../services/api";


type QuizItem = {
    quizId: string;
    _id:string;
    materia: string;
    tema: string;
    quantidadePerguntas: number;
    dataFinal: Date;
};

const StudentHome = () => {

    const { usuario, limparDadosUsuario } = useUser();
    const [qtdQuizRespondidos, setQtdQuizRespondidos] = useState(0);
    const [qtdQuizDisponiveis, setQtdQuizDisponiveis] = useState(0);
    const [rankingPositiion, setRankingPosition] = useState<number|undefined>(0);

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
                    });
            }

            if (usuario?._id) {
                getRankingPosition(usuario._id)
                    .then((data:number|undefined) => {
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
                    const idsParaRemover = data.map(q => q.quizId);
                    const quizzesDisponiveis = availableQuizList.filter(q => !idsParaRemover.includes(q._id));
                    const countquizzesDisponiveis = quizzesDisponiveis.length;
                    setQtdQuizDisponiveis(countquizzesDisponiveis);
                }).catch((error) => {
                    console.log("Houve um erro ao recuperar os quizzes respondidos");
                    console.error(error);
                })
        }
    }

    const xpTratado = usuario?.nivel != undefined ? ((-(usuario.nivel - 1) * 10) + usuario.xp) : 0
    const xpPercentage = (xpTratado / 10) * 100;

    return (
        <DefaultContainer>
            <DefaultHeader>
                <span>Olá, Aluno!</span>
                <DefaultHeaderLink onClick={() => limparDadosUsuario()} to="/">✖</DefaultHeaderLink>
            </DefaultHeader>
            <ProfileBody>
                <UserInfo>
                    <h2>{usuario?.nome.split(" ")[0]}</h2>
                    <p>Turma:<br /> <strong>{usuario?.turma}</strong></p>
                </UserInfo>
                <UserProfileCard>
                    <UserStatus>
                        <MascotContainer>
                            <MascotImage src={StudentMascot} alt="Mascote do estudante" />
                            <Level>Nível {usuario?.nivel}</Level>
                        </MascotContainer>
                        <StatusContainer>
                            <StatusText>
                                Respondeu
                                <br />
                                <b className="awnsered" >
                                    {qtdQuizRespondidos}
                                </b>
                            </StatusText>
                            <StatusText>Faltam
                                <br />
                                <b className="missing" >
                                    {qtdQuizDisponiveis}
                                </b>
                            </StatusText>
                        </StatusContainer>

                        {(rankingPositiion != undefined && rankingPositiion > 0) && (
                            <UserExtraInfo>
                                <span>{rankingPositiion}º Lugar</span>
                            </UserExtraInfo>
                        )}

                    </UserStatus>
                    <XPContainer>
                        <XPBar>
                            <XPProgress style={{ width: `${xpPercentage}%` }} />
                        </XPBar>
                        <XPText>{xpTratado}/10 XP ({xpPercentage}%)</XPText>
                    </XPContainer>
                </UserProfileCard>
                <ButtonsContainer>
                    <Button to="/aluno/quizzes">Quizzes</Button>
                    <Button to="/aluno/perfil">Perfil</Button>
                </ButtonsContainer>
            </ProfileBody>

        </DefaultContainer>
    );
};

export default StudentHome;