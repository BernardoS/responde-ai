import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { QuizContainer, QuizOptionButton, QuizOptionsContainer, QuizProgres, QuizProgressBar, QuizProgressContainer, QuizProgressInfo, QuizQuestionCard } from "./style";
import QuizAmountIcon from "../../assets/quiz-amount.svg";
import QuizDeadlineIcon from "../../assets/quiz-deadline.svg";
import { useEffect, useState } from "react";
import { answwerQuiz, getQuiz } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
import { useUser } from "../../contexts/UserContext";

interface QuizPergunta {
    perguntaId: string;
    enunciado: string;
    opcoes: string[];
}

interface QuizDetalhado {
    id: string;
    nome: string;
    materia: string;
    tema: string;
    professorId: string;
    criadoEm: string; // ou Date, se preferir trabalhar com objetos Date
    dataFinal: string; // ou Date
    diasRestantes: number;
    perguntas: QuizPergunta[];
    quantidadePerguntas: number;
    xpTotal: number;
}

interface RespostaPergunta {
    perguntaId: string;
    respostaEscolhida: string;
}

interface RespostaQuiz {
    quizId: string,
    alunoId: string
}


function Quiz() {

    const navigate = useNavigate();
    const { usuario, buscarUsuarioPorEmail } = useUser();
    const { id } = useParams();
    const [quizData, setQuizData] = useState<null | QuizDetalhado>(null);
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [diasRestantes, setDiasRestantes] = useState(0);
    const [perguntasTotais, setPerguntasTotais] = useState(0);
    const [respostaQuiz, setRespostaQuiz] = useState<RespostaQuiz | undefined>();
    const [respostasPerguntas, setRespostasPerguntas] = useState<RespostaPergunta[] | undefined>();


    useEffect(() => {
        const getQuizData = async () => {
            if (id) {
                getQuiz(id)
                    .then((data: QuizDetalhado) => {
                        setDiasRestantes(moment(data.dataFinal).diff(moment(), 'days'));
                        setPerguntasTotais(data.quantidadePerguntas);
                        setQuizData(data);
                    }).catch((error) => {
                        console.log("Houve um erro ao recuperar o quiz");
                        console.error(error);
                    });
            }
        }

        getQuizData();

        if (usuario?._id && id) {

            const newRespostaQuiz: RespostaQuiz = {
                alunoId: usuario._id,
                quizId: id
            }

            setRespostaQuiz(newRespostaQuiz);
        }
    }, [usuario]);

    const selecionarResposta = (perguntaId: string | undefined, respostaEscolhida: string | undefined) => {

        if (perguntaId == undefined || respostaEscolhida == undefined) {
            alert("selecione corretamente");
            return;
        }

        const newResposta: RespostaPergunta = {
            perguntaId,
            respostaEscolhida
        }

        if (respostasPerguntas != undefined) {
            const respostas = [...respostasPerguntas, newResposta];
            console.log("Outras respostas:", respostas);
            setRespostasPerguntas(respostas);

            if(currentQuestion >= perguntasTotais){
                finalizaQuiz(respostas);
                return;
            }

        } else {
            setRespostasPerguntas([newResposta]);
            console.log("Primeira resposta:", newResposta);
        }
        
        if(currentQuestion < perguntasTotais){
            setCurrentQuestion(currentQuestion+1);
        }
    }

    const finalizaQuiz = async (respostasFinais:RespostaPergunta[]) =>{

        if(respostaQuiz != undefined && respostasFinais != undefined){
            answwerQuiz(respostasFinais,respostaQuiz)
            .then(()=>{
                
                if(usuario?.email)
                    buscarUsuarioPorEmail(usuario?.email);

                navigate("/aluno/home");
                return;
            }).catch((error) =>{
                console.log("Houve um problema ao registrar a resposta");
                console.error(error);
            })
        }
    }


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
                            <QuizProgres style={{ width: `${((currentQuestion-1) / perguntasTotais) * 100}%` }} />
                        </QuizProgressBar>
                        <QuizProgressInfo>
                            <div>
                                <img src={QuizAmountIcon} alt="ícone de perguntas" />
                                <span>
                                    {currentQuestion}/{quizData?.quantidadePerguntas}
                                </span>
                            </div>
                            <div>
                                <span>{quizData?.xpTotal} xp</span>
                            </div>
                            <div>
                                <span>{diasRestantes} dias</span>
                                <img src={QuizDeadlineIcon} alt="ícone do prazo" />
                            </div>
                        </QuizProgressInfo>

                    </QuizProgressContainer>
                    <QuizQuestionCard>
                        <span className="subject">
                            {quizData?.materia}
                        </span>
                        <span className="question">
                            {quizData?.perguntas[currentQuestion-1].enunciado}
                        </span>
                    </QuizQuestionCard>
                    <QuizOptionsContainer>
                        <QuizOptionButton onClick={() => selecionarResposta(quizData?.perguntas[currentQuestion-1].perguntaId,quizData?.perguntas[currentQuestion-1].opcoes[0])} >a) {quizData?.perguntas[currentQuestion-1].opcoes[0]} </QuizOptionButton>
                        <QuizOptionButton onClick={() => selecionarResposta(quizData?.perguntas[currentQuestion-1].perguntaId,quizData?.perguntas[currentQuestion-1].opcoes[1])} >b) {quizData?.perguntas[currentQuestion-1].opcoes[1]} </QuizOptionButton>
                        <QuizOptionButton onClick={() => selecionarResposta(quizData?.perguntas[currentQuestion-1].perguntaId,quizData?.perguntas[currentQuestion-1].opcoes[2])} >c) {quizData?.perguntas[currentQuestion-1].opcoes[2]} </QuizOptionButton>
                        <QuizOptionButton onClick={() => selecionarResposta(quizData?.perguntas[currentQuestion-1].perguntaId,quizData?.perguntas[currentQuestion-1].opcoes[3])} >d) {quizData?.perguntas[currentQuestion-1].opcoes[3]} </QuizOptionButton>
                    </QuizOptionsContainer>
                </QuizContainer>
            </DefaultBody>

        </DefaultContainer>
    );
}

export default Quiz;