import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index.tsx";
import StudentHome from "../pages/StudentHome/index.tsx";


function MainRouter() {
  return (
    <Router>
      <Routes>
        {/* Página inicial: seleção de perfil */}
        <Route path="/" element={<Home />} />
        
        {/* Fluxo do professor */}
        <Route path="/professor/home" element={<h1>Página do Professor</h1>} />
        <Route path="/professor/perfil" element={<h1>Perfil Professor</h1>} />
        <Route path="/professor/dashboard" element={<h1>Tela do Professor</h1>} />
        <Route path="/professor/criar-quiz" element={<h1>Criar Quiz</h1>} />
        <Route path="/professor/quizzes-pendentes" element={<h1>Quizzes pendentes</h1>} />]
        <Route path="/professor/quizzes-disponiveis" element={<h1>Quizzes disponíveis</h1>} />
        <Route path="/professor/alunos-turmas" element={<h1>Alunos e turmas</h1>} />

        {/* Fluxo do aluno */}
        <Route path="/aluno/home" element={<StudentHome/>} />
        <Route path="/aluno/perfil" element={<h1>Perfil do aluno</h1>} />
        <Route path="/aluno/quizzes" element={<h1>Quizzes Disponíveis</h1>} />
        <Route path="/aluno/quiz/:id" element={<h1>Quiz</h1>} />
        <Route path="/aluno/quiz/:id/resultado" element={<h1>Quiz Resultado</h1>} />
        <Route path="/aluno/ranking" element={<h1>Ranking</h1>} />
      </Routes>
    </Router>
  );
}


export default MainRouter;