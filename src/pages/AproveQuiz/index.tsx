import { useNavigate, useParams } from "react-router-dom";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultBody } from "../../components/DefaultBody";
import { DefaultTitle } from "../../components/DefaultTitle";
import { ApproveButton, QuizAproveContainer } from "./style";
import { QuizAproveListItem } from "../../components/QuizAproveListItem";
import { useEffect, useState } from "react";
import { approveDraft, getDraft, regenerateQuestions, reviewDraft } from "../../services/api";
import { OrbitProgress } from "react-loading-indicators";

export interface PerguntaPendente {
    perguntaId: string;
    enunciado: string;
    opcoes: string[];
}

export interface PendentesDraftResponse {
    draftId: string;
    pendentes: PerguntaPendente[];
}

function AproveQuiz() {

    const { draftId } = useParams();
    const navigate = useNavigate()
    const [draftData, setDraftData] = useState<PendentesDraftResponse>();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getDraftData();
    }, []);

    const getDraftData = async () => {
        if (draftId) {
            getDraft(draftId)
                .then((data: PendentesDraftResponse) => {
                    setDraftData(data);
                }).catch((error) => {
                    console.log("Erro ao recuperar dados do rascunho")
                    console.error(error);
                });
        }
    }

    const tryApproveDraft = () => {
        if (draftId) {
            setLoading(true);
            approveDraft(draftId)
                .then((data) => {
                    setLoading(false);
                    console.log(data);
                    if (data.message.includes("Faltam")) {
                        console.log("Serão geradas novas perguntas para completar o quiz!");
                        genereateNewQuestions();
                    } else {
                        navigate("/professor/home");
                    }

                }).catch((error) => {
                    setLoading(false);
                    console.error(error);
                })
        }
    }

    const genereateNewQuestions = () => {
        if (draftId) {
            regenerateQuestions(draftId)
                .then((data) => {
                    console.log(data);
                    console.log("Novas perguntas geradas com sucesso!");
                    getDraftData();
                }).catch((error) => {
                    console.error(error);
                })
        }
    }

    const approveQuestion = async (questionId: string) => {
        if (draftId) {
            reviewDraft(draftId, questionId, true)
                .then((data) => {
                    console.log(data);
                    console.log("Pergunta aprovada com sucesso!");
                    getDraftData();
                }).catch((error) => {
                    console.error(error);
                })
        }
    }

    const reproveQuestion = (questionId: string) => {
        if (draftId) {
            reviewDraft(draftId, questionId, false)
                .then((data) => {
                    console.log(data);
                    console.log("Pergunta reprovada com sucesso!");
                    getDraftData();
                }).catch((error) => {
                    console.error(error);
                })
        }
    }

    return (
        <DefaultContainer>
            <DefaultHeader>
                <h2>Avalie o quiz gerado</h2>
                <DefaultHeaderLink to="/professor/home">✖</DefaultHeaderLink>
            </DefaultHeader>
            <DefaultBody>
                <DefaultTitle>
                    <h2>Avalie abaixo as questões geradas pela IA</h2>
                    {loading ? (
                        <ApproveButton onClick={() => alert("Aguarde o carregamento!")}>
                            <OrbitProgress color="#000" size="small" style={{fontSize:10}} />
                        </ApproveButton>
                    ) : (
                        <ApproveButton onClick={() => tryApproveDraft()}>
                            Aprovar quiz
                        </ApproveButton>)}

                </DefaultTitle>
                <QuizAproveContainer>
                    {(draftData != undefined && draftData?.pendentes.length > 0) &&
                        draftData?.pendentes.map((item, index) => (
                            <QuizAproveListItem
                                onAprovar={() => approveQuestion(item.perguntaId)}
                                onReprovar={() => reproveQuestion(item.perguntaId)}
                                opcoes={item.opcoes}
                                titulo={item.enunciado}
                                key={index} />))}
                </QuizAproveContainer>
            </DefaultBody>
        </DefaultContainer>
    )
}

export default AproveQuiz