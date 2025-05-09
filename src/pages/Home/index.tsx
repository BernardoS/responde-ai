import {
  BoxBlue,
  BoxWhite,
  HomeContainer,
  HomeContent,
  HomeSubtitle,
  LogoImg,
  MascotContainer,
  SelectActions,
  SelectButton,
  SelectionSection
} from "./style";
import Logo from "../../assets/logo.png";
import TeacherMascot from "../../assets/teacher-mascot.png";
import StudentMascot from "../../assets/student-mascot.png";

function Home() {
  return (
    <HomeContainer>
      <HomeContent>
        <BoxBlue>
          <LogoImg alt="Logo do Responde AI" aria-label="Logo do Responde AI" src={Logo} />
          <HomeSubtitle>Educação divertida começa aqui!</HomeSubtitle>
        </BoxBlue>
        <BoxBlue>
          <SelectionSection>
            <BoxWhite>
              <h2>Selecione seu perfil</h2>
            </BoxWhite>
            <SelectActions>
              <SelectButton to="/professor/login">
                <MascotContainer>
                  <img src={TeacherMascot} alt="Mascote do professor" />
                </MascotContainer>
                <hr />
                <span>
                  Professor
                </span>
              </SelectButton>
              <h3>OU</h3>
              <SelectButton to="/aluno/login">
                <MascotContainer>
                  <img src={StudentMascot} alt="Mascote do aluno" />
                </MascotContainer>
                <hr />
                <span>
                  Aluno
                </span>
              </SelectButton>
            </SelectActions>
          </SelectionSection>

        </BoxBlue>


      </HomeContent>
    </HomeContainer>
  );
}

export default Home;