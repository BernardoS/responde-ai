import axios from 'axios';

const apiUsers = axios.create({
  baseURL: 'http://localhost:3002/api', // ajuste conforme sua URL base
});

const apiQuizzes = axios.create({
  baseURL: 'http://localhost:3003/api', // ajuste conforme sua URL base
});

type RankingItem = {
  _id: string;
  posicao: number,
  nome: string,
  xp: number,
  nivel: number,
  alunoId: string
};


// Buscar alunos de uma turma específica
export const getStudentByClass = async (turma: string) => {
    try {
      const response = await apiUsers.get(`/usuarios/turmas/alunos`, {
        params: { turma }
      });
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar alunos por turma:', error);
      throw error;
    }
  };
  
  // Buscar todas as turmas com quantidade de alunos
  export const getClasses = async () => {
    try {
      const response = await apiUsers.get(`/usuarios/turmas/geral`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar turmas:', error);
      throw error;
    }
  };

export const getUserByEmail = async (email: string) => {
    try {
      const response = await apiUsers.get(`/usuarios/email/${email}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
}

export const createStudent = async (nome:string, email:string, turma:string) =>{
  
  const userData = {
    nome,
    email,
    turma,
    tipo:"aluno"
  }

  try {
    const response = await apiUsers.post('/usuarios', userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  }

}

export const getRankingPosition = async (alunoId:string) =>{
  
  try {
    const response = await apiUsers.get(`/usuarios/ranking/geral/`);

    const userList:RankingItem[] = response.data;

    const filteredUserList = userList.filter(aluno => aluno.alunoId == alunoId);

    return filteredUserList[0].posicao;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  }

}

export const getAnsweredQuizzes = async (alunoId:string) =>{
  
  try {
    const response = await apiQuizzes.get(`/quizzes/respondidos/${alunoId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar quizzes respondidos:", error);
  }

}

export const getAvailableQuizzes = async (turma:string) =>{
  
  try {
    const response = await apiQuizzes.get(`/quizzes/turma/${turma}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar quizes disponíveis:", error);
  }

}

export const getQuiz = async (quizId:string) =>{
  
  try {
    const response = await apiQuizzes.get(`/quizzes/${quizId}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar quiz:", error);
  }

}

interface RespostaPergunta {
  perguntaId: string;
  respostaEscolhida: string;
}

interface RespostaQuiz {
  quizId: string,
  alunoId: string
}

export const answwerQuiz = async (respostasPergunta:RespostaPergunta[],respostaQuiz:RespostaQuiz) =>{
  
  const data = {
    alunoId: respostaQuiz.alunoId,
    quizId: respostaQuiz.quizId,
    respostas: respostasPergunta
  }

  console.log(data);
  
  try {
    const response = await apiQuizzes.post('/quizzes/responder/',
      data
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao buscar quiz:", error);
  }

}

export const getTeacherQuizzes = async (teacherId:string) =>{

  try {
    
    const response = await apiQuizzes.get(`/quizzes/professor/${teacherId}`);

    return response.data;
  } catch (error) {
    console.error("Erro ao aprovar quiz:", error);
  }

}

interface CriarQuizRequest {
  professorId: string;
  turma: string;
  materia: string;
  tema: string;
  quantidade: number;
}

export const generateQuiz = async (data:CriarQuizRequest) =>{

  console.log(data);  

  try {
    const response = await apiQuizzes.post('/rascunhos/draft/',
      data
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao gerar quiz:", error);
  }

}

export const getDraft = async (draftId:string) =>{

  console.log(draftId);  

  try {
    const response = await apiQuizzes.get(`/rascunhos/${draftId}/perguntas/pendentes`);

    return response.data;
  } catch (error) {
    console.error("Erro ao gerar quiz:", error);
  }

}

export const reviewDraft = async (draftId:string,perguntaId:string,aprovada:boolean) =>{

  const data = {
    perguntaId,
    aprovada
  } 

  try {

    const response = await apiQuizzes.patch(`/rascunhos/${draftId}/perguntas/avaliar`,
      data
    );

    return response.data;
  } catch (error) {
    console.error("Erro ao gerar quiz:", error);
  }

}

export const approveDraft = async (draftId:string) =>{

  try {
    
    const response = await apiQuizzes.patch(`/rascunhos/${draftId}/finalizar/`);

    return response.data;
  } catch (error) {
    console.error("Erro ao aprovar quiz:", error);
  }

}

export const regenerateQuestions = async (draftId:string) =>{

  try {
    
    const response = await apiQuizzes.post(`/rascunhos/${draftId}/perguntas/regerar`);

    return response.data;
  } catch (error) {
    console.error("Erro ao aprovar quiz:", error);
  }

}




