import { useEffect, useState } from "react";
import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultTitle } from "../../components/DefaultTitle";
import QuizListItem from "../../components/QuizListItem";
import { QuizListContainer } from "./style";

const quizzes:QuizItem[] = [
  {
    _id: "68012147698525c5a586cc61",
    subject: "Matemática",
    title: "Números Primos",
    questions: 12,
    expiresIn: "12 dias",
    xp: 25
  },
  {
    _id: "68012147698525c5a586cc61",
    subject: "Matemática",
    title: "Expressões numéricas",
    questions: 10,
    expiresIn: "10 dias",
    xp: 20
  },
  {
    _id: "68012147698525c5a586cc61",
    subject: "Biologia",
    title: "Seres autotróficos",
    questions: 6,
    expiresIn: "5 dias",
    xp: 10
  },
  {
    _id: "68012147698525c5a586cc61",
    subject: "História",
    title: "Descoberta do Brasil",
    questions: 6,
    expiresIn: "2 dias",
    xp: 10
  }
];

type QuizItem = {
  _id: string;
  subject: string;
  title: string;
  questions: number;
  expiresIn: string;
  xp: number;
};

function AvailableQuizzes() {

  const [quizList, setQuizList] = useState<QuizItem[]>();

  useEffect(() => {
    setQuizList(quizzes);
  }, []);

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