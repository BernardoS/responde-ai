import { InfoRow, QuizCard, QuizTitle, Subject, XP } from "./style";
import QuizAmountIcon from "../../assets/quiz-amount.svg";
import QuizDeadlineIcon from "../../assets/quiz-deadline.svg";
import moment from "moment";


interface QuizListItemProps {
    quiz: {
        _id: string;
        materia: string;
        tema: string;
        quantidadePerguntas: number;
        dataFinal: Date;
    };
    index: number;
}

function QuizListItem({ quiz, index }: QuizListItemProps) {

    const diasRestantes = moment(quiz.dataFinal).diff(moment(), 'days');

    return (
        <QuizCard to={`/aluno/quiz/${quiz._id}`} key={quiz._id} className={`${index}`} >
            <Subject>{quiz.materia} <XP>{quiz.quantidadePerguntas * 2} xp</XP></Subject>
            <QuizTitle>{quiz.tema}</QuizTitle>
            <InfoRow>
                <div>
                    <img src={QuizAmountIcon} alt="ícone de perguntas" />
                    <span>
                        {quiz.quantidadePerguntas} perguntas
                    </span>
                </div>
                <div>
                    <img src={QuizDeadlineIcon} alt="ícone do prazo" />
                    <span>Acaba em {diasRestantes} dias</span>
                </div>
            </InfoRow>
        </QuizCard>
    );
}

export default QuizListItem;