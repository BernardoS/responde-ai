import { useEffect, useState } from "react";
import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultTitle } from "../../components/DefaultTitle";
import QuizListItem from "../../components/QuizListItem";
import { QuizListContainer } from "./style";
import { useUser } from "../../contexts/UserContext";
import { getAnsweredQuizzes, getAvailableQuizzes } from "../../services/api";

type QuizItem = {
  quizId: string;
  _id:string;
  materia: string;
  tema: string;
  quantidadePerguntas: number;
  dataFinal: Date;
};

function AvailableQuizzes() {

  const { usuario } = useUser();
  const [quizList, setQuizList] = useState<QuizItem[]>();

  useEffect(() => {
    getQuizzes();
  }, [usuario?.turma]);

  const getQuizzes = async () => {
    if (usuario?.turma) {
        getAvailableQuizzes(usuario?.turma.toLowerCase())
        .then((data) => {
          filterAnsweredQuizzes(data)
        }).catch((error) => {
          console.log("Houve um erro ao recuperar os quizzes disponiveis");
          console.error(error);
        });
    }
  }
  const filterAnsweredQuizzes = (availableQuizList:QuizItem[]) =>{
    if(usuario?._id){
      getAnsweredQuizzes(usuario?._id)
      .then((data:QuizItem[])=>{
        const idsParaRemover = data.map(q => q.quizId);
        const quizzesDisponiveis = availableQuizList.filter(q => !idsParaRemover.includes(q._id));
        setQuizList(quizzesDisponiveis);
      }).catch((error)=>{
        console.log("Houve um erro ao recuperar os quizzes respondidos");
        console.error(error);
      })
    }
  }


  return (
    <DefaultContainer>
      <DefaultHeader>
        <span>Qual quiz vai ser o próximo?</span>
        <DefaultHeaderLink to="/aluno/home">✖</DefaultHeaderLink>
      </DefaultHeader>
      <DefaultBody>
        <DefaultTitle>
          <h1>Responde aí</h1>
        </DefaultTitle>
        <QuizListContainer>
          {quizList && quizList.map((quiz, index) => (
            <QuizListItem quiz={quiz} index={index} />
          ))}
        </QuizListContainer>

      </DefaultBody>

    </DefaultContainer>
  );
}

export default AvailableQuizzes;