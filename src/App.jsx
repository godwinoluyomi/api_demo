import React from 'react'
import './App.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBar from './components/NavBar';
import UserList from './UserList';

function App() {

  return (
    <>
      <NavBar />

      <Container>
        <Row>
          <Col xs={12} md={3}></Col>
          <Col xs={12} md={6}>
            <UserList />
          </Col>
          <Col xs={12} md={3}></Col>
        </Row>
      </Container>

    </>
  )
}

export default App
