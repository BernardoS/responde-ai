import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { Button, ButtonsContainer, MascotContainer, MascotImage, StatusContainer, UserExtraInfo, UserInfo, UserProfileCard, UserStatus } from "../../components/UserComponents";
import TeacherMascot from "../../assets/teacher-mascot.png";
import { StatusText } from "../StudentHome/style";
import { TeacherInfoBox } from "./style";


function TeacherHome() {
    return (
        <DefaultContainer>
            <DefaultHeader>
                <span>Olá, Professor!</span>
                <DefaultHeaderLink to="/">✖</DefaultHeaderLink>
            </DefaultHeader>
            <DefaultBody>
                <UserInfo>
                    <h2>Luiz</h2>
                    <p>Matéria:<br /> <strong>Matemática</strong></p>
                </UserInfo>
                <UserProfileCard>
                    <UserStatus>
                        <MascotContainer>
                            <MascotImage src={TeacherMascot} alt="Mascote do professor" />
                        </MascotContainer>
                        <StatusContainer>
                            <StatusText>
                                Criou
                                <br />
                                <b className="awnsered" >10</b>
                            </StatusText>
                            <StatusText>Concluiu
                                <br />
                                <b className="missing" >
                                    20
                                </b>
                            </StatusText>
                        </StatusContainer>
                        <UserExtraInfo>
                            <span>3 Turmas</span>
                        </UserExtraInfo>
                    </UserStatus>
                    <TeacherInfoBox>
                        <span>
                            <b>35</b> Alunos participaram do último quiz 
                        </span>
                    </TeacherInfoBox>
                </UserProfileCard>
                <ButtonsContainer>
                    <Button to="/professor/criar-quiz">Criar Quiz</Button>
                    <Button to="/professor/alunos-turmas">Alunos e Turmas</Button>
                    <Button to="/professor/perfil">Perfil</Button>
                </ButtonsContainer>

            </DefaultBody>

        </DefaultContainer>
    );
}

export default TeacherHome;