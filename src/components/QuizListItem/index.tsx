import { InfoRow, QuizCard, QuizTitle, Subject, XP } from "./style";
import QuizAmountIcon from "../../assets/quiz-amount.svg";
import QuizDeadlineIcon from "../../assets/quiz-deadline.svg";


interface QuizListItemProps {
    quiz: {
        subject: string;
        title: string;
        questions: number;
        expiresIn: string;
        xp: number;
    };
    index: number;
}

function QuizListItem({ quiz, index }: QuizListItemProps) {
    return (
        <QuizCard key={index}>
            <Subject>{quiz.subject} <XP>{quiz.xp} xp</XP></Subject>
            <QuizTitle>{quiz.title}</QuizTitle>
            <InfoRow>
                <div>
                    <img src={QuizAmountIcon} alt="ícone de perguntas" />
                    <span>
                        {quiz.questions} perguntas
                    </span>
                </div>
                <div>
                    <img src={QuizDeadlineIcon} alt="ícone do prazo" />
                    <span>Acaba em {quiz.expiresIn}</span>
                </div>
            </InfoRow>
        </QuizCard>
    );
}

export default QuizListItem;