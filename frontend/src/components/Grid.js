import React from "react";
import axios from "axios";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import { toast } from "react-toastify";

const Table = styled.table`
    width: 100%;
    max-width: 1200px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    margin: 10px 10px;
`;

export const Thead = styled.thead``;
export const Tbody = styled.tbody``;

export const Tr = styled.tr`
    text-align: center;
`;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding: 10px 20px;

    width: ${(props) => (props.width ? props.width : "auto")};
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")}
`;

const Grid = ({ users, setUsers, setOnEdit }) => {

    const handleDelete = async (CPF) => {

        await axios
            .delete("http://localhost:8800/" + CPF)
            .then(({data}) => {
                const newArray = users.filter((user) => user.CPF !== CPF);
                
                setUsers(newArray);
                toast.success(data);
            })
            .catch(({data}) => toast.error(data));
        setOnEdit(null);
    };
    
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    return(
        <>
        <Table>
            <Thead>
                <Tr>
                    <Th width="4%">CPF</Th>
                    <Th width="5%">Tipo de Usuário</Th>
                    <Th width="15%">Nome</Th>
                    <Th width="15%">E-mail</Th>
                    <Th width="5%">Telefone</Th>
                    <Th width="4%">CEP</Th>
                    <Th width="2.5%">Logradouro</Th>
                    <Th width="10%">Nome do Logradouro</Th>
                    <Th width="4%">Número</Th>
                    <Th width="10%">Complemento</Th>
                    <Th width="10%">Bairro</Th>
                    <Th width="10%">Cidade</Th>
                    <Th width="2.5%">UF</Th>
                    <Th width="1.5%" aligncenter="true"></Th>
                    <Th width="1.5%" aligncenter="true"></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td>{item.CPF}</Td>
                        <Td>{item.UsuarioTipo}</Td>
                        <Td>{item.UsuarioNome}</Td>
                        <Td>{item.UsuarioEmail}</Td>
                        <Td>{item.UsuarioTelefone}</Td>
                        <Td>{item.enderecoCEP}</Td>
                        <Td>{item.enderecoLogradouro}</Td>
                        <Td>{item.enderecoNomeLogradouro}</Td>
                        <Td>{item.enderecoNumero}</Td>
                        <Td>{item.enderecoComplemento}</Td>
                        <Td>{item.enderecoBairro}</Td>
                        <Td>{item.enderecoCidade}</Td>
                        <Td>{item.enderecoEstado}</Td>
                        <Td aligncenter="true"> <FontAwesomeIcon icon={faEdit} color="blue" onClick={() => handleEdit(item)}/>  </Td>
                        <Td aligncenter="true"> <FontAwesomeIcon icon={faTrash} color="red" onClick={() => handleDelete(item.CPF)} /> </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
        </>
    );
};

export default Grid;