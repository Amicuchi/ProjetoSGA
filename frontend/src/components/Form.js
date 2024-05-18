import React, { useRef } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPassport, faPhone, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';

library.add(faPassport);

const FormContainer = styled.form`
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
    grid-template-columns: 15% 85%;
    position: relative;
`;

const InputAreaEndereco = styled.div`
    width: 100%;
    max-width: 750px;
    // padding: 0 0.4rem;
    background-color: #f0f0f0;
    border: 1px solid #bbb;
    border-radius: 55px;
    box-shadow: 0px 0px 5px #ccc;
    height: 3.5rem;
    margin: 10px 0;
    text-align: left;

    display: grid;
    grid-template-areas: 
        "CEP vazio vazio"
        "Log LogName LogName"
        "NumCasa Compl Bairro"
        "Cidade Cidade UF";
    gap: 10px;
`;

const Icone = styled.i`
    text-align: center;
    line-height: 55px;
    color: #acacac;
    transition: 0.5s;
    font-size: 1.1rem;
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

const H2 = styled.h2``;

const Container = styled.div`
    display: grid;
    grid-template-areas: 
        "CEP vazio vazio"
        "Log LogName LogName"
        "NumCasa Compl Bairro"
        "Cidade Cidade UF";
    gap: 10px;
`;

const CEP = styled(InputAreaEndereco)`
    grid-area: CEP;
`;

const Logradouro = styled(InputAreaEndereco)`
    grid-area: Log;
`;

const NomeLogradouro = styled(InputAreaEndereco)`
    grid-area: LogName;
`;

const NumeroCasa = styled(InputAreaEndereco)`
    grid-area: NumCasa;
`;

const Complemento = styled(InputAreaEndereco)`
    grid-area: Compl;
`;

const Bairro = styled(InputAreaEndereco)`
    grid-area: Bairro;
`;

const Cidade = styled(InputAreaEndereco)`
    grid-area: Cidade;
`;

const UF = styled(InputAreaEndereco)`
    grid-area: UF;
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
    margin: 10px 0;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
        background-color: #fff;
        border: 2px solid #5995fd;
        color: #5995fd;
    }
`;

const Form = ({onEdit}) => {
    const ref = useRef();

    return(
        <FormContainer>
            <InputArea>
                <FontAwesomeIcon icon={faPassport} />    
                <Input name="CPF" placeholder='CPF'></Input>
            </InputArea>

            <InputArea>
                <FontAwesomeIcon icon={faPassport} />
                <Input name="tipoUsuario" placeholder='Tipo de Usuário'></Input>
            </InputArea>

            <InputArea>
                <FontAwesomeIcon icon={faUser} />
                <Input name="nome" placeholder='Nome completo'></Input>
            </InputArea>

            <InputArea>
                <FontAwesomeIcon icon={faEnvelope} />
                <Input name="email" type="email" placeholder='E-mail:'></Input>
            </InputArea>

            <InputArea>
                <FontAwesomeIcon icon={faPhone} />
                <Input name="telefone" placeholder='Telefone:'></Input>
            </InputArea>

            <Container>
                <CEP id="CEP">
                    <Input name="cep" placeholder='CEP:'></Input>
                </CEP>
                <Logradouro id="Logradouro">
                    <Input name="log" placeholder='Logradouro:'></Input>
                </Logradouro>
                <NomeLogradouro id="NomeLogradouro">
                    <Input name="LogName" placeholder='Nome Logradouro:'></Input>
                </NomeLogradouro>
                <NumeroCasa id="NumCasa">
                    <Input name="NumCasa" placeholder='Número:'></Input>
                </NumeroCasa>
                <Complemento id="Compl">
                    <Input name="Compl" placeholder='Complemento:'></Input>
                </Complemento>
                <Bairro id="Bairro">
                    <Input name="Bairro" placeholder='Bairro:'></Input>
                </Bairro>
                <Cidade id="Cidade">
                    <Input name="Cidade" placeholder='Cidade:'></Input>
                </Cidade>
                <UF id="UF">
                    <Input name="UF" placeholder='UF:'></Input>
                </UF>
            </Container>

            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
};

export default Form;