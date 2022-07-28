import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Carrito } from "../assets/Carrito.svg";

export const Header = ({search,setSearch}) => {
  
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
    <Container>
      <Navbar.Brand href="/">E-Commerce API</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">

        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={search} onChange={e=>setSearch(e.target.value)}
          />
          
          {/* <Button variant="success">Search</Button> */}
        </Form>
        <Carrito style={{ width: "50px", height: "50px" }}/>
        <Navbar.Text className="mx-2 nav-hover">
          Sign In
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

