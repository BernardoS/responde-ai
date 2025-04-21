import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultTitle } from "../../components/DefaultTitle";
import { MascotContainer, ProfileContainer, ProfileData, ProfileDataContainer, ProfileInfoContainer } from "../../components/ProfileComponents";
import StudentMascot from "../../assets/student-mascot.png";

function StudentProfile() {
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
                        <h2>Bernardo Souza</h2>
                    </MascotContainer>
                    <ProfileInfoContainer>
                        <h2>Informações do Aluno</h2>
                        <span><b>Turma:</b> 3ª Série B</span>
                        <span><b>Email:</b> bernardo.souza@gmail.com</span>
                    </ProfileInfoContainer>
                    <ProfileDataContainer>
                        <h2>Dados do Aluno</h2>
                        <ProfileData>
                            <span>Quizzes Respondidos<b>10</b></span>
                            <span>Quizzes Pendentes<b>8</b></span>
                            <span>Nível<b className="green">12</b></span>
                            <span>Posição no Ranking<b className="green">2º</b></span>
                        </ProfileData>
                    </ProfileDataContainer>
                </ProfileContainer>
            </DefaultBody>
        </DefaultContainer>
    )
};

export default StudentProfile;