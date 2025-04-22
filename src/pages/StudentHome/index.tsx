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
import { getAnsweredQuizzes, getAvailableQuizzes } from "../../services/api";


const StudentHome = () => {

    const { usuario, limparDadosUsuario } = useUser();
    const [quizRespondidos, setQuizRespondidos] = useState(0);
    const [quizDisponiveis, setQuizDisponiveis] = useState(0);

    useEffect(() => {

        const getQuizData = async () =>{
            
            if(usuario?._id){
                getAnsweredQuizzes(usuario?._id)
                .then((data)=>{
                    if(data!= null && data != undefined){
                        const countAnsweredQuizzes =  data.length;
                        setQuizRespondidos(countAnsweredQuizzes);
                    }
                }).catch((error)=>{
                    console.log("Houve um erro ao recuperar os quizzes respondidos");
                    console.error(error);
                });
            }

            if(usuario?.turma){
                getAvailableQuizzes(usuario?.turma.toLowerCase())
                .then((data)=>{
                    const countAvailableQuizzes =  data.length;
                    setQuizDisponiveis(countAvailableQuizzes);
                }).catch((error)=>{
                    console.log("Houve um erro ao recuperar os quizzes disponiveis");
                    console.error(error);
                });;   
            }
        }

        getQuizData()
    }, [usuario]);

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
                                    {quizRespondidos}
                                </b>
                            </StatusText>
                            <StatusText>Faltam
                                <br />
                                <b className="missing" >
                                    {quizDisponiveis}
                                </b>
                            </StatusText>
                        </StatusContainer>
                        <UserExtraInfo>
                            <span>2º Lugar</span>
                        </UserExtraInfo>
                    </UserStatus>
                    <XPContainer>
                        <XPBar>
                            <XPProgress />
                        </XPBar>
                        <XPText>120/300 XP (40%)</XPText>
                    </XPContainer>
                </UserProfileCard>
                <ButtonsContainer>
                    <Button to="/aluno/quizzes">Quizzes</Button>
                    <Button to="/aluno/ranking">Ranking</Button>
                    <Button to="/aluno/perfil">Perfil</Button>
                </ButtonsContainer>
            </ProfileBody>

        </DefaultContainer>
    );
};

export default StudentHome;