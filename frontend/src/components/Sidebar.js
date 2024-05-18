import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.nav`
    width: 200px;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0;
`;

const NavList = styled.ul`
    list-style-type: none;
    padding: 0;
`;

const NavItem = styled.li`
    margin-bottom: 20px;
`;

const NavButton = styled.button`
    width: 150px;
    background-color: #5995fd;
    border: none;
    outline: none;
    height: 49px;
    border-radius: 49px;
    margin: 10px 0;
    color: #fff;
    text-transform: uppercase;
    font-weight: 600;
    cursor: pointer;
    transition: 0.5s;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #fff;
        border: 2px solid #5995fd;
        color: #5995fd;
    }
`;

const Sidebar = () => {
    return (
        <SidebarContainer>
            <NavList>
                <NavItem>
                    <NavButton>Usuários</NavButton>
                </NavItem>
                <NavItem>
                    <NavButton>Eventos</NavButton>
                </NavItem>
                <NavItem>
                    <NavButton>Contas</NavButton>
                </NavItem>
                <NavItem>
                    <NavButton>Sair</NavButton>
                </NavItem>
            </NavList>
        </SidebarContainer>
    );
};

export default Sidebar;
