import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPassport, faPhone, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { toast } from 'react-toastify';


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
    grid-template-columns: 8% 92%;
    position: relative;
`;

const InputAreaEndereco = styled.div`
    width: 100%;
    max-width: 780px;
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

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    useEffect(() => {
        if (onEdit){
            const user = ref.current;

            user.CPF.value = onEdit.CPF;
            user.UsuarioNome.value = onEdit.UsuarioNome;
            user.UsuarioEmail.value = onEdit.UsuarioEmail;
            user.UsuarioTelefone.value = onEdit.UsuarioTelefone;
            user.cep.value = onEdit.cep;
            user.Log.value = onEdit.Log;
            user.LogName.value = onEdit.LogName;
            user.NumCasa.value = onEdit.NumCasa;
            user.Compl.value = onEdit.Compl;
            user.Bairro.value = onEdit.Bairro;
            user.Cidade.value = onEdit.Cidade;
            user.UF.value = onEdit.UF;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const user = ref.current;
    
        if (
            !user.CPF.value ||
            !user.UsuarioNome.value ||
            !user.UsuarioEmail.value ||
            !user.UsuarioTelefone.value
        ) {
            return toast.warn("Preencha todos os campos");
        }
    
        const payload = {
            CPF: user.CPF.value,
            UsuarioNome: user.UsuarioNome.value,
            UsuarioEmail: user.UsuarioEmail.value,
            UsuarioTelefone: user.UsuarioTelefone.value,
            cep: user.cep.value,
            Log: user.Log.value,
            LogName: user.LogName.value,
            NumCasa: user.NumCasa.value,
            Compl: user.Compl.value,
            Bairro: user.Bairro.value,
            Cidade: user.Cidade.value,
            UF: user.UF.value,
        };
    
        try {
            if (onEdit) {
                await axios.put(`http://localhost:8800/${onEdit.CPF}`, payload);
                toast.success("Usuário atualizado com sucesso!");
            } else {
                await axios.post("http://localhost:8800/", payload);
                toast.success("Usuário cadastrado com sucesso!");
            }
    
            // Limpar o formulário
            ref.current.reset();
            
            setOnEdit(null);
            
            getUsers();

        } catch (error) {
            // console.log(error);
            toast.error("Erro ao salvar os dados do usuário.");
        }
    };

    return(
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <H2>Cadastro de Usuários</H2>
            <InputArea>
                <Icone icon={faPassport} />    
                <Input name="CPF" placeholder='CPF'></Input>
            </InputArea>

            <InputArea>
                <Icone icon={faPassport} />
                <Input name="tipoUsuario" placeholder='Tipo de Usuário'></Input>
            </InputArea>

            <InputArea>
                <Icone icon={faUser} />
                <Input name="UsuarioNome" placeholder='Nome completo'></Input>
            </InputArea>

            <InputArea>
                <Icone icon={faEnvelope} />
                <Input name="UsuarioEmail" type="email" placeholder='E-mail:'></Input>
            </InputArea>

            <InputArea>
                <Icone icon={faPhone} />
                <Input name="UsuarioTelefone" placeholder='Telefone:'></Input>
            </InputArea>

            <Container>
                <CEP id="CEP">
                    <Input name="cep" placeholder='CEP:'></Input>
                </CEP>
                <Logradouro id="Logradouro">
                    <Input name="Log" placeholder='Logradouro:'></Input>
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