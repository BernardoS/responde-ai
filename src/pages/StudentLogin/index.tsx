import {
    BoxBlue,
    BoxWhite,
    Button,
    HomeContainer,
    HomeContent,
    HomeSubtitle,
    Input,
    Label,
    LoginForm,
    LogoImg,
    SelectionSection,
} from "./style";
import Logo from "../../assets/logo.png";
import { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";


function Studentlogin() {

    const {usuario,buscarUsuarioPorEmail} = useUser();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        email:'',
        type:'aluno',
    });
    
    const handleChange = (e: { target: { name: string; value: string; }; }) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };
    
    const handleSubmit = async (e: { preventDefault: () => void; }) => {

        e.preventDefault();

        console.log(form);  

        await buscarUsuarioPorEmail(form.email);   
    };

    useEffect(()=>{
        if(usuario && usuario.tipo === 'aluno'){
            navigate('/aluno/home');
        }

        if(usuario && usuario.tipo === 'professor'){
            alert("Usuário inválido");
        }
    },[usuario])


    return (
        <HomeContainer>
            <HomeContent>
                <BoxBlue>
                    <LogoImg alt="Logo do Responde AI" aria-label="Logo do Responde AI" src={Logo} />
                    <HomeSubtitle>Educação divertida começa aqui!</HomeSubtitle>
                </BoxBlue>
                <BoxBlue>
                    <SelectionSection>
                        <BoxWhite>
                            <h2>Login do Aluno</h2>
                        </BoxWhite>
                        <LoginForm onSubmit={handleSubmit}>
                            <div>
                                <Label>Digite seu e-mail</Label>
                                <Input
                                    type="text"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Ex.: seuemail@gmail.com"
                                />
                            </div>
                            <Button  type="submit"> Entrar</Button>
                        </LoginForm>
                    </SelectionSection>

                </BoxBlue>
            </HomeContent>
        </HomeContainer>
    );
}

export default Studentlogin;