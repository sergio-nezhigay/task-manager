import React from "react";
import { Navbar, Container, Button, Col, Row, Nav } from "react-bootstrap";
import { FilterButtons } from "./FilterButtons";

const MyNavbar = ({ openModal }) => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>Task manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Button
              variant="primary"
              className="my-2 my-lg-0"
              onClick={() => openModal(null)}
            >
              Add Task
            </Button>
          </Nav>
          <Nav className="mb-2 mb-lg-0">
            <FilterButtons />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
