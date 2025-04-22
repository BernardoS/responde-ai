import { useEffect, useState } from "react";
import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultTitle } from "../../components/DefaultTitle";
import QuizListItem from "../../components/QuizListItem";
import { QuizListContainer } from "./style";
import { useUser } from "../../contexts/UserContext";
import { getAvailableQuizzes } from "../../services/api";

type QuizItem = {
  _id: string;
  materia: string;
  tema: string;
  quantidadePerguntas: number;
  dataFinal: Date;
};

function AvailableQuizzes() {

  const { usuario } = useUser();
  const [quizList, setQuizList] = useState<QuizItem[]>();

  useEffect(() => {
    const getQuizzes = async () => {
      if (usuario?.turma) {
        getAvailableQuizzes(usuario?.turma.toLowerCase())
          .then((data) => {
            console.log(data);
            setQuizList(data);
          }).catch((error) => {
            console.log("Houve um erro ao recuperar os quizzes disponiveis");
            console.error(error);
          });;
      }
    }

    getQuizzes();
  }, [usuario?.turma]);

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