import {
    Button,
    Card,
    Container,
    Level,
    MascotContainer,
    MascotImage,
    ProfileBody,
    ProfileHeader,
    RankingContainer,
    StatusContainer,
    StatusText,
    StudentInfo,
    StudentStatus,
    XPBar,
    XPProgress,
    XPText
} from "./style";
import StudentMascot from "../../assets/student-mascot.png";


const AreaAluno = () => {
    return (
        <Container>
            <ProfileHeader>
                <span>Olá, Aluno!</span>
                <span>✖</span>
            </ProfileHeader>
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
                    <XPBar>
                        <XPProgress />
                    </XPBar>
                    <XPText>120/300 XP (40%)</XPText>
                </Card>

                <Button>Missão do dia</Button>
                <Button>Quizes Disponíveis</Button>
                <Button>Ranking dos Alunos</Button>
                <Button>Perfil do Aluno</Button>
                <Button>Lições</Button>
            </ProfileBody>

        </Container>
    );
};

export default AreaAluno;