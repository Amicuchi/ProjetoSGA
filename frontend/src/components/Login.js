import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Container = styled.div`
    width: 750px;
    display: grid;
    grid-template-areas: 
        "Login Login"
        "Senha Senha"
        "Entrar Cancelar"
    gap: 10px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 5rem;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

const Title = styled.h1`
    font-size: 2.2rem;
    color: #444;
    margin-bottom: 10px;
`;

const InputArea = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 0 .4rem;
    border: 1px solid #bbb;
    border-radius: 55px;
    height: 3.5rem;
    background-color: #f0f0f0;
    margin: 10px 0;
    display: grid;
    grid-template-columns: 10% 90%;
    position: relative;
`;

const Icone = styled(FontAwesomeIcon)`
    text-align: center;
    align-self: center;
    line-height: 3.5rem;
    color: #acacac;
    transition: 0.5s;
    font-size: 1.1rem;
    margin-left: 10px;
`;

const Input = styled.input`
    background: none;
    outline: none;
    border: none;
    line-height: 1;
    font-weight: 600;
    font-size: 1.1rem;
    color: #333;
    margin: 15px;

    &::placeholder {
        color: #acacac;
        font-weight: 500;
    }
`;

const Button = styled.button`
    width: 150px;
    background-color: #5995fd;
    border: none;
    outline: none;
    height: 49px;
    border-radius: 49px;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    margin: 10px 10px;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #fff;
        border: 2px solid #5995fd;
        color: #5995fd;
    }
`;

const ButtonRed = styled(Button)`
    background-color: #e44a4a;

        &:hover {
        background-color: #fff;
        border: 2px solid #e44a4a;
        color: #e44a4a;
        }
`;

const ButtonContainer = styled(InputArea)`
    display: flex;
    justify-content: center;
    background-color: transparent;
    border: none;
`;


const Login = () => {

    // Estados para armazenar as entradas do usuário
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    // Função que é chamada quando o formulário é enviado
    const handleSubmit = (event) => {
        // Impede que a página seja recarregada
        event.preventDefault();

        // Faz o console log das credenciais do usuário
        console.log("Dados de Login:", { username, password });
    };

    return(
        <>
        <Container>
            <Form onSubmit={handleSubmit}>
                <Title>Entrar</Title>
                <InputArea>
                    <Icone icon={faUser} />
                    <Input 
                        type="text" 
                        placeholder="Usuário" 
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </InputArea>
                <InputArea>
                    <Icone icon={faLock} />
                    <Input 
                        type="password" 
                        placeholder="Senha" 
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputArea>

                <ButtonContainer>
                    <Button type="submit">Entrar</Button>
                    <ButtonRed type="reset">Cancelar</ButtonRed>
                </ButtonContainer>
            </Form>
        </Container>
        </>
    )
};

export default Login;