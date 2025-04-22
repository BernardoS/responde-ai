import { useState } from "react";
import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultTitle } from "../../components/DefaultTitle";
import { Button, Form, FormContainer, Input, Label, LargeInputGroup, Select, SmallInputGroup, TextArea } from "./style";
import GenerateQuiz from "../../assets/generate-quiz.svg"


function CreateQuiz() {

    const [form, setForm] = useState({
        subject: '',
        class: '',
        questionsCount: '',
        topic: '',
    });

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        console.log(form);
        // Enviar os dados do formulário
    };

    return (
        <DefaultContainer>
            <DefaultHeader>
                <span>Vamos criar mais um desafio?</span>
                <DefaultHeaderLink to="/professor/home">✖</DefaultHeaderLink>
            </DefaultHeader>
            <DefaultBody>
                <DefaultTitle>
                    <h2>Criar Quiz</h2>
                </DefaultTitle>
                <FormContainer>
                    <Form onSubmit={handleSubmit}>
                        <SmallInputGroup>
                            <div>
                                <Label>Selecione a matéria</Label>
                                <Select name="subject" value={form.subject} onChange={handleChange}>
                                    <option value="">Selecione</option>
                                    <option value="Português">Português</option>
                                    <option value="Matemática">Matemática</option>
                                    <option value="História">História</option>
                                    <option value="Geografia">Geografia</option>
                                    <option value="Ciências">Ciências</option>
                                    <option value="Arte">Arte</option>
                                    <option value="Educação Física">Educação Física</option>
                                    <option value="Inglês">Inglês</option>
                                </Select>
                            </div>

                            <div>
                                <Label>Selecione a turma</Label>
                                <Select name="class" value={form.class} onChange={handleChange}>
                                    <option value="">Selecione</option>
                                    <option value="1º Ano">1º Ano</option>
                                    <option value="2º Ano">2º Ano</option>
                                    <option value="3º Ano">3º Ano</option>
                                    <option value="4º Ano">4º Ano</option>
                                    <option value="5º Ano">5º Ano</option>
                                    <option value="6º Ano">6º Ano</option>
                                    <option value="7º Ano">7º Ano</option>
                                    <option value="8º Ano">8º Ano</option>
                                    <option value="9º Ano">9º Ano</option>
                                </Select>
                            </div>

                            <div>
                                <Label>Digite a quantidade de perguntas</Label>
                                <Input
                                    type="number"
                                    name="questionsCount"
                                    value={form.questionsCount}
                                    onChange={handleChange}
                                    placeholder="Ex.: 12, 13"
                                />
                            </div>
                        </SmallInputGroup>


                        <LargeInputGroup>
                            <Label>Digite o tema do quiz</Label>
                            <TextArea
                                name="topic"
                                value={form.topic}
                                onChange={handleChange}
                                placeholder="Ex.: História do Brasil"
                            />
                        </LargeInputGroup>

                        <Button type="submit">Criar Quiz <img src={GenerateQuiz} alt="ícone de gerar quiz" /></Button>
                    </Form>
                </FormContainer>

            </DefaultBody>
        </DefaultContainer>
    );
}

export default CreateQuiz;