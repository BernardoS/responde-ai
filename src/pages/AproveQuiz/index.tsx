import { useParams } from "react-router-dom";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultBody } from "../../components/DefaultBody";
import { DefaultTitle } from "../../components/DefaultTitle";
import { ApproveButton, QuizAproveContainer } from "./style";
import { QuizAproveListItem } from "../../components/QuizAproveListItem";



interface QuizAproveItem {
    materia: string;
    titulo: string;
    opcoes: string[];
    onAprovar: () => void;
    onReprovar: () => void;
}

const aproveItens:QuizAproveItem[] =[
    {
        materia:"História",
        titulo:"Teste testando teste",
        opcoes:["opção a","opção b", "opção com um texto bem maior para testar isso", "quarta opção diferentona"],
        onAprovar:() => console.log("Teste"),
        onReprovar: () => console.log("Reprovar"),
    },
    {
        materia:"História",
        titulo:"Teste testando teste",
        opcoes:["opção a","opção b", "opção com um texto bem maior para testar isso", "quarta opção diferentona"],
        onAprovar:() => console.log("Teste"),
        onReprovar: () => console.log("Reprovar"),
    },
    {
        materia:"História",
        titulo:"Teste testando teste",
        opcoes:["opção a","opção b", "opção com um texto bem maior para testar isso", "quarta opção diferentona"],
        onAprovar:() => console.log("Teste"),
        onReprovar: () => console.log("Reprovar"),
    },
    {
        materia:"História",
        titulo:"Teste testando teste",
        opcoes:["opção a","opção b", "opção com um texto bem maior para testar isso", "quarta opção diferentona"],
        onAprovar:() => console.log("Teste"),
        onReprovar: () => console.log("Reprovar"),
    },
    {
        materia:"História",
        titulo:"Teste testando teste",
        opcoes:["opção a","opção b", "opção com um texto bem maior para testar isso", "quarta opção diferentona"],
        onAprovar:() => console.log("Teste"),
        onReprovar: () => console.log("Reprovar"),
    }
    
    
] 

function AproveQuiz(){
    
    const { draftId } = useParams();

    return(
        <DefaultContainer>
            <DefaultHeader>
                <h2>Avalie o quiz gerado</h2>
                <DefaultHeaderLink to="/professor/home">✖</DefaultHeaderLink>
            </DefaultHeader>
            <DefaultBody>
                <DefaultTitle>
                    <h2>Avalie abaixo as questões geradas pela IA:{draftId}</h2>
                    <ApproveButton onClick={() => alert("Clicou em aprovar")}>
                        Aprovar quiz
                    </ApproveButton>
                </DefaultTitle>
                <QuizAproveContainer>
                {aproveItens.map((item,index)=>(
                    <QuizAproveListItem 
                        materia={item.materia}
                        onAprovar={item.onAprovar}
                        onReprovar={item.onReprovar}
                        opcoes={item.opcoes}
                        titulo={item.titulo}
                        key={index}  />))}
                </QuizAproveContainer>
            </DefaultBody>
        </DefaultContainer>
    )
}

export default AproveQuiz