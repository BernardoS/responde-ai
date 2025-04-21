import { createContext, useContext, useState, ReactNode } from 'react';
import { getUserByEmail } from '../services/api';

type Usuario = {
  _id: string;
  nome: string;
  email: string;
  tipo: 'aluno' | 'professor';
  turma?: string;
  materia?: string;
  xp: number;
  nivel: number;
};

type UserContextType = {
  usuario: Usuario | null;
  buscarUsuarioPorEmail: (email: string) => Promise<void>;
  limparDadosUsuario: () => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const buscarUsuarioPorEmail = async (email: string) => {
    try {
        const usuarioRegistrado = await getUserByEmail(email);
        await setUsuario(usuarioRegistrado);
    } catch (error) {
      console.error("Erro ao buscar usuário:", error);
    }
  };

  const limparDadosUsuario = () => {
     setUsuario(null);
  }

  return (
    <UserContext.Provider value={{ usuario, buscarUsuarioPorEmail, limparDadosUsuario }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook personalizado para facilitar o uso
export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser deve ser usado dentro de um UserProvider");
  }
  return context;
};
