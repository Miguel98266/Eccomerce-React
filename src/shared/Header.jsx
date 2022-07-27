import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Carrito } from "../assets/Carrito.svg";

export default class Header extends Component {
  render() {
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
}
