import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Sidebar from './components/Sidebar.js';
// import Form from './components/Form.js'
// import Grid from './components/Grid.js';
import Footer from './components/Footer.js';
import Login from './components/Login.js';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from './styles/global';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-top: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  align-items: left;
  gap: 10px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.h2``; 

function App() {

  const [users, setUsers] = useState([]);
  // const [onEdit, setOnEdit] = useState(null);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]); 

  return (
    <>
      <Container>
        <Sidebar />
        

        <Main>
          <Title>SGA - Sistema de Gerenciamento de Academias</Title>
          <Login />
          {/* <Form onEdit={onEdit} setOnEdit={setOnEdit} getUsers={getUsers} />
          <Grid users={users} setUsers={setUsers} setOnEdit={setOnEdit} /> */}
          <Footer />  
        </Main>

        <ToastContainer autoClose={3000} position="bottom-left" />
        <GlobalStyle />
      </Container>

    </>
  );
};

export default App;