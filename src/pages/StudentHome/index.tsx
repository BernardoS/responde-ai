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


const StudentHome = () => {

    const { usuario,limparDadosUsuario } = useUser();

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
                            <Level>Nível 12</Level>
                        </MascotContainer>
                        <StatusContainer>
                            <StatusText>
                                Respondeu
                                <br />
                                <b className="awnsered" >10</b>
                            </StatusText>
                            <StatusText>Faltam
                                <br />
                                <b className="missing" >
                                    20
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