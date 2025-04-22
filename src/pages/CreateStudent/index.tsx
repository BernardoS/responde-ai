import { useState } from "react";
import { DefaultBody } from "../../components/DefaultBody";
import { DefaultContainer } from "../../components/DefaultContainer";
import { DefaultHeader, DefaultHeaderLink } from "../../components/DefaultHeader";
import { DefaultTitle } from "../../components/DefaultTitle";
import { Button, Form, FormContainer, Input, Label, Select, SmallInputGroup } from "./style";
import AddStudent from "../../assets/add-student.svg"
import { OrbitProgress } from "react-loading-indicators";
import { createStudent } from "../../services/api";
import { useNavigate } from "react-router-dom";


function CreateStudent() {

    const navigate = useNavigate();

    const [form, setForm] = useState({
        nome: '',
        email: '',
        turma: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        setLoading(true);

        if(form.nome != null && form.nome != undefined && form.nome == ""){
            alert("Preencha o nome do aluno");
            setLoading(false);
            return;
        }

        if(form.email != null && form.email != undefined && form.email == ""){
            alert("Preencha o e-mail do aluno");
            setLoading(false);
            return;
        }

        if(form.turma != null && form.turma != undefined && form.turma == ""){
            alert("Preencha a turma do aluno");
            setLoading(false);
            return;
        }

        createStudent(form.nome,form.email,form.turma)
        .then(() => {
            setLoading(false);
            alert("Usuário criado com sucesso !");
            navigate("/professor/turma");
        })
        .catch((error)=>{
            console.error(error);
            setLoading(false);
            alert("Houve um erro ao cadastrar usuário, tente novamente mais tarde")
        });

    };

    return (
        <DefaultContainer>
            <DefaultHeader>
                <span>Vamos cadastrar mais um aluno?</span>
                <DefaultHeaderLink to="/professor/turmas">✖</DefaultHeaderLink>
            </DefaultHeader>
            <DefaultBody>
                <DefaultTitle>
                    <h2>Cadastrar Aluno</h2>
                </DefaultTitle>
                <FormContainer>
                    <Form onSubmit={handleSubmit}>
                        <SmallInputGroup>
                            <div>
                                <Label>Digite o nome do aluno</Label>
                                <Input
                                    type="text"
                                    name="nome"
                                    value={form.nome}
                                    onChange={handleChange}
                                    placeholder="Ex.: Roberto da Silva"
                                />
                            </div>

                            <div>
                                <Label>Digite o e-mail do aluno</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Ex.: aluno@gmail.com"
                                />
                            </div>

                            <div>
                                <Label>Selecione a turma</Label>
                                <Select name="turma" value={form.turma} onChange={handleChange}>
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

                        </SmallInputGroup>

                        {loading ? (
                            <Button type="button">
                                <OrbitProgress color="#000" size="small" />
                            </Button>
                            ) : (
                            <Button type="submit" >
                                Cadastrar Aluno <img src={AddStudent} alt="ícone de gerar quiz" />
                            </Button>)}

                    </Form>
                </FormContainer>

            </DefaultBody>
        </DefaultContainer>
    );
}

export default CreateStudent;