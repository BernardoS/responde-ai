import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultTitle } from "../../components/DefaultTitle";
import { MascotContainer, ProfileContainer, ProfileData, ProfileDataContainer, ProfileInfoContainer } from "../../components/ProfileComponents";
import TeacherMascot from "../../assets/teacher-mascot.png";
import { useUser } from "../../contexts/UserContext";

function TeacherProfile() {

    const {usuario} = useUser();

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
                            <span>Quizzes Criados<b>10</b></span>
                            <span>Quizzes Finalizados<b>8</b></span>
                            <span>Total de Alunos<b>65</b></span>
                            <span>Total de Turmas<b>45</b></span>
                        </ProfileData>
                    </ProfileDataContainer>
                </ProfileContainer>
            </DefaultBody>
        </DefaultContainer>
    )
};

export default TeacherProfile;