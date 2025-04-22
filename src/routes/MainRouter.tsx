import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index.tsx";
import StudentHome from "../pages/StudentHome/index.tsx";
import AvailableQuizzes from "../pages/AvailableQuizzes/index.tsx";
import Quiz from "../pages/Quiz/index.tsx";
import TeacherHome from "../pages/TeacherHome/index.tsx";
import CreateQuiz from "../pages/CreateQuiz/index.tsx";
import TeacherProfile from "../pages/TeacherProfile/index.tsx";
import StudentProfile from "../pages/StudentProfile/index.tsx";
import TeacherClasses from "../pages/TeacherClasses/index.tsx";
import ClassDetail from "../pages/ClassDetail/index.tsx";
import Teacherlogin from "../pages/TeacherLogin/index.tsx";
import Studentlogin from "../pages/StudentLogin/index.tsx";
import CreateStudent from "../pages/CreateStudent/index.tsx";
import AproveQuiz from "../pages/AproveQuiz/index.tsx";


function MainRouter() {
  return (
    <Router>
      <Routes>
        {/* Página inicial: seleção de perfil */}
        <Route path="/" element={<Home />} />
        
        {/* Fluxo do professor */}
        <Route path="/professor/login" element={<Teacherlogin/>} />
        <Route path="/professor/home" element={<TeacherHome/>} />
        <Route path="/professor/perfil" element={<TeacherProfile/>} />
        <Route path="/professor/criar-quiz" element={<CreateQuiz/>} />
        <Route path="/professor/aprovar-quiz/:quizId" element={<AproveQuiz/>} />
        <Route path="/professor/criar-aluno" element={<CreateStudent/>} />
        <Route path="/professor/turmas" element={<TeacherClasses/>} />
        <Route path="/professor/turmas/:turma" element={<ClassDetail/>} />

        {/* Fluxo do aluno */}
        <Route path="/aluno/login" element={<Studentlogin/>} />
        <Route path="/aluno/home" element={<StudentHome/>} />
        <Route path="/aluno/perfil" element={<StudentProfile/>} />
        <Route path="/aluno/quizzes" element={<AvailableQuizzes/>} />
        <Route path="/aluno/quiz/:id" element={<Quiz/>} />
        <Route path="/aluno/quiz/:id/resultado" element={<h1>Quiz Resultado</h1>} />
        <Route path="/aluno/ranking" element={<h1>Ranking</h1>} />
      </Routes>
    </Router>
  );
}


export default MainRouter;