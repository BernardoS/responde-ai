import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index.tsx";
import StudentHome from "../pages/StudentHome/index.tsx";
import AvailableQuizzes from "../pages/AvailableQuizzes/index.tsx";
import Quiz from "../pages/Quiz/index.tsx";
import TeacherHome from "../pages/TeacherHome/index.tsx";
import CreateQuiz from "../pages/CreateQuiz/index.tsx";
import TeacherProfile from "../pages/TeacherProfile/index.tsx";
import StudentProfile from "../pages/StudentProfile/index.tsx";


function MainRouter() {
  return (
    <Router>
      <Routes>
        {/* Página inicial: seleção de perfil */}
        <Route path="/" element={<Home />} />
        
        {/* Fluxo do professor */}
        <Route path="/professor/home" element={<TeacherHome/>} />
        <Route path="/professor/perfil" element={<TeacherProfile/>} />
        <Route path="/professor/criar-quiz" element={<CreateQuiz/>} />
        <Route path="/professor/quizzes-disponiveis" element={<h1>Quizzes disponíveis</h1>} />
        <Route path="/professor/turmas" element={<h1> turmas</h1>} />
        <Route path="/professor/alunos" element={<h1>Alunos</h1>} />

        {/* Fluxo do aluno */}
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