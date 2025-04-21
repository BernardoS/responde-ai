import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/api', // ajuste conforme sua URL base
});

// Buscar alunos de uma turma específica
export const getStudentByClass = async (turma: string) => {
    try {
      const response = await api.get(`/usuarios/turmas/alunos`, {
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
      const response = await api.get(`/usuarios/turmas/geral`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar turmas:', error);
      throw error;
    }
  };

export const getUserByEmail = async (email: string) => {
    try {
      const response = await api.get(`/usuarios/email/${email}`);
      return response.data;
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
}


export default api;