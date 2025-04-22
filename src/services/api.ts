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
    console.error("Erro ao buscar quizzes:", error);
  }

}

export const getAvailableQuizzes = async (turma:string) =>{
  
  try {
    const response = await apiQuizzes.get(`/quizzes/turma/${turma}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar usuário:", error);
  }

}

