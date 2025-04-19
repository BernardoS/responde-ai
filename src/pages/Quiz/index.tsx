import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { QuizContainer, QuizOptionButton, QuizOptionsContainer, QuizProgres, QuizProgressBar, QuizProgressContainer, QuizProgressInfo, QuizQuestionCard } from "./style";
import QuizAmountIcon from "../../assets/quiz-amount.svg";
import QuizDeadlineIcon from "../../assets/quiz-deadline.svg";


function Quiz() {



    return (
        <DefaultContainer>
            <DefaultHeader>
                <span>Mostre o quanto você sabe</span>
                <DefaultHeaderLink to="/aluno/quizzes">✖</DefaultHeaderLink>
            </DefaultHeader>
            <DefaultBody>
                <QuizContainer>
                    <QuizProgressContainer>
                        <QuizProgressBar>
                            <QuizProgres style={{ width: "40%" }} />
                        </QuizProgressBar>
                        <QuizProgressInfo>
                            <div>
                                <img src={QuizAmountIcon} alt="ícone de perguntas" />
                                <span>
                                    5/8
                                </span>
                            </div>
                            <div>
                                <span>20xp</span>
                            </div>
                            <div>
                                <span>2 dias</span>
                                <img src={QuizDeadlineIcon} alt="ícone do prazo" />
                            </div>
                        </QuizProgressInfo>

                    </QuizProgressContainer>
                    <QuizQuestionCard>
                        <span className="subject">
                            Matemática
                        </span>
                        <span className="question">
                            Qual o valor de x na equação 2x + 5 = 11 ?
                        </span>
                    </QuizQuestionCard>
                    <QuizOptionsContainer>
                        <QuizOptionButton>a) </QuizOptionButton>
                        <QuizOptionButton>b)</QuizOptionButton>
                        <QuizOptionButton>c)</QuizOptionButton>
                        <QuizOptionButton>d)</QuizOptionButton>
                    </QuizOptionsContainer>
                </QuizContainer>
            </DefaultBody>

        </DefaultContainer>
    );
}

export default Quiz;