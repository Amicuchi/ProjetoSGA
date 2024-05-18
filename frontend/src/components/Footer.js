import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    font-size: 0.8rem;
    padding: 5px;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f0f0f0;
`;

const Footer = () => {
    return (
        <FooterContainer>
            <p>SGA - Sistema de Gerenciamento de Academias</p>
        </FooterContainer>
    );
};

export default Footer;