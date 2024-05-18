import React from "react";
import axios from "axios";
import styled from "styled-components";
// import { FaTrash, FaEdit } from "react-icons/fa";
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

import { toast } from "react-toastify";

const Table = styled.table`
    width: 100%;
    max-width: 1000px;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    margin: 10px auto;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;
export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px){
        ${(props) => props.onlyWeb && "display: none"}
    }
`;

const Grid = ({ users }) => {
    return(
        <>
        <Table>
            <Thead>
                <Tr>
                    <Th>CPF</Th>
                    <Th>Tipo de Usuário</Th>
                    <Th>Nome</Th>
                    <Th>E-mail</Th>
                    <Th>Telefone</Th>
                    <Th>CEP</Th>
                    <Th>Logradouro</Th>
                    <Th>Nome do Logradouro</Th>
                    <Th>Número</Th>
                    <Th>Complemento</Th>
                    <Th>Bairro</Th>
                    <Th>Cidade</Th>
                    <Th>UF</Th>
                    <Th></Th>
                    <Th></Th>
                </Tr>
            </Thead>
            <Tbody>
                {users.map((item, i) => (
                    <Tr key={i}>
                        <Td width="8%">{item.cpf}</Td>
                        <Td width="10%">{item.tipoUsuario}</Td>
                        <Td width="30%">{item.nome}</Td>
                        <Td width="30%">{item.email}</Td>
                        <Td width="10%">{item.telefone}</Td>
                        <Td width="8%" onlyWeb>{item.cep}</Td>
                        <Td width="5%" onlyWeb>{item.log}</Td>
                        <Td width="20%" onlyWeb>{item.LogName}</Td>
                        <Td width="8%" onlyWeb>{item.NumCasa}</Td>
                        <Td width="20%" onlyWeb>{item.Compl}</Td>
                        <Td width="20%" onlyWeb>{item.Bairro}</Td>
                        <Td width="20%" onlyWeb>{item.Cidade}</Td>
                        <Td width="5%" onlyWeb>{item.UF}</Td>
                        <Td width="3%" alignCenter>
                            <faEdit />
                        </Td>
                        <Td width="3%" alignCenter>
                            <faTrash />
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
        </>
    );
};

export default Grid;