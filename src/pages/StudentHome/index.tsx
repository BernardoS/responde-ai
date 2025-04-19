import {
    Button,
    ButtonsContainer,
    Card,
    Level,
    MascotContainer,
    MascotImage,
    ProfileBody,
    RankingContainer,
    StatusContainer,
    StatusText,
    StudentInfo,
    StudentStatus,
    XPBar,
    XPContainer,
    XPProgress,
    XPText
} from "./style";
import StudentMascot from "../../assets/student-mascot.png";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultContainer } from "../../components/DefaultContainer";


const StudentHome = () => {
    return (
        <DefaultContainer>
            <DefaultHeader>
                <span>Olá, Aluno!</span>
                <DefaultHeaderLink to="/">✖</DefaultHeaderLink>
            </DefaultHeader>
            <ProfileBody>
                <StudentInfo>
                    <h2>Bernardo</h2>
                    <p>Turma:<br /> <strong>3ª série B</strong></p>
                </StudentInfo>


                <Card>

                    <StudentStatus>
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
                        <RankingContainer>
                            <span>2º Lugar</span>
                        </RankingContainer>
                    </StudentStatus>
                    <XPContainer>
                        <XPBar>
                            <XPProgress />
                        </XPBar>
                        <XPText>120/300 XP (40%)</XPText>
                    </XPContainer>

                </Card>
                <ButtonsContainer>
                    <Button to="/aluno/quiz/5">Quiz do dia</Button>
                    <Button to="/aluno/quizzes">Quizzes</Button>
                    <Button to="/aluno/ranking">Ranking</Button>
                    <Button to="/aluno/perfil">Perfil</Button>
                    <Button to="/">Lições</Button>
                </ButtonsContainer>
            </ProfileBody>

        </DefaultContainer>
    );
};

export default StudentHome;